import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material';
import { setPreview, showNotification } from '@prime-fresh/modules';
import { initValPaymentRequest, paymentRequestSchema, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewPaymentReq } from '@prime-fresh/purchase/modules';
import { Notification, RadioGroupInput, SelectInput, TextInput } from '@prime-fresh/ui_shared';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { PostPaymentRequest, PURCHASE_API_URL, useCreatePaymentRequest } from '@prime-fresh/purchase_api';
import { PaymentRequestPreview } from './PaymentRequest_Preview';
import { useNavigate, useParams } from 'react-router-dom';
import { appendFormData } from '@prime-fresh/shared/utils';

export const PaymentRequestForm = () => {
  const navigate = useNavigate();
  const { grnid } = useParams();
  const grnId = grnid ? grnid : '';
  const dispatch = useDispatch();
  const { mutateAsync, error, data: Res } = useCreatePaymentRequest(`${PURCHASE_API_URL.POST_PAYMENT_REQ}/${grnId}`);
  const handleSubmit = (values: PostPaymentRequest) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Payment Request created successfully !!!" }));
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      }, 3000);
    }).catch(() => {
      dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
    });
  }
  return (
    <>
      <Notification />
      <Formik
        initialValues={initValPaymentRequest}
        validationSchema={paymentRequestSchema}
        validateOnBlur={true}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'>Payment Request</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                  <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                  <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                  <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewPaymentReq(values)); dispatch(setPreview(true)) }}>Preview</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="partyName" label="Party Name" value={values.partyName} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="bankAccNo" label="Bank Account Number" value={values.bankAccNo} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="ifscCode" label="IFSC Code" value={values.ifscCode} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="typesOfTransaction" label="Type of Transaction" value={values.typesOfTransaction} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="otherTransaction" label="Other Type of Transaction (if any)" value={values.otherTransaction} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput isRequired={true} name="paymentMode" label="Payment Mode" value={values.paymentMode} options={PURCHASE_ARRAYS.paymentMode} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput type="date" isRequired={true} name="paymentDate" label="Payment Date" value={values.paymentDate} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput type="number" isRequired={true} name="amount" label="Amount" value={values.amount} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="placeOfPurchase" label="Place Of Purchase" value={values.placeOfPurchase} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="vehicleNo" label="Vehicle Number" value={values.vehicleNo} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="costCenter" label="Cost Center" value={values.costCenter} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="contactpersonRec" label="Receiver Contact Person" value={values.contactpersonRec} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} name="contactpersonSen" label="Sender Contact Person" value={values.contactpersonSen} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <RadioGroupInput isRequired={true} name="kycByEmail" label="KYC By Email" value={values.kycByEmail} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextInput isRequired={true} name="remark" label="Remark" value={values.remark} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <PaymentRequestPreview />
    </>
  )
}
