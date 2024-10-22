import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValMCVItems, initValMMultipleCashVoucher, numToWords, PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { Alertbar, ImageUpload, mapToValueLabelArray, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { MVItems, PostMCvoucher, PURCHASE_API_URL, useCreateMCVoucher, useGetAllGRN } from "@prime-fresh/purchase_api";
import { ADMIN_API_URL, useGetAllUOMs } from "@prime-fresh/admin_api";
import { UOM } from "@prime-fresh/admin_modules";
import { MCVoucherPreview } from "./MC_Voucher_Preview";
import { previewState, setPreview, useAppSelector } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";

export const MultipleCashVoucherForm = () => {
  const dispatch = useDispatch();
  const { data } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_UOM);
  const allGRN = data ? data : [];
  const allUOMS = UOMs ? UOMs : [];
  const open = useAppSelector(previewState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAmounts = (values: PostMCvoucher, setFieldValue: (field: string, value: any,) => void) => {
    const updatedProducts = values.mvItems.map((product: MVItems) => ({
      ...product,
      amt: product.itemQty * product.rate,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const totalAmt = updatedProducts.reduce((acc: any, product: MVItems) => acc + product.amt, 0);
    const amtWords = numToWords(totalAmt);
    setFieldValue("mvItems", updatedProducts);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };
  const { mutateAsync: mutatePost, isPending, isError, error, data: Res } = useCreateMCVoucher(PURCHASE_API_URL.POST_MC_VOUCHER);
  const handleSubmit = (values: PostMCvoucher) => {
    const formData = new FormData();

    (Object.keys(values) as Array<keyof PostMCvoucher>).forEach((key) => {
      const value = values[key];

      if (key === "anyAttachment" && value instanceof File) {
        formData.append(key, value); // Append file directly
      } else if (key === "mvItems" && Array.isArray(value)) {
        // Handle mvItems array of objects
        value.forEach((item, index) => {
          // Append each field of mvItems
          Object.keys(item).forEach((field) => {
            const fieldValue = item[field as keyof MVItems];

            // Check if fieldValue is not undefined or null
            if (fieldValue !== undefined && fieldValue !== null) {
              formData.append(`mvItems[${index}][${field}]`, fieldValue.toString());
            }
          });
        });
      } else if (typeof value !== "undefined" && value !== null) {
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
        initialValues={initValMMultipleCashVoucher}
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
                <TextInput type="text" isRequired={true} name="debitCreditTo" label="Debit / Credit To" value={values.debitCreditTo} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput type="text" isRequired={true} name="payReceivedFrom" label="Pay To / Received From" value={values.payReceivedFrom} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="mvItems">
                  {({ remove, push }) => (
                    <>
                      {values.mvItems.map((_, index) => (
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
                              isRequired={false}
                              name={`mvItems.${index}.itemName`}
                              label="Name"
                              value={values.mvItems[index].itemName}
                              handleChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <SelectInput isRequired={true} label="Unit" name={`mvItems.${index}.itemUom`} options={mapToValueLabelArray<UOM>(allUOMS, 'id', 'unit')} value={values.mvItems[index].itemUom} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              name={`mvItems.${index}.itemQty`}
                              label="Quantity"
                              value={values.mvItems[index].itemQty}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`mvItems.${index}.itemQty`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              name={`mvItems.${index}.rate`}
                              label="Rate"
                              value={values.mvItems[index].rate}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`mvItems.${index}.rate`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              name={`mvItems.${index}.amt`}
                              label="Amount"
                              value={values.mvItems[index].amt}
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
                          onClick={() => push(initValMCVItems)}
                        >
                          Add More
                        </Button>
                      </Grid>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={2}>
                <SelectInput isRequired={true} label="Payment Mode" name="paymentMode" options={PURCHASE_ARRAYS.paymentMode} value={values.paymentMode} handleChange={handleChange} />
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
                  isRequired={true}
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
        )
        }
      </Formik >
      <MCVoucherPreview open={open} handleClose={() => dispatch(setPreview(false))} />
    </>
  );
};
