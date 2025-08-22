import { Grid2 } from "@mui/material";
import { PostCustomer } from "@prime-fresh/admin_api"
import { sharedData } from "@prime-fresh/shared/modules";
import { SelectInput, TextInput, FileUpload, SectionHeader, RadioGroupInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik"

export const CustomerBankDetails = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();
    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Bank Account Holder Name" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.bankAccHolderFName"
                    label="First Name"
                    value={values.bankDetails.bankAccHolderFName || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="bankDetails.bankAccHolderMName"
                    label="Middle Name"
                    value={values.bankDetails.bankAccHolderMName || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.bankAccHolderLName"
                    label="Last Name"
                    value={values.bankDetails.bankAccHolderLName || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.bankName"
                    label="Bank Name"
                    value={values.bankDetails.bankName || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.bankBranch"
                    label="Branch Name"
                    value={values.bankDetails.bankBranch || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="bankDetails.bankAccNo"
                    label="Account Number"
                    value={values.bankDetails.bankAccNo || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.ifscCode"
                    label="IFSC Code"
                    value={values.bankDetails.ifscCode || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={true}
                    label="Type of Account"
                    name="bankDetails.accType"
                    options={sharedData.accTypes}
                    value={values.bankDetails.accType || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="bankDetails.otherAccType"
                    label="Any Other Account Type"
                    value={values.bankDetails.otherAccType || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Address of Bank & Branch" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    isRequired={true}
                    name="bankDetails.bankAddress.address1"
                    label="Address Line 1"
                    value={values.bankDetails.bankAddress?.address1 || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    isRequired={false}
                    name="bankDetails.bankAddress.address2"
                    label="Address Line 2"
                    value={values.bankDetails.bankAddress?.address2 || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="bankDetails.bankAddress.location"
                    label="Location"
                    value={values.bankDetails.bankAddress?.location || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="bankDetails.bankAddress.city"
                    label="City"
                    value={values.bankDetails.bankAddress?.city || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="bankDetails.bankAddress.state"
                    label="State"
                    value={values.bankDetails.bankAddress?.state || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    isRequired={true}
                    name="bankDetails.bankAddress.pincode"
                    label="Pincode"
                    value={values.bankDetails.bankAddress.pincode || ''}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <RadioGroupInput
                    isRequired={true}
                    alignment="vertical"
                    name="bankDetails.ifCancelledCheque"
                    label="Cancel Cheque available?"
                    options={sharedData.fileYesOrNo}
                    value={values.bankDetails.ifCancelledCheque}
                    handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FileUpload
                    isRequired={false}
                    name="cancelledChequeCopy"
                    label="Copy of cancelled cheque"
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    isRequired={false}
                    name="bankDetails.notCancelledChequeReason"
                    label="If cancelled cheque not attached please specify reason"
                    value={values.bankDetails.notCancelledChequeReason || ''}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}