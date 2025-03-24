/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { Grid2 } from "@mui/material"
import { FormAccordion, FormButtonGroup, PageTitle, toast } from "@prime-fresh/ui_shared"
import { ADMIN_ROUTES, useCreateFarmer } from "@prime-fresh/admin/modules"
import { appendFormData, farmerValidationSchema, initValFarmer } from "@prime-fresh/shared/modules"
import { FarmDetails, FarmerDetails, CropDetails, FarmerImageSection } from "./form-sections";

export const FarmerRegistrationForm = () => {
    const navigate = useNavigate();

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateFarmer();

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Farmer created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while registering farmer.");
        });
    };
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValFarmer}
            validationSchema={farmerValidationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
            }}>
            {({ handleReset, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid2 size={{ xs: 12 }}>
                            <PageTitle pagetitle="Farmer Registration" />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                            <FarmerDetails />
                            <FormAccordion panel="Farm Details" openOnError={true}>
                                <FarmDetails />
                            </FormAccordion>
                            <FormAccordion panel="Crop Details" openOnError={true}>
                                <CropDetails />
                            </FormAccordion>
                            <FormAccordion panel="Farmer and Farm Images" openOnError={false}>
                                <FarmerImageSection />
                            </FormAccordion>
                        </Grid2>
                        <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FormButtonGroup
                                submitLabel='Create'
                                isSubmitting={isSubmitting}
                                isSubmitError={postError}
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