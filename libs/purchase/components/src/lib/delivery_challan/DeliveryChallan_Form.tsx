import React from "react";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { deliveryChallanSchema, initValDeliveryChallan, initValMaterials, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewDC } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, Notification, RadioGroupInput, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { PostDeliveryChallan, PURCHASE_API_URL, useCreateDeliveryChallan, useGetAllGRNNums } from "@prime-fresh/purchase_api";
import { DeliveryChallanPreview } from "./DeliveryChallan_Preview";
import { useDispatch } from "react-redux";
import { setPreview, showNotification } from "@prime-fresh/modules";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useNavigate } from "react-router-dom";

export const DeliveryChallanForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
  const allGRNNumbers = data ? data : [];
  const { mutateAsync: mutatePost, error, data: Res } = useCreateDeliveryChallan(PURCHASE_API_URL.POST_DELIVERY_CHALLAN);

  const handleSubmit = (values: PostDeliveryChallan) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Delivery challan created successfully !!!" }));
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_DELIVERY_CHALLAN);
      }, 5000);
    }).catch(() => {
      dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
    });
  };

  return (
    <>
      <Notification />
      <Formik
        initialValues={initValDeliveryChallan}
        validationSchema={deliveryChallanSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4">Delivery Challan</Typography>
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
                    sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewDC(values)); dispatch(setPreview(true)) }}>Preview</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <RadioGroupInput
                  isRequired={true}
                  name="deliveryCType"
                  label="Challan Type"
                  options={PURCHASE_ARRAYS.deliveryChallanType}
                  value={values.deliveryCType}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              {values.deliveryCType === "Other" ?
                (<Grid item xs={12}>
                  <TextInput
                    isRequired={true}
                    name="otherCType"
                    label="If other please specify "
                    type="text" value={values.otherCType}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors} />
                </Grid>) : ('')}
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  name="grnNo"
                  label="Referred GRN"
                  value={values.grnNo}
                  options={allGRNNumbers ? mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo') : [{ label: '', value: '' }]}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput
                  isRequired={true}
                  name="companyName"
                  label="Company Name"
                  value={values.companyName}
                  options={PURCHASE_ARRAYS.companyNames}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  isRequired={true}
                  name="partyName"
                  label="Party Name"
                  type="text"
                  value={values.partyName}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="items">
                  {({ remove, push }) => (
                    <>
                      {values.items.map((item, index) => (
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
                            <Typography variant="body1" component="div">Product : {index + 1}</Typography>
                            <IconButton color="error" onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`items.${index}.itemName`}
                              label="Name"
                              value={item.itemName}
                              handleChange={handleChange}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`items.${index}.itemQty`}
                              label="Quantity"
                              value={item.itemQty}
                              handleChange={handleChange}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`items.${index}.rate`}
                              label="Rate"
                              value={item.rate}
                              handleChange={handleChange}
                              touched={touched}
                              errors={errors}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              name={`items.${index}.amt`}
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
                          onClick={() => push(initValMaterials)}
                        >
                          Add More
                        </Button>
                      </Grid>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type="number"
                  isRequired={false}
                  name="totAmt"
                  label="Total Amount"
                  value={values.totAmt}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="fromLocation"
                  label="From"
                  value={values.fromLocation}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="toLocation"
                  label="To"
                  value={values.toLocation}
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
                  type="text"
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact No"
                  value={values.altContactNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="rmn"
                  label="RM Name"
                  value={values.rmn}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  type="text"
                  isRequired={true}
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
        )}
      </Formik>
      <DeliveryChallanPreview />
    </>
  );
};