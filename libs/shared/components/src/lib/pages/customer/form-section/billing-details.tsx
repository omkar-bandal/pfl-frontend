import { PostCustomer } from '@prime-fresh/admin_api';
import { useFormikContext } from 'formik';
import { Grid2 } from '@mui/material';
import { SectionHeader, TextInput, FileUpload } from '@prime-fresh/ui_shared';

export const CustomerBillingDetails = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();
    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="billingDetails.billingName" label="Billing Name/ Regd. Name" value={values.billingDetails.billingName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="billingDetails.commonlyKnownAs" label="Commonly Known as" value={values.billingDetails.commonlyKnownAs} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Contact Person Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="billingDetails.contactPersonFName" label="First Name" value={values.billingDetails.contactPersonFName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="billingDetails.contactPersonMName" label="Middle Name" value={values.billingDetails.contactPersonMName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="billingDetails.contactPersonLName" label="Last Name" value={values.billingDetails.contactPersonLName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput isRequired={true} name="billingDetails.primaryContactNo" label="Contact Number" value={values.billingDetails.primaryContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput isRequired={true} name="billingDetails.emailPrimary" label="Email (Primary)" value={values.billingDetails.emailPrimary} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput isRequired={false} name="billingDetails.secondaryContactNo" label="Alternate Contact Number" value={values.billingDetails.secondaryContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput isRequired={false} name="billingDetails.emailSecondary" label="Email (Alternate)" value={values.billingDetails.emailSecondary} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="billingDetails.billingAddress.address1" label="Address Line 1" value={values.billingDetails.billingAddress.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="billingDetails.billingAddress.address2" label="Address Line 2" value={values.billingDetails.billingAddress.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="billingDetails.billingAddress.location" label="Location" value={values.billingDetails.billingAddress.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="billingDetails.billingAddress.city" label="City" value={values.billingDetails.billingAddress.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="billingDetails.billingAddress.state" label="State" value={values.billingDetails.billingAddress.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="billingDetails.billingAddress.pincode" label="Pincode" value={values.billingDetails.billingAddress.pincode} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <FileUpload
                    isRequired={false}
                    name="billingDetails.billingAddressProofCopy"
                    label="Billing Address Proof Copy" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <FileUpload
                    isRequired={false}
                    name="billingDetails.billingFormatCopy"
                    label="Billing Format" />
            </Grid2>
        </Grid2>
    )
}
