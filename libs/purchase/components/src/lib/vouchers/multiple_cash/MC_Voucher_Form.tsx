import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValParticulars, initValMMultipleCashVoucher, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, multicashVoucherSchema } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, Notification, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Particulars, PostMCvoucher, PURCHASE_API_URL, useCreateMCVoucher, useGetAllDeliveryChallanNums, useGetAllGRNNums } from "@prime-fresh/purchase_api";
import { MCVoucherPreview } from "./MC_Voucher_Preview";
import { setPreview, showNotification } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useNavigate } from "react-router-dom";

export const MultipleCashVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: grnnos } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
  const allGRNNums = grnnos ? grnnos : [];

  const { data: dcnos } = useGetAllDeliveryChallanNums(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN_NO);
  const allDCNums = dcnos ? dcnos : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAmounts = (values: PostMCvoucher, setFieldValue: (field: string, value: any,) => void) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const totalAmt = values.particulars.reduce((acc: any, product: Particulars) => acc + product.amt, 0);
    const amtWords = numToWords(totalAmt);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };

  const { mutateAsync: mutatePost, error, data: Res } = useCreateMCVoucher(PURCHASE_API_URL.POST_MC_VOUCHER);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Multiple cash voucher created successfully !!!"  }));
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER);
      }, 5000);
    }).catch(() => {
      dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
    });;
  };

  return (
    <>
      <Notification/>
      <Formik
        initialValues={initValMMultipleCashVoucher}
        validationSchema={multicashVoucherSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Grid container columnSpacing={2} rowSpacing={2} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">Multiple Cash Voucher</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                  <Button type="submit" variant="contained" color="success" size="large" sx={{ width: 150 }}>Create</Button>
                  <Button type="reset" variant="contained" color="secondary" size="large" sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                  <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => dispatch(setPreview(true))}>Preview</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={mapToValueLabelArray(allGRNNums, 'id', 'grnNo')}
                  value={values.grnNo}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput
                  isRequired={false}
                  label="Select Challan"
                  name="challanNo"
                  options={mapToValueLabelArray(allDCNums, 'id', 'challanNo')}
                  value={values.challanNo}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={PURCHASE_ARRAYS.companyNames}
                  value={values.companyName}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={values.debitCreditTo}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={values.payReceivedFrom}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="particulars">
                  {({ remove, push }) => (
                    <>
                      {values.particulars.map((_, index) => (
                        <Grid
                          container
                          columnSpacing={1}
                          key={index}
                          alignItems="center"
                        >
                          <Grid item xs={12} md={9}>
                            <TextInput
                              type="text"
                              multiline
                              maxRows={2}
                              isRequired={true}
                              name={`particulars.${index}.description`}
                              label="Description"
                              value={values.particulars[index].description}
                              handleChange={handleChange}
                              touched={touched}
                  errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`particulars.${index}.amt`}
                              label="Amount"
                              value={values.particulars[index].amt}
                              handleChange={handleChange}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                              touched={touched}
                  errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                            <IconButton color="primary" size="large" sx={{ marginTop: 2 }} onClick={() => push(initValParticulars)}>
                              <Add />
                            </IconButton>
                          </Grid>
                        </Grid>
                      ))}
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={2}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={values.paymentMode}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type="number"
                  isRequired={false}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={values.receiverName}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
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
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
            </Grid>
          </form>
        )
        }
      </Formik >
      <MCVoucherPreview />
    </>
  );
};
