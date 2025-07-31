import React, { useMemo, useState } from 'react'
import { Box, Button, ButtonGroup, Grid2 } from '@mui/material';
import { useGetVendorsPartialData, mapToValueLabelArray, useGetPurchaseDataByVendor } from '@prime-fresh/shared/modules';
import { PageTitle, Select, BarChart, DateInput } from '@prime-fresh/ui_shared';

export const PurchaseByVendor = () => {
  const [vendorId, setVendorId] = useState('');
  const [dataGroupBy, setDataGroupBy] = useState<'date' | 'month' | 'year' | 'range'>('date');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data: vendors } = useGetVendorsPartialData();
  const vendorData = useMemo(() => vendors?.data ? mapToValueLabelArray(vendors.data, 'id', 'companyName') : [], [vendors?.data]);
  const { data: vendorPurchaseData } = useGetPurchaseDataByVendor(vendorId);
  const vendorDataQuantity = vendorPurchaseData?.data ? vendorPurchaseData?.data.map(data => ({ x: data.date, y: data.totalQuantity })) : [];
  const vendorDataAmount = vendorPurchaseData?.data ? vendorPurchaseData?.data.map(data => ({ x: data.date, y: data.totalAmount })) : [];
  return (
    <Box flex={1} margin={2}>
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <PageTitle pagetitle='Purchase Data Of Vendor' textAlign='center' />
        </Grid2>
        <Grid2 size={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Select
            name="vendorId"
            label="Vendor"
            options={vendorData}
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
          />
        </Grid2>
        <Grid2 size={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ButtonGroup variant="outlined" color='secondary'>
            <Button variant={dataGroupBy === 'date' ? 'contained' : 'outlined'} sx={{ textTransform: 'none', fontWeight: 500 }} onClick={() => setDataGroupBy('date')}>Date</Button>
            <Button variant={dataGroupBy === 'month' ? 'contained' : 'outlined'} sx={{ textTransform: 'none', fontWeight: 500 }} onClick={() => setDataGroupBy('month')}>Month</Button>
            <Button variant={dataGroupBy === 'year' ? 'contained' : 'outlined'} sx={{ textTransform: 'none', fontWeight: 500 }} onClick={() => setDataGroupBy('year')}>Year</Button>
            <Button variant={dataGroupBy === 'range' ? 'contained' : 'outlined'} sx={{ textTransform: 'none', fontWeight: 500 }} onClick={() => setDataGroupBy('range')}>Range</Button>
          </ButtonGroup>
        </Grid2>
        {dataGroupBy === 'range' &&
          (<Grid2 size={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <DateInput
              name="startDate"
              label="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              sx={{ marginX: 2 }}
            />
            <DateInput
              name="endDate"
              label="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              sx={{ marginX: 2 }}
            />
          </Grid2>)}
        <Grid2 size={12}>
          <BarChart
            title='Purchaed Quantity'
            data={vendorDataQuantity}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color='#00C300'
          />
        </Grid2>
        <Grid2 size={12}>
          <BarChart
            title='Purchaed Amount'
            data={vendorDataAmount}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color='#0061FF'
          />
        </Grid2>
      </Grid2>
    </Box>
  )
}
