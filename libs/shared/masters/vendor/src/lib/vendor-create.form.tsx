import { Formik } from "formik"
import { initValVendor } from "./form/initValVendor"
import vendorValidationSchema from "./form/vendor.schema"
import { Grid, Typography } from "@mui/material"
import { FormResetBtn, FormSubmitBtn, toast } from "@prime-fresh/ui_shared"
import { ADMIN_API_URL, PostVendor, useCreateVendor } from "@prime-fresh/admin_api"
import { useNavigate } from "react-router-dom"
import { appendFormData } from "@prime-fresh/shared/utils"
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules"

export const VendorCreateForm = () => {
    const navigate = useNavigate();
    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateVendor(ADMIN_API_URL.POST_VENDOR);

    const handleSubmit = async (values: PostVendor) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Vendor created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2400);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while registering vendor.");
        });
    };
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValVendor}
            validationSchema={vendorValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
            }}>
            {({ handleReset, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">Vendor Registration</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={!postError} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}