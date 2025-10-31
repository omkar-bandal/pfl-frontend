/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useCallback, useState, useEffect } from 'react';
import { Grid2 } from '@mui/material';
import { useFormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { VendorReadOnlyFields } from './VendorReadOnlyFormSection';
import { FarmerReadOnlyFields } from './FarmerReadOnlyFormSection';
import { FarmerPartialData, QueryParams, VendorPartialData } from '@prime-fresh/services';
import { RadioGroupInput, FormikScrollableAutocomplete } from '../formik-form';
import {SectionHeader} from '../SectionHeader';
import {
  sharedData,
  useDebounce,
  useGetFarmersPartialData,
  useGetFarmersPartialDataById,
  useGetVendorsPartialData,
  useGetVendorsPartialDataById,
  setSelectedFarmerPartialData,
  setSelectedVendorPartialData,
} from '@prime-fresh/shared/modules';

export const VendorFarmerInfo = <T extends { source: 'vendor' | 'farmer'; selectedParty: string | null }>({
  source,
  selectedParty,
}: {
  source?: 'vendor' | 'farmer';
  selectedParty?: string;
}) => {
  const dispatch = useDispatch();
  const { values, handleChange } = useFormikContext<T>();

  //Vendor Logic
  const [vendorQueryParams, setVendorQueryParams] = useState<Partial<QueryParams>>({ page: 1, limit: 10 });
  const [vendorSearchQuery, setVendorSearchQuery] = useState('');
  const debouncedVendorSearchQuery = useDebounce(vendorSearchQuery, 500);

  const { data: vendor } = useGetVendorsPartialDataById(selectedParty || '', source);
  const selectedVendor = useMemo(() => (vendor?.data ? vendor.data : null), [vendor]);

  const {
    data: vendors,
    isFetching: isFetchingVendors,
    error: errorVendors,
  } = useGetVendorsPartialData(vendorQueryParams, debouncedVendorSearchQuery);
  const foundVendors = useMemo(() => (vendors ? vendors : null), [vendors]);

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
    if (newInput === '' || newInput) {
      setVendorQueryParams((prev) => ({ ...prev, page: 1 })); // reset to first page on clear
    } else {
      setVendorQueryParams((prev) => ({ ...prev, page: 1 })); // optionally reset page on new search too
    }
  }, []);

  const handleVendorListOpen = () => {
    setVendorQueryParams((prev) => ({ ...prev, page: 1 }));
  };

  //Farmer Logic
  const [farmerQueryParams, setFarmerQueryParams] = useState<Partial<QueryParams>>({ page: 1, limit: 10 });
  const [farmerSearchQuery, setFarmerSearchQuery] = useState('');
  const debouncedFarmerSearchQuery = useDebounce(farmerSearchQuery, 500);

  const { data: farmer } = useGetFarmersPartialDataById(selectedParty || '', source);
  const selectedFarmer = useMemo(() => (farmer?.data ? farmer.data : null), [farmer]);

  const {
    data: farmers,
    isFetching: isFetchingFarmers,
    error: errorFarmers,
  } = useGetFarmersPartialData(farmerQueryParams, debouncedFarmerSearchQuery);
  const foundFarmers = useMemo(() => (farmers ? farmers : null), [farmers]);

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
    setFarmerSearchQuery(newInput);
    if (newInput === '' || newInput) {
      setFarmerQueryParams((prev) => ({ ...prev, page: 1 })); // reset to first page on clear
    } else {
      setFarmerQueryParams((prev) => ({ ...prev, page: 1 })); // optionally reset page on new search too
    }
  }, []);

  const handleFarmerListOpen = () => {
    setFarmerQueryParams((prev) => ({ ...prev, page: 1 }));
  };

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
          options={sharedData.sources}
          value={values.source}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        {values.source === 'vendor' ? (
          <FormikScrollableAutocomplete<VendorPartialData>
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
            handleOpenList={handleVendorListOpen}
            handleInputChange={handleVendorSearchChange}
            handleNextPage={handleVendorNextPage}
            handlePrevPage={handleVendorPrevPage}
          />
        ) : (
          <FormikScrollableAutocomplete<FarmerPartialData>
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
            handleOpenList={handleFarmerListOpen}
            handleInputChange={handleFarmerSearchChange}
            handleNextPage={handleFarmerNextPage}
            handlePrevPage={handleFarmerPrevPage}
          />
        )}
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        {values.source === 'vendor' ? (
          <FormikScrollableAutocomplete<VendorPartialData>
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
            handleOpenList={handleVendorListOpen}
            handleInputChange={handleVendorSearchChange}
            handleNextPage={handleVendorNextPage}
            handlePrevPage={handleVendorPrevPage}
          />
        ) : (
          <FormikScrollableAutocomplete<FarmerPartialData>
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
            handleOpenList={handleFarmerListOpen}
            handleInputChange={handleFarmerSearchChange}
            handleNextPage={handleFarmerNextPage}
            handlePrevPage={handleFarmerPrevPage}
          />
        )}
      </Grid2>
      {values.source === 'vendor' ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
    </>
  );
};
