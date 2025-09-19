/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useCallback, useState, useEffect } from 'react';
import { Grid2 } from '@mui/material';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { VendorReadOnlyFields } from './vendor-readonly-fields';
import { FarmerReadOnlyFields } from './farmer-readonly-fields';
import { setSelectedFarmerPartialData, setSelectedVendorPartialData } from '@prime-fresh/admin/modules';
import { RadioGroupInput, ScrollableAutocomplete, SectionHeader } from '@prime-fresh/ui_shared';
import { FarmerPartialData, QueryParams, VendorPartialData } from '@prime-fresh/common_api';
import {
  useDebounce,
  useGetFarmersPartialData,
  useGetFarmersPartialDataById,
  useGetVendorsPartialData,
  useGetVendorsPartialDataById,
} from '@prime-fresh/shared/modules';

export const VendorFarmerInfo = <T extends { source: 'vendor' | 'farmer'; selectedParty: string | null }>({
  source,
  selectedParty,
}: {
  source?: 'vendor' | 'farmer';
  selectedParty?: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange } = useFormikContext<T>();
  const [vendorQueryParams, setVendorQueryParams] = useState<Partial<QueryParams>>({ page: 1, limit: 10 });
  const [farmerQueryParams, setFarmerQueryParams] = useState<Partial<QueryParams>>({ page: 1, limit: 10 });
  const [vendorSearchQuery, setVendorSearchQuery] = useState('');
  const [farmerSearchQuery, setFarmerSearchQuery] = useState('');
  const debouncedVendorSearchQuery = useDebounce(vendorSearchQuery, 500);
  const debouncedFarmerSearchQuery = useDebounce(farmerSearchQuery, 500);

  const {
    data: vendors,
    isFetching: isFetchingVendors,
    error: errorVendors,
  } = useGetVendorsPartialData(vendorQueryParams, debouncedVendorSearchQuery);
  const foundVendors = useMemo(() => (vendors ? vendors : null), [vendors]);

  const {
    data: farmers,
    isFetching: isFetchingFarmers,
    error: errorFarmers,
  } = useGetFarmersPartialData(farmerQueryParams, debouncedFarmerSearchQuery);
  const foundFarmers = useMemo(() => (farmers ? farmers : null), [farmers]);

  // const { data: vendors, isFetching: isFetchingVendors, error: errorVendors } = useSearchVendorData(vendorSearchQuery);
  // const { data: farmers, isFetching: isFetchingFarmers, error: errorFarmers } = useSearchFarmerData(farmerSearchQuery);

  const handleVendorNextPage = useCallback(() => {
    setVendorQueryParams((prev) => ({
      ...prev,
      page: prev.page ? prev.page + 1 : 2,
    }));
  }, []);

  const handleVendorPrevPage = useCallback(() => {
    setVendorQueryParams((prev) => ({
      ...prev,
      page: prev.page && prev.page > 1 ? prev.page - 1 : 1,
    }));
  }, []);

  const handleVendorSearchChange = useCallback((_: any, newInput: string) => {
    setVendorSearchQuery(newInput);
  }, []);

  const handleFarmerNextPage = useCallback(() => {
    setFarmerQueryParams((prev) => ({
      ...prev,
      page: prev.page ? prev.page + 1 : 2,
    }));
  }, []);

  const handleFarmerPrevPage = useCallback(() => {
    setFarmerQueryParams((prev) => ({
      ...prev,
      page: prev.page && prev.page > 1 ? prev.page - 1 : 1,
    }));
  }, []);

  const handleFarmerSearchChange = useCallback((_: any, newInput: string, reason: string) => {
    if (reason === 'input') {
      setFarmerSearchQuery(newInput);
    }
  }, []);

  const { data: vendor } = useGetVendorsPartialDataById(selectedParty || '', source);
  const selectedVendor = useMemo(() => (vendor?.data ? vendor.data : null), [vendor]);

  const { data: farmer } = useGetFarmersPartialDataById(selectedParty || '', source);
  const selectedFarmer = useMemo(() => (farmer?.data ? farmer.data : null), [farmer]);

  useEffect(() => {
    dispatch(setSelectedVendorPartialData(null));
    dispatch(setSelectedFarmerPartialData(null));
    if (source === 'vendor' && selectedVendor !== null) {
      setVendorSearchQuery(selectedVendor.companyName);
      dispatch(setSelectedVendorPartialData(selectedVendor));
    } else if (source === 'farmer' && selectedFarmer !== null) {
      setFarmerSearchQuery(selectedFarmer?.fullName);
      dispatch(setSelectedFarmerPartialData(selectedFarmer));
    }
  }, [source, selectedVendor, selectedFarmer, dispatch]);

  return (
    <>
      <Grid2 size={{ xs: 12 }} marginY={2}>
        <SectionHeader sectionHeader="Vendor / Farmer Information" />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupInput
          isRequired
          label="Source : "
          name="source"
          alignment="horizontal"
          options={PURCHASE_ARRAYS.source}
          value={values.source}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        {values.source === 'vendor' ? (
          <ScrollableAutocomplete<VendorPartialData>
            isRequired={true}
            name="selectedParty"
            label="Vendor Code"
            options={foundVendors?.data || []}
            noOptionsText="No vendor found"
            isFetching={isFetchingVendors}
            isLoading={false}
            page={vendorQueryParams.page || 1}
            totalPages={foundVendors?.totalPages || 1}
            getOptionLabel={(option) => option.vendorCode}
            optionValueKey="id"
            handleInputChange={handleVendorSearchChange}
            handleNextPage={handleVendorNextPage}
            handlePrevPage={handleVendorPrevPage}
          />
        ) : (
          <ScrollableAutocomplete<FarmerPartialData>
            isRequired={false}
            isReadOnly={false}
            name="selectedParty"
            label="Farmer Code"
            options={foundFarmers?.data || []}
            noOptionsText="No farmer found"
            isFetching={isFetchingFarmers}
            isLoading={false}
            page={farmerQueryParams.page || 1}
            totalPages={foundFarmers?.totalPages || 1}
            getOptionLabel={(option) => option.farmerCode}
            optionValueKey="id"
            handleInputChange={handleFarmerSearchChange}
            handleNextPage={handleFarmerNextPage}
            handlePrevPage={handleFarmerPrevPage}
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        {values.source === 'vendor' ? (
          <ScrollableAutocomplete<VendorPartialData>
            isRequired={true}
            name="selectedParty"
            label="Vendor Company Name"
            options={foundVendors?.data || []}
            noOptionsText="No vendor found"
            isFetching={isFetchingVendors}
            isLoading={false}
            page={vendorQueryParams.page || 1}
            totalPages={foundVendors?.totalPages || 1}
            getOptionLabel={(option) => option.companyName}
            optionValueKey="id"
            handleInputChange={handleVendorSearchChange}
            handleNextPage={handleVendorNextPage}
            handlePrevPage={handleVendorPrevPage}
          />
        ) : (
          <ScrollableAutocomplete<FarmerPartialData>
            isRequired={false}
            isReadOnly={false}
            name="selectedParty"
            label="Farmer Name"
            options={foundFarmers?.data || []}
            noOptionsText="No farmer found"
            isFetching={isFetchingFarmers}
            isLoading={false}
            page={farmerQueryParams.page || 1}
            totalPages={foundFarmers?.totalPages || 1}
            getOptionLabel={(option) => option.fullName}
            optionValueKey="id"
            handleInputChange={handleFarmerSearchChange}
            handleNextPage={handleFarmerNextPage}
            handlePrevPage={handleFarmerPrevPage}
          />
        )}
      </Grid2>
      {values.source === 'vendor' ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
      {/* <Grid2 size={{ xs: 12 }} marginY={2}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            If {values.source === 'vendor' ? 'Vendor' : 'Farmer'} Not Found{' '}
            <Button
              variant="text"
              onClick={() =>
                navigate(values.source === 'vendor' ? sharedRoutes.CREATE_VENDOR : sharedRoutes.CREATE_FARMER)
              }
            >
              Click Here
            </Button>
          </Typography>
        </Box>
      </Grid2> */}
    </>
  );
};
