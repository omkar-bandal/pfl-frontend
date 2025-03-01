import React, { useMemo, useCallback } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADMIN_ROUTES, setAllFarmersPartialData, setAllVendorsPartialData, setSelectedFarmerPartialData, setSelectedVendorPartialData} from '@prime-fresh/admin/modules';
import { AutoCompleteInput, RadioGroupInput } from '../auto_form/components';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { VendorReadOnlyFields } from './vendor-readonly-fields';
import { FarmerReadOnlyFields } from './farmer-readonly-fields';
import { mapToValueLabelArray, useGetFarmersPartialData, useGetVendorsPartialData } from '@prime-fresh/shared/modules';

export const VendorFarmerInfo = <T extends { source: 'vendor' | 'farmer'; selectedParty: string | null }>({
  source,
  selectedParty,
}: {
  source?: string;
  selectedParty?: string;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, setFieldValue } = useFormikContext<T>();

  const { data: vendors } = useGetVendorsPartialData();
  const allVendors = useMemo(() => vendors?.data ? mapToValueLabelArray(vendors.data, 'id', 'companyName') : [], [vendors]);

  const { data: farmers } = useGetFarmersPartialData();
  const allFarmers = useMemo(() => farmers?.data ? mapToValueLabelArray(farmers.data, 'id', 'fullName') : [], [farmers]);

  React.useEffect(() => {
    dispatch(setSelectedVendorPartialData(null));
    dispatch(setSelectedFarmerPartialData(null));
    if (source === 'farmer') {
      dispatch(setSelectedFarmerPartialData(farmers?.data?.find((farmer) => farmer.id === selectedParty)));
    } else {
      dispatch(setSelectedVendorPartialData(vendors?.data?.find((vendor) => vendor.id === selectedParty)));
    }
  }, [dispatch, selectedParty, source, farmers, vendors]);

  const handleSourceChange = useCallback(
    (value: string) => {
      setFieldValue('source', value);
      if (value === 'vendor') {
        dispatch(setAllVendorsPartialData(vendors?.data || []));
      } else {
        dispatch(setAllFarmersPartialData(farmers?.data || []));
      }
    },
    [dispatch, setFieldValue, vendors, farmers]
  );

  const handlePartyNameChange = useCallback(
    (dataId: string) => {
      if (values.source === 'vendor') {
        const selectedVendor = vendors?.data !== null ? vendors?.data.find((vendor) => vendor.id === dataId) : null;
        if (selectedVendor) {
          dispatch(setSelectedVendorPartialData(selectedVendor));
        }
      } else if (values.source === 'farmer') {
        const selectedFarmer = farmers?.data !== null ? farmers?.data.find((farmer) => farmer.id === dataId) : null;
        dispatch(setSelectedFarmerPartialData(selectedFarmer));
      }
    },
    [dispatch, values.source, vendors, farmers]
  );

  return (
    <>
      <Grid item xs={12} marginY={2}>
        <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Vendor / Farmer Information
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroupInput
          isRequired
          label="Source : "
          name="source"
          alignment="horizontal"
          options={PURCHASE_ARRAYS.source}
          value={values.source}
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleSourceChange(event.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AutoCompleteInput
          isRequired
          name="selectedParty"
          label={values.source === 'vendor' ? 'Vendor Company Name' : 'Farmer Name'}
          options={values.source === 'vendor' ? allVendors : allFarmers}
          handleChange={(event, newValue) => {
            if (newValue !== null) {
              if (typeof newValue === 'string')
                setFieldValue(`selectedParty`, null);
              else {
                setFieldValue(`selectedParty`, newValue.value);
                handlePartyNameChange(newValue.value);
              }
            } else
              setFieldValue('selectedParty', null);
          }}
        />
      </Grid>
      {values.source === 'vendor' ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
      <Grid item xs={12} marginY={2}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            If {values.source === 'vendor' ? 'Vendor' : 'Farmer'} Not Found{' '}
            <Button
              variant="text"
              onClick={() => navigate(values.source === 'vendor' ? ADMIN_ROUTES.CREATE_VENDOR : ADMIN_ROUTES.CREATE_FARMER)}
            >
              Click Here
            </Button>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
