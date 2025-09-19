import { Checkbox, FormControlLabel, Grid2 } from '@mui/material';
import { IEmployee } from '@prime-fresh/admin_api';
import { AddressFormFields } from '@prime-fresh/shared/components';
import { useDebounce, useGetAddressByPincode } from '@prime-fresh/shared/modules';
import { SectionHeader, TextInput, toast } from '@prime-fresh/ui_shared';
import { useFormikContext } from 'formik';
import { memo, useEffect, useRef, useState } from 'react';

export const PersonalInfo = memo(() => {
  const { values, setFieldValue, handleChange } = useFormikContext<IEmployee>();

  const debouncedPincode = useDebounce(values.residentialAddress.pincode, 1000);
  const { data: ads, isError: isAddressError, error } = useGetAddressByPincode(debouncedPincode);
  const address = ads ? ads : null;

  useEffect(() => {
    if (isAddressError) {
      toast.error(error?.message ? error?.message : 'Error while fetching address. Please fill manually.');
    } else {
      setFieldValue('residentialAddress.state', address?.state);
      setFieldValue('residentialAddress.city', address?.district);
    }
  }, [address, isAddressError, error]);

  useEffect(() => {
    if (values.isAddressSame) {
      setFieldValue('permanentAddress.pincode', values.residentialAddress.pincode);
      setFieldValue('permanentAddress.state', values.residentialAddress.state);
      setFieldValue('permanentAddress.city', values.residentialAddress.city);
      setFieldValue('permanentAddress.location', values.residentialAddress.location);
      setFieldValue('permanentAddress.address1', values.residentialAddress.address1);
      setFieldValue('permanentAddress.address2', values.residentialAddress.address2);
    } else {
      setFieldValue('permanentAddress.pincode', null);
      setFieldValue('permanentAddress.state', null);
      setFieldValue('permanentAddress.city', null);
      setFieldValue('permanentAddress.location', null);
      setFieldValue('permanentAddress.address1', null);
      setFieldValue('permanentAddress.address2', null);
    }
  }, [values.isAddressSame]);

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          label="First Name"
          name="firstName"
          value={values.firstName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="Middle Name"
          name="middleName"
          value={values.middleName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          label="Last Name"
          name="lastName"
          value={values.lastName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          label="Username"
          name="username"
          value={values.username}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <TextInput
          isRequired={true}
          label="Primary Contact No"
          name="primaryMobNo"
          value={values.primaryMobNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={true}
          label="Primary Email"
          name="primaryEmail"
          value={values.primaryEmail}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <TextInput
          isRequired={false}
          label="Secondary Contact No"
          name="secondaryMobNo"
          value={values.secondaryMobNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          label="Secondary Email"
          name="secondaryEmail"
          value={values.secondaryEmail}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginY={2}>
        <SectionHeader sectionHeader="Residential Address" />
      </Grid2>
      <AddressFormFields fieldPrefix="residentialAddress" requiredFields={['pincode', 'state', 'city', 'address1']} />
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Permanent Address" />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <FormControlLabel
          label="Is permanent address same as residential address ?"
          control={
            <Checkbox
              name="isAddressSame"
              checked={values.isAddressSame}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
        />
      </Grid2>
      <AddressFormFields fieldPrefix="permanentAddress" requiredFields={['pincode', 'state', 'city', 'address1']} />
    </Grid2>
  );
});
