import { Grid2 } from '@mui/material';
import { PostEmployee } from '@prime-fresh/admin_api'
import { SectionHeader, TextInput } from '@prime-fresh/ui_shared';
import { useFormikContext } from 'formik'
import { memo } from 'react';

export const PersonalInfo = memo(() => {
    const {values, handleChange} = useFormikContext<PostEmployee>();
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
    <Grid2 size={{ xs: 12, md: 6 }}>
      <TextInput
        isRequired={true}
        label="Address Line 1"
        name="residentialAddress.address1"
        value={values.residentialAddress.address1}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }}>
      <TextInput
        isRequired={false}
        label="Address Line 2"
        name="residentialAddress.address2"
        value={values.residentialAddress.address2}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="Location"
        name="residentialAddress.location"
        value={values.residentialAddress.location}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="City"
        name="residentialAddress.city"
        value={values.residentialAddress.city}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="State"
        name="residentialAddress.state"
        value={values.residentialAddress.state}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="Pincode"
        name="residentialAddress.pincode"
        value={values.residentialAddress.pincode}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12 }} marginY={2}>
      <SectionHeader sectionHeader="Permanent Address" />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }}>
      <TextInput
        isRequired={true}
        label="Address Line 1"
        name="permanentAddress.address1"
        value={values.permanentAddress.address1}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 6 }}>
      <TextInput
        isRequired={false}
        label="Address Line 2"
        name="permanentAddress.address2"
        value={values.permanentAddress.address2}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="Location"
        name="permanentAddress.location"
        value={values.permanentAddress.location}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="City"
        name="permanentAddress.city"
        value={values.permanentAddress.city}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="State"
        name="permanentAddress.state"
        value={values.permanentAddress.state}
        handleChange={handleChange}
      />
    </Grid2>
    <Grid2 size={{ xs: 12, md: 3 }}>
      <TextInput
        isRequired={true}
        label="Pincode"
        name="permanentAddress.pincode"
        value={values.permanentAddress.pincode}
        handleChange={handleChange}
      />
    </Grid2>
  </Grid2>
  )
});
 