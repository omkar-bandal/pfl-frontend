import React, { useMemo, useState } from 'react'
import { Box, Grid2, ButtonGroup, Button } from '@mui/material';
import { useGetFarmersPartialData, useGetPurchaseDataByFarmer } from '@prime-fresh/shared/modules';
import { DateInput, PageTitle, BarChart, NonFormikAutocomplete } from '@prime-fresh/ui_shared';
import { FarmerPartialData } from '@prime-fresh/common_api';
import { queryParamsState, useAppSelector } from '@prime-fresh/modules';

export const PurchaseByFarmer = () => {
  const [farmerId, setFarmerId] = useState<string | null>(null);
  const [dataGroupBy, setDataGroupBy] = useState<'date' | 'month' | 'year' | 'range'>('date');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const queryParams = useAppSelector(queryParamsState);
  const { data: farmers, isLoading, isFetching } = useGetFarmersPartialData(queryParams);
  const farmerData = useMemo(() => farmers?.data ? farmers.data : [], [farmers?.data]);
  const { data: farmerPurchaseData } = useGetPurchaseDataByFarmer(farmerId || '');
  const farmerDataQuantity = farmerPurchaseData?.data ? farmerPurchaseData?.data.map(data => ({ x: data.date, y: data.totalQuantity })) : [];
  const farmerDataAmount = farmerPurchaseData?.data ? farmerPurchaseData?.data.map(data => ({ x: data.date, y: data.totalAmount })) : [];
  return (
    <Box flex={1} margin={2}>
      <Grid2 container spacing={1}>
        <Grid2 size={12}>
          <PageTitle pagetitle='Purchase Data Of Farmer' textAlign='center' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <NonFormikAutocomplete<FarmerPartialData, 'id'>
            name="productId"
            label="Farmer"
            value={farmerId}
            isLoading={isLoading}
            isFetching={isFetching}
            options={farmerData}
            totalPages={farmers?.totalPages || 1}
            noOptionsText='No Farmers Found'
            getOptionLabel={data => data.fullName}
            optionValueKey='id'
            onChange={setFarmerId}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
        <Grid2 container size={12}>
          <BarChart
            title='Purchased Quantity'
            data={farmerDataQuantity}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color='#00C300'
          />
        </Grid2>
        <Grid2 size={12}>
          <BarChart
            title='Purchased Amount'
            data={farmerDataAmount}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color='#0061FF'
          />
        </Grid2>
      </Grid2>
    </Box >
  )
}
