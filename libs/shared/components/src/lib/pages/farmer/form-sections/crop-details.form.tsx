import { Add, Close } from '@mui/icons-material';
import { Button, Grid2, IconButton, Typography } from '@mui/material'
import { PostFarmer } from '@prime-fresh/admin_api';
import { initValCrop } from '@prime-fresh/shared/modules';
import { TextInput } from '@prime-fresh/ui_shared';
import { FieldArray, useFormikContext } from 'formik';

export const CropDetails = () => {
    const { values, handleChange } = useFormikContext<PostFarmer>();
    return (
        <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
                <Typography
                    variant='caption'
                    component="div"
                    sx={{ width: '100%', borderBottom: '1px solid #BDBDBD', fontWeight: 600 }}>
                    Crop Details
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }} >
                <FieldArray name="crops">
                    {({ remove, push }) => (
                        <>
                            {values.crops.map((_, index) => (
                                <Grid2 container spacing={1} marginY={1} padding={1} sx={{ border: `1px solid #bdbdbd`, borderRadius: 2 }} key={index}>
                                    <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <Typography variant="caption" component="div">Product: {index + 1}</Typography>
                                        {values.crops.length > 1 && <IconButton color="error" size='small' onClick={() => remove(index)}>
                                            <Close fontSize='small' />
                                        </IconButton>}
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="text"
                                            isRequired={true}
                                            name={`crops.${index}.crop`}
                                            label="Crop Name"
                                            value={values.crops[index].crop}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="text"
                                            isRequired={false}
                                            name={`crops.${index}.variety`}
                                            label="Variety"
                                            value={values.crops[index].variety}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="number"
                                            isRequired={false}
                                            name={`crops.${index}.noOfPlants`}
                                            label="Number of plants "
                                            value={values.crops[index].noOfPlants}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="date"
                                            isRequired={true}
                                            name={`crops.${index}.pruningDate`}
                                            label="Pruning Date"
                                            value={values.crops[index].pruningDate}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="date"
                                            isRequired={true}
                                            name={`crops.${index}.expectedHarvestDate`}
                                            label="Expected Harvest Date"
                                            value={values.crops[index].expectedHarvestDate}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            type="number"
                                            isRequired={true}
                                            name={`crops.${index}.expectedQuantityInTonnes`}
                                            label="Expected Quantity (in mt)"
                                            value={values.crops[index].expectedQuantityInTonnes}
                                            handleChange={handleChange}
                                        />
                                    </Grid2>
                                </Grid2>
                            ))}
                            <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                <Button
                                    variant="text"
                                    size="small"
                                    startIcon={<Add />}
                                    sx={{ fontWeight: 700 }}
                                    onClick={() => push(initValCrop)}>
                                    Add More
                                </Button>
                            </Grid2>
                        </>
                    )}
                </FieldArray>
            </Grid2>
        </Grid2>
    )
}
