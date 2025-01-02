import { Formik } from "formik";
import { ADMIN_API_URL, useCreateProductCat, useGetAllProductClassification, useGetAProductCat, useUpdateProductCat } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, mapToValueLabelArray, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, initValProductCat, productCategorySchema } from "@prime-fresh/admin/modules";
import { appendFormData } from "@prime-fresh/shared/utils";

export function ProductCatForm() {
    const { id } = useParams<{ id: string }>();
    const productCatId = id ? id : "";
    const { data: cat, isLoading } = useGetAProductCat(ADMIN_API_URL.GET_A_PRODUCT_CATEGORY, productCatId);
    const category = cat ? { name: cat.name, productClassification: cat.productClassification.id } : { name: '', productClassification: '' };
    const productCatVal = productCatId ? category : initValProductCat;

    const { data: classifications } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);

    const { mutateAsync: postProductCategory, error: postError, data: postRes } = useCreateProductCat(ADMIN_API_URL.CREATE_PRODUCT_CATEGORY);
    const { mutateAsync: patchProductCategory, error: patchError, data: patchRes } = useUpdateProductCat(ADMIN_API_URL.UPDATE_PRODUCT_CATEGORY, productCatId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        productCatId === "" ? (postProductCategory(formData).then(() => {
            toast.success(postRes ? postRes.message : "Product category created successfully.")
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
            }, 2400);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while creating product category.");
        }))
            : (patchProductCategory(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Product category updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
                }, 2400);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating product category.");
            }))
    }
    return (
        isLoading ?
            (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :

            <Formik
                key={productCatId || "create-product-category"}
                enableReinitialize={true}
                initialValues={productCatVal}
                validationSchema={productCategorySchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Product Category</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={productCatId === "" ? "Create" : "Update"}
                                    isError={productCatId === "" ? !postError : !patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Product Name"
                                    value={values.name}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="Product Classification"
                                    name="productClassification"
                                    options={mapToValueLabelArray(classifications ? classifications : [{ id: '', name: '' }], 'id', 'name')}
                                    value={values.productClassification}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}