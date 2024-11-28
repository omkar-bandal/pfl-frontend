import React from "react";
import { ADMIN_API_URL, PostVendorCategory, useCreateVendorCat, useGetAVendorCat, useUpdateVendorCat } from "@prime-fresh/admin_api";
import { Notification, TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, formContainerState} from "@prime-fresh/admin/modules";

const initValVendorCat: PostVendorCategory = {
    name: '',
}

const vendorCatValidationSchema = Yup.object().shape({
    name: Yup.string().required('Category name is required'),
});

export function VendorCatForm() {
    const { id } = useParams<{ id: string }>();
    const categoryId = id ? id : "";
    const { data: cat, isLoading } = useGetAVendorCat(ADMIN_API_URL.GET_A_VENDOR_CAT, categoryId);
    const category = cat ? cat : null;
    const { openFor } = useAppSelector(formContainerState);
    const vendorCatVal = openFor === "update" && category !== null ? category : initValVendorCat;
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mutateAsync: postVendorCategory, error: postError, data: postRes } = useCreateVendorCat(ADMIN_API_URL.CREATE_VENDOR_CAT);
    const { mutateAsync: patchVendorCategory, error: patchError, data: patchRes } = useUpdateVendorCat(ADMIN_API_URL.UPDATE_VENDOR_CAT, categoryId);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        console.log(values);
        const formData = new FormData();
        formData.append("name", values.name);
        categoryId === "" ?
            (postVendorCategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: postRes ? postRes.message : "Vendor category created successfully." }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_CAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + postError?.message }));
            }))
            : (patchVendorCategory(formData).then(() => {
                dispatch(showNotification({ severity: 'success', message: patchRes ? patchRes.message : "Vendor category updated successfully." }));
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_VENDORS_CAT);
                }, 2000);
            }).catch(() => {
                dispatch(showNotification({ severity: 'error', message: 'Error: ' + patchError?.message }));
            }));
    }
    return (
        <>
            {isLoading ? (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :
                (
                    <Formik
                        key={categoryId || "createVendorCat"}
                        enableReinitialize = {true}
                        initialValues={vendorCatVal}
                        validationSchema={vendorCatValidationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            handleSubmit(values);
                        }}
                    >
                        {({ values, handleChange, handleSubmit, touched, errors }) => (
                            <form onSubmit={handleSubmit}>
                                <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant='h4'>{openFor === "create" ? "Create" : "Update"} Vendor Category</Typography>
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
                                </Grid>
                            </form>
                        )}
                    </Formik>)}
            <Notification />
        </>
    )
}