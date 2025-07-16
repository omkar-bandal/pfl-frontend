/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { Box, FormControl, Grid2, InputLabel, MenuItem, Select } from '@mui/material';
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames } from '@prime-fresh/shared/modules';
import { useGetDashboardData } from '@prime-fresh/purchase/modules';
import { DashboardCard } from '../../components/dashboard';
// import { socket } from '@prime-fresh/common_api';

export const Dashboard = () => {
  const [filterParams, setFilterParams] = useState({
    filterType: 'tillDate',
    companyName: '',
    locationName: '',
    startDate: '',
    endDate: '',
    specificDate: '',
  });
  const { data: company } = useGetCompanyNames();
  const companies = useMemo(
    () => (company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : []),
    [company?.data]
  );
  const { data: loc } = useGetBranchesPartialData();
  const locations = useMemo(() => (loc?.data ? mapToValueLabelArray(loc?.data, 'id', 'name') : []), [loc?.data]);
  const filtersTypes = [
    { value: 'tillDate', label: 'Till Date' },
    { value: 'year', label: 'Current Year' },
    { value: 'month', label: 'Current Month' },
    { value: 'dateRange', label: 'By Date Range' },
    { value: 'specificDate', label: 'By Date' },
  ];
  const { data } = useGetDashboardData(filterParams);
  const dashboardData = data?.data ? data.data : null;
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilterParams((prev) => ({ ...prev, [name]: value }));
    // socket.emit('client:test', 'Client Test request...');
  };
  return (
    // isLoading ? (
    //   <Box flex={1}>
    //     <LinearProgress />
    //   </Box>
    // ) :
    <Box flex={1}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>
              Duration
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="filterType"
              value={filterParams.filterType}
              label="Duration"
              onChange={(e) => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {filtersTypes.map((type) => {
                return (
                  <MenuItem key={type.value} value={type.value} sx={{ fontSize: '14px' }}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>
              Company
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="companyName"
              value={filterParams.companyName}
              label="Company"
              onChange={(e) => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {companies.map((type) => {
                return (
                  <MenuItem key={type.value} value={type.value} sx={{ fontSize: '14px' }}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>
              Location
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="locationName"
              value={filterParams.locationName}
              label="Locations"
              onChange={(e) => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {locations.map((type) => {
                return (
                  <MenuItem key={type.value} value={type.value} sx={{ fontSize: '14px' }}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Total Purchase"
            quantityCount={dashboardData?.grns.totalPurchase.totalQuantityInKg || 0}
            quantityPercent={100}
            amountCount={dashboardData?.grns.totalPurchase.totalAmount || 0}
            amountPercent={100}
            color="#009933"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Purchase By Farmer"
            quantityCount={dashboardData?.grns.totalPurchaseByFarmer.totalQuantityInKg || 0}
            quantityPercent={
              ((dashboardData?.grns.totalPurchaseByFarmer.totalQuantityInKg || 1) /
                (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) *
              100
            }
            amountCount={dashboardData?.grns.totalPurchaseByFarmer.totalAmount || 0}
            amountPercent={
              ((dashboardData?.grns.totalPurchaseByFarmer.totalAmount || 1) /
                (dashboardData?.grns.totalPurchase.totalAmount || 1)) *
              100
            }
            color="#ff9900"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Purchase By Vendor"
            quantityCount={dashboardData?.grns.totalpurchaseByVendor.totalQuantityInKg || 0}
            quantityPercent={
              ((dashboardData?.grns.totalpurchaseByVendor.totalQuantityInKg || 1) /
                (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) *
              100
            }
            amountCount={dashboardData?.grns.totalpurchaseByVendor.totalAmount || 0}
            amountPercent={
              ((dashboardData?.grns.totalpurchaseByVendor.totalAmount || 1) /
                (dashboardData?.grns.totalPurchase.totalAmount || 1)) *
              100
            }
            color="#99004d"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Total Sales"
            quantityCount={dashboardData?.deliverychallan.totalSaleQtyAndAmount.totalQuantityInKg || 0}
            quantityPercent={100}
            amountCount={dashboardData?.deliverychallan.totalSaleQtyAndAmount.totalAmount || 0}
            amountPercent={100}
            color="#0044cc"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Total Dump"
            quantityCount={dashboardData?.dump.totalQuantity || 0}
            quantityPercent={
              ((dashboardData?.dump.totalQuantity || 1) / (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) *
              100
            }
            amountCount={dashboardData?.dump.totalAmount || 0}
            amountPercent={
              ((dashboardData?.dump.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100
            }
            color="#a3a3c2"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <DashboardCard
            label="Total Rejection"
            quantityCount={dashboardData?.rejection.totalQuantity || 0}
            quantityPercent={
              ((dashboardData?.rejection.totalQuantity || 1) /
                (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) *
              100
            }
            amountCount={dashboardData?.rejection.totalAmount || 0}
            amountPercent={
              ((dashboardData?.rejection.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100
            }
            color="#ff3333"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
