import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValPackingMaterials, initValPackingMaterialVoucher, numToWords, packingMaterialPaymentVoucherSchema, PURCHASE_ARRAYS, PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, Notification, RadioGroupInput, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { Materials, PostPMPvoucher, PURCHASE_API_URL, useCreatePMPVoucher, useGetAllGRNNums } from "@prime-fresh/purchase_api";
import { ADMIN_API_URL, useGetAllUOMs } from "@prime-fresh/admin_api";
import { useDispatch } from "react-redux";
import { setPreview, showNotification } from "@prime-fresh/modules";
import { PMPVoucherPreview } from "./PMP_Voucher_Preview";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useNavigate } from "react-router-dom";

export const PackingMaterialPaymentVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
  const allGRNNumbers = data ? data : [];

  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const allUOMS = UOMs ? UOMs : [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAmounts = (values: PostPMPvoucher, setFieldValue: (field: string, value: any,) => void) => {
    const updatedProducts = values.materials.map((product: Materials) => ({
      ...product,
      amt: product.itemQty * product.rate,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const totalAmt = updatedProducts.reduce((acc: any, product: Materials) => acc + product.amt, 0);
    const amtWords = numToWords(totalAmt);
    setFieldValue("materials", updatedProducts);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };
  const { mutateAsync: mutatePost, error, data: Res } = useCreatePMPVoucher(PURCHASE_API_URL.POST_PMP_VOUCHER);
  const handleSubmit = (values: PostPMPvoucher) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Packing material payment voucher created successfully !!!" }));
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER);
      }, 5000);
    }).catch(() => {
      dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
    });;
  };
  return (
    <>
      <Notification />
      <Formik
        initialValues={initValPackingMaterialVoucher}
        validationSchema={packingMaterialPaymentVoucherSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">
                  Packing Material Payment Voucher
                </Typography>
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
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                  value={values.grnNo}
                  handleChange={handleChange} />
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
                  name="sellerName"
                  label="Seller Name"
                  value={values.sellerName}
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
                  type="text"
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact No"
                  value={values.altContactNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.address1"
                  label="Address1"
                  value={values.address.address1}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="address.address2"
                  label="Address2"
                  value={values.address.address2}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.location"
                  label="Location"
                  value={values.address.location}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.city"
                  label="City"
                  value={values.address.city}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.state"
                  label="State"
                  value={values.address.state}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.pincode"
                  label="Pincode"
                  value={values.address.pincode}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="purpose"
                  label="Purpose"
                  value={values.purpose}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="materials">
                  {({ remove, push }) => (
                    <>
                      {values.materials.map((item, index) => (
                        <Grid
                          container
                          columnSpacing={1}
                          key={index}
                          alignItems="center"
                          sx={{
                            border: `1px solid #BDBDBD`,
                            marginY: 1,
                            padding: 1,
                            borderRadius: 2,
                          }}
                        >
                          <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography variant="body1" component="div">Product: {index + 1}</Typography>
                            <IconButton
                              color="error"
                              onClick={() => remove(index)}
                            >
                              <Close />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemName`}
                              label="Name"
                              value={item.itemName}
                              handleChange={handleChange}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <SelectInput
                              isRequired={true}
                              label="Unit"
                              name={`materials.${index}.itemUom`}
                              options={mapToValueLabelArray(allUOMS, 'id', 'unit')}
                              value={item.itemUom}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemQty`}
                              label="Quantity"
                              value={values.materials[index].itemQty}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`materials.${index}.itemQty`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.rate`}
                              label="Rate"
                              value={values.materials[index].rate}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`materials.${index}.rate`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              name={`item.${index}.amt`}
                              label="Amount"
                              value={item.amt}
                              handleChange={handleChange}
                            />
                          </Grid>
                        </Grid>
                      ))}
                      <Grid
                        item
                        xs={12}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "end",
                        }}
                      >
                        <Button
                          variant="text"
                          startIcon={<Add />}
                          onClick={() => push(initValPackingMaterials)}
                        >
                          Add More
                        </Button>
                      </Grid>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
                <TextInput
                  type="number"
                  isRequired={false}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt}
                  handleChange={handleChange}
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
              <Grid item xs={12} md={6}>
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
                  label="is KYC attached? (if available)"
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
      </Formik>
      <PMPVoucherPreview />
    </>
  );
};
