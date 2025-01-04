import { Grid } from "@mui/material";
import { PostVendor } from "@prime-fresh/admin_api";
import { FileUpload, MultipleTextInput, RadioGroupInput, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";
import { arrayConstants } from "../array.constants";

export const VendorOtherDetails = () => {
    const { values, handleChange, setFieldValue } = useFormikContext<PostVendor>();
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <MultipleTextInput
                    isRequired={false}
                    name="listOfAllProducts"
                    label="List Of All Products"
                    values={values.listOfAllProducts}
                    setFieldValue={setFieldValue} />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="mainProduct"
                    label="Main Products To Be Supplied"
                    value={values.mainProduct}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="dispatchCenter"
                    label="Dispatch Center"
                    value={values.dispatchCenter}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="warehouseLocations"
                    label="Warehouse Locations"
                    value={values.warehouseLocations}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="packingCenterLocation"
                    label="Packing Center Location"
                    value={values.packingCenterLocation}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={2}>
                <RadioGroupInput isRequired={false} name="ifGstnCopy" label="GSTN available?" value={values.ifGstnCopy} options={arrayConstants.fileYesOrNo} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="gstn"
                    label="GSTN (if available)"
                    value={values.gstn}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <FileUpload isRequired={false} name="gstnCopy" label="GST Regn. Cert. Copy (if available)" />
            </Grid>
            <Grid item xs={12} md={2}>
                <RadioGroupInput isRequired={false} name="ifPanCardCopy" label="PAN card available?" value={values.ifPanCardCopy} options={arrayConstants.fileYesOrNo} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="panNo"
                    label="PAN Number (if available)"
                    value={values.panNo}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <FileUpload isRequired={false} name="panCardCopy" label="PAN Card Copy (if available)" />
            </Grid>
            <Grid item xs={12} md={2}>
                <RadioGroupInput isRequired={false} name="ifMsmeCopy" label="MSME Cert. available?" value={values.ifMsmeCopy} options={arrayConstants.fileYesOrNo} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="msmeNo"
                    label="MSME Number (if available)"
                    value={values.msmeNo}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <FileUpload isRequired={false} name="msmeCopy" label="UDYAM (MSME) Card Copy (if available)" />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="tradeLicenseNumber"
                    label="Trade License Number"
                    value={values.tradeLicenseNumber}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <SelectInput
                    isRequired={false}
                    name="proposedPaymentTerms"
                    label="Proposed Payment Terms"
                    options={arrayConstants.proposedPaymentTerms}
                    value={values.proposedPaymentTerms}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <SelectInput
                    isRequired={false}
                    name="creditTerms"
                    label="Credit Terms"
                    options={arrayConstants.creditTerms}
                    value={values.creditTerms}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextInput
                    type="text"
                    isRequired={false}
                    multiline
                    maxRows={4}
                    name="anyDetailsTeamAndInfra"
                    label="Any Other Details Regarding Team And Infrastructure"
                    value={values.anyDetailsTeamAndInfra}
                    handleChange={handleChange}
                />
            </Grid>
        </Grid>
    )
}