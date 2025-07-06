/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import { Close } from '@mui/icons-material';
import { Box, Grid2, IconButton, InputAdornment, LinearProgress, Typography } from '@mui/material';
import {
  inventoryRouteConstants,
  SecondSaleProductsInitialValue,
  SecondSaleRegisterInitialValue,
  setSecondSaleRegisterFormPreview,
  useCreateSecondSaleRegister,
  useGetSecondSaleRegisterById,
  useUpdateSecondSaleRegister,
} from '@prime-fresh/inventory/modules';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import {
  AddFieldButton,
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {
  handleFormKeyDown,
  mapToValueLabelArray,
  useGetAllDeliveryChallanNums,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import { ProductFormFields } from '@prime-fresh/shared/components';
import {
  handlePushProduct,
  handleRemoveProduct,
  handleSecondSaleProductsChange,
  normalizeData,
} from './helper-function';
import { PostSecondSaleRegister } from '@prime-fresh/inventory_api';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { SecondSaleRegisterFormPreview } from './second-sale-register.preview';

export const SecondSaleRegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const secondSaleId = id ? id : '';

  const { data, isLoading } = useGetSecondSaleRegisterById(secondSaleId);
  const secondSale = data?.data ? normalizeData(data.data) : SecondSaleRegisterInitialValue;
  console.log('ss: ', secondSale);
  const initialValueSecondSale = secondSaleId === '' ? SecondSaleRegisterInitialValue : secondSale;

  const formik = useFormik<PostSecondSaleRegister>({
    enableReinitialize: true,
    initialValues: initialValueSecondSale,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => handleSubmit(values),
  });
  const { data: Companies } = useGetCompanyNames();
  const companies = useMemo(
    () => (Companies?.data ? mapToValueLabelArray(Companies.data, 'id', 'name') : []),
    [Companies]
  );

  const { data: dcNo } = useGetAllDeliveryChallanNums();
  const dcNumbers = useMemo(() => (dcNo?.data ? mapToValueLabelArray(dcNo.data, 'id', 'challanNo') : []), [dcNo]);

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(() => (uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : []), [uoms]);

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : []),
    [locations]
  );

  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateSecondSaleRegister();
  const {
    mutateAsync: mutateAsyncPatch,
    error: PatchError,
    data: PatchData,
  } = useUpdateSecondSaleRegister(secondSaleId);

  const handleSubmit = (values: any) => {
    secondSaleId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(PostData ? PostData.message : 'Second Sale Register Created Successfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER);
            }, 2000);
          })
          .catch(() => {
            toast.error(PostError ? PostError.message : 'Error while creating second sale register');
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(PatchData ? PatchData.message : 'Second Sale Register updated Successfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER);
            }, 2000);
          })
          .catch(() => {
            toast.error(PatchError ? PatchError.message : 'Error while updating second sale register');
          });
  };

  return secondSaleId !== '' && isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider
        key={secondSaleId === '' ? 'create-ss-register' : 'update-ss-register'}
       value={formik}
      >
          <form key={secondSaleId === '' ? 'create-form' : 'update-form'} onKeyDown={handleFormKeyDown} onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }}>
                <PageTitle pagetitle="Second Sale Register" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired
                  label="Company Name"
                  name="companyName"
                  options={companies}
                  value={formik.values.companyName}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <AutoCompleteInput isRequired={true} name="location" label="Location" options={allLocations} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Delivery Challan No"
                  name="dcNo"
                  options={dcNumbers}
                  value={formik.values.dcNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="date"
                  isRequired={true}
                  name="saleDate"
                  label="Sale Date"
                  value={formik.values.saleDate}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="buyerName"
                  label="Buyer Name"
                  value={formik.values.buyerName}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="buyerMobNo"
                  label="Buyer Mob. No."
                  value={formik.values.buyerMobNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="approvedBy"
                  label="Approved By"
                  value={formik.values.approvedBy}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="soldBy"
                  label="Sold By"
                  value={formik.values.soldBy}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  name="reasonForSale"
                  label="Reason For Sale"
                  value={formik.values.reasonForSale}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="secondSaleProducts">
                  {() => (
                    <>
                      {formik.values.secondSaleProducts.map((_, index) => (
                        <Grid2
                          container
                          columnSpacing={1}
                          key={index}
                          alignItems="center"
                          sx={{ border: `1px solid #BDBDBD`, marginY: 1, padding: 1, borderRadius: 2 }}
                        >
                          <Grid2
                            size={{ xs: 12 }}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                          >
                            <Typography variant="caption" component="div">
                              Product: {index + 1}
                            </Typography>
                            {formik.values.secondSaleProducts.length > 1 && (
                              <IconButton
                                color="error"
                                size="small"
                                onClick={() => handleRemoveProduct(index, formik.values, formik.setFieldValue)}
                              >
                                <Close fontSize="small" />
                              </IconButton>
                            )}
                          </Grid2>
                          <ProductFormFields fieldArrayName="secondSaleProducts" index={index} formik={formik} />
                          <Grid2 size={{ xs: 12, md: 3 }}>
                            <SelectInput
                              isRequired={true}
                              label="UOM"
                              name={`secondSaleProducts.${index}.uom`}
                              options={allUOMs}
                              value={formik.values.secondSaleProducts[index].uom || ''}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 4 }}>
                            <TextInput
                              isRequired={true}
                              label="Quantity"
                              name={`secondSaleProducts.${index}.quantity`}
                              type="number"
                              value={formik.values.secondSaleProducts[index].quantity}
                              handleChange={(e) =>
                                handleSecondSaleProductsChange(
                                  index,
                                  'quantity',
                                  Number(e.target.value),
                                  formik.values,
                                  formik.setFieldValue
                                )
                              }
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 4 }}>
                            <TextInput
                              isRequired={true}
                              label="Rate"
                              type="number"
                              name={`secondSaleProducts.${index}.unitPrice`}
                              value={formik.values.secondSaleProducts[index].unitPrice}
                              handleChange={(e) =>
                                handleSecondSaleProductsChange(
                                  index,
                                  'unitPrice',
                                  Number(e.target.value),
                                  formik.values,
                                  formik.setFieldValue
                                )
                              }
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 4 }}>
                            <TextInput
                              isRequired={false}
                              isReadOnly={true}
                              label="Amount"
                              name={`secondSaleProducts.${index}.amount`}
                              type="number"
                              value={formik.values.secondSaleProducts[index].amount}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              name={`secondSaleProducts.${index}.packingMaterialWeight`}
                              label="Packing Material Weight"
                              value={formik.values.secondSaleProducts[index].packingMaterialWeight || null}
                              handleChange={(e) =>
                                handleSecondSaleProductsChange(
                                  index,
                                  'packingMaterialWeight',
                                  Number(e.target.value),
                                  formik.values,
                                  formik.setFieldValue
                                )
                              }
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">grams</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="number"
                              isRequired={true}
                              name={`secondSaleProducts.${index}.grossWeight`}
                              label="Gross Weight"
                              value={formik.values.secondSaleProducts[index].grossWeight || null}
                              handleChange={(e) =>
                                handleSecondSaleProductsChange(
                                  index,
                                  'grossWeight',
                                  Number(e.target.value),
                                  formik.values,
                                  formik.setFieldValue
                                )
                              }
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 4 }}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              isReadOnly={true}
                              name={`secondSaleProducts.${index}.netWeight`}
                              label="Net Weight"
                              value={formik.values.secondSaleProducts[index].netWeight}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                        </Grid2>
                      ))}
                      <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                        <AddFieldButton
                          label="Add More"
                          onClickFn={() => handlePushProduct(SecondSaleProductsInitialValue, formik.values, formik.setFieldValue)}
                        />
                      </Grid2>
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="number"
                  isRequired={true}
                  isReadOnly={true}
                  name="totalNetWeight"
                  label="Total Net Weight"
                  value={formik.values.totalNetWeight}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  type="number"
                  isRequired={true}
                  isReadOnly={true}
                  name="totalAmt"
                  label="Total Amount"
                  value={formik.values.totalAmt}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={true}
                  isReadOnly={true}
                  name="totalAmtInWords"
                  label="Total Amount In Words"
                  value={formik.values.totalAmtInWords}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="number"
                  isRequired={true}
                  name="paidAmount"
                  label="Paid Amount"
                  value={formik.values.paidAmount}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="number"
                  isRequired={true}
                  name="pendingAmt"
                  label="Pending Amount"
                  value={formik.values.pendingAmt}
                  handleChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                  isRequired={true}
                  name="paymentMode"
                  label="Payment Mode"
                  value={formik.values.paymentMode}
                  options={PURCHASE_ARRAYS.paymentMode}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  type="text"
                  multiline
                  maxRows={2}
                  isRequired={false}
                  name="remarks"
                  label="Remark"
                  value={formik.values.remarks}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  type="text"
                  multiline
                  maxRows={2}
                  isRequired={false}
                  name="comments"
                  label="Comments"
                  value={formik.values.comments}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="submittedBy"
                  label="Submitted By"
                  value={formik.values.submittedBy}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  name="mobileNo"
                  label="Mobile Number"
                  value={formik.values.mobileNo}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                marginY={2}
                sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
              >
                <FormButtonGroup
                  submitLabel={secondSaleId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={secondSaleId === '' ? PostError : PatchError}
                  resetLabel="Reset"
                  onReset={formik.handleReset}
                  previewLabel="Preview"
                  onPreview={() => {
                    dispatch(setPreview(true));
                    dispatch(setSecondSaleRegisterFormPreview(formik.values));
                  }}
                />
              </Grid2>
            </Grid2>
          </form>
      </FormikProvider>
      <SecondSaleRegisterFormPreview />
    </>
  );
};
