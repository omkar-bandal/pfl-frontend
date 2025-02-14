import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { PostVendorSubcategory } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { ADMIN_ROUTES, useCreateVendorSubategory, useGetAllVendorCategories, useGetVendorSubcategoryById, useUpdateVendorSubcategoryById } from "@prime-fresh/admin/modules";
import { mapToValueLabelArray } from "@prime-fresh/shared/modules";

const initValVendorSubcat: PostVendorSubcategory = {
    name: '',
    category: '',
}

const vendorSubcatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Subategory name is required'),
    category: Yup.string().required('Please select one category'),
});

export function VendorSubcatForm() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const subcategoryId = id ? id : "";
    const { data: subcat, isLoading } = useGetVendorSubcategoryById(subcategoryId);
    const subcategory = subcat?.data ? { name: subcat?.data.name, category: subcat?.data.category.id } : { name: "", category: "" };
    const vendorSubcatVal = subcategoryId ? subcategory : initValVendorSubcat;

    const { mutateAsync: postVendorSubcategory, error: postError, data: postRes } = useCreateVendorSubategory();
    const { mutateAsync: patchVendorSubcategory, error: patchError, data: patchRes } = useUpdateVendorSubcategoryById(subcategoryId);

    const { data } = useGetAllVendorCategories();
    const vendorCat = data?.data ? mapToValueLabelArray(data?.data, 'id', 'name') : [];


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        subcategoryId === "" ?
            (postVendorSubcategory(values).then(() => {
                console.log("Response", postRes);
                toast.success(postRes ? postRes.message : "Vendor subcategory created successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating vendor subcategory")
            })) :
            (patchVendorSubcategory(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Vendor subcategory updated successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating vendor subcategory")
            }));
    }

    return (
        isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={subcategoryId || "create-vendor-subcategory"}
                enableReinitialize={true}
                initialValues={vendorSubcatVal}
                validationSchema={vendorSubcatValidationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Vendor Subcategory</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={subcategoryId === "" ? "Create" : "Update"}
                                    isError={subcategoryId === "" ? postError : patchError}
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
                            <Grid item xs={12}>
                                <SelectInput
                                    isRequired={true}
                                    label="Vendor Categories"
                                    name="category"
                                    options={vendorCat}
                                    value={values.category}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}