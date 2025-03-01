import { Grid } from "@mui/material";
import { PostTPvoucher } from "@prime-fresh/purchase_api";
import { initValTransportPaymentVoucher, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewTPVoucher, transportPaymentVoucherSchema, useCreateTransportPaymentVoucher } from "@prime-fresh/purchase/modules";
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { TPVoucherPreview } from "./transport-payment-voucher.preview";
import { useNavigate } from "react-router-dom";
import { useGetCompanyNames, useGetAllGRNNums, mapToValueLabelArray, appendFormData } from "@prime-fresh/shared/modules";
import { handleAmountChange } from "./helper-function";

export const TransportPaymentVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNums = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

  const { mutateAsync: mutatePost, error, data: Res } = useCreateTransportPaymentVoucher();

  const handleSubmit = (values: PostTPvoucher) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(Res ? Res.message : "Voucher created.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating voucher.")
    });;
  };
  return (
    <>
      <Formik
        initialValues={initValTransportPaymentVoucher}
        validationSchema={transportPaymentVoucherSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} marginBottom={2}>
                <PageTitle pagetitle="Transport Payment Voucher" />
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
                  options={companyNames}
                  value={values.companyName}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={values.debitCreditTo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={values.payReceivedFrom}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="driverName"
                  label="Driver Name"
                  value={values.driverName}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="contactNo"
                  label="Contact No"
                  value={values.contactNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact Number"
                  value={values.altContactNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="vehicleNo"
                  label="Vehicle No"
                  value={values.vehicleNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="dispatchLocation"
                  label="Dispatch Location"
                  value={values.dispatchLocation}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="destinationLocation"
                  label="Destination Location"
                  value={values.destinationLocation}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="products"
                  label="Products"
                  value={values.products}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={values.paymentMode}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="freightAmt"
                  label="Freight Amount"
                  value={values.freightAmt}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt}
                  handleChange={e => handleAmountChange(e, setFieldValue)} />
              </Grid>
              <Grid item xs={12} md={9}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={values.receiverName}
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
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <RadioGroupInput
                  isRequired={false}
                  label="is KYC attached? (Driver Lic. / RC Book / PAN)"
                  name="kyc"
                  alignment="vertical"
                  value={values.kyc}
                  options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
              <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                <FormResetBtn label="Reset" handleReset={handleReset} />
                <FormPreviewBtn onClick={() => { dispatch(setPreviewTPVoucher(values)); dispatch(setPreview(true)) }} />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <TPVoucherPreview />
    </>
  );
};