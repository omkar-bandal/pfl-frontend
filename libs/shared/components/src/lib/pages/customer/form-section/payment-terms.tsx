import { Grid2 } from "@mui/material";
import { PostCustomer } from '@prime-fresh/admin_api';
import { useFormikContext } from 'formik';
import { FileUpload, RadioGroupInput, SectionHeader, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { sharedData } from '@prime-fresh/shared/modules';

export const CustomerPaymentTerms = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();

    return (
        <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={true}
                    name="paymentTerms.paymentMade"
                    label="Payment To Be Made"
                    options={sharedData.paymentToBeMade}
                    value={values.paymentTerms.paymentMade}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.otherPaymentMade"
                    label="Any Other"
                    value={values.paymentTerms.otherPaymentMade}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={true}
                    name="paymentTerms.paymentMode"
                    label="Payment Mode"
                    options={sharedData.paymentMode}
                    value={values.paymentTerms.paymentMode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.otherPaymentMode"
                    label="Any Other"
                    value={values.paymentTerms.otherPaymentMode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.marginDeposit"
                    label="Margin / Deposit Mutually Agreed"
                    value={values.paymentTerms.marginDeposit}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <RadioGroupInput
                    isRequired={true}
                    alignment="vertical"
                    name="paymentTerms.rtv"
                    label="RTV"
                    options={sharedData.fileYesOrNo}
                    value={values.paymentTerms.rtv}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <RadioGroupInput
                    isRequired={true}
                    alignment="vertical"
                    name="paymentTerms.agreementExecuted"
                    label="Agreement Executed"
                    options={sharedData.fileYesOrNo}
                    value={values.paymentTerms.agreementExecuted}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <SectionHeader sectionHeader="Security Deposit Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.securityDepoCheqNo"
                    label="Cheque Number"
                    value={values.paymentTerms.securityDepoCheqNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.securityDepoAmt"
                    label="Amount"
                    value={values.paymentTerms.securityDepoAmt}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FileUpload
                    isRequired={false}
                    name="paymentTerms.lc"
                    label="L/C" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FileUpload
                    isRequired={false}
                    name="paymentTerms.bg"
                    label="B/G" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <SectionHeader sectionHeader="Initial Exposure Limit" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.IELinAmt"
                    label="In Amount"
                    value={values.paymentTerms.IELinAmt}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.IELRecommendedBy"
                    label="Recommended By"
                    value={values.paymentTerms.IELRecommendedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="date"
                    isRequired={false}
                    name="paymentTerms.IELRecommendedDate"
                    label="Recommended Date"
                    value={values.paymentTerms.IELRecommendedDate}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <SectionHeader sectionHeader="Revision of Exposure Limit" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.RELinAmt"
                    label="In Amount"
                    value={values.paymentTerms.RELinAmt}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="paymentTerms.RELRecommendedBy"
                    label="Recommended By"
                    value={values.paymentTerms.RELRecommendedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="date"
                    isRequired={false}
                    name="paymentTerms.RELRecommendedDate"
                    label="Recommended Date"
                    value={values.paymentTerms.RELRecommendedDate}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <FileUpload
                    isRequired={false}
                    name="paymentTerms.docEvidenceCopy"
                    label="Documentary Evidence" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <TextInput
                    type="text"
                    multiline
                    maxRows={2}
                    isRequired={false}
                    name="paymentTerms.reason"
                    label="Reason"
                    value={values.paymentTerms.reason}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}
