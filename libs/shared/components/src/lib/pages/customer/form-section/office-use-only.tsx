import { Grid2 } from "@mui/material";
import { PostCustomer } from '@prime-fresh/admin_api';
import { useFormikContext } from 'formik';
import { RadioGroupInput, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { sharedData } from '@prime-fresh/shared/modules';

export const CustomerOfficeUseOnly = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();

    return (
        <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.proposerBDName"
                    label="Proposer / BD Name"
                    value={values.officeUseOnly.proposerBDName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.recommendedBy"
                    label="Recommended By"
                    value={values.officeUseOnly.recommendedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.approvedBy"
                    label="Approved By"
                    value={values.officeUseOnly.approvedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.pflCoordinator"
                    label="PFL Co-ordinator"
                    value={values.officeUseOnly.pflCoordinator}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.dispatchLocationPfl"
                    label="Dispatch Location - PFL"
                    value={values.officeUseOnly.dispatchLocationPfl}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.relationshipManager"
                    label="Relationship Manager"
                    value={values.officeUseOnly.relationshipManager}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="number"
                    isRequired={false}
                    name="officeUseOnly.avgBillingMonthly"
                    label="Expected Average Monthly Billing"
                    value={values.officeUseOnly.avgBillingMonthly}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="number"
                    isRequired={false}
                    name="officeUseOnly.volumeMonthly"
                    label="Volume In Tonnes Per Month"
                    value={values.officeUseOnly.volumeMonthly}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <RadioGroupInput
                    isRequired={false}
                    alignment="vertical"
                    name="officeUseOnly.customerVerification"
                    label="Customer Verification Completed?"
                    options={sharedData.fileYesOrNo}
                    value={values.officeUseOnly.customerVerification}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.verificationAgency"
                    label="Verification Agency Name"
                    value={values.officeUseOnly.verificationAgency}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="date"
                    isRequired={false}
                    name="officeUseOnly.validityPeriod"
                    label="Validity Period"
                    value={values.officeUseOnly.validityPeriod}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <RadioGroupInput
                    isRequired={false}
                    alignment="vertical"
                    name="officeUseOnly.dueDiligenceDone"
                    label="Due Diligence Done?"
                    options={sharedData.fileYesOrNo}
                    value={values.officeUseOnly.dueDiligenceDone}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                    isRequired={false}
                    name="paymentTerms.creditWorthinessDue"
                    label="Renewal of Credit Worthiness Due"
                    options={sharedData.creditWorthinessDue}
                    value={values.officeUseOnly.creditWorthinessDue}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.keyAccountPersonAssigned"
                    label="Key Account Person Assigned"
                    value={values.officeUseOnly.keyAccountPersonAssigned}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.sinceWhen"
                    label="Since When"
                    value={values.officeUseOnly.sinceWhen}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="date"
                    isRequired={false}
                    name="officeUseOnly.ledgerCreatedDate"
                    label="Ledger Created Date"
                    value={values.officeUseOnly.ledgerCreatedDate}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.ledgerCreatedBy"
                    label="Ledger Created By"
                    value={values.officeUseOnly.ledgerCreatedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeUseOnly.ledgerVerifiedApprovedBy"
                    label="Ledger verified & Approved By"
                    value={values.officeUseOnly.ledgerVerifiedApprovedBy}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <TextInput
                    type="text"
                    multiline
                    maxRows={4}
                    isRequired={false}
                    name="officeUseOnly.additionalNotes"
                    label="Any other description & brief of the customer requirement"
                    value={values.officeUseOnly.additionalNotes}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}
