import {
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { PostTPvoucher, PURCHASE_API_URL, useCreateTPVoucher, useGetAllGRN } from "@prime-fresh/purchase_api";
import { initValTransportPaymentVoucher, PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { Alertbar, ImageUpload, mapToValueLabelArray, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { TPVoucherPreview } from "./TP_Voucher_Preview";

//Labour Payment Voucher
export const TransportPaymentVoucherForm = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
  const allGRN = data ? data : [];
  // const calculateAmounts = (values: PostTPvoucher, setFieldValue: (field: string, value: any,) => void) => {
  //   const amtWords = numToWords(values.totalAmt);
  //   setFieldValue("amtWords", amtWords);
  // };
  const { mutateAsync: mutatePost, isPending, isError, error, data: Res } = useCreateTPVoucher(PURCHASE_API_URL.POST_TP_VOUCHER);
  const handleSubmit = (values: PostTPvoucher) => {
    const formData = new FormData();

    (Object.keys(values) as Array<keyof PostTPvoucher>).forEach((key) => {
      const value = values[key];
      if (key === "anyAttachment" && value instanceof File) {
        formData.append(key, value);
      }
      else if (typeof value !== "undefined" && value !== null) {
        formData.append(key, value.toString()); // For all other fields
      }
    });
    // Mutate the formData with your mutation function
    mutatePost(formData);
  };
  return (
    <>
      <Alertbar open={isPending || isError} error={error} resMessage={Res} />
      <Formik
        initialValues={initValTransportPaymentVoucher}
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
                    Create
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
                <SelectInput isRequired={false} label="Select GRN" name="grnNo" options={mapToValueLabelArray(allGRN, 'id', 'grnNo')} value={values.grnNo} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange}
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
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="contactNo"
                  label="Contact No"
                  value={values.contactNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput
                  type="number"
                  isRequired={true}
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
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="destinationLocation"
                  label="Destination Location"
                  value={values.destinationLocation}
                  handleChange={handleChange}
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
                <SelectInput isRequired={true} label="Payment Mode" name="paymentMode" options={PURCHASE_ARRAYS.paymentMode} value={values.paymentMode} handleChange={handleChange} />
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
                  isRequired={false}
                  name="receivedBy"
                  label="Received By"
                  value={values.receivedBy}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <TPVoucherPreview />
    </>
  );
};