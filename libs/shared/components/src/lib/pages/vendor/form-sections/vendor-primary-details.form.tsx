import { Grid2 } from '@mui/material';
import { useFormikContext } from 'formik';
import { IVendor } from '@prime-fresh/services';
import { AddressFormFields } from '../../../components';
import { SectionHeader, SelectInput, TextInput } from '../../../components';
import {
  useGetAllVendorCategories,
  useGetVendorSubcategoriesByQuery,
  mapToValueLabelArray,
  sharedData,
} from '@prime-fresh/shared/modules';
import { FC } from 'react';
type VendorPrimaryDetailsProps = {
  vendorCategory: Array<{label: string, value: string}>;
  vendorSubcategory: Array<{label: string, value: string}>;
}
export const VendorPrimaryDetails:FC<VendorPrimaryDetailsProps> = ({vendorCategory, vendorSubcategory}) => {
  const { values, handleChange } = useFormikContext<IVendor>();
  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 6 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="companyName"
          label="Vendor Company Name"
          value={values.companyName}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          label="In F&V Business Since"
          name="inFandVBusinessSince"
          options={sharedData.inFnVBusiness}
          value={values.inFandVBusinessSince}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="date"
          isRequired={false}
          name="dateOfIncorporation"
          label="Date Of Incorporation"
          value={values.dateOfIncorporation}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Vendor Classifications"
          name="classification"
          options={sharedData.vendorClassifications}
          value={values.classification}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Vendor Category"
          name="category"
          options={vendorCategory}
          value={values.category}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Vendor Subcategory"
          name="subcategory"
          options={vendorSubcategory}
          value={values.subcategory}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Vendor Office Address" />
      </Grid2>
      <AddressFormFields fieldPrefix="officeAddress" requiredFields={['pincode', 'state', 'city', 'address1']} />
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="officeContactNo"
          label="Office Contact Number"
          value={values.officeContactNo || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="email"
          isRequired={false}
          name="officeEmail"
          label="Office Email"
          value={values.officeEmail || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="website"
          label="Office Website"
          value={values.website || ''}
          handleChange={handleChange}
        />
      </Grid2>
    </Grid2>
  );
};

// const debouncedPincode = useDebounce(values.officeAddress.pincode, 1000);
// const { data: ads, isError: isAddressError, error, isFetching, isLoading } = useGetAddressByPincode(debouncedPincode);
// const address = ads ? ads : null;

// useEffect(() => {
//   if (isAddressError) {
//     toast.error(error?.message ? error?.message : 'Error while fetching address. Please fill manually.');
//   } else {
//     setFieldValue('officeAddress.state', address?.state);
//     setFieldValue('officeAddress.city', address?.district);
//   }
// }, [address, isAddressError, error]);
{
  /* <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="officeAddress.pincode"
          label="Pincode"
          value={values.officeAddress.pincode || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          loading={isFetching || isLoading}
          name="officeAddress.state"
          label="State"
          value={values.officeAddress.state || ''}
          handleChange={handleChange}
          />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          loading={isFetching || isLoading}
          name="officeAddress.city"
          label="City"
          value={values.officeAddress.city || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="officeAddress.location"
          label="Location"
          value={values.officeAddress.location || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="officeAddress.address1"
          label="Address Line 1"
          value={values.officeAddress.address1 || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="officeAddress.address2"
          label="Address Line 2"
          value={values.officeAddress.address2 || ''}
          handleChange={handleChange}
        />
      </Grid2> */
}
