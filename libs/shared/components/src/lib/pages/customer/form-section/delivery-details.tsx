import { PostCustomer } from '@prime-fresh/admin_api';
import { useFormikContext } from 'formik';
import { Grid2 } from '@mui/material';
import { FileUpload, SectionHeader, TextInput } from '@prime-fresh/ui_shared';

export const CustomerDeliveryDetails = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();
    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Delivery Address" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="deliveryDetails.deliveryAddress.address1" label="Address Line 1" value={values.deliveryDetails.deliveryAddress.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="deliveryDetails.deliveryAddress.address2" label="Address Line 2" value={values.deliveryDetails.deliveryAddress.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.deliveryAddress.location" label="Location" value={values.deliveryDetails.deliveryAddress.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.deliveryAddress.city" label="City" value={values.deliveryDetails.deliveryAddress.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.deliveryAddress.state" label="State" value={values.deliveryDetails.deliveryAddress.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.deliveryAddress.pincode" label="Pincode" value={values.deliveryDetails.deliveryAddress.pincode} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Receiving Person's Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.receivingPersonFName" label="First Name" value={values.deliveryDetails.receivingPersonFName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="deliveryDetails.receivingPersonMName" label="Middle Name" value={values.deliveryDetails.receivingPersonMName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="deliveryDetails.receivingPersonLName" label="Last Name" value={values.deliveryDetails.receivingPersonLName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="deliveryDetails.deliveryTime" label="Delivery Time" type="time" value={values.deliveryDetails.deliveryTime} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput isRequired={true} name="deliveryDetails.primaryContactNo" label="Contact Number" value={values.deliveryDetails.primaryContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput isRequired={true} name="deliveryDetails.emailPrimary" label="Email (Primary)" value={values.deliveryDetails.emailPrimary} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2.5 }}>
                <TextInput isRequired={false} name="deliveryDetails.secondaryContactNo" label="Alternate Contact Number" value={values.deliveryDetails.secondaryContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3.5 }}>
                <TextInput isRequired={false} name="deliveryDetails.emailSecondary" label="Email (Alternate)" value={values.deliveryDetails.emailSecondary} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <FileUpload
                    isRequired={false}
                    name="deliveryDetails.deliveryAddressProofCopy"
                    label="Copy of proof of delivery address" />
            </Grid2>
        </Grid2>
    )
}
