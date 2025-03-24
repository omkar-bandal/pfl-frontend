/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Formik } from 'formik'
import { inventoryRouteConstants, useCreateVehicleDispatchRegister, useGetVehicleDispatchRegisterById, useUpdateVehicleDispatchRegister, vehicleDispatchRegisterInitialValues } from '@prime-fresh/inventory/modules'
import { Box, Grid2, LinearProgress } from '@mui/material'
import { FormButtonGroup, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { useNavigate, useParams } from 'react-router-dom'
import { mapToValueLabelArray, useGetAllDeliveryChallanNums } from '@prime-fresh/shared/modules'

export const VehicleDispatchRegisterForm = () => {
    const { id } = useParams<{ id: string }>();
    const vehicleDispatchId = id ? id : "";
    const navigate = useNavigate();
    
    const { data, isLoading } = useGetVehicleDispatchRegisterById(vehicleDispatchId);
    const vehicleDispatch = data?.data ? data.data : vehicleDispatchRegisterInitialValues;
    const initialValueVehicleDispatch = vehicleDispatchId === "" ? vehicleDispatchRegisterInitialValues : vehicleDispatch;

    const { data: dcs } = useGetAllDeliveryChallanNums();
    const dcNums = React.useMemo(() => dcs?.data ? mapToValueLabelArray(dcs.data, 'id', 'challanNo') : [], [dcs]);

    const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateVehicleDispatchRegister();
    const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateVehicleDispatchRegister(vehicleDispatchId);

    const handleSubmit = (values: any) => {
        vehicleDispatchId === "" ?
            (mutateAsyncPost(values).then(() => {
                toast.success(PostData ? PostData.message : "Vehicle dispatch register created sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER);
                }, 2000);
            }).catch(() => {
                toast.error(PostError ? PostError.message : "Error while creating vehicle dispatch register.");
            })) :
            (mutateAsyncPatch(values).then(() => {
                toast.success(PatchData ? PatchData.message : "Vehicle dispatch register updated sucessfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER);
                }, 2000);
            }).catch(() => {
                toast.error(PatchError ? PatchError.message : "Error while updating vehicle dispatch register.");
            }))
    }
    return (
        vehicleDispatchId !== "" && isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>) :

            <Formik
                key={vehicleDispatchId === "" ? "create-vd-register" : "update-vd-register"}
                enableReinitialize={true}
                initialValues={initialValueVehicleDispatch}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => {
                    console.log(values);
                    handleSubmit(values);
                }}>
                {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle='Vehicle Dispatch Register' />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="date"
                                    isRequired={true}
                                    name="date"
                                    label="Date"
                                    value={values.date}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 2 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="vehicleNo"
                                    label="Vehicle Number"
                                    value={values.vehicleNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 2 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="vehicleType"
                                    label="Vehicle Type"
                                    value={values.vehicleType}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 5 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="driverName"
                                    label="Driver Name"
                                    value={values.driverName}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="driverMobNo"
                                    label="Driver Mob. No."
                                    value={values.driverMobNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="paymentDiscussed"
                                    label="Payment Discussed"
                                    value={values.paymentDiscussed}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="transportationBillAmt"
                                    label="Transportation Bill Amount"
                                    value={values.transportationBillAmt}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="advancePaid"
                                    label="Advance If Paid To Transporter"
                                    value={values.advancePaid}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 8 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientName"
                                    label="Client Name"
                                    value={values.clientName}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="clientGRNNo"
                                    label="Client GRN No"
                                    value={values.clientGRNNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientAddress.address1"
                                    label="Client Address Line 1"
                                    value={values.clientAddress ? values.clientAddress.address1 : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="clientAddress.address2"
                                    label="Client Address Line 2"
                                    value={values.clientAddress ? values.clientAddress.address2 : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientAddress.location"
                                    label="Location"
                                    value={values.clientAddress ? values.clientAddress.location : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientAddress.city"
                                    label="City"
                                    value={values.clientAddress ? values.clientAddress.city : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientAddress.state"
                                    label="State"
                                    value={values.clientAddress ? values.clientAddress.state : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="clientAddress.pincode"
                                    label="Pincode"
                                    value={values.clientAddress ? values.clientAddress.pincode : ''}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="receivingPerson"
                                    label="Receiving Person At Location"
                                    value={values.receivingPerson}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="time"
                                    isRequired={true}
                                    name="reachingTime"
                                    label="Reaching Time"
                                    value={values.reachingTime}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="time"
                                    isRequired={true}
                                    name="outTime"
                                    label="Out Time"
                                    value={values.outTime}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <RadioGroupInput
                                    isRequired={true}
                                    alignment='vertical'
                                    name="accDeptVerification"
                                    label="A/c Dept Verification"
                                    value={values.accDeptVerification}
                                    options={[{ value: true, label: "Yes" }, { value: false, label: "No" }]}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="remarksPFL"
                                    label="Remarks (PFL Team)"
                                    multiline={true}
                                    maxRows={2}
                                    value={values.remarksPFL}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="feedbackbyTransporterOwner"
                                    label="Feedback By Owner Transporter"
                                    multiline={true}
                                    maxRows={2}
                                    value={values.feedbackbyTransporterOwner}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <SelectInput
                                    isRequired={true}
                                    name="dcNumber"
                                    label="Delivery Challan No"
                                    value={values.dcNumber}
                                    options={dcNums}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    isRequired={false}
                                    type="number"
                                    name="netInwardQty"
                                    label="Net Inward Quantity"
                                    value={values.netInwardQty}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    isRequired={false}
                                    type="text"
                                    name="paymentTerms"
                                    label="Payment Terms"
                                    value={values.paymentTerms}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    isRequired={false}
                                    type="number"
                                    name="rejection"
                                    label="Rejection (If any)"
                                    value={values.rejection}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    isRequired={false}
                                    type="number"
                                    name="shrinkageDump"
                                    label="Shrinkage Dump (If any)"
                                    value={values.shrinkageDump}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                <FormButtonGroup
                                    submitLabel={vehicleDispatchId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={vehicleDispatchId === "" ? PostError : PatchError}
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
