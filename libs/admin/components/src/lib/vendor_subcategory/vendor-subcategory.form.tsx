import { ADMIN_API_URL, GetVendorCategory, PostVendorSubcategory, useCreateVendorSubCat, useGetAllVendorCat, useGetAVendorSubCat, useUpdateVendorSubCat } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import * as Yup from 'yup';
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

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
    const { data: subcat, isLoading } = useGetAVendorSubCat(ADMIN_API_URL.GET_A_VENDOR_SUBCAT, subcategoryId);
    const subcategory = subcat? {name: subcat.name , category: subcat?.category.id} : {name: "", category: ""};
    const vendorSubcatVal = subcategoryId? subcategory : initValVendorSubcat;

    const { mutateAsync: postVendorSubcategory, error: postError, data: postRes } = useCreateVendorSubCat(ADMIN_API_URL.CREATE_VENDOR_SUBCAT);
    const { mutateAsync: patchVendorSubcategory, error: patchError, data: patchRes } = useUpdateVendorSubCat(ADMIN_API_URL.UPDATE_VENDOR_SUBCAT, subcategoryId);

    const { data } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCat = data ? data : [];
    console.log(vendorCat);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log("Form Data:", values);
        const formData = new FormData();
        appendFormData(formData, values);
        subcategoryId === "" ?
            (postVendorSubcategory(formData).then(() => {
                console.log("Response", postRes);
                toast.success(postRes?.message)
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT);
                }, 2400);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating vendor subcategory")
            })) :
            (patchVendorSubcategory(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Vendor subcategory updated successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_SUBCAT);
                }, 2400);
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
                                    isError={subcategoryId === "" ? !postError : !patchError}
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
                                    options={mapToValueLabelArray<GetVendorCategory>(vendorCat, 'id', 'name')}
                                    value={values.category}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}