import { Grid, Typography } from '@mui/material'
import { PostLPvoucher, PURCHASE_API_URL, useCreateLPVoucher, useGetAllGRNNums } from '@prime-fresh/purchase_api'
import { initValLabourPaymentvoucher, labourPaymentVoucherSchema, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewLPVoucher } from '@prime-fresh/purchase/modules'
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { LPVoucherPreview } from './labor-payment-voucher.preview'
import { setPreview } from '@prime-fresh/modules'
import { appendFormData } from '@prime-fresh/shared/utils'
import { useNavigate } from 'react-router-dom'

export const LabourPaymentVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
  const allGRNNums = data ? mapToValueLabelArray(data, 'id', 'grnNo') : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAmounts = (values: PostLPvoucher, setFieldValue: (field: string, value: any,) => void) => {
    const totalAmt = values.noOfLabours * values.ratePerLabour;
    const amtWords = numToWords(totalAmt);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };
  const { mutateAsync: mutatePost, error, data: Res } = useCreateLPVoucher(PURCHASE_API_URL.POST_LP_VOUCHER);
  const handleSubmit = (values: PostLPvoucher) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(Res ? Res.message : "Voucher created.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER);
      }, 2400);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating voucher")
    });
  };
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initValLabourPaymentvoucher}
        validationSchema={labourPaymentVoucherSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'>Labour Payment Voucher</Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <FormSubmitBtn isSubmitting={isSubmitting} isError={!error} label="Create" />
                <FormResetBtn label="Reset" handleReset={handleReset} />
                <FormPreviewBtn onClick={() => { dispatch(setPreviewLPVoucher(values)); dispatch(setPreview(true)) }} />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNums}
                  value={values.grnNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={PURCHASE_ARRAYS.companyNames}
                  value={values.companyName}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={values.debitCreditTo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={values.payReceivedFrom}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="workLocation"
                  label="Location of Labour Work"
                  value={values.workLocation}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type='date'
                  isRequired={true}
                  name="loadingDate"
                  label="Day of Loading / Unloading"
                  value={values.loadingDate}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="noOfLabours"
                  label="No of Labours"
                  value={values.noOfLabours}
                  handleChange={handleChange}
                  onBlur={() => calculateAmounts(values, setFieldValue)} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type='number'
                  isRequired={true}
                  name="ratePerLabour"
                  label="Per Day of Labour"
                  value={values.ratePerLabour}
                  handleChange={handleChange}
                  onBlur={() => calculateAmounts(values, setFieldValue)} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type='number'
                  isRequired={false}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt} />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={values.paymentMode}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={9}>
                <TextInput
                  type='text'
                  isRequired={false}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="contactNo"
                  label="Contact Number"
                  value={values.contactNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type='text'
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact"
                  value={values.altContactNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={values.receiverName}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type='text'
                  isRequired={false}
                  name="products"
                  label="Products"
                  value={values.products}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  type="text"
                  multiline
                  maxRows={2}
                  isRequired={false}
                  name="remark"
                  label="Remark"
                  value={values.remark}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <RadioGroupInput
                  isRequired={true}
                  label="is Labour KYC Attached ? (If available) :"
                  name="kyc"
                  value={values.kyc}
                  options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
            </Grid>
          </form>)}
      </Formik>
      <LPVoucherPreview />
    </>
  )
}
