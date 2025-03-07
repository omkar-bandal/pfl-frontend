import React from "react";
import * as Yup from 'yup';
import { Formik } from "formik";
import { PostVendorCategory } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, useCreateVendorCategory, useGetVendorCategoryById, useUpdateVendorCategoryById} from "@prime-fresh/admin/modules";

const initValVendorCat: PostVendorCategory = {
    name: '',
}

const vendorCatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Category name is required'),
});

export function VendorCatForm() {
    const { id } = useParams<{ id: string }>();
    const categoryId = id ? id : "";
    const { data: cat, isLoading } = useGetVendorCategoryById(categoryId);
    const category = cat?.data ? cat.data : initValVendorCat;
    const vendorCatVal = categoryId? category : initValVendorCat;

    const navigate = useNavigate();

    const { mutateAsync: postVendorCategory, error: postError, data: postRes } = useCreateVendorCategory();
    const { mutateAsync: patchVendorCategory, error: patchError, data: patchRes } = useUpdateVendorCategoryById(categoryId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        categoryId === "" ?
            (postVendorCategory(values).then(() => {
                toast.success(postRes ? postRes.message : "Vendor category created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_CAT);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating vendor category.");
            }))
            : (patchVendorCategory(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Vendor category updated successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_CAT);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating vendor category.");
            }));
    }
    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={categoryId || "create-vendor-category"}
                enableReinitialize={true}
                initialValues={vendorCatVal}
                validationSchema={vendorCatValidationSchema}
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
                                <Typography variant='h4'>Vendor Category</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={categoryId === "" ? "Create" : "Update"}
                                    isError={categoryId === "" ? postError : patchError}
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