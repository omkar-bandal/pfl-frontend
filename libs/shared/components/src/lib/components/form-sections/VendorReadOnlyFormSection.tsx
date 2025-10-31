import { Grid2 } from '@mui/material';
import { TextInput } from '../formik-form';
import { useAppSelector } from '@prime-fresh/modules';
import { formatAddress, vendorsDataStates } from '@prime-fresh/shared/modules';

export const VendorReadOnlyFields = () => {
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
  return (
    <>
      {/* <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          label="Vendor Code"
          name="vendorCode"
          type="text"
          value={`${selectedVendorPartialData?.vendorCode || ''}`}
          isReadOnly={true}
        />
      </Grid2> */}
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          isRequired={false}
          label="Contact Person"
          name="contactPerson"
          type="text"
          value={selectedVendorPartialData?.contactPersonName}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="vendorCategory"
          label="Vendor Category"
          value={`${selectedVendorPartialData?.category || ''}`}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="vendorSubcategory"
          label="Vendor Subategory"
          value={`${selectedVendorPartialData?.subcategory || ''}`}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="Company Email"
          name="email"
          type="email"
          value={`${selectedVendorPartialData?.officeEmail || ''}`}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="Company Contact No"
          name="contactNo"
          type="text"
          value={`${selectedVendorPartialData?.officeContactNo || ''}`}
          isReadOnly={true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextInput
          isRequired={false}
          label="Company Address"
          name="companyAddress"
          type="text"
          value={formatAddress(selectedVendorPartialData?.officeAddress)}
          isReadOnly={true}
        />
      </Grid2>
    </>
  );
};
