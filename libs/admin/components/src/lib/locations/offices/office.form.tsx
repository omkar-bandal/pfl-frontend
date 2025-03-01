import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, OfficeInitialValues, useCreateOffice, useGetOfficeById, useUpdateOfficeById } from "@prime-fresh/admin/modules";
import { FormResetBtn, FormSubmitBtn, PageTitle, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";

export const OfficeForm = () => {
    const { id, officeType } = useParams<{ id: string, officeType: string }>();
    const officeId = id ? id : '';
    const OfficeType = officeType ? officeType : '';
    console.log("Office Type:", OfficeType);
    const navigate = useNavigate();


    const { data, isLoading } = useGetOfficeById(officeId, OfficeType);
    const officeData = data?.data ? data.data : OfficeInitialValues;
    const officeInitialValue = officeId ? officeData : OfficeInitialValues;

    //To create new office Data
    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateOffice(OfficeType);

    //To update existing office Data
    const { mutateAsync: mutatePatch, data: patchRes, error: patchError } = useUpdateOfficeById(officeId, OfficeType);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        officeId ?
            (mutatePatch(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Office location updated successfully.");
                setTimeout(() => {
                    navigate(`${ADMIN_ROUTES.GET_ALL_OFFICES}/${officeType}`);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while creating new office.");
            })) :
            (mutatePost(values).then(() => {
                toast.success(postRes ? postRes.message : "Office location created successfully.");
                setTimeout(() => {
                    navigate(`${ADMIN_ROUTES.GET_ALL_OFFICES}/${officeType}`);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating new office.");
            }))
    }
    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={officeId || "create-office"}
                enableReinitialize={true}
                initialValues={officeInitialValue}
                // validationSchema={productCategorySchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <PageTitle pagetitle="Office" />
                        </Grid>
                        <Grid container spacing={1} padding={1}>
                            <Grid item xs={12}>
                                <TextInput isRequired={true} label="Office Name" name="name" value={values.name} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Branch Address</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput isRequired={true} label="Address Line 1" name="address.address1" value={values.address.address1} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput isRequired={false} label="Address Line 2" name="address.address2" value={values.address.address2} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={true} label="Location" name="address.location" value={values.address.location} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={true} label="City" name="address.city" value={values.address.city} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={true} label="State" name="address.state" value={values.address.state} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={true} label="Pincode" name="address.pincode" value={values.address.pincode} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Contact Person Details</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={false} label="First Name" name="cFirstName" value={values.cFirstName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={false} label="Middle Name" name="cMiddleName" value={values.cMiddleName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={false} label="Last Name" name="cLastName" value={values.cLastName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <TextInput isRequired={false} label="Contact Number" name="contactNumber" value={values.contactNumber} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <TextInput isRequired={false} label="Email" name="officeEmail" value={values.officeEmail} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput multiline maxRows={4} isRequired={false} label="Notes" name="notes" value={values.notes} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={officeId === "" ? "Create" : "Update"}
                                    isError={officeId === "" ? postError : patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}