import { Formik } from "formik";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ADMIN_ROUTES, BranchesInitialValues } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useCreateBranches, useUpdateBranch, useGetABranch } from "@prime-fresh/admin_api";
import { FormResetBtn, FormSubmitBtn, TextInput, toast } from "@prime-fresh/ui_shared";
import { appendFormData } from "@prime-fresh/shared/utils";

export const BranchForm = () => {
    const { id, branchType } = useParams<{ id: string, branchType: string }>();
    const branchId = id ? id : '';
    const branchtype = branchType ? branchType : '';

    const navigate = useNavigate();

    const { data, isLoading } = useGetABranch(ADMIN_API_URL.GET_A_BRANCH, branchId)
    const branch = data ? data : BranchesInitialValues;

    //Initial value for office form
    const branchesInitValue = branchId ? branch : BranchesInitialValues;

    //To create new office Data
    const { mutateAsync: mutatePost, data: postRes, error: postError } = useCreateBranches(`${ADMIN_API_URL.CREATE_BRANCH}/${branchType}`);
    //To update existing office Data
    const { mutateAsync: mutatePatch, data: patchRes, error: patchError } = useUpdateBranch(`${ADMIN_API_URL.UPDATE_BRANCH}/${branchType}`, branchId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        branchId ?
            (mutatePatch(formData).then(() => {
                toast.success(patchRes ? patchRes.message : "Branch location updated successfully.");
                setTimeout(() => {
                    navigate(`${ADMIN_ROUTES.GET_ALL_BRANCHES}/${branchtype}`);
                }, 2400);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while creating new branch.");
            })) :
            (mutatePost(formData).then(() => {
                toast.success(postRes ? postRes.message : "Branch location created successfully.");
                setTimeout(() => {
                    navigate(`${ADMIN_ROUTES.GET_ALL_BRANCHES}/${branchtype}`);
                }, 2400);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating new branch.");
            }))
    }

    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={branchId || "create-branch"}
                enableReinitialize={true}
                initialValues={branchesInitValue}
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
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Branch</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={branchId === "" ? "Create" : "Update"}
                                    isError={branchId === "" ? !postError : !patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} padding={1}>
                            <Grid item xs={12} md={8}>
                                <TextInput isRequired={true} label="Branch Name" name="name" value={values.name} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} label="Prefix" name="prefix" value={values.prefix} handleChange={handleChange} />
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
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={false} label="First Name" name="cFirstName" value={values.cFirstName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={false} label="Middle Name" name="cMiddleName" value={values.cMiddleName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={false} label="Last Name" name="cLastName" value={values.cLastName} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput isRequired={false} label="Contact Number" name="contactNumber" value={values.contactNumber} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Other Details</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput type="number" isRequired={false} label="Total Capacity" name="totalCapacity" value={values.totalCapacity} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput type="number" isRequired={false} label="Current Capacity" name="currentCapacity" value={values.currentCapacity} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput type="number" isRequired={false} label="Balance Capacity" name="balanceCapacity" value={values.balanceCapacity} handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput multiline maxRows={4} isRequired={false} label="Notes" name="notes" value={values.notes} handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}
