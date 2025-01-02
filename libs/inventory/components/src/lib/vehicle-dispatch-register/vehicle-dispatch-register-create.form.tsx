/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react'
import { inventoryRouteConstants, vehicleDispatchRegisterInitialValues } from '@prime-fresh/inventory/modules'
import { Formik } from 'formik'
import { Grid, Typography } from '@mui/material'
import { FormResetBtn, FormSubmitBtn, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { INVENTORY_API_URL, PostVehicleDispatchRegister, useCreateVehicleDispatchRegister } from '@prime-fresh/inventory_api'
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils'
import { useNavigate } from 'react-router-dom'
import { PURCHASE_API_URL, useGetAllDeliveryChallanNums } from '@prime-fresh/purchase_api'

export const VehicleDispatchRegisterCreateForm = () => {
  const navigate = useNavigate();
  const { data: dcs } = useGetAllDeliveryChallanNums(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN_NO);
  const dcNums = React.useMemo(() => mapToValueLabelArray(dcs || [], 'id', 'challanNo'), [dcs]);
  const { mutateAsync, error, data } = useCreateVehicleDispatchRegister(INVENTORY_API_URL.POST_VEHICLE_DISPATCH_REGISTER);
  const handleSubmit = (values: PostVehicleDispatchRegister) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      toast.success(data ? data.message : "Vehicle dispatch register created sucessfully.");
      setTimeout(() => {
        navigate(inventoryRouteConstants.GET_ALL_VEHILCE_DISPATCH_REGISTER);
      }, 2500);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating vehicle dispatch register.");
    })
  }
  return (
    <Formik
      initialValues={vehicleDispatchRegisterInitialValues}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}>
      {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Vehicle Dispatch Register</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <FormSubmitBtn isSubmitting={isSubmitting} isError={!error} label="Create" />
              <FormResetBtn label="Reset" handleReset={handleReset} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="date"
                isRequired={true}
                name="date"
                label="Date"
                value={values.date}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextInput
                type="text"
                isRequired={true}
                name="vehicleNo"
                label="Vehicle Number"
                value={values.vehicleNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextInput
                type="text"
                isRequired={true}
                name="vehicleType"
                label="Vehicle Type"
                value={values.vehicleType}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextInput
                type="text"
                isRequired={true}
                name="driverName"
                label="Driver Name"
                value={values.driverName}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="driverMobNo"
                label="Driver Mob. No."
                value={values.driverMobNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="number"
                isRequired={true}
                name="paymentDiscussed"
                label="Payment Discussed"
                value={values.paymentDiscussed}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="number"
                isRequired={true}
                name="transportationBillAmt"
                label="Transportation Bill Amount"
                value={values.transportationBillAmt}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="number"
                isRequired={true}
                name="advancePaid"
                label="Advance If Paid To Transporter"
                value={values.advancePaid}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientName"
                label="Client Name"
                value={values.clientName}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={false}
                name="clientGRNNo"
                label="Client GRN No"
                value={values.clientGRNNo}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientLocationAddress.address1"
                label="Client Address Line 1"
                value={values.clientLocationAddress.address1}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="text"
                isRequired={false}
                name="clientLocationAddress.address2"
                label="Client Address Line 2"
                value={values.clientLocationAddress.address2}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientLocationAddress.location"
                label="Location"
                value={values.clientLocationAddress.location}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientLocationAddress.city"
                label="City"
                value={values.clientLocationAddress.city}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientLocationAddress.state"
                label="State"
                value={values.clientLocationAddress.state}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="clientLocationAddress.pincode"
                label="Pincode"
                value={values.clientLocationAddress.pincode}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={true}
                name="receivingPerson"
                label="Receiving Person At Location"
                value={values.receivingPerson}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="time"
                isRequired={true}
                name="reachingTime"
                label="Reaching Time"
                value={values.reachingTime}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="time"
                isRequired={true}
                name="outTime"
                label="Out Time"
                value={values.outTime}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={2}>
              <RadioGroupInput
                isRequired={true}
                name="accDeptVerification"
                label="A/c Dept Verification"
                value={values.accDeptVerification}
                options={[{ value: true, label: "Yes" }, { value: false, label: "No" }]}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                type="text"
                isRequired={false}
                name="remarksPFL"
                label="Remarks (PFL Team)"
                multiline={true}
                maxRows={2}
                value={values.remarksPFL}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                type="text"
                isRequired={false}
                name="feedbackbyTransporterOwner"
                label="Feedback By Owner Transporter"
                multiline={true}
                maxRows={2}
                value={values.feedbackbyTransporterOwner}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectInput
                isRequired={true}
                name="dcNumber"
                label="Delivery Challan No"
                value={values.dcNumber}
                options={dcNums}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                isRequired={false}
                type="number"
                name="netInwardQty"
                label="Net Inward Quantity"
                value={values.netInwardQty}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                isRequired={false}
                type="text"
                name="paymentTerms"
                label="Payment Terms"
                value={values.paymentTerms}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                isRequired={false}
                type="number"
                name="rejection"
                label="Rejection (If any)"
                value={values.rejection}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                isRequired={false}
                type="number"
                name="shrinkageDump"
                label="Shrinkage Dump (If any)"
                value={values.shrinkageDump}
                handleChange={handleChange} />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}
