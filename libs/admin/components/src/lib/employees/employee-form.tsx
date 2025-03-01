/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADMIN_ROUTES, initValEmployee, useCreateEmployee, useGetEmployeeById, useUpdateEmployeeById } from '@prime-fresh/admin/modules';
import { FormResetBtn, FormSubmitBtn, PageTitle, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid2, LinearProgress, Typography } from '@mui/material';
import { Formik } from 'formik';

export const EmployeeForm = () => {
    const { id } = useParams<{ id: string }>();
    const employeeId = id ? id : "";
    const navigate = useNavigate();

    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateEmployee();

    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateEmployeeById(employeeId);

    const { data, isLoading } = useGetEmployeeById(employeeId);
    const employeeData = data?.data ? data.data : null;
    const EmployeeInitValue = employeeId.length > 1 && employeeData !== null ? employeeData : initValEmployee;

    const handleSubmit = (values: any) => {
        employeeId === "" ? (mutatePost(values).then(() => {
            toast.success(postRes ? postRes.message : "Employee data created successfully.")
            setTimeout(() => {
                navigate(ADMIN_ROUTES.GET_ALL_EMPLOYEES);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while creating employee data.");
        }))
            : (mutatePatch(values).then(() => {
                toast.success(patchRes ? patchRes.message : "Employee data updated successfully.");
                setTimeout(() => {
                    navigate(ADMIN_ROUTES.GET_ALL_EMPLOYEES);
                }, 2000);
            }).catch(() => {
                toast.error(patchError ? patchError.message : "Error while updating employee data.");
            }))
    }
    return (
        isLoading ? (
            <Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>
        ) :
            <Formik
                key={id || "create-employee"}
                enableReinitialize={true}
                initialValues={EmployeeInitValue}
                // validationSchema={productCategorySchema}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container padding={1}>
                            <PageTitle pagetitle="Employee" />
                        </Grid2>
                        <Grid2 container spacing={1} padding={1}>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="First Name" name="firstName" value={values.firstName} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="Last Name" name="lastName" value={values.lastName} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="Username" name="username" value={values.username} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="Password" name="password" value={values.password} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="Phone Number" name="phoneNumber" value={values.phoneNumber} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput isRequired={true} label="Email" name="email" value={values.email} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2}>
                                <Typography variant='caption' component="div" sx={{ width: "100%", borderBottom: `1px solid #6F6F6F` }}>Address</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} >
                                <TextInput isRequired={true} label="Address Line 1" name="address.address1" value={values.address.address1} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }} >
                                <TextInput isRequired={false} label="Address Line 2" name="address.address2" value={values.address.address2} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <TextInput isRequired={true} label="Location" name="address.location" value={values.address.location} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <TextInput isRequired={true} label="City" name="address.city" value={values.address.city} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <TextInput isRequired={true} label="State" name="address.state" value={values.address.state} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <TextInput isRequired={true} label="Pincode" name="address.pincode" value={values.address.pincode} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2}>
                                <Typography variant='caption' component="div" sx={{ width: "100%", borderBottom: `1px solid #6F6F6F` }}>Office Details</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <TextInput isRequired={true} type="date" label="Joining Date" name="joiningDate" value={values.joiningDate} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <SelectInput isRequired={true} label="Department" name="selectDepartment" options={[]} value={values.selectDepartment} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <SelectInput isRequired={true} label="Level" name="level" options={[]} value={values.level} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }} >
                                <SelectInput isRequired={true} label="Reporting Manager" name="reportingManager" options={[]} value={values.reportingManager} handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12}} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn
                                    label={employeeId === "" ? "Create" : "Update"}
                                    isError={employeeId === "" ? postError : patchError}
                                    isSubmitting={isSubmitting} />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )

    // return (
    //     <DynamicForm<PostEmployee>
    //         schema={EmployeeFormFields()}
    //         initialValues={
    //             EmployeeInitValue ? EmployeeInitValue : generateInitialValues(EmployeeFormFields().fields)
    //         }
    //         validationSchema={employeeValidationSchema}
    //         handleSubmit={openFor === 'update' ? handleUpdate : handleSubmit} />
    // )
}
