import { Formik } from "formik";
import { FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, initValProductCat, productCategorySchema, useCreateProductCategory, useGetAllProductClassifications, useGetProductCategoryById, useUpdateProductCategoryById } from "@prime-fresh/admin/modules";
import { mapToValueLabelArray } from "@prime-fresh/shared/modules";

export function ProductCatForm() {
    const { id } = useParams<{ id: string }>();
    const productCatId = id ? id : "";
    const { data: cat, isLoading } = useGetProductCategoryById(productCatId);
    const category = cat !== null && cat?.data ? { name: cat.data.name, productClassification: cat.data.productClassification.id } : { name: '', productClassification: '' };
    const productCatVal = productCatId ? category : initValProductCat;

    const { data } = useGetAllProductClassifications();
    const classifications = data !== null && data?.data ? mapToValueLabelArray(data.data, 'id', 'name') : [];

    const { mutateAsync: postProductCategory, error: postError, data: postRes } = useCreateProductCategory();
    const { mutateAsync: patchProductCategory, error: patchError, data: patchRes } = useUpdateProductCategoryById(productCatId);

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        productCatId === "" ? (postProductCategory(values).then(() => {
            toast.success(postRes ? postRes.message : "Product category created successfully.")
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while creating product category.");
        }))
            : (patchProductCategory(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Product category updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
                }, 2000);
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
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Product Category" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Product Name"
                                    value={values.name}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <SelectInput
                                    isRequired={true}
                                    label="Product Classification"
                                    name="productClassification"
                                    options={classifications}
                                    value={values.productClassification}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={productCatId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={productCatId === "" ? postError : patchError}
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