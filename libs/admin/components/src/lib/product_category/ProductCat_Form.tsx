import { ADMIN_API_URL, PostProductCategory, useCreateProductCat, useGetAllProductClassification } from "@prime-fresh/admin_api";
import { Alertbar, mapToValueLabelArray, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Button, Grid, Stack, Typography } from "@mui/material";

const initValProductCat: PostProductCategory = {
    name: '',
    productClassification: '',
}

export function ProductCatForm() {

    const { data: classifications } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);

    const { mutateAsync: postProductCategory, isPending, isError, error, data: Res } = useCreateProductCat(ADMIN_API_URL.CREATE_PRODUCT_CATEGORY);
    // const { mutateAsync: patchProductCategory } = useUpdateProductCat(ADMIN_API_URL.UPDATE_PRODUCT_CATEGORY, categoryId);

    const handleSubmit = (values: PostProductCategory) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("productClassification", values.productClassification);
        postProductCategory(formData);
    }

    return (
        <>
            <Alertbar open={isPending || isError} error={error} resMessage={Res} />
            <Formik
                initialValues={initValProductCat}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Create Product Classification</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack direction="row" justifyContent="end" alignItems="center">
                                    <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                                    <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={false}
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    handleChange={handleChange}
                                    touched={touched}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="Product Classification"
                                    name="productClassification"
                                    options={mapToValueLabelArray(classifications? classifications : [{id: '', name: ''}], 'id', 'name')}
                                    value={values.productClassification}
                                    handleChange={handleChange}
                                    touched={touched}
                                    errors={errors}
                                />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    )
}