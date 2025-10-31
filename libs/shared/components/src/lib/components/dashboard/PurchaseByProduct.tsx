/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { Box, Button, ButtonGroup, Grid2 } from '@mui/material';
import { ProductPartialData } from '@prime-fresh/services';
import { useDebounce, useGetProductsPartialData, useGetPurchaseDataByProduct } from '@prime-fresh/shared/modules';
import { PageTitle, LineChart, DateInput, ScrollableAutocomplete } from '@prime-fresh/shared/components';

export const PurchaseByProduct = () => {
  const [productId, setProductId] = useState<string | null>(null);
  const [productSearch, setProductSearch] = useState<string | null>(null);
  const [dataGroupBy, setDataGroupBy] = useState<'date' | 'month' | 'year' | 'range'>('date');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [queryParams, setQueryParams] = useState<{
    page: number;
    limit: number;
  }>({ page: 1, limit: 6 });

  const debouncedSearch = useDebounce(productSearch, 500);
  const { data: products, isLoading, isFetching } = useGetProductsPartialData(queryParams, debouncedSearch);
  const productData = useMemo(() => (products?.data ? products.data : []), [products?.data]);

  const { data: productPurchaseData } = useGetPurchaseDataByProduct(productId);

  const productDataQuantity = productPurchaseData?.data
    ? productPurchaseData?.data.map((data) => ({ x: data.date, y: data.totalQuantity }))
    : [];

  const productDataAmount = productPurchaseData?.data
    ? productPurchaseData?.data.map((data) => ({ x: data.date, y: data.totalAmount }))
    : [];

  const handleNextPage = () => {
    setQueryParams((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handlePrevPage = () => {
    setQueryParams((prev) => ({ ...prev, page: Math.max(0, prev.page - 1) }));
  };

  const handleInputChange = (_: any, newInput: string, reason?: 'input' | 'clear' | 'reset') => {
    setProductSearch(newInput);
    if (newInput === '' || newInput) {
      setQueryParams((prev) => ({ ...prev, page: 1 })); // reset to first page on clear
    } else {
      setQueryParams((prev) => ({ ...prev, page: 1 })); // optionally reset page on new search too
    }
  };
  const handleOpen = () => {
    setQueryParams((prev) => ({ ...prev, page: 1 }));
  };

  return (
    <Box flex={1} margin={2}>
      <Grid2 container spacing={1} marginY={1}>
        <Grid2 size={12}>
          <PageTitle pagetitle="Product Wise Purchase Data" textAlign="center" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <ScrollableAutocomplete<ProductPartialData, 'id'>
            name="productId"
            label="Product"
            value={productId}
            isLoading={isLoading}
            isFetching={isFetching}
            options={productData}
            totalPages={products?.totalPages || 1}
            noOptionsText="No Products Found"
            getOptionLabel={(data) => data.name}
            optionValueKey="id"
            currentPage={queryParams.page}
            onOpen={handleOpen}
            onChange={setProductId}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
            onInputChange={handleInputChange}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ButtonGroup variant="outlined" color="secondary">
            <Button
              variant={dataGroupBy === 'date' ? 'contained' : 'outlined'}
              sx={{ textTransform: 'none', fontWeight: 500 }}
              onClick={() => setDataGroupBy('date')}
            >
              Date
            </Button>
            <Button
              variant={dataGroupBy === 'month' ? 'contained' : 'outlined'}
              sx={{ textTransform: 'none', fontWeight: 500 }}
              onClick={() => setDataGroupBy('month')}
            >
              Month
            </Button>
            <Button
              variant={dataGroupBy === 'year' ? 'contained' : 'outlined'}
              sx={{ textTransform: 'none', fontWeight: 500 }}
              onClick={() => setDataGroupBy('year')}
            >
              Year
            </Button>
            <Button
              variant={dataGroupBy === 'range' ? 'contained' : 'outlined'}
              sx={{ textTransform: 'none', fontWeight: 500 }}
              onClick={() => setDataGroupBy('range')}
            >
              Range
            </Button>
          </ButtonGroup>
        </Grid2>
        {dataGroupBy === 'range' && (
          <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
          </Grid2>
        )}
        <Grid2 container size={12}>
          <LineChart
            title="Product Quantity"
            data={productDataQuantity}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color="#00C300"
          />
        </Grid2>
        <Grid2 size={12}>
          <LineChart
            title="Product Amount"
            data={productDataAmount}
            groupBy={dataGroupBy}
            startDate={startDate}
            endDate={endDate}
            height={300}
            color="#0061FF"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
