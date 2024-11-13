import { FieldArray, Formik } from "formik";
import { initValProduct } from "./initValProduct";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Alertbar, ImageUpload, mapToValueLabelArray, SelectInput, TextInput } from '@prime-fresh/ui_shared';
import { Add, Close } from "@mui/icons-material";
import { ADMIN_API_URL, PostProduct, useCreateProduct, useGetAllProductClassification, useGetAllProductsCat, useGetAllProductSubCat, useGetAllUOMs } from "@prime-fresh/admin_api";
export const ProductForm = () => {
    const { data: classifications } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);
    const { data: categories } = useGetAllProductsCat(ADMIN_API_URL.GET_ALL_PRODUCT_CATEGORY);
    const { data: subcategories } = useGetAllProductSubCat(ADMIN_API_URL.GET_ALL_PRODUCT_SUBCATEGORY);
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const { mutateAsync: mutatePost, isPending, isError, error, data: Res } = useCreateProduct(ADMIN_API_URL.CREATE_PRODUCTS);

    const handleSubmit = (values: PostProduct) => {
        const formData = new FormData();
        (Object.keys(values) as Array<keyof PostProduct>).forEach((key) => {
            const value = values[key];
            if (key === "image" && value instanceof File) {
                formData.append(key, value);
            } else if (key === "count" && Array.isArray(value)) {
                value.forEach((count, index) => {
                    formData.append(`count${index}`, count);
                })
            } else if (typeof value !== "undefined" && value !== null) {
                formData.append(key, value.toString());
            }
        });
        mutatePost(formData);
    }
    return (
        <>
            <Alertbar open={isPending || isError} error={error} resMessage={Res} />
            <Formik
                initialValues={initValProduct}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Grid container columnSpacing={2} rowSpacing={2} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Product</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack direction="row" justifyContent="end" alignItems="center">
                                    <Button type="submit" variant="contained" color="success" size="large" sx={{ width: 150 }}>Create</Button>
                                    <Button type="reset" variant="contained" color="secondary" size="large" sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="name"
                                    label="Product Name"
                                    value={values.name}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="description"
                                    label="Description"
                                    value={values.description}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput isRequired={false} label="Classification" name="classification" options={mapToValueLabelArray(classifications ? classifications : [], 'id', 'name')} value={values.classification} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput isRequired={true} label="Category" name="category" options={mapToValueLabelArray(categories ? categories : [], 'id', 'name')} value={values.category} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput isRequired={true} label="Subcategory" name="subcategory" options={mapToValueLabelArray(subcategories ? subcategories : [], 'id', 'name')} value={values.subcategory} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12}>
                                <FieldArray name="count">
                                    {({ remove, push }) => (
                                        <Grid container spacing={1}>
                                            {values.count.map((_, index) => (
                                                <> <Grid item xs={11.5} md={1}>
                                                    <TextInput
                                                        type="text"
                                                        isRequired={true}
                                                        name={`count.${index}`}
                                                        label={`Count ${index + 1}`}
                                                        value={values.count[index]}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                    <Grid item xs={0.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                                        <IconButton
                                                            color="error"
                                                            onClick={() => remove(index)}
                                                        >
                                                            <Close />
                                                        </IconButton>
                                                    </Grid></>
                                            ))}
                                            <Grid
                                                item
                                                xs={12}
                                                md={2}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <Button
                                                    color="primary"
                                                    variant="text"
                                                    startIcon={<Add />}
                                                    onClick={() => push('')}
                                                >
                                                    Add Count
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </FieldArray>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="productOrigin"
                                    label="Product Origin"
                                    value={values.productOrigin}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <SelectInput isRequired={true} label="UOM" name="uom" options={mapToValueLabelArray(uoms ? uoms : [], 'id', 'unit')} value={values.uom} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="packingType"
                                    label="Packing Type"
                                    value={values.packingType}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="shelfLife"
                                    label="Shelf Life"
                                    value={values.shelfLife}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="storageTemp"
                                    label="Storage Temparature"
                                    value={values.storageTemp}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <ImageUpload isRequired={false} name="image" label="Product Image" />
                            </Grid>
                        </Grid>
                    </form>
                )
                }
            </Formik >
        </>
    )
}