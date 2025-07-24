import React, { useMemo, useState } from 'react'
import { Box, Grid2, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useGetVendorsPartialData, mapToValueLabelArray } from '@prime-fresh/shared/modules';
import { PageTitle } from '@prime-fresh/ui_shared';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';

export const PurchaseByVendor = () => {
  const [vendorId, setVendorId] = useState('');
  const { data: vendors } = useGetVendorsPartialData();
  const vendorData = useMemo(() => vendors?.data ? mapToValueLabelArray(vendors.data, 'id', 'companyName') : [], [vendors?.data]);
  // const { data: vendorPurchaseData } = useGetPurchaseDataByVendor(vendorId);
  const vendorPurchaseData = {
    data: [
      { date: '2025-01-01', totalQuantity: 420, totalAmount: 210000 },
      { date: '2025-01-04', totalQuantity: 390, totalAmount: 195000 },
      { date: '2025-01-07', totalQuantity: 510, totalAmount: 255000 },
      { date: '2025-01-10', totalQuantity: 460, totalAmount: 230000 },

      { date: '2025-02-01', totalQuantity: 420, totalAmount: 210000 },
      { date: '2025-02-04', totalQuantity: 390, totalAmount: 195000 },
      { date: '2025-02-07', totalQuantity: 510, totalAmount: 255000 },
      { date: '2025-02-10', totalQuantity: 460, totalAmount: 230000 },

      { date: '2025-03-01', totalQuantity: 420, totalAmount: 210000 },
      { date: '2025-03-04', totalQuantity: 390, totalAmount: 195000 },
      { date: '2025-03-07', totalQuantity: 510, totalAmount: 255000 },
      { date: '2025-03-10', totalQuantity: 460, totalAmount: 230000 },

      { date: '2025-04-01', totalQuantity: 420, totalAmount: 210000 },
      { date: '2025-04-04', totalQuantity: 390, totalAmount: 195000 },
      { date: '2025-04-07', totalQuantity: 510, totalAmount: 255000 },
      { date: '2025-04-10', totalQuantity: 460, totalAmount: 230000 },

      { date: '2025-05-01', totalQuantity: 420, totalAmount: 210000 },
      { date: '2025-05-04', totalQuantity: 390, totalAmount: 195000 },
      { date: '2025-05-07', totalQuantity: 510, totalAmount: 255000 },
      { date: '2025-05-10', totalQuantity: 460, totalAmount: 230000 },

      { date: '2025-06-03', totalQuantity: 720, totalAmount: 360000 },
      { date: '2025-06-06', totalQuantity: 580, totalAmount: 290000 },
      { date: '2025-06-10', totalQuantity: 500, totalAmount: 250000 },
      { date: '2025-06-13', totalQuantity: 610, totalAmount: 305000 },

      { date: '2025-07-01', totalQuantity: 490, totalAmount: 245000 },
      { date: '2025-07-04', totalQuantity: 560, totalAmount: 280000 },
      { date: '2025-07-08', totalQuantity: 630, totalAmount: 315000 },
      { date: '2025-07-11', totalQuantity: 580, totalAmount: 290000 },

      { date: '2025-08-15', totalQuantity: 610, totalAmount: 305000 },
      { date: '2025-08-18', totalQuantity: 720, totalAmount: 360000 },
      { date: '2025-08-22', totalQuantity: 760, totalAmount: 380000 },
      { date: '2025-08-26', totalQuantity: 690, totalAmount: 345000 },

      { date: '2025-10-01', totalQuantity: 490, totalAmount: 245000 },
      { date: '2025-10-04', totalQuantity: 560, totalAmount: 280000 },
      { date: '2025-10-08', totalQuantity: 630, totalAmount: 315000 },
      { date: '2025-10-11', totalQuantity: 580, totalAmount: 290000 },

      { date: '2022-11-15', totalQuantity: 610, totalAmount: 305000 },
      { date: '2022-11-18', totalQuantity: 720, totalAmount: 360000 },
      { date: '2022-11-22', totalQuantity: 760, totalAmount: 380000 },
      { date: '2022-11-26', totalQuantity: 690, totalAmount: 345000 },

      { date: '2024-12-31', totalQuantity: 810, totalAmount: 405000 },
      { date: '2024-12-31', totalQuantity: 810, totalAmount: 405000 },
      { date: '2024-12-31', totalQuantity: 810, totalAmount: 405000 },
      { date: '2024-12-31', totalQuantity: 810, totalAmount: 405000 },
    ]
  }
  const vendorDataDates = vendorPurchaseData?.data ? vendorPurchaseData?.data.map(data => data.date) : [];
  const vendorDataQuantity = vendorPurchaseData?.data ? vendorPurchaseData?.data.map(data => data.totalQuantity) : [];
  const vendorDataAmount = vendorPurchaseData?.data ? vendorPurchaseData?.data.map(data => data.totalAmount) : [];
  return (
    <Box flex={1} margin={2}>
      <Grid2 container>
        <Grid2 size={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <PageTitle pagetitle='Purchase Data Of Vendor' />
          {/* <Typography variant='body2' sx={{ fontWeight: 600 }}>Purchase Data Of Vendor</Typography> */}
        </Grid2>
        <Grid2 size={6}>
          <FormControl sx={{ m: 1, minWidth: 300 }} size="small" fullWidth>
            <InputLabel id="select-vendor" sx={{ fontSize: '14px' }}>
              Vendor
            </InputLabel>
            <Select
              labelId="select-vendor"
              id="select-vendor"
              size="small"
              name="vendorId"
              value={vendorId}
              label="Vendor"
              onChange={(e) => setVendorId(e.target.value)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {vendorData.map((type) => {
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
          <BarChart
            data={vendorPurchaseData.data.map(({ date, totalAmount }) => ({
              date,
              totalAmount,
            }))}
            groupBy='year'
          // startDate='2025-02-07'
          // endDate='2025-10-01'
          />
          <LineChart
            title='Quantity'
            labels={vendorDataDates}
            datasets={[
              {
                label: 'Total Quantity (Kg)',
                data: vendorDataQuantity,
                borderColor: '#99004d',
                backgroundColor: '#ff99cc',
                tension: 0.4,
                fill: true,
              }]}
            height={300}
          />
        </Grid2>
        <Grid2 size={12}>
          <LineChart
            title='Amount'
            labels={vendorDataDates}
            datasets={[
              {
                label: 'Total Amount (Rs)',
                data: vendorDataAmount,
                borderColor: '#99004d',
                backgroundColor: '#ff99cc',
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
