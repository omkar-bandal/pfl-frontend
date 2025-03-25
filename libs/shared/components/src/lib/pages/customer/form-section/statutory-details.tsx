import { Grid2 } from "@mui/material";
import { PostCustomer } from "@prime-fresh/admin_api";
import { sharedData } from "@prime-fresh/shared/modules";
import { FileUpload, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";

export const CustomerStatutoryDetails = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();
    return (
        <Grid2 container spacing={1}>
             <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.panNo"
                    label="PAN Number"
                    value={values.statutoryDetails.panNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FileUpload
                    isRequired={false}
                    name="statutoryDetails.panCopy"
                    label="Copy of PAN Card" />
            </Grid2>
             <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.aadharNo"
                    label="Aadhar  Number"
                    value={values.statutoryDetails.aadharNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <FileUpload
                    isRequired={false}
                    name="statutoryDetails.aadharCopy"
                    label="Copy of Aadhar Card" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.gstn"
                    label="GST Registration Number"
                    value={values.statutoryDetails.gstn}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <FileUpload
                    isRequired={false}
                    name="statutoryDetails.regiCertificateCopy"
                    label="Copy of Registration certificate" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.cinNo"
                    label="CIN Number"
                    value={values.statutoryDetails.cinNo}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <FileUpload
                    isRequired={false}
                    name="statutoryDetails.incorpoCertificateCopy"
                    label="Copy of incorporation certificate duly signed by the director if it is a corporate client" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
                <FileUpload
                    isRequired={false}
                    name="statutoryDetails.billBookCopy"
                    label="Copy of Bill Book or Bilty attached" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    name="statutoryDetails.certificationsDetails"
                    label="Details of certifications"
                    options={sharedData.certificationDetails}
                    value={values.statutoryDetails.certificationsDetails}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 9 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.otherCertifications"
                    label="Any other certifications"
                    value={values.statutoryDetails.otherCertifications}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    name="statutoryDetails.corpRegiDetails"
                    label="Corporate Registration details"
                    options={sharedData.corporateRegistrationDetails}
                    value={values.statutoryDetails.corpRegiDetails}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 9 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="statutoryDetails.otherCorpRegiDetails"
                    label="Details of other registrations"
                    value={values.statutoryDetails.otherCorpRegiDetails}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}