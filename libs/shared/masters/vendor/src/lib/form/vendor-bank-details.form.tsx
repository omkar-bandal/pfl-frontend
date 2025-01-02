import { Box, Grid, Typography } from "@mui/material";
import { PostVendor } from "@prime-fresh/admin_api"
import { SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik"
import { arrayConstants } from "./array.constants";

export const VendorBankDetails = () => {
    const { values, handleChange } = useFormikContext<PostVendor>();
    return (
        <Grid container spacing={2} padding={1}>
            <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Beneficiary Name</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.beneficiaryFName"
                    label="First Name"
                    value={values.vendorBankDetails.beneficiaryFName}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorBankDetails.beneficiaryMName"
                    label="Middle Name"
                    value={values.vendorBankDetails.beneficiaryMName}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.beneficiaryLName"
                    label="Last Name"
                    value={values.vendorBankDetails.beneficiaryLName}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.bankName"
                    label="Bank Name"
                    value={values.vendorBankDetails.bankName}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectInput
                    isRequired={true}
                    label="Type of Account"
                    name="vendorBankDetails.typeOfAcc"
                    options={arrayConstants.accTypes}
                    value={values.vendorBankDetails.typeOfAcc}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorBankDetails.ifscCode"
                    label="IFSC Code"
                    value={values.vendorBankDetails.ifscCode}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorBankDetails.swiftNo"
                    label="Swift Number (if applicable)"
                    value={values.vendorBankDetails.swiftNo}
                    handleChange={handleChange}
                />
            </Grid>
        </Grid>
    )
}