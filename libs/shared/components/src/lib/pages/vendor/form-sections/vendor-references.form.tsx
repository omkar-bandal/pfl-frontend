import { Grid2, Typography } from "@mui/material";
import { PostVendor } from "@prime-fresh/admin_api";
import { TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";

export const VendorReferences = () => {
    const { values, handleChange } = useFormikContext<PostVendor>();

    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography variant='caption' component="div" sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>Vendor Reference 1</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="ref1FName" label="First Name" value={values.ref1FName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref1MName" label="Middle Name" value={values.ref1MName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="ref1LName" label="Last Name" value={values.ref1LName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="ref1PrimaryCNumb" label="Primary Contact Number" value={values.ref1PrimaryCNumb} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref1AltrCNumb" label="Alternate Contact Number" value={values.ref1AltrCNumb} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref1Email" label="Email" value={values.ref1Email} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={true} name="ref1Address.address1" label="Address Line 1" value={values.ref1Address.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="ref1Address.address2" label="Address Line 2" value={values.ref1Address.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="ref1Address.location" label="Location" value={values.ref1Address.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="ref1Address.city" label="City" value={values.ref1Address.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="ref1Address.state" label="State" value={values.ref1Address.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={true} name="ref1Address.pincode" label="Pincode" value={values.ref1Address.pincode} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography variant='caption' component="div" sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>Vendor Reference 2</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2FName" label="First Name" value={values.ref2FName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2MName" label="Middle Name" value={values.ref2MName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2LName" label="Last Name" value={values.ref2LName} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2PrimaryCNumb" label="Primary Contact Number" value={values.ref2PrimaryCNumb} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2AltrCNumb" label="Alternate Contact Number" value={values.ref2AltrCNumb} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={false} name="ref2Email" label="Email" value={values.ref2Email} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="ref2Address.address1" label="Address Line 1" value={values.ref2Address.address1} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput isRequired={false} name="ref2Address.address2" label="Address Line 2" value={values.ref2Address.address2} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="ref2Address.location" label="Location" value={values.ref2Address.location} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="ref2Address.city" label="City" value={values.ref2Address.city} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="ref2Address.state" label="State" value={values.ref2Address.state} handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput isRequired={false} name="ref2Address.pincode" label="Pincode" value={values.ref2Address.pincode} handleChange={handleChange} />
            </Grid2>
        </Grid2>
    )
}