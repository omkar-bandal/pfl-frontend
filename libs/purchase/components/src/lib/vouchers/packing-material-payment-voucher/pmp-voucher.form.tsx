/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Grid2, IconButton, LinearProgress, Typography } from '@mui/material';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { Add, Close } from '@mui/icons-material';
import {
  packingMaterialPaymentVoucherSchema,
  packingMaterialsInitialValue,
  packingMaterialVoucherInitialValue,
  PURCHASE_ARRAYS,
  PURCHASE_ROUTES,
  setPMPVoucherFormPreview,
  useCreatePackingMeterialPaymentVoucher,
  useGetPackingMeterialPaymentVoucherForUpdateById,
  useUpdatePackingMeterialPaymentVoucherById,
} from '@prime-fresh/purchase/modules';
import {
  FormButtonGroup,
  ImageUpload,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { IPackingMaterialPaymentVoucher } from '@prime-fresh/purchase_api';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { PMPVoucherPreview } from './pmp-voucher.preview';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetCompanyNames,
  useGetAllGRNNums,
  useGetUOMPartialData,
  mapToValueLabelArray,
  appendFormData,
  handleFormKeyDown,
} from '@prime-fresh/shared/modules';
import { calculateAmounts } from './helper-functions';

export const PackingMaterialPaymentVoucherForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { voucherid } = useParams<{ voucherid: string }>();
  const pmpVoucherId = voucherid ? voucherid : '';
  const { data: pmpVoucher, isLoading } = useGetPackingMeterialPaymentVoucherForUpdateById(pmpVoucherId);
  const pmpVoucherData = pmpVoucher?.data ? pmpVoucher.data : packingMaterialVoucherInitialValue;
  const pmpVoucherInitVal = pmpVoucherId === '' ? packingMaterialVoucherInitialValue : pmpVoucherData;

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  const { data: grnnos } = useGetAllGRNNums();
  const allGRNNumbers = grnnos?.data ? mapToValueLabelArray(grnnos.data, 'id', 'grnNo') : [];

  const { data: UOMs } = useGetUOMPartialData();
  const allUOMS = UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: pmpVoucherInitVal,
    validationSchema: packingMaterialPaymentVoucherSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const onFormPreview = (values: Omit<IPackingMaterialPaymentVoucher, 'id'>) => {
    const data: any = {
      ...values,
      grnNo: values.grnNo ? allGRNNumbers.find((nums) => nums.value === values.grnNo)?.label : null,
      companyName: values.companyName ? companyNames.find((names) => names.value === values.companyName)?.label : null,
      materials: values.materials.map((products) => ({
        ...products,
        itemUom: products.itemUom ? allUOMS.find((uom) => uom.value === products.itemUom)?.label : null,
      })),
    };
    dispatch(setPMPVoucherFormPreview(data));
    dispatch(setPreview(true));
  };

  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreatePackingMeterialPaymentVoucher();
  const {
    mutateAsync: mutatePatch,
    error: errorPatch,
    data: resPatch,
  } = useUpdatePackingMeterialPaymentVoucherById(pmpVoucherId);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    pmpVoucherId === ''
      ? mutatePost(formData)
          .then(() => {
            toast.success(resPost ? resPost.message : 'Voucher created.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating voucher');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(resPatch ? resPatch.message : 'Voucher updated.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_PACKING_MATERIAL_VOUCHER);
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
        <FormikProvider key={pmpVoucherId === '' ? 'create-voucher' : 'update-voucher'} value={formik}>
          <form
            key={pmpVoucherId === '' ? 'create-form' : 'update-form'}
            encType="multipart/form-data"
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
          >
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle="Packing Material Payment Voucher" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select GRN"
                  name="grnNo"
                  options={allGRNNumbers}
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
                  name="sellerName"
                  label="Seller Name"
                  value={formik.values.sellerName}
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
                  label="Alternate Contact No"
                  value={formik.values.altContactNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.address1"
                  label="Address1"
                  value={formik.values.address?.address1 || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="address.address2"
                  label="Address2"
                  value={formik.values.address?.address2 || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.location"
                  label="Location"
                  value={formik.values.address?.location || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.city"
                  label="City"
                  value={formik.values.address?.city || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.state"
                  label="State"
                  value={formik.values.address?.state || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="address.pincode"
                  label="Pincode"
                  value={formik.values.address?.pincode || ''}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="purpose"
                  label="Purpose"
                  value={formik.values.purpose}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="materials">
                  {({ remove, push }) => (
                    <>
                      {formik.values.materials.map((item: any, index: number) => (
                        <Grid2
                          container
                          rowSpacing={2}
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
                          <Grid2
                            size={{ xs: 12 }}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                          >
                            <Typography variant="caption" component="div">
                              Product: {index + 1}
                            </Typography>
                            {formik.values.materials.length > 1 && (
                              <IconButton color="error" size="small" onClick={() => remove(index)}>
                                <Close />
                              </IconButton>
                            )}
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 8 }}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemName`}
                              label="Name"
                              value={formik.values.materials[index].itemName}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <SelectInput
                              isRequired={true}
                              label="Unit"
                              name={`materials.${index}.itemUom`}
                              options={allUOMS}
                              value={formik.values.materials[index].itemUom}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.itemQty`}
                              label="Quantity"
                              value={formik.values.materials[index].itemQty || ''}
                              handleChange={(e) => calculateAmounts(index, 'itemQty', e.target.value, formik)}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="text"
                              isRequired={true}
                              name={`materials.${index}.rate`}
                              label="Rate"
                              value={formik.values.materials[index].rate || ''}
                              handleChange={(e) => calculateAmounts(index, 'rate', e.target.value, formik)}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="text"
                              isRequired={false}
                              isReadOnly={true}
                              name={`item.${index}.amt`}
                              label="Amount"
                              value={formik.values.materials[index].amt}
                            />
                          </Grid2>
                        </Grid2>
                      ))}
                      <Grid2
                        size={{ xs: 12 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'end',
                        }}
                      >
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<Add />}
                          onClick={() => push(packingMaterialsInitialValue)}
                        >
                          Add More
                        </Button>
                      </Grid2>
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired={true}
                  label="Payment Mode"
                  name="paymentMode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={formik.values.paymentMode}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="number"
                  isRequired={false}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={formik.values.totalAmt}
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
              <Grid2 size={{ xs: 12, md: 6 }}>
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
                <RadioGroupInput
                  isRequired={false}
                  label="is KYC attached? (if available)"
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
                <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                marginY={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <FormButtonGroup
                  submitLabel={pmpVoucherId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={pmpVoucherId === '' ? errorPost : errorPatch}
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
      <PMPVoucherPreview />
    </Box>
  );
};
