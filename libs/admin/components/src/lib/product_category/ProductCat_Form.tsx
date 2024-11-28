import { ADMIN_API_URL, useCreateProductCat, useGetAllProductClassification, useGetAProductCat, useUpdateProductCat } from "@prime-fresh/admin_api";
import { mapToValueLabelArray, Notification, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, formContainerState, initValProductCat, productCategorySchema } from "@prime-fresh/admin/modules";

export function ProductCatForm() {
    const { id } = useParams<{ id: string }>();
    const productCatId = id ? id : "";
    console.log(productCatId);
    const { data: cat, isLoading } = useGetAProductCat(ADMIN_API_URL.GET_A_PRODUCT_CATEGORY, productCatId);
    const category = cat ? cat : initValProductCat;
    const productCatVal = category ? category : initValProductCat;

    const { data: classifications } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);

    const { mutateAsync: postProductCategory, error: postError, data: postRes } = useCreateProductCat(ADMIN_API_URL.CREATE_PRODUCT_CATEGORY);
    const { mutateAsync: patchProductCategory, error: patchError, data: patchRes } = useUpdateProductCat(ADMIN_API_URL.UPDATE_PRODUCT_CATEGORY, productCatId);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { openFor } = useAppSelector(formContainerState);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("productClassification", values.productClassification);
        productCatId === "" ? (postProductCategory(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Product category created successfully !!!" }));
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
            }, 2000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
        }))
            : (patchProductCategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "Product category updated successfully !!!" }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }))
    }
    return (
        <>
            {isLoading ?
                (
                    <Box sx={{ flex: 1 }}>
                        <LinearProgress />
                    </Box>
                ) :
                (<Formik
                    enableReinitialize={true}
                    initialValues={productCatVal}
                    validationSchema={productCategorySchema}
                    onSubmit={(values) => {
                        console.log(values);
                        handleSubmit(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, touched, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h4'>Create Product Category</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack direction="row" justifyContent="end" alignItems="center">
                                        <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>{openFor === "create" ? `Create` : `Update`}</Button>
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
                                        options={mapToValueLabelArray(classifications ? classifications : [{ id: '', name: '' }], 'id', 'name')}
                                        value={typeof values.productClassification === "object" && values.productClassification !== null ? values.productClassification.id : values.productClassification}
                                        handleChange={handleChange}
                                        touched={touched}
                                        errors={errors}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>)}
            <Notification />
        </>
    )
}