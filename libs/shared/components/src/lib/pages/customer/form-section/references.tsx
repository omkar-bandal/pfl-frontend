import { Grid2 } from "@mui/material";
import { PostCustomer } from "@prime-fresh/admin_api";
import { SectionHeader, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";

export const CustomerReferences = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();

    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="References 1" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1FName" label="First Name" value={values.keyMobileNumbers.ref1FName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref1MName" label="Middle Name" value={values.keyMobileNumbers.ref1MName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1LName" label="Last Name" value={values.keyMobileNumbers.ref1LName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1ContactNo" label="Contact Number" value={values.keyMobileNumbers.ref1ContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref1Email" label="Email" value={values.keyMobileNumbers.ref1Email} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1Address.address1" label="Address Line 1" value={values.keyMobileNumbers.ref1Address.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref1Address.address2" label="Address Line 2" value={values.keyMobileNumbers.ref1Address.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1Address.location" label="Location" value={values.keyMobileNumbers.ref1Address.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1Address.city" label="City" value={values.keyMobileNumbers.ref1Address.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1Address.state" label="State" value={values.keyMobileNumbers.ref1Address.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="keyMobileNumbers.ref1Address.pincode" label="Pincode" value={values.keyMobileNumbers.ref1Address.pincode} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="References 2" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2FName" label="First Name" value={values.keyMobileNumbers.ref2FName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2MName" label="Middle Name" value={values.keyMobileNumbers.ref2MName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2LName" label="Last Name" value={values.keyMobileNumbers.ref2LName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2ContactNo" label="Contact Number" value={values.keyMobileNumbers.ref2ContactNo} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Email" label="Email" value={values.keyMobileNumbers.ref2Email} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.address1" label="Address Line 1" value={values.keyMobileNumbers.ref2Address.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.address2" label="Address Line 2" value={values.keyMobileNumbers.ref2Address.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.location" label="Location" value={values.keyMobileNumbers.ref2Address.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.city" label="City" value={values.keyMobileNumbers.ref2Address.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.state" label="State" value={values.keyMobileNumbers.ref2Address.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="keyMobileNumbers.ref2Address.pincode" label="Pincode" value={values.keyMobileNumbers.ref2Address.pincode} handleChange={handleChange} />
            </Grid2>
        </Grid2>
    )
}