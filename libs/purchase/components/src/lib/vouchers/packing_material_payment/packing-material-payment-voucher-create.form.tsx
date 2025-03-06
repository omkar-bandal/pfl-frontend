import { Button, Grid, IconButton, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValPackingMaterials, initValPackingMaterialVoucher, packingMaterialPaymentVoucherSchema, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewPMPVoucher, useCreatePackingMeterialPaymentVoucher } from "@prime-fresh/purchase/modules";
import { FormButtonGroup, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { PostPMPvoucher } from "@prime-fresh/purchase_api";
import { useDispatch } from "react-redux";
import { setPreview } from "@prime-fresh/modules";
import { PMPVoucherPreview } from "./packing-material-payment-voucher.preview";
import { useNavigate } from "react-router-dom";
import { useGetCompanyNames, useGetAllGRNNums, useGetUOMPartialData, mapToValueLabelArray, appendFormData } from "@prime-fresh/shared/modules";
import { calculateAmounts } from "./helper-functions";

export const PackingMaterialPaymentVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNumbers = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

  const { data: UOMs } = useGetUOMPartialData();
  const allUOMS = UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [];

  const { mutateAsync: mutatePost, error, data: Res } = useCreatePackingMeterialPaymentVoucher();

  const handleSubmit = (values: PostPMPvoucher) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(Res ? Res.message : "Voucher Created")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating voucher")
    });
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initValPackingMaterialVoucher}
        validationSchema={packingMaterialPaymentVoucherSchema}
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
                <PageTitle pagetitle='Packing Material Payment Voucher' />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNumbers}
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
                  name="sellerName"
                  label="Seller Name"
                  value={values.sellerName}
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
                  label="Alternate Contact No"
                  value={values.altContactNo}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.address1"
                  label="Address1"
                  value={values.address.address1}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="address.address2"
                  label="Address2"
                  value={values.address.address2}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.location"
                  label="Location"
                  value={values.address.location}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.city"
                  label="City"
                  value={values.address.city}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.state"
                  label="State"
                  value={values.address.state}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.pincode"
                  label="Pincode"
                  value={values.address.pincode}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="purpose"
                  label="Purpose"
                  value={values.purpose}
                  handleChange={handleChange} />
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
                            <Typography variant="caption" component="div">Product: {index + 1}</Typography>
                            {values.materials.length > 1 && <IconButton color="error" size="small" onClick={() => remove(index)}>
                              <Close />
                            </IconButton>}
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemName`}
                              label="Name"
                              value={item.itemName}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <SelectInput
                              isRequired={true}
                              label="Unit"
                              name={`materials.${index}.itemUom`}
                              options={allUOMS}
                              value={item.itemUom}
                              handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemQty`}
                              label="Quantity"
                              value={values.materials[index].itemQty || ""}
                              handleChange={e => calculateAmounts(index, "itemQty", e.target.value, values, setFieldValue)} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.rate`}
                              label="Rate"
                              value={values.materials[index].rate || ""}
                              handleChange={e => calculateAmounts(index, "rate", e.target.value, values, setFieldValue)} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              isReadOnly={true}
                              name={`item.${index}.amt`}
                              label="Amount"
                              value={item.amt} />
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
                          size="small"
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
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="number"
                  isRequired={false}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords} />
              </Grid>
              <Grid item xs={12} md={6}>
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
                  label="is KYC attached? (if available)"
                  name="kyc"
                  alignment="vertical"
                  value={values.kyc}
                  options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
              <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormButtonGroup
                  submitLabel='Create'
                  isSubmitting={isSubmitting}
                  isSubmitError={error}
                  resetLabel='Reset'
                  onReset={handleReset}
                  previewLabel='Preview'
                  onPreview={() => {
                    dispatch(setPreviewPMPVoucher(values));
                    dispatch(setPreview(true))
                  }} />
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <PMPVoucherPreview />
    </>
  );
};
