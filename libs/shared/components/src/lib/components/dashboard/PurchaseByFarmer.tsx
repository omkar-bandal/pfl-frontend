import React, { useMemo, useState } from 'react'
import { Box, Grid2, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useGetFarmersPartialData, mapToValueLabelArray, useGetPurchaseDataByFarmer } from '@prime-fresh/shared/modules';
import { PageTitle } from '@prime-fresh/ui_shared';
import { LineChart } from './LineChart';

export const PurchaseByFarmer = () => {
  const [farmerId, setFarmerId] = useState('');
  const { data: farmers } = useGetFarmersPartialData();
  const farmerData = useMemo(() => farmers?.data ? mapToValueLabelArray(farmers.data, 'id', `fullName`) : [], [farmers?.data]);
  const { data: farmerPurchaseData } = useGetPurchaseDataByFarmer(farmerId);
  // console.log('farmer Data: ', farmerPurchaseData);
  const farmerDataDates = farmerPurchaseData?.data ? farmerPurchaseData?.data.map(data => data.date) : [];
  const farmerDataQuantity = farmerPurchaseData?.data ? farmerPurchaseData?.data.map(data => data.totalQuantity) : [];
  const farmerDataAmount = farmerPurchaseData?.data ? farmerPurchaseData?.data.map(data => data.totalAmount) : [];

  return (
    <Box flex={1} margin={2}>
      <PageTitle pagetitle='Purchase Data Of Farmer' />
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={12}>
          <FormControl sx={{ m: 1, minWidth: 300 }} size="small" >
            <InputLabel id="select-farmer" sx={{ fontSize: '14px' }}>
              Farmer
            </InputLabel>
            <Select
              labelId="select-farmer"
              id="select-farmer"
              size="small"
              name="farmerId"
              value={farmerId}
              label="Farmer"
              onChange={(e) => setFarmerId(e.target.value)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {farmerData.map((type) => {
                return (
                  <MenuItem key={type.value} value={type.value} sx={{ fontSize: '14px' }}>
                    {type.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 container size={12}>

          <LineChart
            title='Quantity'
            labels={farmerDataDates}
            datasets={[
              {
                label: 'Total Quantity (Kg)',
                data: farmerDataQuantity,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true,
              }]}
            height={300}
          />
        </Grid2>
        <Grid2 size={12}>
          <LineChart
            title='Amount'
            labels={farmerDataDates}
            datasets={[
              {
                label: 'Total Amount (Rs)',
                data: farmerDataAmount,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4,
                fill: true,
              }]}
            height={300}
          />
        </Grid2>
      </Grid2>
    </Box>
  )
}
