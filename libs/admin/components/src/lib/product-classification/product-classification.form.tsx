/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { handleFormKeyDown } from "@prime-fresh/shared/modules";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { FormButtonGroup, PageTitle, TextInput, toast } from "@prime-fresh/shared/components";
import { adminRoutes, initValProductClass, productClassificationSchema, useGetProductClassificationById, useCreateProductClassification, useUpdateProductClassification } from "@prime-fresh/admin/modules";

export const ProductClassForm = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const classificationId = id ? id : "";

    const { data, isLoading } = useGetProductClassificationById(classificationId);
    const productClassVal = data !== null && data?.data ? data.data : initValProductClass;

    const { mutateAsync: postProductClassification, error: postError, data: postRes } = useCreateProductClassification();
    const { mutateAsync: patchProductClassification, error: patchError, data: patchRes } = useUpdateProductClassification(classificationId);


    const handleSubmit = (values: any) => {
        classificationId === "" ?
            (postProductClassification(values).then(() => {
                toast.success(postRes ? postRes.message : "Product Classification Created")
                setTimeout(() => {
                    navigate(adminRoutes.VIEW_ALL_PRODUCT_CLASS);
                }, 2000);
            }).catch(() => {
                toast.error(`Error: ${postError?.message}`)
            })) : (patchProductClassification(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Product Classification Updated");
                setTimeout(() => {
                    navigate(adminRoutes.VIEW_ALL_PRODUCT_CLASS);
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
                    <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Product Classification" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Name"
                                    value={values.name}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={classificationId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={classificationId === "" ? postError : patchError}
                                    resetLabel='Reset'
                                    onReset={handleReset}
                                />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )
}