import { Grid2, Typography } from "@mui/material";
import { PostVendor } from "@prime-fresh/admin_api"
import { sharedData } from "@prime-fresh/shared/modules";
import { SelectInput, TextInput, FileUpload } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik"

export const VendorBankDetails = () => {
    const { values, handleChange } = useFormikContext<PostVendor>();
    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography variant='caption' component="div" sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>Beneficiary Name</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.beneficiaryFName"
                    label="First Name"
                    value={values.vendorBankDetails.beneficiaryFName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorBankDetails.beneficiaryMName"
                    label="Middle Name"
                    value={values.vendorBankDetails.beneficiaryMName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.beneficiaryLName"
                    label="Last Name"
                    value={values.vendorBankDetails.beneficiaryLName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.bankName"
                    label="Bank Name"
                    value={values.vendorBankDetails.bankName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={true}
                    label="Type of Account"
                    name="vendorBankDetails.typeOfAcc"
                    options={sharedData.accTypes}
                    value={values.vendorBankDetails.typeOfAcc}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.ifscCode"
                    label="IFSC Code"
                    value={values.vendorBankDetails.ifscCode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorBankDetails.swiftNo"
                    label="Swift Number (if applicable)"
                    value={values.vendorBankDetails.swiftNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography variant='caption' component="div" sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>Bank Address</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    isRequired={true}
                    name="vendorBankDetails.branchAddress.address1"
                    label="Address Line 1"
                    value={values.vendorBankDetails.branchAddress.address1}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    isRequired={false}
                    name="vendorBankDetails.branchAddress.address2"
                    label="Address Line 2"
                    value={values.vendorBankDetails.branchAddress.address2}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="vendorBankDetails.branchAddress.location"
                    label="Location"
                    value={values.vendorBankDetails.branchAddress.location}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="vendorBankDetails.branchAddress.city"
                    label="City"
                    value={values.vendorBankDetails.branchAddress.city}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="vendorBankDetails.branchAddress.state"
                    label="State"
                    value={values.vendorBankDetails.branchAddress.state}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="vendorBankDetails.branchAddress.pincode"
                    label="Pincode"
                    value={values.vendorBankDetails.branchAddress.pincode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    isRequired={false}
                    name="vendorBankDetails.invoiceCurrency"
                    label="Invoice Currency"
                    value={values.vendorBankDetails.invoiceCurrency}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
                <FileUpload
                    isRequired={false}
                    name="vendorBankDetails.cancelledChequeCopy"
                    label="Copy of Cancelled Cheque"
                />
            </Grid2>
        </Grid2>
    )
}