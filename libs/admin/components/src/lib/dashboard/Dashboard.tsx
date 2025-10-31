import { CountCard } from './components';
import { DoughnutChart, StackedBarChart, StackedBarData } from '@prime-fresh/shared/components';
import { formatNumberWithSuffix, sharedRoutes, useGetUserRegistrationCounts } from '@prime-fresh/shared/modules';
import { Alert, Box, CircularProgress, Grid, useTheme } from '@mui/material';
import { adminRoutes, adminStaticData, useDashboardCounts } from '@prime-fresh/admin/modules';
import { AddShoppingCart, Agriculture, LocalMall, LocalShipping, PeopleAlt, Warehouse } from '@mui/icons-material';
import { ApplicationUserCard } from './components/ActiveUserCard';
import { KPICard } from './components/CountCard';

export const DashboardAdmin = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useDashboardCounts();
  const { employeeCount, farmerCount, vendorCount, customerCount, productCount, branchesCount } = data;
  console.log('dashboard data:', data);
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#800080', '#ff9900', '#99004d', '#FF33F5', '#595959'];
  const vendorCategoryWiseCount = vendorCount?.vendors?.byCategoryRaw.map((data, index) => {
    return { label: data.category, value: data.count, color: colors[index] };
  });
  const customerTypeWiseCount = customerCount?.customer?.typeCountsRaw.map((data, index) => {
    return { label: data.name, value: data.count, color: colors[index] };
  });
  const productSubcatWiseCount = productCount?.products?.bySubcategory.map((data, index) => {
    return { label: data.subcategory, value: data.count, color: colors[index] };
  });
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // if (isError) {
  //   return (
  //     <Box sx={{ p: 2 }}>
  //       <Alert severity="error">Failed to load dashboard.</Alert>
  //     </Box>
  //   );
  // }
  const { data: regiData } = useGetUserRegistrationCounts({ createdBy: null });
  const registrationData = regiData?.data ?? null;

  const registrationBarChartData: StackedBarData[] = [
    { x: 'Customers', y: registrationData?.customers?.pending ?? 0, category: 'Pending' },
    { x: 'Customers', y: registrationData?.customers?.approved ?? 0, category: 'Approved' },
    { x: 'Customers', y: registrationData?.customers?.notApproved ?? 0, category: 'Not_Approved' },
    { x: 'Vendors', y: registrationData?.vendors?.pending ?? 0, category: 'Pending' },
    { x: 'Vendors', y: registrationData?.vendors?.approved ?? 0, category: 'Approved' },
    { x: 'Vendors', y: registrationData?.vendors?.notApproved ?? 0, category: 'Not_Approved' },
    { x: 'Farmers', y: registrationData?.farmers?.pending ?? 0, category: 'Pending' },
    { x: 'Farmers', y: registrationData?.farmers?.approved ?? 0, category: 'Approved' },
    { x: 'Farmers', y: registrationData?.farmers?.notApproved ?? 0, category: 'Not_Approved' },
  ];

  const stackedBarChartColors = {
    Pending: '#BDC3C7',
    Approved: '#0da84c',
    Not_Approved: '#E74C3C',
  };

  return (
    <Box flex={1} marginY={2} padding={1}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <CountCard
                title="Total Customers"
                count={formatNumberWithSuffix(registrationData?.customers?.total ?? 0)}
                color="#08313a"
                icon={<PeopleAlt />}
                // buttonTitle="View All Employees"
                // navigateTo={adminRoutes.VIEW_ALL_EMPLOYEES}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CountCard
                title="Total Vendors"
                count={formatNumberWithSuffix(registrationData?.vendors?.total ?? 0)}
                color="#1a5653"
                icon={<PeopleAlt />}
                // buttonTitle="View All Employees"
                // navigateTo={adminRoutes.VIEW_ALL_EMPLOYEES}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CountCard
                title="Total Farmers"
                count={formatNumberWithSuffix(registrationData?.farmers?.total ?? 0)}
                color="#107869"
                icon={<PeopleAlt />}
                // buttonTitle="View All Employees"
                // navigateTo={adminRoutes.VIEW_ALL_EMPLOYEES}
              />
            </Grid>
            <Grid item xs={12}>
              <StackedBarChart
                data={registrationBarChartData}
                groupBy="date"
                title="Farmer Registrations Status"
                colors={stackedBarChartColors}
                height={400}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ApplicationUserCard />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#0044cc"
            count={employeeCount?.TotalEmployees || 0}
            title="Employees"
            icon={<PeopleAlt />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#009900"
            count={farmerCount?.totalFarmers || 0}
            title="Farmers"
            icon={<Agriculture />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#99004d"
            count={vendorCount?.vendors?.totalCount || 0}
            title="Vendors"
            icon={<LocalShipping />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#800080"
            count={customerCount?.customer?.totalCustomer || 0}
            title="Customers"
            icon={<AddShoppingCart />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#ff9900"
            count={productCount?.products?.totalCount || 0}
            title="Products"
            icon={<LocalMall />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#696969"
            count={branchesCount?.Branches?.byType[0].count || 0}
            title="Collection Center"
            icon={<Warehouse />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#2C3E50"
            count={branchesCount?.Branches?.byType[2].count || 0}
            title="Distribution Center"
            icon={<Warehouse />}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color="#825A2C"
            count={branchesCount?.Branches?.byType[1].count || 0}
            title="Seasonal CC"
            icon={<Warehouse />}
           />
        </Grid>
      </Grid>
      <Grid container spacing={1} marginY={1}>
        <Grid item xs={12} md={4}>
          <DoughnutChart
            data={productSubcatWiseCount}
            title="Counts of Products By Subcategories"
            displayPercentage={true}
            cutout="50%"
            total={productCount?.products?.totalCount}
            centerText={`Total Products: ${productCount?.products?.totalCount}`}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DoughnutChart
            data={vendorCategoryWiseCount}
            title="Counts of Vendors By Categories"
            displayPercentage={true}
            cutout="50%"
            total={vendorCount?.vendors?.totalCount}
            centerText={`Total Vendors: ${vendorCount?.vendors?.totalCount}`}
            height={300}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DoughnutChart
            data={customerTypeWiseCount}
            title="Counts of Customers By Type"
            displayPercentage={true}
            cutout="50%"
            total={customerCount?.customer?.totalCustomer}
            centerText={`Total Customers: ${customerCount?.customer?.totalCustomer}`}
            height={300}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
