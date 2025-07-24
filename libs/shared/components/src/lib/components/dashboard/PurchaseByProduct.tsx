import { Box, Grid2, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useGetProductsPartialData, mapToValueLabelArray, useGetPurchaseDataByProduct } from '@prime-fresh/shared/modules';
import { PageTitle } from '@prime-fresh/ui_shared';
import React, { useMemo, useState } from 'react'
import { LineChart } from './LineChart';

export const PurchaseByProduct = () => {
  const [productId, setProductId] = useState('');
  const { data: products } = useGetProductsPartialData();
  const productData = useMemo(() => products?.data ? mapToValueLabelArray(products.data, 'id', 'name') : [], [products?.data]);
  const { data: productPurchaseData } = useGetPurchaseDataByProduct(productId);
  const productDataDates = productPurchaseData?.data ? productPurchaseData?.data.map(data => data.date) : [];
  const productDataQuantity = productPurchaseData?.data ? productPurchaseData?.data.map(data => data.totalQuantity) : [];
  const productDataAmount = productPurchaseData?.data ? productPurchaseData?.data.map(data => data.totalAmount) : [];

  return (
    <Box flex={1} margin={2}>
      <PageTitle pagetitle='Product Wise Purchase Data' />
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={12}>
          <FormControl sx={{ m: 1, minWidth: 300 }} size="small" >
            <InputLabel id="select-product" sx={{ fontSize: '14px' }}>
              Product
            </InputLabel>
            <Select
              labelId="select-product"
              id="select-product"
              size="small"
              name="productId"
              value={productId}
              label="product"
              onChange={(e) => setProductId(e.target.value)}
              sx={{
                height: '40px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {productData.map((type) => {
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
            labels={productDataDates}
            datasets={[
              {
                label: 'Total Quantity (Kg)',
                data: productDataQuantity,
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
            labels={productDataDates}
            datasets={[
              {
                label: 'Total Amount (Rs)',
                data: productDataAmount,
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
