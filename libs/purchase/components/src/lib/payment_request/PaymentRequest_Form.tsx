import React from 'react'
import { setPreview } from '@prime-fresh/modules';
import { initValPaymentRequest, paymentRequestSchema, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewPaymentReq } from '@prime-fresh/purchase/modules';
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { PostPaymentRequest, PURCHASE_API_URL, useCreatePaymentRequest } from '@prime-fresh/purchase_api';
import { PaymentRequestPreview } from './PaymentRequest_Preview';
import { useNavigate, useParams } from 'react-router-dom';
import { appendFormData } from '@prime-fresh/shared/modules';
import { Grid2 } from '@mui/material';

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
      toast(Res ? Res.message : "Payment Request created successfully !!!");
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      }, 2000);
    }).catch(() => {
      toast(error ? error.message : "Failed to create payment request.");
    });
  }
  return (
    <>
      <Formik
        initialValues={initValPaymentRequest}
        validationSchema={paymentRequestSchema}
        validateOnBlur={true}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }}>
                <PageTitle pagetitle="Payment Request" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="partyName" label="Party Name" value={values.partyName} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="bankAccNo" label="Bank Account Number" value={values.bankAccNo} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="ifscCode" label="IFSC Code" value={values.ifscCode} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="typesOfTransaction" label="Type of Transaction" value={values.typesOfTransaction} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="otherTransaction" label="Other Type of Transaction (if any)" value={values.otherTransaction} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput isRequired={true} name="paymentMode" label="Payment Mode" value={values.paymentMode} options={PURCHASE_ARRAYS.paymentMode} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput type="date" isRequired={true} name="paymentDate" label="Payment Date" value={values.paymentDate} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput type="number" isRequired={true} name="amount" label="Amount" value={values.amount} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="placeOfPurchase" label="Place Of Purchase" value={values.placeOfPurchase} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="vehicleNo" label="Vehicle Number" value={values.vehicleNo} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="costCenter" label="Cost Center" value={values.costCenter} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="contactpersonRec" label="Receiver Contact Person" value={values.contactpersonRec} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput isRequired={true} name="contactpersonSen" label="Sender Contact Person" value={values.contactpersonSen} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <RadioGroupInput isRequired={true} name="kycByEmail" label="KYC By Email" value={values.kycByEmail} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput isRequired={true} name="remark" label="Remark" value={values.remark} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                <FormResetBtn label="Reset" handleReset={handleReset} />
                <FormPreviewBtn onClick={() => { dispatch(setPreviewPaymentReq(values)); dispatch(setPreview(true)) }} />
              </Grid2>
            </Grid2>
          </form>
        )}
      </Formik>
      <PaymentRequestPreview />
    </>
  )
}
