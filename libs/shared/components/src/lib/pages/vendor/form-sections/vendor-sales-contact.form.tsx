import { Grid2 } from "@mui/material";
import { PostVendor } from "@prime-fresh/admin_api"
import { TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik"

export const VendorSalesContact = () => {
    const { values, handleChange } = useFormikContext<PostVendor>();
    return (
        <Grid2 container spacing={2} padding={1}>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorSaleInfo.contactFName"
                    label="First Name"
                    value={values.vendorSaleInfo.contactFName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorSaleInfo.contactMName"
                    label="Middle Name"
                    value={values.vendorSaleInfo.contactMName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorSaleInfo.contactLName"
                    label="Last Name"
                    value={values.vendorSaleInfo.contactLName}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="vendorSaleInfo.directContactNumber"
                    label="Contact Number"
                    value={values.vendorSaleInfo.directContactNumber}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorSaleInfo.mobileNumber"
                    label="Contact Number (Alternate)"
                    value={values.vendorSaleInfo.mobileNumber}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="vendorSaleInfo.email"
                    label="Email"
                    value={values.vendorSaleInfo.email}
                    handleChange={handleChange}
                />
            </Grid2>
        </Grid2>
    )
}