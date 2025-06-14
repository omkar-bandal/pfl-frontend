/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider, useFormik } from 'formik'
import { Box, Grid2, LinearProgress } from '@mui/material'
import { LPVoucherPreview } from './labor-payment-voucher.preview'
import { setPreview, useAppDispatch } from '@prime-fresh/modules'
import { appendFormData, mapToValueLabelArray, numToWords } from '@prime-fresh/shared/modules'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetAllGRNNums, useGetCompanyNames } from '@prime-fresh/shared/modules'
import {
  labourPaymentVoucherInitialValue,
  labourPaymentVoucherSchema,
  PURCHASE_ARRAYS,
  PURCHASE_ROUTES,
  setLPVoucherFormPreview,
  useCreateLaborPaymentVoucher,
  useGetLaborPaymentVoucherForUpdateById,
  useUpdateLaborPaymentVoucherById
} from '@prime-fresh/purchase/modules'
import {
  FormButtonGroup,
  ImageUpload,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast
} from '@prime-fresh/ui_shared'
import { ILaborPaymentVoucher } from '@prime-fresh/purchase_api'

export const LabourPaymentVoucherForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { voucherid } = useParams<{ voucherid: string }>();
  const lpVoucherId = voucherid ? voucherid : '';

  const { data: lpVoucher, isLoading } = useGetLaborPaymentVoucherForUpdateById(lpVoucherId);

  const lpVoucherData = lpVoucher?.data ? lpVoucher.data : labourPaymentVoucherInitialValue;

  const lpVoucherInitVal = lpVoucherId === '' ? labourPaymentVoucherInitialValue : lpVoucherData;

  const { data } = useGetAllGRNNums();
  const allGRNNums = data?.data ? mapToValueLabelArray(data.data, 'id', 'grnNo') : [];

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: lpVoucherInitVal,
    validationSchema: labourPaymentVoucherSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    }
  });

  const calculateAmounts = (event: any) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
    if (formik.values.noOfLabours !== null && formik.values.ratePerLabour !== null) {
      const totalAmt = formik.values.noOfLabours * formik.values.ratePerLabour;
      const amtWords = numToWords(totalAmt);
      formik.setFieldValue("totalAmt", totalAmt);
      formik.setFieldValue("amtWords", amtWords);
    }
  };

  const onFormPreview = (values: Omit<ILaborPaymentVoucher,'id'>) => {
    const data: any = {
      ...values,
      grnNo: values.grnNo ? allGRNNums.find(nums => nums.value === values.grnNo)?.label : null,
      companyName: values.companyName ? companyNames.find(names => names.value === values.companyName)?.label : null,
    };
    dispatch(setLPVoucherFormPreview(data));
    dispatch(setPreview(true));
  };


  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateLaborPaymentVoucher();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateLaborPaymentVoucherById(lpVoucherId);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    lpVoucherId === '' ?
      (mutatePost(formData).then(() => {
        toast.success(resPost ? resPost.message : "Voucher created.")
        setTimeout(() => {
          navigate(PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER);
        }, 2000);
      }).catch(() => {
        toast.error(errorPost ? errorPost.message : "Error while creating voucher")
      }))
      :
      (mutatePatch(formData).then(() => {
        toast.success(resPatch ? resPatch.message : "Voucher updated.")
        setTimeout(() => {
          navigate(PURCHASE_ROUTES.GET_ALL_LABOUR_CASH_VOUCHER);
        }, 2000);
      }).catch(() => {
        toast.error(errorPatch ? errorPatch.message : "Error while updating voucher")
      }));
  };
  return (
    <Box flex={1}>
      {isLoading ?
        (<LinearProgress />) :

        (<FormikProvider key={lpVoucherId === '' ? 'create-voucher' : 'update-voucher'} value={formik}>
          <form key={lpVoucherId === '' ? 'create-form' : 'update-form'} onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle='Labor Payment Voucher' />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNums}
                  value={formik.values.grnNo}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired={true}
                  label="Company Name"
                  name="companyName"
                  options={companyNames}
                  value={formik.values.companyName}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="location"
                  label="Location"
                  value={formik.values.location}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="debitCreditTo"
                  label="Debit / Credit To"
                  value={formik.values.debitCreditTo}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="payReceivedFrom"
                  label="Pay To / Received From"
                  value={formik.values.payReceivedFrom}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type='date'
                  isRequired={true}
                  name="loadingDate"
                  label="Day of Loading / Unloading"
                  value={formik.values.loadingDate}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type='number'
                  isRequired={true}
                  name="noOfLabours"
                  label="No of Labours"
                  value={formik.values.noOfLabours || ''}
                  handleChange={formik.handleChange}
                  onBlur={(e) => calculateAmounts(e)} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type='number'
                  isRequired={true}
                  name="ratePerLabour"
                  label="Per Day of Labour"
                  value={formik.values.ratePerLabour || ''}
                  handleChange={formik.handleChange}
                  onBlur={(e) => calculateAmounts(e)} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  isReadOnly={true}
                  isRequired={false}
                  name="totalAmt"
                  label="Total Amount"
                  value={formik.values.totalAmt || ''} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={formik.values.paymentMode}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 9 }}>
                <TextInput
                  isReadOnly={true}
                  isRequired={false}
                  name="amtWords"
                  label="Amount In Words"
                  value={formik.values.amtWords} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="contactNo"
                  label="Contact Number"
                  value={formik.values.contactNo}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 2 }}>
                <TextInput
                  type='text'
                  isRequired={false}
                  name="altContactNo"
                  label="Alternate Contact"
                  value={formik.values.altContactNo}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type='text'
                  isRequired={true}
                  name="receiverName"
                  label="Receiver Name"
                  value={formik.values.receiverName}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <TextInput
                  type='text'
                  isRequired={false}
                  name="products"
                  label="Products"
                  value={formik.values.products}
                  handleChange={formik.handleChange} />
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
                  isRequired={true}
                  label="is Labour KYC Attached ? (If available) :"
                  name="kyc"
                  alignment='vertical'
                  value={formik.values.kyc}
                  options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                  handleChange={formik.handleChange} />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid2>
              <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormButtonGroup
                  submitLabel={lpVoucherId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={lpVoucherId === '' ? errorPost : errorPatch}
                  resetLabel='Reset'
                  onReset={formik.handleReset}
                  previewLabel='Preview'
                  onPreview={() => onFormPreview(formik.values)} 
                  />
              </Grid2>
            </Grid2>
          </form>
        </FormikProvider>
        )}
      <LPVoucherPreview />
    </Box>
  )
}
