import { ADMIN_API_URL, GetVendorCategory, PostVendorSubcategory, useCreateVendorSubCat, useGetAllVendorCat, useGetAVendorSubCat, useUpdateVendorSubCat } from "@prime-fresh/admin_api";
import { Notification, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';
import { mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, formContainerState } from "@prime-fresh/admin/modules";

const initValVendorSubcat: PostVendorSubcategory = {
    name: '',
    category: '',
}

const vendorSubcatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Subategory name is required'),
    category: Yup.string().required('Please select one category'),
});

export function VendorSubcatForm() {
    const { id } = useParams<{ id: string }>();
    const subcategoryId = id ? id : "";
    const { data: subcat, isLoading } = useGetAVendorSubCat(ADMIN_API_URL.GET_A_VENDOR_SUBCAT, subcategoryId);
    const subcategory = subcat ? subcat : { name: '', category: '' };
    const vendorSubcatVal = subcategory ? subcategory : initValVendorSubcat;

    const { mutateAsync: postVendorSubcategory, error: postError, data: postRes } = useCreateVendorSubCat(ADMIN_API_URL.CREATE_VENDOR_SUBCAT);
    const { mutateAsync: patchVendorSubcategory, error: patchError, data: patchRes } = useUpdateVendorSubCat(ADMIN_API_URL.UPDATE_VENDOR_SUBCAT, subcategoryId);

    const { data } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCat = data ? data : [];
    console.log(vendorCat);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { openFor } = useAppSelector(formContainerState);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        subcategoryId === "" ?
            (postVendorSubcategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Vendor subcategory created successfully." }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
            })) :
            (patchVendorSubcategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "Vendor subcategory updated successfully." }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_PRODUCT_CAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }));
    }

    return (
        <>
            {isLoading ?
                (<Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>) :
                (<Formik
                    key={subcategoryId || "createVendorSubcat"}
                    enableReinitialize={true}
                    initialValues={vendorSubcatVal}
                    validationSchema={vendorSubcatValidationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                        handleSubmit(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, touched, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h4'>{openFor === "create" ? "Create" : "Update"} Vendor Subcategory</Typography>
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
                                        isRequired={true}
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
                                        label="Vendor Categories"
                                        name="category"
                                        options={mapToValueLabelArray<GetVendorCategory>(vendorCat, 'id', 'name')}
                                        value={typeof values.category === "string" ? values.category : values.category.id}
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