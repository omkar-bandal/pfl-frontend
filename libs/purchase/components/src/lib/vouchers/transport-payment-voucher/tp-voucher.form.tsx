/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid2, InputAdornment, LinearProgress } from '@mui/material';
import {
  transportPaymentVoucherInitialValue,
  PURCHASE_ARRAYS,
  PURCHASE_ROUTES,
  setTPVoucherFormPreview,
  transportPaymentVoucherSchema,
  useCreateTransportPaymentVoucher,
  useGetTransportPaymentVoucherForUpdateById,
  useUpdateTransportPaymentVoucherById,
} from '@prime-fresh/purchase/modules';
import {
  FormButtonGroup,
  ImageUploadMultiple,
  MultiSelectAutocomplete,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { FormikProvider, useFormik } from 'formik';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { TPVoucherPreview } from './tp-voucher.preview';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetCompanyNames,
  useGetAllGRNNums,
  mapToValueLabelArray,
  appendFormData,
  numToWords,
  handleFormKeyDown,
} from '@prime-fresh/shared/modules';
import { ChangeEvent } from 'react';
import { ITranportPaymentVoucher } from '@prime-fresh/purchase_api';

export const TransportPaymentVoucherForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { voucherid } = useParams<{ voucherid: string }>();
  const tpVoucherId = voucherid ? voucherid : '';

  const { data: tpVoucher, isLoading } = useGetTransportPaymentVoucherForUpdateById(tpVoucherId);
  const tpVoucherData = tpVoucher?.data ? tpVoucher.data : transportPaymentVoucherInitialValue;
  const tpVoucherInitVal = tpVoucherId === '' ? transportPaymentVoucherInitialValue : tpVoucherData;

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNums = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: tpVoucherInitVal,
    validationSchema: transportPaymentVoucherSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('TP voucher submit: ', values);
      handleSubmit(values);
    },
  });
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
    const amtInWords = numToWords(Number(value));
    formik.setFieldValue('amtWords', amtInWords);
  };
  const onFormPreview = (values: Omit<ITranportPaymentVoucher, 'id'>) => {
    const data: any = {
      ...values,
      grnNo: values.grnNo ? allGRNNums.find((nums) => nums.value === values.grnNo)?.label : null,
      companyName: values.companyName ? companyNames.find((names) => names.value === values.companyName)?.label : null,
    };
    dispatch(setTPVoucherFormPreview(data));
    dispatch(setPreview(true));
  };
  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateTransportPaymentVoucher();
  const {
    mutateAsync: mutatePatch,
    error: errorPatch,
    data: resPatch,
  } = useUpdateTransportPaymentVoucherById(tpVoucherId);

  const handleSubmit = (values: Omit<ITranportPaymentVoucher, 'id'>) => {
    const formData = new FormData();
    appendFormData(formData, values);
    tpVoucherId === ''
      ? mutatePost(formData)
          .then(() => {
            toast.success(resPost ? resPost.message : 'Voucher created.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating voucher');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(resPatch ? resPatch.message : 'Voucher updated.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_TRANSPORT_CASH_VOUCHER);
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
        <FormikProvider key={tpVoucherId === '' ? 'create-voucher' : 'update-voucher'} value={formik}>
          <form
            key={tpVoucherId === '' ? 'create-form' : 'update-form'}
            encType="multipart/form-data"
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
          >
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle="Transport Payment Voucher" />
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
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={formik.values.debitCreditTo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={formik.values.payReceivedFrom}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="driverName"
                  label="Driver Name"
                  value={formik.values.driverName}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="contactNo"
                  label="Contact No"
                  value={formik.values.contactNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact Number"
                  value={formik.values.altContactNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="vehicleNo"
                  label="Vehicle No"
                  value={formik.values.vehicleNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="dispatchLocation"
                  label="Dispatch Location"
                  value={formik.values.dispatchLocation}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="destinationLocation"
                  label="Destination Location"
                  value={formik.values.destinationLocation}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={formik.values.receiverName}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 9 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="products"
                  label="Products"
                  value={formik.values.products}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={formik.values.paymentMode}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="decidedAmt"
                  label="Decided Amount"
                  value={formik.values.decidedAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="actualAmt"
                  label="Actual Amount"
                  value={formik.values.actualAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="advanceAmt"
                  label="Advance Paid Amount"
                  value={formik.values.advanceAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="totalPayableAmt"
                  label="Total Payable Amount"
                  value={formik.values.totalPayableAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="deductionAmt"
                  label="Any Deduction"
                  value={formik.values.deductionAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="extraAmt"
                  label="Any Extra Amount"
                  value={formik.values.extraAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="freightAmt"
                  label="Freight Amount"
                  value={formik.values.freightAmt || ''}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="finalPayableAmt"
                  label="Final Payable Amount"
                  value={formik.values.finalPayableAmt || ''}
                  handleChange={(e) => handleAmountChange(e)}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="amtWords"
                  label="Amount In Words"
                  value={formik.values.amtWords}
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
                <RadioGroupInput
                  isRequired={false}
                  label="is KYC attached? (Driver Lic. / RC Book / PAN)"
                  name="kyc"
                  alignment="vertical"
                  value={formik.values.kyc}
                  options={[
                    { label: 'Yes', value: true },
                    { label: 'No', value: false },
                  ]}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <ImageUploadMultiple isRequired={false} name="anyAttachment" label="Any Attachment" />
                {/* <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" /> */}
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                marginY={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <FormButtonGroup
                  submitLabel={tpVoucherId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={tpVoucherId === '' ? errorPost : errorPatch}
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
      <TPVoucherPreview />
    </Box>
  );
};
