import { Formik } from "formik";
import {
    ADMIN_API_URL,
    useCreateProductClassification,
    useGetAProductClassification,
    useUpdateProductClassification
} from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, TextInput, toast } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, initValProductClass, productClassificationSchema } from "@prime-fresh/admin/modules";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";

export function ProductClassForm() {
    const { id } = useParams<{ id: string }>();
    const classificationId = id ? id : "";

    const { data, isLoading } = useGetAProductClassification(ADMIN_API_URL.GET_A_PRODUCT_CLASSIFICATION, classificationId);
    const productClassVal = data ? data : initValProductClass;

    const { mutateAsync: postProductClassification, error: postError, data: postRes } = useCreateProductClassification(ADMIN_API_URL.CREATE_PRODUCT_CLASSIFICATION);
    const { mutateAsync: patchProductClassification, error: patchError, data: patchRes } = useUpdateProductClassification(ADMIN_API_URL.UPDATE_PRODUCT_CLASSIFICATION, classificationId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name)
        classificationId === "" ?
            (postProductClassification(formData).then(() => {
                toast.success(postRes ? postRes.message : "Product Classification Created")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS);
                }, 2000);
            }).catch(() => {
                toast.error(`Error: ${postError?.message}`)
            })) : (patchProductClassification(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Product Classification Updated");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CLASS);
                }, 2000);
            }).catch(() => {
                toast.error(`Error: ${patchError?.message}`)
            }));
    }
    return (
        isLoading ?
            (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :

            <Formik
                key={classificationId || "create-product-classification"}
                enableReinitialize={true}
                initialValues={productClassVal}
                validationSchema={productClassificationSchema}
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
                                <Typography variant='h4'>Product Classification</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={classificationId === "" ? "Create" : "Update"}
                                    isError={classificationId === "" ? !postError : !patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    handleChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}