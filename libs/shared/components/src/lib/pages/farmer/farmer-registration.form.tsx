/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from "formik"
import { useNavigate, useParams } from "react-router-dom"
import { Box, Grid2, LinearProgress } from "@mui/material"
import { FormButtonGroup, FormTabs, PageTitle, TabPanel, toast } from "@prime-fresh/ui_shared"
import { ADMIN_ROUTES, useCreateFarmer, useGetFarmerById, useUpdateFarmerById } from "@prime-fresh/admin/modules"
import { appendFormData, farmerValidationSchema, initValFarmer, sharedData } from "@prime-fresh/shared/modules"
import { FarmDetails, FarmerDetails, CropDetails, FarmerImageSection } from "./form-sections";
import { useState } from "react"

export const FarmerRegistrationForm = () => {
    const [tab, setTab] = useState(0);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const farmerId = id ? id : "";
    const { data, isLoading } = useGetFarmerById(farmerId);
    const farmerData = data?.data ? data.data : initValFarmer;
    console.log("Farmer: ", farmerData);
    const farmerInitVal = farmerId === "" ? initValFarmer : farmerData;

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateFarmer();
    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateFarmerById(farmerId)

    const handleSubmit = async (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        farmerId === "" ? (mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Farmer created successfully.");
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while registering farmer.");
        })) :
            (mutatePatch(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Farmer updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating farmer.");
            }));
    };
    const formParts = [<FarmerDetails />, <FarmDetails />, <CropDetails />, <FarmerImageSection />]
    return (
        isLoading ?
            (<Box flex={1}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={farmerId === "" ? 'create-farmer' : 'update-farmer'}
                enableReinitialize={true}
                initialValues={farmerInitVal}
                validationSchema={farmerValidationSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ handleReset, handleSubmit, isSubmitting, setFieldValue, values }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Farmer Registration" />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                {/* <FarmerDetails />
                                <FormAccordion panel="Farm Details" openOnError={true}>
                                    <FarmDetails />
                                </FormAccordion>
                                <FormAccordion panel="Crop Details" openOnError={true}>
                                    <CropDetails />
                                </FormAccordion>
                                <FormAccordion panel="Farmer and Farm Images" openOnError={false}>
                                    <FarmerImageSection />
                                </FormAccordion> */}
                                <Box sx={{ flex: 1 }}>
                                    <FormTabs
                                        tabLabels={sharedData.farmerFormTabs}
                                        value={tab}
                                        handleChange={handleTabChange} />
                                    {formParts.map((child, index) => (
                                        <TabPanel key={index} index={index} value={tab}>
                                            {child}
                                        </TabPanel>))}
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={farmerId === '' ? 'Create' : 'Update'}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={farmerId === '' ? postError : patchError}
                                    resetLabel='Reset'
                                    onReset={() => {
                                        handleReset();
                                        setFieldValue("farmerPhoto", null);
                                        setFieldValue("farmPhoto", null);
                                        console.log(values);
                                    }}
                                />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )
}