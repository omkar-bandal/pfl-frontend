import React, { useState } from 'react'
import { FieldArray, Formik } from 'formik'
import { arrayConstants, inventoryRouteConstants, laborAttendanceInitialValue, laborAttendanceSchema, laborsDetailsInitialValue } from '@prime-fresh/inventory/modules'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, mapToValueLabelArray, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { Add, Remove } from '@mui/icons-material';
import { INVENTORY_API_URL, PostLaborDetails, useCreateLaborAttendance, useCreateTempLaborData, useGetAllLaborData, useGetAllTempLaborData } from '@prime-fresh/inventory_api';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData } from '@prime-fresh/shared/utils';
import { useNavigate } from 'react-router-dom';
import { ADMIN_API_URL, GetFilteredBranchData, useGetAllFilteredBranches } from '@prime-fresh/admin_api';

export const LaborAttendanceForm = () => {
    const [open, setOpen] = useState<boolean>();
    const [laborDetails, setLaborDetails] = useState<PostLaborDetails[]>([laborsDetailsInitialValue]);
    console.log("Labor Details", laborDetails);
    const navigate = useNavigate();
    const { data: pLabors } = useGetAllLaborData(INVENTORY_API_URL.GET_ALL_REGISTERED_LABORS);
    const permanentLabors = pLabors ? mapToValueLabelArray(pLabors, 'id', 'laborName') : [];
    const { data: tLabors } = useGetAllTempLaborData(INVENTORY_API_URL.GET_ALL_TEMP_LABORS);
    const temporaryLabors = tLabors ? mapToValueLabelArray(tLabors, 'id', 'laborName') : [];
    const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);
    const Locations = locations ? mapToValueLabelArray<GetFilteredBranchData>(locations, 'id', 'name') : [];
    const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateLaborAttendance(INVENTORY_API_URL.POST_LABOR_ATTENDANCE);
    const { mutateAsync, error } = useCreateTempLaborData(INVENTORY_API_URL.POST_A_TEMP_LABOR);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreate = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(postRes ? postRes.message : "Labor attendance saved");
            setTimeout(() => {
                navigate(inventoryRouteConstants.GET_ALL_LABOUR_ATTENDANCE);
            }, 2000);
        }).catch(() => {
            toast.error(postError ? postError.message : "Error while creating labor attendance.");
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateTempLabor = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutateAsync(formData).then(() => toast.success("Temporary labor created.")).catch(() => toast.error(error?.message))
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Formik
                initialValues={laborAttendanceInitialValue}
                validationSchema={laborAttendanceSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => handleCreate(values)}>
                {({ values, handleSubmit, handleChange, handleReset, setFieldValue, isSubmitting, }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container rowSpacing={1} columnSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Daily Labor Attendance</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn isSubmitting={isSubmitting} isError={postError} label="Create" />
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
                                <AutoCompleteInput
                                    isRequired={true}
                                    name="location"
                                    label="Location"
                                    options={Locations}
                                    handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />
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
                                                <Grid container columnSpacing={1} key={index} alignItems="center" padding={1} sx={{ border: `1px solid #ccc`, borderRadius: 5 }}>
                                                    <Grid item xs={12} md={2}>
                                                        <SelectInput
                                                            isRequired={true}
                                                            label="Labor Type"
                                                            name={`labourDetails.${index}.laborType`}
                                                            options={arrayConstants.LABOR_EMP_TYPES}
                                                            value={values.labourDetails[index].laborType}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <AutoCompleteInput
                                                            isRequired={true}
                                                            label="Labor Name"
                                                            name={`labourDetails.${index}.labourName`}
                                                            options={values.labourDetails[index].laborType === "parmanent" ? permanentLabors : temporaryLabors}
                                                           handleChange={(event, newValue) => {
                                                                if (newValue) {
                                                                    if (newValue.label.startsWith('Add ')) {
                                                                        if (values.labourDetails[index].laborType === "parmanent") {
                                                                            navigate(inventoryRouteConstants.CREATE_LABOUR_REGISTER);
                                                                        } else {
                                                                            setOpen(true);
                                                                        }
                                                                    } else {
                                                                        setFieldValue(`labourDetails.${index}.labourName`, newValue.value);
                                                                    }
                                                                } else {
                                                                    setFieldValue(`labourDetails.${index}.labourName`, '');
                                                                }
                                                            }}
                                                        />
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
                                                            disabled={true}
                                                            value={values.labourDetails[index].outTime}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={12} md={1}>
                                                        <TextInput
                                                            isRequired={false}
                                                            type="number"
                                                            disabled={true}
                                                            name={`labourDetails.${index}.amount`}
                                                            label="Amount"
                                                            value={values.labourDetails[index].amount}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                </Grid>
                                                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginY: 1 }}>
                                                    <Button
                                                        variant="text"
                                                        size="small"
                                                        color="success"
                                                        startIcon={<Add />}
                                                        onClick={() => {
                                                            push(laborsDetailsInitialValue);
                                                            setLaborDetails([...laborDetails, values.labourDetails[index]]);
                                                        }
                                                        }>
                                                        Add
                                                    </Button>
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
            </Formik>
            <Dialog open={open ? open : false} onClose={handleClose}>
                <Formik
                    initialValues={{ laborName: '', contactNo: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                        handleCreateTempLabor(values);
                    }}>
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <DialogTitle>Add Temporary Labor</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Add temporary labor full name and contact number here!
                                </DialogContentText>
                                <TextInput isRequired name="laborName" label="Labor Name" value={values.laborName} handleChange={handleChange} />
                                <TextInput isRequired name="contactNo" label="Contact No" value={values.contactNo} handleChange={handleChange} />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit">Add</Button>
                            </DialogActions>
                        </form>)}
                </Formik>
            </Dialog >
        </>
    )
}
