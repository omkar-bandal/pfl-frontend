/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { FormButtonGroup, PageTitle, TextInput, toast } from "@prime-fresh/ui_shared";
import { ADMIN_ROUTES, useCreateCustomerCategory, useGetCustomerCategoryById, useUpdateCustomerCategoryById } from "@prime-fresh/admin/modules";
import { handleFormKeyDown } from "@prime-fresh/shared/modules";


const customerCategoryValidationSchema = Yup.object().shape({
    name: Yup.string().required('Customer category is required'),
});

export function CustomerCategoryForm() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const customerCatId = id ? id : "";
    const { data: cat, isLoading } = useGetCustomerCategoryById(customerCatId);
    console.log("Customer Category: ", cat?.data);
    const customerCat = cat?.data ? {name: cat?.data.name } : {name: "" };
    const customerCatVal = customerCatId ? customerCat : {name: ""};

    const { mutateAsync: postCustomerCategory, error: postError, data: postRes } = useCreateCustomerCategory();
    const { mutateAsync: patchCustomerCategory, error: patchError, data: patchRes } = useUpdateCustomerCategoryById(customerCatId);

    const handleSubmit = (values: any) => {
        customerCatId === "" ?
            (postCustomerCategory(values).then(() => {
                console.log("Response", postRes);
                toast.success(postRes ? postRes.message : "Customer category created successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_CUSTOMER_CAT);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating customer category")
            })) :
            (patchCustomerCategory(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Customer category updated successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_CUSTOMER_CAT);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating customer category")
            }));
    }

    return (
        isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={customerCatId || "create-customer-category"}
                enableReinitialize={true}
                initialValues={customerCatVal}
                validationSchema={customerCategoryValidationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Customer Category" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Customer Category"
                                    value={values.name}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={customerCatId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={customerCatId === "" ? postError : patchError}
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