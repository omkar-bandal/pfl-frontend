import { Grid2, InputAdornment, Typography } from "@mui/material";
import { PostFarmer } from "@prime-fresh/admin_api";
import { sharedData } from "@prime-fresh/shared/modules";
import { SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";

export const FarmDetails = () => {
    const { values, handleChange } = useFormikContext<PostFarmer>();

    return (
        <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography
                    variant='caption'
                    component="div"
                    sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>
                    Farm Address
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="farmAddress.address1"
                    label="Address Line 1"
                    value={values.farmAddress.address1}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="farmAddress.address2"
                    label="Address Line 2"
                    value={values.farmAddress.address2}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="farmAddress.location"
                    label="Location"
                    value={values.farmAddress.location}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="farmAddress.city"
                    label="City"
                    value={values.farmAddress.city}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="farmAddress.state"
                    label="State"
                    value={values.farmAddress.state}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="farmAddress.pincode"
                    label="Pincode"
                    value={values.farmAddress.pincode}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    name="landHoldingStatus"
                    label="Land Holding Status"
                    value={values.landHoldingStatus}
                    options={sharedData.landHoldingStatus}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                    isRequired={false}
                    name="landStatus"
                    label="Land Status"
                    value={values.landStatus}
                    options={sharedData.landStatus}
                    handleChange={handleChange}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="number"
                    isRequired={false}
                    name="totalLandArea"
                    label="Total Land Area (in Acres)"
                    value={values.totalLandArea}
                    handleChange={handleChange}
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end">Acres</InputAdornment>,
                        },
                    }}
                />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                    type="number"
                    isRequired={false}
                    name="cultivationArea"
                    label="Cultivation Area (in Acres)"
                    value={values.cultivationArea}
                    handleChange={handleChange}
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end">Acres</InputAdornment>,
                        },
                    }}
                />
            </Grid2>
        </Grid2>
    )
}