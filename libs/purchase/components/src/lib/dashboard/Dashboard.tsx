/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react'
import { Box, FormControl, Grid2, InputLabel, MenuItem, Select, } from '@mui/material'
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames } from '@prime-fresh/shared/modules'

import { MetricCard } from './metric-card'
import { useGetDashboardData } from '@prime-fresh/purchase/modules'

export const DashboardPurchase = () => {
  const [filterParams, setFilterParams] = useState({
    filterType: "tillDate",
    companyName: "",
    locationName: "",
    startDate: "",
    endDate: "",
    specificDate: ""
  })
  const { data: company } = useGetCompanyNames();
  const companies = useMemo(() => company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [], [company?.data]);
  const { data: loc } = useGetBranchesPartialData();
  const locations = useMemo(() => loc?.data ? mapToValueLabelArray(loc?.data, 'id', 'name') : [], [loc?.data]);
  const filtersTypes = [
    { value: "tillDate", label: "Till Date" },
    { value: "year", label: "Current Year" },
    { value: "month", label: "Current Month" },
    { value: "dateRange", label: "By Date Range" },
    { value: "specificDate", label: "By Date" },
  ]
  const { data } = useGetDashboardData(filterParams);
  const dashboardData = data?.data ? data.data : null;
  console.log(dashboardData);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };
  return (
    // isLoading ? (
    //   <Box flex={1}>
    //     <LinearProgress />
    //   </Box>
    // ) :
    (< Box flex={1} >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Duration</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="filterType"
              value={filterParams.filterType}
              label="Duration"
              onChange={e => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {filtersTypes.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Company</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="companyName"
              value={filterParams.companyName}
              label="Company"
              onChange={e => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {companies.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Location</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="locationName"
              value={filterParams.locationName}
              label="Locations"
              onChange={e => handleChange(e)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {locations.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor='#009933'
            title='Total Purchase'
            quantity={dashboardData?.grns.totalPurchase.totalQuantityInKg || 0}
            amount={dashboardData?.grns.totalPurchase.totalAmount || 0}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor='#66cc66'
            title='Purchase By Farmer'
            quantity={dashboardData?.grns.totalPurchaseByFarmer.totalQuantityInKg || 0}
            percQuantity={((dashboardData?.grns.totalPurchaseByFarmer.totalQuantityInKg || 1) / (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) * 100}
            amount={dashboardData?.grns.totalPurchaseByFarmer.totalAmount || 0}
            percAmount={((dashboardData?.grns.totalPurchaseByFarmer.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor='#66cc66'
            title='Purchase By Vendor'
            quantity={dashboardData?.grns.totalpurchaseByVendor.totalQuantityInKg || 0}
            percQuantity={((dashboardData?.grns.totalpurchaseByVendor.totalQuantityInKg || 1) / (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) * 100}
            amount={dashboardData?.grns.totalpurchaseByVendor.totalAmount || 0}
            percAmount={((dashboardData?.grns.totalpurchaseByVendor.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor=' #0044cc'
            title='Total Sales'
            quantity={dashboardData?.deliverychallan.totalSaleQtyAndAmount.totalQuantityInKg || 0}
            amount={dashboardData?.deliverychallan.totalSaleQtyAndAmount.totalAmount || 0}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor='#a3a3c2'
            title='Total Dump'
            quantity={dashboardData?.dump.totalQuantity || 0}
            percQuantity={((dashboardData?.dump.totalQuantity || 1) / (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) * 100}
            amount={dashboardData?.dump.totalAmount || 0}
            percAmount={((dashboardData?.dump.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <MetricCard
            cardColor='#ff3333'
            title='Total Rejection'
            quantity={dashboardData?.rejection.totalQuantity || 0}
            percQuantity={((dashboardData?.rejection.totalQuantity || 1) / (dashboardData?.grns.totalPurchase.totalQuantityInKg || 1)) * 100}
            amount={dashboardData?.rejection.totalAmount || 0}
            percAmount={((dashboardData?.rejection.totalAmount || 1) / (dashboardData?.grns.totalPurchase.totalAmount || 1)) * 100}
          />
        </Grid2>
      </Grid2>
    </Box >)
  )
}
