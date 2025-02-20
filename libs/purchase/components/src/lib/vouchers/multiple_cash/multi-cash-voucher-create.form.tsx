/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, IconButton } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValParticulars, initValMMultipleCashVoucher, PURCHASE_ARRAYS, PURCHASE_ROUTES, multicashVoucherSchema, setPreviewMCVoucher } from "@prime-fresh/purchase/modules";
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Particulars, PostMCvoucher, PURCHASE_API_URL, useCreateMCVoucher } from "@prime-fresh/purchase_api";
import { MCVoucherPreview } from "./multi-cash-voucher.preview";
import { setPreview } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useNavigate } from "react-router-dom";
import { useGetCompanyNames, useGetAllGRNNums, useGetAllDeliveryChallanNums, mapToValueLabelArray, numToWords } from "@prime-fresh/shared/modules";
import { ChangeEvent, useCallback } from "react";

export const MultipleCashVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNums = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: dcnos } = useGetAllDeliveryChallanNums();
  const allDCNums = dcnos?.data ? mapToValueLabelArray(dcnos.data, 'id', 'challanNo') : [];

  const recalcTotal = useCallback((particulars: Particulars[]): number => {
    return particulars.reduce((acc, item) => acc + (Number(item.amt) || 0), 0);
  },[]);

  const handleRemove = useCallback((index: number, values: PostMCvoucher, setFieldValue: any) => {
    const updatedParticulars = values.particulars.filter((_, i) => i !== index);
    const total = recalcTotal(updatedParticulars);
    setFieldValue("particulars", updatedParticulars, false);
    setFieldValue("totalAmt", total, true);
    setFieldValue("amtWords", numToWords(total), true);
  }, [recalcTotal]);

  const handlePush = useCallback((newItem: Particulars, values: PostMCvoucher, setFieldValue: any) => {
    const updatedParticulars = [...values.particulars, newItem];
    const total = recalcTotal(updatedParticulars);
    setFieldValue("particulars", updatedParticulars, false);
    setFieldValue("totalAmt", total, true);
    setFieldValue("amtWords", numToWords(total), true);
  }, [recalcTotal]);

  const handleAmountChange = useCallback((e: ChangeEvent<HTMLInputElement>, index: number, values: PostMCvoucher, setFieldValue: any) => {
    const newAmount = Number(e.target.value);
    const updatedParticulars = values.particulars.map((item, i) =>
      i === index ? { ...item, amt: newAmount } : item
    );
    const total = recalcTotal(updatedParticulars);
    setFieldValue(`particulars.${index}.amt`, newAmount, false);
    setFieldValue("totalAmt", total, true);
    setFieldValue("amtWords", numToWords(total), true);
  }, [recalcTotal]);


  const { mutateAsync: mutatePost, error, data: Res } = useCreateMCVoucher(PURCHASE_API_URL.POST_MC_VOUCHER);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(Res ? Res.message : "Voucher created.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_MULT_CASH_VOUCHER);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating voucher")
    });;
  };

  return (
    <>
      <Formik
        initialValues={initValMMultipleCashVoucher}
        validationSchema={multicashVoucherSchema}
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
              <Grid item xs={12} marginBottom={2}>
                <PageTitle pagetitle='Multiple Cash Voucher' />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNums}
                  value={values.grnNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  label="Select Challan"
                  name="challanNo"
                  options={allDCNums}
                  value={values.challanNo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={companyNames}
                  value={values.companyName}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={values.debitCreditTo}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={values.payReceivedFrom}
                  handleChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange}
                />
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
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`particulars.${index}.amt`}
                              label="Amount"
                              value={values.particulars[index].amt || null}
                              handleChange={e => {
                                handleChange(e);
                                handleAmountChange(e, index, values, setFieldValue)
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={1} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            {values.particulars.length > 1 &&
                              <IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => handleRemove(index, values, setFieldValue)}>
                                <Close />
                              </IconButton>}
                            <IconButton color="primary" size="large" sx={{ marginTop: 2 }} onClick={() => handlePush(initValParticulars, values, setFieldValue)}>
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
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput
                  isRequired={false}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt || null}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords}
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
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid>
              <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                <FormResetBtn label="Reset" handleReset={handleReset} />
                <FormPreviewBtn onClick={() => { dispatch(setPreviewMCVoucher(values)); dispatch(setPreview(true)) }} />
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
