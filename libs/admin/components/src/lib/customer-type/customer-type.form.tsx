/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { Formik } from "formik";
import { FormButtonGroup, PageTitle, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid2, LinearProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, useCreateCustomerType, useGetCustomerTypeById, useUpdateCustomerTypeById } from "@prime-fresh/admin/modules";

const initValCustomerType = {
    name: '',
}

const customerTypeValidationSchema = Yup.object().shape({
    name: Yup.string().required('Customer type is required'),
});

export function CustomerTypeForm() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const customerTypeId = id ? id : "";
    const { data: type, isLoading } = useGetCustomerTypeById(customerTypeId);
   console.log("Customer Type: ", type?.data)
    const customerType = type?.data ? type.data : initValCustomerType;
    const customerTypeVal = customerTypeId ? customerType : initValCustomerType;


    const { mutateAsync: postCustomerType, error: postError, data: postRes } = useCreateCustomerType();
    const { mutateAsync: patchCustomerType, error: patchError, data: patchRes } = useUpdateCustomerTypeById(customerTypeId);

    const handleSubmit = (values: any) => {
        customerTypeId === "" ?
            (postCustomerType(values).then(() => {
                toast.success(postRes ? postRes.message : "Customer type created successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_CUSTOMER_TYPES);
                }, 2000);
            }).catch(() => {
                toast.error(postError ? postError.message : "Error while creating customer type.");
            }))
            : (patchCustomerType(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Customer type updated successfully.")
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_CUSTOMER_TYPES);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating customer type.");
            }));
    }
    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={customerTypeId || "create-customer-type"}
                enableReinitialize={true}
                initialValues={customerTypeVal}
                validationSchema={customerTypeValidationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Customer Type" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type='text'
                                    isRequired={true}
                                    name="name"
                                    label="Customer Type"
                                    value={values.name}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={customerTypeId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={customerTypeId === "" ? postError : patchError}
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