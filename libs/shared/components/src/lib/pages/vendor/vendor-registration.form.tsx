import React from "react"
import { Formik } from "formik"
import { Grid2 } from "@mui/material"
import { FormAccordion, FormResetBtn, FormSubmitBtn, PageTitle, toast } from "@prime-fresh/ui_shared"
import { PostVendor } from "@prime-fresh/admin_api"
import { useNavigate } from "react-router-dom"
import { ADMIN_ROUTES, useCreateVendor } from "@prime-fresh/admin/modules"
import { appendFormData, initValVendor, vendorValidationSchema} from "@prime-fresh/shared/modules"
import { VendorBankDetails, VendorOtherDetails, VendorPrimaryDetails, VendorReferences, VendorSalesContact } from "./form-sections"

export const VendorRegistrationForm = () => {
    const navigate = useNavigate();

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateVendor();

    const handleSubmit = async (values: PostVendor) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Vendor created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2000);
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
            {({ handleReset, handleSubmit, values, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid2 size={{ xs: 12 }}>
                            <PageTitle pagetitle="Vendor Registration" />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <VendorPrimaryDetails />
                            <FormAccordion panel="Other Details" openOnError={true}>
                                <VendorOtherDetails />
                            </FormAccordion>
                            <FormAccordion panel="Sales Contact Details" openOnError={true}>
                                <VendorSalesContact />
                            </FormAccordion>
                            <FormAccordion panel="Bank Details" openOnError={true}>
                                <VendorBankDetails />
                            </FormAccordion>
                            <FormAccordion panel="References" openOnError={true}>
                                <VendorReferences />
                            </FormAccordion>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={postError} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid2>
                    </Grid2>
                </form>
            )}
        </Formik>
    )
}