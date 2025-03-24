import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, OfficeInitialValues, officeValidationSchema, useCreateOffice, useGetOfficeById, useUpdateOfficeById } from "@prime-fresh/admin/modules";
import { FormButtonGroup, PageTitle, TextInput, toast } from "@prime-fresh/ui_shared";
import { Box, Grid2, LinearProgress, Typography } from "@mui/material";
import React from "react";

export const OfficeForm = () => {
    const { id, officeType } = useParams<{ id: string, officeType: string }>();
    const officeId = id ? id : '';
    const OfficeType = officeType ? officeType : '';
    console.log("Office Type:", OfficeType);
    const navigate = useNavigate();
    const OfficeTypeLabel = React.useMemo(() => OfficeType.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '), [OfficeType]);

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
                validationSchema={officeValidationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container spacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }} marginY={1}>
                                <PageTitle pagetitle={OfficeTypeLabel} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput isRequired={true} label="Office Name" name="name" value={values.name} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Branch Address</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput isRequired={true} label="Address Line 1" name="address.address1" value={values.address.address1} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput isRequired={false} label="Address Line 2" name="address.address2" value={values.address.address2} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput isRequired={true} label="Location" name="address.location" value={values.address.location} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput isRequired={true} label="City" name="address.city" value={values.address.city} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput isRequired={true} label="State" name="address.state" value={values.address.state} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput isRequired={true} label="Pincode" name="address.pincode" value={values.address.pincode} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Contact Person Details</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={false} label="First Name" name="cFirstName" value={values.cFirstName} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={false} label="Middle Name" name="cMiddleName" value={values.cMiddleName} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={false} label="Last Name" name="cLastName" value={values.cLastName} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 5 }}>
                                <TextInput isRequired={false} label="Contact Number" name="contactNumber" value={values.contactNumber} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 7 }}>
                                <TextInput isRequired={false} label="Email" name="officeEmail" value={values.officeEmail} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput multiline maxRows={4} isRequired={false} label="Notes" name="notes" value={values.notes} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FormButtonGroup
                                    submitLabel={officeId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={officeId === "" ? postError : patchError}
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