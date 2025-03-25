import { PostCustomer } from '@prime-fresh/admin_api';
import { FieldArray, useFormikContext } from 'formik';
import { Button, Grid2, IconButton, Typography } from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import { TextInput } from '@prime-fresh/ui_shared';
import { initProductSpecification } from '@prime-fresh/shared/modules';

export const CustomerProductSpecification = () => {
    const { values, handleChange } = useFormikContext<PostCustomer>();
    return (
        <Grid2 container spacing={1}>
            <FieldArray name="productSpecification">
                {({ push, remove }) => (
                    <Grid2 container spacing={1} size={{ xs: 12 }}>
                        {values.productSpecification.map((_, index) => (
                            <Grid2
                                key={index}
                                container
                                spacing={1}
                                size={{ xs: 12 }}
                                padding={1}
                                sx={{ border: `1px solid #CCC`, borderRadius: 2 }} >
                                <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="caption" sx={{fontWeight: 500}}>Product : {index + 1}</Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                    {values.productSpecification.length > 1 &&
                                        <IconButton color='error' size='small'
                                            onClick={() => remove(index)}>
                                            <Close fontSize='small' />
                                        </IconButton>}
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput
                                        isRequired={false}
                                        name={`productSpecification.${index}.articleName`}
                                        label="Article Name"
                                        value={values.productSpecification[index].articleName}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput
                                        isRequired={false}
                                        name={`productSpecification.${index}.specifications`}
                                        label="specifications"
                                        value={values.productSpecification[index].specifications}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput
                                        isRequired={false}
                                        name={`productSpecification.${index}.parameters`}
                                        label="Parameters"
                                        value={values.productSpecification[index].parameters}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <TextInput
                                        isRequired={false}
                                        name={`productSpecification.${index}.packingMaterialSpec`}
                                        label="Packing Material Specification"
                                        value={values.productSpecification[index].packingMaterialSpec}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <TextInput
                                        isRequired={false}
                                        name={`productSpecification.${index}.rejectionCriteria`}
                                        label="Rejection Criteria"
                                        value={values.productSpecification[index].rejectionCriteria}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <TextInput
                                        isRequired={false}
                                        multiline
                                        maxRows={2}
                                        name={`productSpecification.${index}.comment`}
                                        label="Comment"
                                        value={values.productSpecification[index].comment}
                                        handleChange={handleChange} />
                                </Grid2>
                            </Grid2>
                        ))}
                        <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Button
                                startIcon={<Add />}
                                variant="text"
                                color='success'
                                size='small'
                                sx={{ width: 150, fontWeight: 700 }}
                                onClick={() => push(initProductSpecification)}>
                                Add More
                            </Button>
                        </Grid2>
                    </Grid2>
                )}
            </FieldArray>
        </Grid2>
    )
}
