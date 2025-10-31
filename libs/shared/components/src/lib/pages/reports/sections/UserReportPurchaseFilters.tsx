import { FC } from 'react';
import { Grid2 } from '@mui/material';
import { BtnSmall, DateInput, ScrollableAutocomplete, Select, useScrollableAutocomplete } from '../../../components';
import {
  FarmerPartialData,
  LocationPartialData,
  ProductPartialData,
  UserPurchaseFilter,
  VendorPartialData,
} from '@prime-fresh/services';
import {
  mapToValueLabelArray,
  sharedData,
  useDebounce,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetFarmersPartialData,
  useGetProductsPartialData,
  useGetVendorsPartialData,
} from '@prime-fresh/shared/modules';

type UserReportPurchaseFiltersProps = {
  filters: any;
  onFilterChange: any;
  onFilterReset: any;
};
export const UserReportPurchaseFilters: FC<UserReportPurchaseFiltersProps> = ({
  filters,
  onFilterChange,
  onFilterReset,
}) => {
  //Product data
  const productState = useScrollableAutocomplete(6);
  const debouncedProductSearch = useDebounce(productState.searchQuery, 1000);
  const {
    data: products,
    isLoading: isProductLoading,
    isFetching: isProductFetching,
  } = useGetProductsPartialData(productState.queryParams, debouncedProductSearch);
  const partialProductList = products?.data ? products?.data : [];

  //Vendor Data
  const vendorState = useScrollableAutocomplete(6);
  const debouncedVendorSearch = useDebounce(vendorState.searchQuery, 1000);
  const {
    data: vendors,
    isLoading: isVendorLoading,
    isFetching: isVendorFetching,
  } = useGetVendorsPartialData(vendorState.queryParams, debouncedVendorSearch);
  const partialVendorList = vendors?.data ? vendors?.data : [];

  //Farmer Data
  const farmerState = useScrollableAutocomplete(6);
  const debouncedFarmerSearch = useDebounce(farmerState.searchQuery, 1000);
  const {
    data: farmers,
    isLoading: isFarmerLoading,
    isFetching: isFarmerFetching,
  } = useGetFarmersPartialData(farmerState.queryParams, debouncedFarmerSearch);
  const partialFarmerList = farmers?.data ? farmers?.data : [];

  //Location Data
  const locationState = useScrollableAutocomplete(6);
  const debouncedLocationSearch = useDebounce(vendorState.searchQuery, 1000);
  const { data: locations, isLoading: isLocationLoading, isFetching: isLocationFetching } = useGetBranchesPartialData();
  const partialLocationList = locations?.data ? locations?.data : [];

  //Company Names
  const { data: company } = useGetCompanyNames();
  const companies = company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [];

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
          name="product"
          label="Product"
          value={filters.product}
          isLoading={isProductLoading}
          isFetching={isProductFetching}
          options={partialProductList}
          totalPages={products?.totalPages || 1}
          noOptionsText="No Product Found"
          getOptionLabel={(data) => data.name}
          optionValueKey="id"
          currentPage={productState.queryParams.page}
          onOpen={productState.handleOpen}
          onChange={(_: any, obj: any) => onFilterChange({ target: { name: 'product', value: obj['id'] } })}
          onNextPage={productState.handleNextPage}
          onPrevPage={productState.handlePrevPage}
          onInputChange={productState.handleInputChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <Select
          name="source"
          label="Source"
          options={sharedData.sources}
          value={filters.source || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        {filters?.source === 'vendor' ? (
          <ScrollableAutocomplete<VendorPartialData, 'id'>
            name="source"
            label="Vendor Name"
            value={vendorState.selectedId}
            isLoading={isVendorLoading}
            isFetching={isVendorFetching}
            options={partialVendorList}
            totalPages={vendors?.totalPages || 1}
            noOptionsText="No Vendor Found"
            getOptionLabel={(data) => data.companyName}
            optionValueKey="id"
            currentPage={vendorState.queryParams.page}
            onOpen={vendorState.handleOpen}
            onChange={(_: any, obj: any) => onFilterChange({ target: { name: 'source', value: obj['id'] } })}
            onNextPage={vendorState.handleNextPage}
            onPrevPage={vendorState.handlePrevPage}
            onInputChange={vendorState.handleInputChange}
          />
        ) : (
          <ScrollableAutocomplete<FarmerPartialData, 'id'>
            name="sourceName"
            label="Farmer Name"
            value={farmerState.selectedId}
            isLoading={isFarmerLoading}
            isFetching={isFarmerFetching}
            options={partialFarmerList}
            totalPages={farmers?.totalPages || 1}
            noOptionsText="No Farmer Found"
            getOptionLabel={(data) => data.fullName}
            optionValueKey="id"
            currentPage={farmerState.queryParams.page}
            onOpen={farmerState.handleOpen}
            onChange={(_: any, obj: any) => onFilterChange({ target: { name: 'sourceName', value: obj['id'] } })}
            onNextPage={farmerState.handleNextPage}
            onPrevPage={farmerState.handlePrevPage}
            onInputChange={farmerState.handleInputChange}
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ScrollableAutocomplete<LocationPartialData, 'id'>
          name="fromLocation"
          label="Location"
          value={locationState.selectedId}
          isLoading={isLocationLoading}
          isFetching={isLocationFetching}
          options={partialLocationList}
          totalPages={locations?.totalPages || 1}
          noOptionsText="No Location Found"
          getOptionLabel={(data) => data.name}
          optionValueKey="id"
          currentPage={locationState.queryParams.page}
          onOpen={locationState.handleOpen}
          onChange={(_: any, obj: any) => onFilterChange({ target: { name: 'fromLocation', value: obj['id'] } })}
          onNextPage={locationState.handleNextPage}
          onPrevPage={locationState.handlePrevPage}
          onInputChange={locationState.handleInputChange}
        />
      </Grid2>
      <Grid2 size={12}>
        <Select
          name="company"
          label="Company Name"
          options={companies}
          value={filters.company || ''}
          onChange={(e) => onFilterChange(e)}
        />
      </Grid2>
      <Grid2 size={12} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <BtnSmall label="Reset" color="secondary" onClick={onFilterReset} />
      </Grid2>
    </Grid2>
  );
};
export default UserReportPurchaseFilters;
