import React from 'react'
import { CountCard } from './components'
import { Alert, Box, CircularProgress, Grid } from '@mui/material'
import { AddShoppingCart, Agriculture, LocalMall, LocalShipping, PeopleAlt, Warehouse } from '@mui/icons-material'
import { adminRoutes, STRINGS, useDashboardCounts } from '@prime-fresh/admin/modules'
import { DoughnutChart } from '@prime-fresh/ui_shared'

export const DashboardAdmin = () => {
  const { data, isLoading, isError } = useDashboardCounts();
  const { employeeCount, farmerCount, vendorCount, customerCount, productCount, branchesCount } = data;
  console.log('dashboard data:', data);
  const colors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#800080',
    '#ff9900',
    '#99004d',
    '#FF33F5',
    '#595959'
  ];
  const vendorCategoryWiseCount = vendorCount?.vendors?.byCategoryRaw.map((data, index) => { return { label: data.category, value: data.count, color: colors[index] } })
  const customerTypeWiseCount = customerCount?.customer?.typeCountsRaw.map((data, index) => { return { label: data.name, value: data.count, color: colors[index] } })
  const productSubcatWiseCount = productCount?.products?.bySubcategory.map((data, index) => { return { label: data.subcategory, value: data.count, color: colors[index] } })
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">Failed to load dashboard.</Alert>
      </Box>
    );
  }

  return (
    <Box flex={1} marginY={2} padding={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#0044cc'
            count={employeeCount?.TotalEmployees || 0}
            title='Employees'
            icon={<PeopleAlt />}
            buttonTitle='View All Employees'
            navigateTo={adminRoutes.VIEW_ALL_EMPLOYEES}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#009900'
            count={farmerCount?.totalFarmers || 0}
            title='Farmers'
            icon={<Agriculture />}
            buttonTitle='View All Farmer'
            navigateTo={adminRoutes.VIEW_ALL_FARMERS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#99004d'
            count={vendorCount?.vendors?.totalCount || 0}
            title='Vendors'
            icon={<LocalShipping />}
            buttonTitle='View All Vendors'
            navigateTo={adminRoutes.VIEW_ALL_VENDORS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#800080'
            count={customerCount?.customer?.totalCustomer || 0}
            title='Customers'
            icon={<AddShoppingCart />}
            buttonTitle='View All Customers'
            navigateTo={adminRoutes.VIEW_ALL_CUSTOMERS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#ff9900'
            count={productCount?.products?.totalCount || 0}
            title='Products'
            icon={<LocalMall />}
            buttonTitle='View All Products'
            navigateTo={adminRoutes.VIEW_ALL_PRODUCTS}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#696969'
            count={branchesCount?.Branches?.byType[0].count || 0}
            title='Collection Center'
            icon={<Warehouse />}
            buttonTitle='View All CC'
            navigateTo={`${adminRoutes.VIEW_ALL_BRANCHES}/${STRINGS.CC}`}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#2C3E50'
            count={branchesCount?.Branches?.byType[2].count || 0}
            title='Distribution Center'
            icon={<Warehouse />}
            buttonTitle='View All DC'
            navigateTo={`${adminRoutes.VIEW_ALL_BRANCHES}/${STRINGS.DC}`}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CountCard
            color='#825A2C'
            count={branchesCount?.Branches?.byType[1].count || 0}
            title='Seasonal CC'
            icon={<Warehouse />}
            buttonTitle='View All Seasonal CC'
            navigateTo={`${adminRoutes.VIEW_ALL_BRANCHES}/${STRINGS.SEASONAL_CC}`}
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
  )
}
