/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { Grid2, Box, Typography, Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedFarmerPartialData, setSelectedVendorPartialData } from '@prime-fresh/admin/modules';
import { FormikAutocomplete, RadioGroupInput } from '../form';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { VendorReadOnlyFields } from './vendor-readonly-fields';
import { FarmerReadOnlyFields } from './farmer-readonly-fields';
import { debounce, sharedRoutes, useGetFarmersPartialDataById, useGetVendorsPartialDataById, useSearchFarmerData, useSearchVendorData } from '@prime-fresh/shared/modules';
import { FarmerPartialData, VendorPartialData } from '@prime-fresh/common_api';
import { SectionHeader } from './section-header';

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
  const [vendorSearchQuery, setVendorSearchQuery] = useState('');
  const [farmerSearchQuery, setFarmerSearchQuery] = useState('');

  const { data: vendors, isFetching: isFetchingVendors, error: errorVendors } = useSearchVendorData(vendorSearchQuery);
  const foundVedors = useMemo(() => vendors?.data ? vendors.data : [], [vendors]);

  const { data: farmers, isFetching: isFetchingFarmers, error: errorFarmers } = useSearchFarmerData(farmerSearchQuery);
  const foundFarmers = useMemo(() => farmers?.data ? farmers.data : [], [farmers]);

  const { data: vendor } = useGetVendorsPartialDataById(selectedParty || '', source);
  const selectedVendor = useMemo(() => vendor?.data ? vendor.data : null, [vendor]);
  const { data: farmer } = useGetFarmersPartialDataById(selectedParty || '', source);
  const selectedFarmer = useMemo(() => farmer?.data ? farmer.data : null, [farmer]);

  useEffect(() => {
    dispatch(setSelectedVendorPartialData(null));
    dispatch(setSelectedFarmerPartialData(null));
    if (source === 'vendor' && selectedVendor !== null) {
      setVendorSearchQuery(selectedVendor.companyName);
      dispatch(setSelectedVendorPartialData(selectedVendor))
    } else if (source === 'farmer' && selectedFarmer !== null) {
      setFarmerSearchQuery(selectedFarmer?.fullName);
      dispatch(setSelectedFarmerPartialData(selectedFarmer))
    }
  }, [source, selectedVendor, selectedFarmer, dispatch])

  const debouncedVendorChange = useCallback(
    debounce((value: string) => {
      setVendorSearchQuery(value);
    }, 2000), [setVendorSearchQuery])

  const debouncedFarmerChange = useCallback(
    debounce((value: string) => {
      setFarmerSearchQuery(value);
    }, 2000), [setFarmerSearchQuery]);

  return (
    <>
      <Grid2 size={{ xs: 12 }} marginY={2}>
        <SectionHeader sectionHeader='Vendor / Farmer Information' />
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
        {values.source === 'vendor' ?
          (<FormikAutocomplete<VendorPartialData>
            isRequired={true}
            optionValueKey="id"
            name="selectedParty"
            label="Vendor Company Name"
            options={foundVedors}
            isLoading={isFetchingVendors}
            noOptionsText={errorVendors ? errorVendors.message : 'Enter name'}
            onInputChange={(value) => debouncedVendorChange(value)}
            getOptionLabel={(option) => option.companyName}
            onOptionSelected={selectedVendor => {
              dispatch(setSelectedVendorPartialData(null))
              dispatch(setSelectedVendorPartialData(selectedVendor))
            }}
          />) :
          (<FormikAutocomplete<FarmerPartialData>
            isRequired={true}
            optionValueKey="id"
            name="selectedParty"
            label="Farmer Name"
            options={foundFarmers}
            isLoading={isFetchingFarmers}
            noOptionsText={errorFarmers ? errorFarmers.message : 'Enter Name'}
            onInputChange={(value) => debouncedFarmerChange(value)}
            getOptionLabel={(option) => option.fullName}
            onOptionSelected={selectedFarmer => dispatch(setSelectedFarmerPartialData(selectedFarmer))}
          />)}
      </Grid2>
      {values.source === 'vendor' ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
      <Grid2 size={{ xs: 12 }} marginY={2}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            If {values.source === 'vendor' ? 'Vendor' : 'Farmer'} Not Found{' '}
            <Button
              variant="text"
              onClick={() => navigate(values.source === 'vendor' ? sharedRoutes.CREATE_VENDOR : sharedRoutes.CREATE_FARMER)}
            >
              Click Here
            </Button>
          </Typography>
        </Box>
      </Grid2>
    </>
  );
};
