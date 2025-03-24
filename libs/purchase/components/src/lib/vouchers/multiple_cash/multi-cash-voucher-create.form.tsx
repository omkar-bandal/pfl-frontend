/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid2, IconButton } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValParticulars, initValMMultipleCashVoucher, PURCHASE_ARRAYS, PURCHASE_ROUTES, multicashVoucherSchema, setPreviewMCVoucher, useCreateMultiCashVoucher } from "@prime-fresh/purchase/modules";
import { FormButtonGroup, ImageUpload, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { Particulars, PostMCvoucher} from "@prime-fresh/purchase_api";
import { MCVoucherPreview } from "./multi-cash-voucher.preview";
import { setPreview } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetCompanyNames, useGetAllGRNNums, useGetAllDeliveryChallanNums, numToWords, appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/modules";
import { ChangeEvent, useCallback, useMemo } from "react";

export const MultipleCashVoucherForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNums = useMemo(() => grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [], [grnnos?.data]);

  const { data: companies } = useGetCompanyNames();
  const companyNames = useMemo(() => companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [], [companies?.data]);

  const { data: dcnos } = useGetAllDeliveryChallanNums();
  const allDCNums = useMemo(() => dcnos?.data ? mapToValueLabelArray(dcnos.data, 'id', 'challanNo') : [], [dcnos?.data]);

  const recalcTotal = useCallback((particulars: Particulars[]): number => {
    return particulars.reduce((acc, item) => acc + (Number(item.amt) || 0), 0);
  }, []);

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


  const { mutateAsync: mutatePost, error, data: Res } = useCreateMultiCashVoucher();

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
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle='Multiple Cash Voucher' />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNums}
                  value={values.grnNo}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select Challan"
                  name="challanNo"
                  options={allDCNums}
                  value={values.challanNo}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={companyNames}
                  value={values.companyName}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={values.debitCreditTo}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={values.payReceivedFrom}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={values.location}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="particulars">
                  {({ remove, push }) => (
                    <>
                      {values.particulars.map((_, index) => (
                        <Grid2
                          container
                          columnSpacing={1}
                          key={index}
                          alignItems="center"
                        >
                          <Grid2 size={{ xs: 12, md: 9}}>
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
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 2 }}>
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
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 1 }} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            {values.particulars.length > 1 &&
                              <IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => handleRemove(index, values, setFieldValue)}>
                                <Close />
                              </IconButton>}
                            <IconButton color="primary" size="large" sx={{ marginTop: 2 }} onClick={() => handlePush(initValParticulars, values, setFieldValue)}>
                              <Add />
                            </IconButton>
                          </Grid2>
                        </Grid2>
                      ))}
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={values.paymentMode}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  isRequired={false}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={values.totalAmt || null}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={values.amtWords}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={values.receiverName}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
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
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid2>
              <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormButtonGroup
                  submitLabel='Create'
                  isSubmitting={isSubmitting}
                  isSubmitError={error}
                  resetLabel='Reset'
                  onReset={handleReset}
                  previewLabel='Preview'
                  onPreview={() => {
                    dispatch(setPreviewMCVoucher(values));
                    dispatch(setPreview(true))
                  }} />
              </Grid2>
            </Grid2>
          </form>
        )
        }
      </Formik >
      <MCVoucherPreview />
    </>
  );
};
