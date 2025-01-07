import React from 'react'
import { FieldArray, Formik } from 'formik'
import { inventoryRouteConstants, laborAttendanceInitialValue, laborAttendanceSchema, laborsDetailsInitialValue } from '@prime-fresh/inventory/modules'
import { Box, Button, Grid, LinearProgress, Typography } from '@mui/material';
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { Add, Remove } from '@mui/icons-material';
import { INVENTORY_API_URL, useGetALaborAttendance, useUpdateLaborAttendance } from '@prime-fresh/inventory_api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData } from '@prime-fresh/shared/utils';
import { useNavigate, useParams } from 'react-router-dom';

export const LaborAttendanceUpdateForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const Id = id ? id : "";

    const { data, isLoading } = useGetALaborAttendance(INVENTORY_API_URL.GET_A_LABOR_ATTENDANCE, Id);
    const laborAttendanceInitialValues = data ? data : laborAttendanceInitialValue;

    const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateLaborAttendance(INVENTORY_API_URL.UPDATE_LABOR_ATTENDANCE, Id);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(patchRes ? patchRes.message : "Labor attendance updated");
            setTimeout(() => {
                navigate(inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE);
            }, 2500);
        }).catch(() => {
            toast.error(patchError ? patchError.message : "Error while updating labor attendance.");
        })
    }

    return (
        isLoading ?
            (<Box sx={{ flex: 1 }} >
                <LinearProgress />
            </Box >) :

            (<Formik
                initialValues={laborAttendanceInitialValues}
                validationSchema={laborAttendanceSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => handleUpdate(values)}>
                {({ values, handleSubmit, handleChange, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container rowSpacing={1} columnSpacing={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Daily Labor Attendance</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn isSubmitting={isSubmitting} isError={patchError} label="Update" />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput
                                    isRequired={true}
                                    name="companyName"
                                    label="Company Name"
                                    value={values.companyName}
                                    options={PURCHASE_ARRAYS.companyNames}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    isRequired={true}
                                    type="text"
                                    name="location"
                                    label="Location"
                                    value={values.location}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    isRequired={true}
                                    type="date"
                                    name="date"
                                    label="Date"
                                    value={values.date}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <FieldArray name="labourDetails">
                                    {({ remove, push }) => (
                                        values.labourDetails.map((_, index) => (
                                            <>
                                                <Grid container columnSpacing={1} key={index} alignItems="center">
                                                    <Grid item xs={12} md={4}>
                                                        <TextInput
                                                            isRequired={true}
                                                            type="text"
                                                            name={`labourDetails.${index}.labourName`}
                                                            label="Labor Name"
                                                            value={values.labourDetails[index].labourName}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            isRequired={true}
                                                            type="text"
                                                            name={`labourDetails.${index}.contactNo`}
                                                            label="Contact No"
                                                            value={values.labourDetails[index].contactNo}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            isRequired={true}
                                                            type="time"
                                                            name={`labourDetails.${index}.inTime`}
                                                            label="In Time"
                                                            value={values.labourDetails[index].inTime}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            isRequired={false}
                                                            type="time"
                                                            name={`labourDetails.${index}.outTime`}
                                                            label="Out Time"
                                                            value={values.labourDetails[index].outTime}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput
                                                            isRequired={true}
                                                            type="number"
                                                            name={`labourDetails.${index}.amount`}
                                                            label="Amount"
                                                            value={values.labourDetails[index].amount}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                </Grid>
                                                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginY: 1 }}>
                                                    <Button variant="text" size="small" color="success" startIcon={<Add />} onClick={() => push(laborsDetailsInitialValue)}>Add</Button>
                                                    {values.labourDetails.length > 1 && (
                                                        <Button variant="text" size="small" color="error" startIcon={<Remove />} onClick={() => remove(index)}>Remove</Button>
                                                    )}
                                                </Box>
                                            </>
                                        ))
                                    )}
                                </FieldArray>
                            </Grid >
                            <Grid item xs={12}>
                                <TextInput
                                    isRequired={true}
                                    multiline={true}
                                    maxRows={2}
                                    name="remarks"
                                    label="Remarks"
                                    value={values.remarks}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form >
                )}
            </Formik >)
    )
}
