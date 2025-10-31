/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { Box, Grid2, IconButton, LinearProgress } from '@mui/material';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { Add, Close } from '@mui/icons-material';
import { MCVoucherPreview } from './mc-voucher.preview';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { handleAmountChange, handlePush, handleRemove } from './helper-function';
import { FormButtonGroup, ImageUpload, PageTitle, SelectInput, TextInput, toast } from '@prime-fresh/shared/components';
import { IMultiCashVoucher } from '@prime-fresh/services';
import {
  staticData,
  operationsRoutes,
  multicashVoucherSchema,
  useCreateMultiCashVoucher,
  useGetMultiCashVoucherForUpdateById,
  useUpdateMultiCashVoucherById,
  multipleCashVoucherInitialValue,
  particularsInitialValue,
  setMCVoucherFormPreview,
  useGetAllGRNNums,
  useGetAllDeliveryChallanNums,
} from '@prime-fresh/operations/modules';
import {
  useGetCompanyNames,
  appendFormData,
  mapToValueLabelArray,
  handleFormKeyDown,
} from '@prime-fresh/shared/modules';

export const MultipleCashVoucherForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { voucherid } = useParams<{ voucherid: string }>();
  const voucherId = voucherid ? voucherid : '';

  const { data: mcVoucher, isLoading } = useGetMultiCashVoucherForUpdateById(voucherId);
  const mcVoucherData = mcVoucher?.data ? mcVoucher.data : multipleCashVoucherInitialValue;
  const mcVoucherInitVal = voucherid === '' ? multipleCashVoucherInitialValue : mcVoucherData;

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNums = useMemo(
    () => (grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : []),
    [grnnos?.data]
  );

  const { data: dcnos } = useGetAllDeliveryChallanNums();
  const allDCNums = useMemo(
    () => (dcnos?.data ? mapToValueLabelArray(dcnos.data, 'id', 'challanNo') : []),
    [dcnos?.data]
  );

  const { data: companies } = useGetCompanyNames();
  const companyNames = useMemo(
    () => (companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : []),
    [companies?.data]
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: mcVoucherInitVal,
    validationSchema: multicashVoucherSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  const onFormPreview = (values: Omit<IMultiCashVoucher, 'id'>) => {
    const data: any = {
      ...values,
      grnNo: values.grnNo ? allGRNNums.find((nums) => nums.value === values.grnNo)?.label : null,
      challanNo: values.challanNo ? allDCNums.find((nums) => nums.value === values.challanNo)?.label : null,
      companyName: values.companyName ? companyNames.find((names) => names.value === values.companyName)?.label : null,
    };
    dispatch(setMCVoucherFormPreview(data));
    dispatch(setPreview(true));
  };

  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateMultiCashVoucher();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateMultiCashVoucherById(voucherId);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    voucherId === ''
      ? mutatePost(formData)
        .then(() => {
          toast.success(resPost ? resPost.message : 'Voucher created.');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_MULT_CASH_VOUCHER);
          }, 2000);
        })
        .catch(() => {
          toast.error(errorPost ? errorPost.message : 'Error while creating voucher');
        })
      : mutatePatch(formData)
        .then(() => {
          toast.success(resPatch ? resPatch.message : 'Voucher updated.');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_MULT_CASH_VOUCHER);
          }, 2000);
        })
        .catch(() => {
          toast.error(errorPatch ? errorPatch.message : 'Error while updating voucher');
        });
  };

  return (
    <Box flex={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <FormikProvider key={voucherId === '' ? 'create-voucher' : 'update-voucher'} value={formik}>
          <form
            key={voucherId === '' ? 'create-form' : 'update-form'}
            encType="multipart/form-data"
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
          >
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle="Multiple Voucher" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNums}
                  value={formik.values.grnNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select Challan"
                  name="challanNo"
                  options={allDCNums}
                  value={formik.values.challanNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={companyNames}
                  value={formik.values.companyName}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={formik.values.debitCreditTo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={formik.values.payReceivedFrom}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="particulars">
                  {() => (
                    <>
                      {formik.values.particulars.map((_: any, index: number) => (
                        <Grid2 container columnSpacing={1} key={index} alignItems="center">
                          <Grid2 size={{ xs: 12, md: 9 }}>
                            <TextInput
                              type="text"
                              multiline
                              maxRows={2}
                              isRequired={true}
                              name={`particulars.${index}.description`}
                              label="Description"
                              value={formik.values.particulars[index].description}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 2 }}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`particulars.${index}.amt`}
                              label="Amount"
                              value={formik.values.particulars[index].amt || null}
                              handleChange={(e) => handleAmountChange(e, index, formik)}
                            />
                          </Grid2>
                          <Grid2
                            size={{ xs: 12, md: 1 }}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}
                          >
                            {formik.values.particulars.length > 1 && (
                              <IconButton
                                color="error"
                                size="large"
                                sx={{ marginTop: 2 }}
                                onClick={() => handleRemove(index, formik)}
                              >
                                <Close />
                              </IconButton>
                            )}
                            <IconButton
                              color="primary"
                              size="large"
                              sx={{ marginTop: 2 }}
                              onClick={() => handlePush(particularsInitialValue, formik)}
                            >
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
                  options={staticData.PAYMENT_MODE}
                  value={formik.values.paymentMode}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  isRequired={false}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={formik.values.totalAmt}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={formik.values.amtWords}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={formik.values.receiverName}
                  handleChange={formik.handleChange}
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
                  value={formik.values.remark}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                marginY={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <FormButtonGroup
                  submitLabel={voucherId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={voucherId === '' ? errorPost : errorPatch}
                  resetLabel="Reset"
                  onReset={formik.handleReset}
                  previewLabel="Preview"
                  onPreview={() => onFormPreview(formik.values)}
                />
              </Grid2>
            </Grid2>
          </form>
        </FormikProvider>
      )}
      <MCVoucherPreview />
    </Box>
  );
};
