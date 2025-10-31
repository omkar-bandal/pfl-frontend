import { useFormikContext } from 'formik';
import { IFarmer } from '@prime-fresh/services';
import { Grid2 } from '@mui/material';
import { sharedData } from '@prime-fresh/shared/modules';
import { FileUpload, RadioGroupInput, SectionHeader, TextInput, AddressFormFields } from '../../../components';

export const FarmerDetails = () => {
  const { values, handleChange } = useFormikContext<IFarmer>();

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="farmerfName"
          label="First Name"
          value={values.farmerfName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="farmermName"
          label="Middle Name"
          value={values.farmermName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="farmerlName"
          label="Last Name"
          value={values.farmerlName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Farmer Residential Address" />
      </Grid2>
      <AddressFormFields fieldPrefix="residensialAddress" requiredFields={['pincode', 'state', 'city', 'address1']} />
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="primaryMobileNo"
          label="Primary Contact Number"
          value={values.primaryMobileNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="secondaryMobileNo"
          label="Alternate Contact Number"
          value={values.secondaryMobileNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="email"
          isRequired={false}
          name="email"
          label="Email"
          value={values.email}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12 }}>
        <RadioGroupInput
          isRequired={true}
          alignment="vertical"
          name="gender"
          label="Gender"
          value={values.gender}
          options={sharedData.gender}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="date"
          isRequired={false}
          name="dob"
          label="Birth Date"
          value={values.dob}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="idProofNo"
          label="Aadhar/ PAN/ License Number"
          value={values.idProofNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <FileUpload isRequired={false} name="idProofCopy" label="Attach a ID proof copy" />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="howDoYouSell"
          label="How do you sell your product?"
          value={values.howDoYouSell}
          handleChange={handleChange}
        />
      </Grid2>
    </Grid2>
  );
};
