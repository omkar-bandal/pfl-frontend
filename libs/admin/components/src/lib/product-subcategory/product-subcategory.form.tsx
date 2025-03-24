/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik";
import { FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid2, LinearProgress } from "@mui/material";
import {
    ADMIN_ROUTES,
    initValProductSubcat,
    productSubcategorySchema,
    useCreateProductSubategory,
    useGetAllProductCategories,
    useGetProductSubcategoryById,
    useUpdateProductSubcategoryById
} from "@prime-fresh/admin/modules";
import { mapToValueLabelArray } from "@prime-fresh/shared/modules";

export function ProductSubcatForm() {
    const { id } = useParams<{ id: string }>();
    const subcategoryId = id ? id : '';

    const { data: subcat, isLoading } = useGetProductSubcategoryById(subcategoryId);
    const subcategory = subcat !== null && subcat?.data ? { name: subcat.data.name, category: subcat.data.category.id } : { name: "", category: "" }

    const productSubcatInitValue = subcategoryId ? subcategory : initValProductSubcat;

    const { data } = useGetAllProductCategories();
    const categories = data !== null && data?.data ? mapToValueLabelArray(data.data, 'id', 'name') : [];

    const { mutateAsync: postProductSubcategory, error: postError, data: postRes } = useCreateProductSubategory();
    const { mutateAsync: patchProductSubcategory, error: patchError, data: patchRes } = useUpdateProductSubcategoryById(subcategoryId);

    const navigate = useNavigate();

    const handleSubmit = (values: any) => {
        subcategoryId === '' ?
            (postProductSubcategory(values).then(() => {
                toast.success(postRes ? postRes.message : "Product subcategory created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT);
                }, 2400);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating product subcategory.");
            }))
            : (patchProductSubcategory(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Product subcategory updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_SUBCAT);
                }, 2400);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating product subcategory.");
            }));
    }

    return (
        isLoading ?
            (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :

            <Formik
                key={subcategoryId || "create-product-subcategory"}
                enableReinitialize={true}
                initialValues={productSubcatInitValue}
                validationSchema={productSubcategorySchema}
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
                                <PageTitle pagetitle="Product Subcategory" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={false}
                                    name="name"
                                    label="Product Name"
                                    value={values.name}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <SelectInput
                                    isRequired={true}
                                    label="Product Category"
                                    name="category"
                                    options={categories}
                                    value={values.category}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={subcategoryId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={subcategoryId === "" ? postError : patchError}
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