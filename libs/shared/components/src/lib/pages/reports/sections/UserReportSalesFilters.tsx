import { FC } from 'react';
import { Grid2 } from '@mui/material';
import { BtnSmall, DateInput, ScrollableAutocomplete, Select, useScrollableAutocomplete } from '../../../components';
import { ProductPartialData, UserSalesFilter } from '@prime-fresh/services';
import {
  mapToValueLabelArray,
  useDebounce,
  useGetCompanyNames,
  useGetCustomerNames,
  useGetProductsPartialData,
} from '@prime-fresh/shared/modules';

type UserReportSalesFiltersProps = {
  filters: UserSalesFilter;
  onFilterChange: any;
  onFilterReset: any;
};

export const UserReportSalesFilters: FC<UserReportSalesFiltersProps> = ({ filters, onFilterChange, onFilterReset }) => {
  //Product data
  const productState = useScrollableAutocomplete(6);
  const debouncedProductSearch = useDebounce(productState.searchQuery, 1000);
  const {
    data: products,
    isLoading: isProductLoading,
    isFetching: isProductFetching,
  } = useGetProductsPartialData(productState.queryParams, debouncedProductSearch);
  const partialProductList = products?.data ? products?.data : [];

  //Company Names
  const { data: company } = useGetCompanyNames();
  const companies = company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [];

  //Customer
  const { data: cust } = useGetCustomerNames();
  const customers = cust?.data ? mapToValueLabelArray(cust?.data, 'id', 'organisationName') : [];

  return (
    <Grid2
      container
      size={12}
      spacing={2}
      marginY={1}
      sx={{ border: `1px solid #BDBDBD`, borderRadius: 3, padding: 2 }}
    >
      <Grid2 size={{ xs: 12, md: 4 }}>
        <DateInput
          name="startDate"
          label="Start Date"
          value={filters.startDate || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <DateInput name="endDate" label="End Date" value={filters.endDate || ''} onChange={(e) => onFilterChange(e)} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ScrollableAutocomplete<ProductPartialData, 'id'>
          name="productState.selectedId"
          label="Product"
          value={productState.selectedId}
          isLoading={isProductLoading}
          isFetching={isProductFetching}
          options={partialProductList}
          totalPages={products?.totalPages || 1}
          noOptionsText="No Product Found"
          getOptionLabel={(data) => data.name}
          optionValueKey="id"
          currentPage={productState.queryParams.page}
          onOpen={productState.handleOpen}
          onChange={productState.setSelectedId}
          onNextPage={productState.handleNextPage}
          onPrevPage={productState.handlePrevPage}
          onInputChange={productState.handleInputChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Select
          name="company"
          label="Company Name"
          options={companies}
          value={filters.company || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Select
          name="customerName"
          label="Customer Name"
          options={customers}
          value={filters.customerName || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <BtnSmall label="Reset" color="secondary" onClick={onFilterReset} />
      </Grid2>
    </Grid2>
  );
};
export default UserReportSalesFilters;