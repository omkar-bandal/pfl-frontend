import { useMemo, useState } from 'react'
import { Box, Button, ButtonGroup, Grid2 } from '@mui/material';
import { useGetProductsPartialData, mapToValueLabelArray, useGetPurchaseDataByProduct } from '@prime-fresh/shared/modules';
import { PageTitle, LineChart, Select, DateInput } from '@prime-fresh/ui_shared';

export const PurchaseByProduct = () => {
  const [productId, setProductId] = useState('');
  const [dataGroupBy, setDataGroupBy] = useState<'date' | 'month' | 'year' | 'range'>('date');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const { data: products } = useGetProductsPartialData();
  const productData = useMemo(() => products?.data ? mapToValueLabelArray(products.data, 'id', 'name') : [], [products?.data]);
  const { data: productPurchaseData } = useGetPurchaseDataByProduct(productId);
  const productDataQuantity = productPurchaseData?.data ? productPurchaseData?.data.map(data => ({ x: data.date, y: data.totalQuantity })) : [];
  const productDataAmount = productPurchaseData?.data ? productPurchaseData?.data.map(data => ({ x: data.date, y: data.totalAmount })) : [];

  return (
    <Box flex={1} margin={2}>
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={12}>
          <PageTitle pagetitle='Product Wise Purchase Data' textAlign='center' />
        </Grid2>
        <Grid2 size={3} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Select
            name="productId"
            label="Product"
            value={productId}
            options={productData}
            onChange={(e) => setProductId(e.target.value)}
          />
        </Grid2>
        <Grid2 size={9} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
          <LineChart
            title='Product Quantity'
            data={productDataQuantity}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color='#00C300'
          />
        </Grid2>
        <Grid2 size={12}>
          <LineChart
            title='Product Amount'
            data={productDataAmount}
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
