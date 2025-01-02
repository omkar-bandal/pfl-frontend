import { Box, Button, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { PURCHASE_API_URL, useGetAllGRNNums, useGetTPVoucher, useUpdateTPVoucher } from "@prime-fresh/purchase_api";
import { initValTransportPaymentVoucher, PURCHASE_ARRAYS, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { TPVoucherPreview } from "./transport-payment-voucher.preview";
import { useNavigate, useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";

export const TransportPaymentVoucherUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { voucherid } = useParams<{ voucherid: string }>();
  const tpVoucherId = voucherid ? voucherid : '';
  const { data: tpVoucherData, isLoading } = useGetTPVoucher(PURCHASE_API_URL.GET_A_TP_VOUCHER, tpVoucherId);
  const tpVoucherValues = tpVoucherData ? tpVoucherData : initValTransportPaymentVoucher;

  const { data: grnNums } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
  const allGRNNumbers = grnNums ? grnNums : [];
  const { mutateAsync: mutatePatch, error, data: Res } = useUpdateTPVoucher(PURCHASE_API_URL.UPDATE_TP_VOUCHER, tpVoucherId);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePatch(formData).then(() => {
      toast.success(Res? Res.message: "Voucher updating.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER);
      }, 2500);
    }).catch(() => {
      toast.error(error? error.message : "Error while updating voucher.");
    });;
  };
  return (
    <>
      {isLoading ?
        (<Box sx={{ flex: 1 }} >
          <LinearProgress />
        </Box >) :
        (<Formik
              enableReinitialize={true}
              initialValues={tpVoucherValues}
              onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
              }}
            >
              {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h4">Transport Payment Voucher</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack direction="row" justifyContent="end" alignItems="center">
                        <Button
                          type="submit"
                          variant="contained"
                          color="success"
                          size="large"
                          sx={{ width: 150 }}
                        >
                          Update
                        </Button>
                        <Button
                          type="reset"
                          variant="contained"
                          color="secondary"
                          size="large"
                          sx={{ width: 150, marginLeft: 2 }}
                        >
                          Reset
                        </Button>
                        <Button
                          variant="contained"
                          color='info'
                          size='large'
                          sx={{ width: 150, marginLeft: 2 }}
                          onClick={() => dispatch(setPreview(true))}
                        >
                          Preview
                        </Button>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <SelectInput
                        isRequired={false}
                        label="Select GRN"
                        name="grnNo"
                        options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                        value={allGRNNumbers.find(nums => nums.grnNo === values.grnNo)?.id}
                        handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="location"
                        label="Location"
                        value={values.location}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="debitCreditTo"
                        label="Debit / Credit To"
                        value={values.debitCreditTo}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="payReceivedFrom"
                        label="Pay To / Received From"
                        value={values.payReceivedFrom}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="driverName"
                        label="Driver Name"
                        value={values.driverName}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="contactNo"
                        label="Contact No"
                        value={values.contactNo}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="number"
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
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="dispatchLocation"
                        label="Dispatch Location"
                        value={values.dispatchLocation}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="destinationLocation"
                        label="Destination Location"
                        value={values.destinationLocation}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextInput
                        type="text"
                        isRequired={false}
                        name="products"
                        label="Products"
                        value={values.products}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <SelectInput
                        isRequired={true}
                        label="Payment Mode"
                        name="paymentMode"
                        options={PURCHASE_ARRAYS.paymentMode}
                        value={values.paymentMode}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="text"
                        isRequired={false}
                        name="freightAmt"
                        label="Freight Amount"
                        value={values.freightAmt}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextInput
                        type="text"
                        isRequired={false}
                        name="totalAmt"
                        label="Total Amount"
                        value={values.totalAmt}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextInput
                        type="text"
                        isRequired={false}
                        name="amtWords"
                        label="Amount In Words"
                        value={values.amtWords}
                        handleChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextInput
                        type="text"
                        isRequired={true}
                        name="receiverName"
                        label="Receiver Name"
                        value={values.receiverName}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                      />
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
                        isRequired={false}
                        label="is KYC attached? (Driver Lic. / RC Book / PAN)"
                        name="kyc"
                        value={values.kyc}
                        options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors} />
                    </Grid>
                    <Grid item xs={12}>
                      <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>)}
      <TPVoucherPreview />
    </>
  );
};