import { Grid2 } from '@mui/material';
import { PostVendor } from '@prime-fresh/admin_api';
import { SectionHeader, TextInput, toast } from '@prime-fresh/ui_shared';
import { useFormikContext } from 'formik';
import { AddressFormFields } from '../../../components';

export const VendorReferences = () => {
  const { values, handleChange } = useFormikContext<PostVendor>();

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Vendor Reference 1" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={true}
          name="ref1FName"
          label="First Name"
          value={values.ref1FName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref1MName"
          label="Middle Name"
          value={values.ref1MName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={true}
          name="ref1LName"
          label="Last Name"
          value={values.ref1LName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={true}
          name="ref1PrimaryCNumb"
          label="Primary Contact Number"
          value={values.ref1PrimaryCNumb || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref1AltrCNumb"
          label="Alternate Contact Number"
          value={values.ref1AltrCNumb || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref1Email"
          label="Email"
          value={values.ref1Email || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <AddressFormFields fieldPrefix="ref1Address" requiredFields={['pincode', 'state', 'city', 'address1']} />
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Vendor Reference 2" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2FName"
          label="First Name"
          value={values.ref2FName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2MName"
          label="Middle Name"
          value={values.ref2MName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2LName"
          label="Last Name"
          value={values.ref2LName || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2PrimaryCNumb"
          label="Primary Contact Number"
          value={values.ref2PrimaryCNumb || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2AltrCNumb"
          label="Alternate Contact Number"
          value={values.ref2AltrCNumb || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          name="ref2Email"
          label="Email"
          value={values.ref2Email || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <AddressFormFields fieldPrefix="ref2Address" />
    </Grid2>
  );
};

//  const debouncedRef1Pincode = useDebounce(values.ref1Address.pincode, 1000);
//   const {
//     data: refAds1,
//     isError: isAdsRef1Error,
//     error: ref1AdsError,
//     isFetching: ref1AdsFetching,
//     isLoading: ref1AdsLoading,
//   } = useGetAddressByPincode(debouncedRef1Pincode);
//   const ref1Address = refAds1 ? refAds1 : null;

//   useEffect(() => {
//     if (isAdsRef1Error) {
//       toast.error(
//         ref1AdsError?.message ? ref1AdsError?.message : 'Error while fetching address. Please fill manually.'
//       );
//     } else {
//       setFieldValue('ref1Address.state', ref1Address?.state);
//       setFieldValue('ref1Address.city', ref1Address?.district);
//     }
//   }, [ref1Address, isAdsRef1Error, ref1AdsError]);

//   const debouncedRef2Pincode = useDebounce(values.ref2Address.pincode, 1000);
//   const {
//     data: refAds2,
//     isError: isAdsRef2Error,
//     error: ref2AdsError,
//     isFetching: ref2AdsFetching,
//     isLoading: ref2AdsLoading,
//   } = useGetAddressByPincode(debouncedRef2Pincode);
//   const ref2Address = refAds2 ? refAds2 : null;

//   useEffect(() => {
//     if (isAdsRef2Error) {
//       toast.error(
//         ref2AdsError?.message ? ref2AdsError?.message : 'Error while fetching address. Please fill manually.'
//       );
//     } else {
//       setFieldValue('ref1Address.state', ref2Address?.state);
//       setFieldValue('ref1Address.city', ref2Address?.district);
//     }
//   }, [ref2Address, isAdsRef2Error, ref2AdsError]);

{
  /* <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={true}
          name="ref1Address.pincode"
          label="Pincode"
          value={values.ref1Address.pincode || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          loading={ref1AdsFetching || ref1AdsLoading}
          isRequired={true}
          name="ref1Address.state"
          label="State"
          value={values.ref1Address.state || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          loading={ref1AdsFetching || ref1AdsLoading}
          isRequired={true}
          name="ref1Address.city"
          label="City"
          value={values.ref1Address.city || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="ref1Address.location"
          label="Location"
          value={values.ref1Address.location || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={true}
          name="ref1Address.address1"
          label="Address Line 1"
          value={values.ref1Address.address1 || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={false}
          name="ref1Address.address2"
          label="Address Line 2"
          value={values.ref1Address.address2 || ''}
          handleChange={handleChange}
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="ref2Address.pincode"
          label="Pincode"
          value={values.ref2Address?.pincode || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          loading={ref2AdsFetching || ref2AdsLoading}
          isRequired={false}
          name="ref2Address.state"
          label="State"
          value={values.ref2Address?.state || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          loading={ref2AdsFetching || ref2AdsLoading}
          name="ref2Address.city"
          label="City"
          value={values.ref2Address?.city || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="ref2Address.location"
          label="Location"
          value={values.ref2Address?.location || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={false}
          name="ref2Address.address1"
          label="Address Line 1"
          value={values.ref2Address?.address1 || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextInput
          isRequired={false}
          name="ref2Address.address2"
          label="Address Line 2"
          value={values.ref2Address?.address2 || ''}
          handleChange={handleChange}
        />
      </Grid2> */
}
