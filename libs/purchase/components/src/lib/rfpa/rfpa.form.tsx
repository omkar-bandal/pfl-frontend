/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Close } from '@mui/icons-material';
import { Box, Grid2, IconButton, InputAdornment, LinearProgress, Typography } from '@mui/material';
import {
  PURCHASE_ARRAYS,
  PURCHASE_ROUTES,
  rfpaInitialvalue,
  setRFPAFormPreview,
  useCreateRFPA,
  useGetRFPAForUpdateById,
  useUpdateRFPAById,
} from '@prime-fresh/purchase/modules';
import { IRFPA } from '@prime-fresh/purchase_api';
import { setPreview, useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { rfpaSchema } from '@prime-fresh/purchase/modules';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AddFieldButton,
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  SectionHeader,
  SelectInput,
  TextInput,
  toast,
  VendorFarmerInfo,
} from '@prime-fresh/ui_shared';
import { RFPAPreview } from './rfpa.preview';
import { calculateDueDate, calculateTotoalPrice } from './helper-functions';
import {
  handleFormKeyDown,
  mapToValueLabelArray,
  reverseDateString,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import {
  farmersDataStates,
  setSelectedFarmerPartialData,
  setSelectedVendorPartialData,
  useGetProductById,
  vendorsDataStates,
} from '@prime-fresh/admin/modules';
import { ProductFormFields } from '@prime-fresh/shared/components';

export const RFPAForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const rfpaId = id ? id : '';
  const { data: rfpa, isLoading } = useGetRFPAForUpdateById(rfpaId);
  const rfpaData = rfpa?.data ? rfpa.data : rfpaInitialvalue;
  const rfpaInitVal = rfpaId === '' ? rfpaInitialvalue : rfpaData;

  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
  const { data: uom } = useGetUOMPartialData();
  const UOMs = uom?.data ? mapToValueLabelArray(uom.data, 'id', 'unit') : [];
  const { data: Locations } = useGetBranchesPartialData();
  const allPurchaseLocation = Locations?.data ? mapToValueLabelArray(Locations.data, 'id', 'name') : [];
  const allPurchaseForEachLocations = Locations?.data
    ? mapToValueLabelArray(
        Locations?.data.filter((loc) => loc.type === 'distribution-center'),
        'id',
        'name'
      )
    : [];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: rfpaInitVal,
    validationSchema: rfpaSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
  const onFormPreview = (values: Omit<IRFPA, 'id'>) => {
    const data: any = {
      ...values,
      companyName: values.companyName ? companyNames.find((names) => names.value === values.companyName)?.label : null,
      purchaseLocation: values.purchaseLocation
        ? allPurchaseLocation.find((loc) => loc.value === values.purchaseLocation)?.label
        : values.otherPurchaseLoc,
      purchaseForSalesLocation: values.purchaseForSalesLocation
        ? allPurchaseForEachLocations.find((loc) => loc.value === values.purchaseForSalesLocation)?.label
        : values.otherPurchaseForSalesLoc,
      selectedParty: values?.source === 'vendor' ? selectedVendorPartialData : selectedFarmerPartialData,
      rfpaProducts: values.rfpaProducts.map((product) => ({
        ...product,
        uom: UOMs.find((uom) => uom.value === product.uom)?.label,
      })),
    };
    dispatch(setRFPAFormPreview(data));
    dispatch(setPreview(true));
  };

  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateRFPA();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateRFPAById(rfpaId);

  const handleSubmit = (values: any) => {
    rfpaId === ''
      ? mutatePost(values)
          .then(() => {
            toast.success(resPost ? resPost.message : 'RFPA Created');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating RFPA');
          })
      : mutatePatch(values)
          .then(() => {
            console.log(resPatch);
            toast.success(resPatch ? resPatch.message : 'RFPA Updated');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPatch ? errorPatch.message : 'Error while updating RFPA');
          });
  };

  return (
    <Box flex={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <FormikProvider key={rfpaId === '' ? 'create-rfpa' : 'update-rfpa'} value={formik}>
          <form
            key={rfpaId === '' ? 'create-form' : 'update-form'}
            encType="multipart/form-data"
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
          >
            <Grid2 container spacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }} marginBottom={2}>
                <PageTitle pagetitle="Request For Purchase Approval" />
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
                <AutoCompleteInput
                  isRequired={true}
                  name="purchaseLocation"
                  label="Purchase Location"
                  options={allPurchaseLocation}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <AutoCompleteInput
                  isRequired={true}
                  name="purchaseForSalesLocation"
                  label="Purchase For Sales Location"
                  options={allPurchaseForEachLocations}
                />
              </Grid2>
              {formik.touched.purchaseLocation === true && formik.values.purchaseLocation === '' && (
                <Grid2 size={{ xs: 12 }}>
                  <TextInput
                    isRequired={true}
                    type="text"
                    name="otherPurchaseLoc"
                    label="Other Purchase Location"
                    value={formik.values.otherPurchaseLoc}
                    handleChange={formik.handleChange}
                  />
                </Grid2>
              )}
              {formik.touched.purchaseForSalesLocation === true && formik.values.purchaseForSalesLocation === '' && (
                <Grid2 size={{ xs: 12 }}>
                  <TextInput
                    isRequired={true}
                    type="text"
                    name="otherPurchaseForSalesLoc"
                    label="Other Purchase For Sales Location"
                    value={formik.values.otherPurchaseForSalesLoc}
                    handleChange={formik.handleChange}
                  />
                </Grid2>
              )}
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  isRequired={false}
                  type="text"
                  label="Special Request"
                  name="specialReq"
                  value={formik.values.specialReq}
                  handleChange={formik.handleChange}
                />
              </Grid2>
              {/*Vendor or Farmer info depend on selected source */}
              <VendorFarmerInfo<IRFPA>
                source={formik.values.source}
                selectedParty={formik.values.selectedParty || ''}
              />

              <Grid2 size={{ xs: 12 }} marginY={1}>
                <SectionHeader sectionHeader="Product Required" />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="rfpaProducts">
                  {({ push, remove }) => (
                    <>
                      {formik.values.rfpaProducts.map((_, index) => (
                        <Grid2
                          container
                          spacing={1}
                          key={index}
                          padding={1}
                          sx={{
                            border: '1px solid #BDBDBD',
                            borderRadius: 2,
                            marginX: 'auto',
                            marginY: 1,
                          }}
                        >
                          <Grid2 size={{ xs: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="caption">Product : {index + 1}</Typography>
                          </Grid2>
                          <Grid2
                            size={{ xs: 6 }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'end',
                            }}
                          >
                            {formik.values.rfpaProducts.length > 1 && (
                              <IconButton color="error" size="medium" onClick={() => remove(index)}>
                                <Close />
                              </IconButton>
                            )}
                          </Grid2>
                          <ProductFormFields fieldArrayName="rfpaProducts" index={index} formik={formik} />
                          <Grid2 size={{ xs: 6, md: 3 }}>
                            <TextInput
                              isRequired={false}
                              name={`rfpaProducts.${index}.grade`}
                              label="Grade"
                              value={formik.values.rfpaProducts[index].grade}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 6, md: 3 }}>
                            <SelectInput
                              isRequired={false}
                              id={`rfpaProducts.${index}.uom`}
                              name={`rfpaProducts.${index}.uom`}
                              label="Unit"
                              options={UOMs}
                              value={formik.values.rfpaProducts[index].uom}
                              handleChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              type="number"
                              id={`rfpaProducts.${index}.quantity`}
                              name={`rfpaProducts.${index}.quantity`}
                              label="Quantity"
                              value={formik.values.rfpaProducts[index].quantity || ''}
                              handleChange={(event) => calculateTotoalPrice(event, index, formik)}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              type="number"
                              id={`rfpaProducts.${index}.unitPrice`}
                              name={`rfpaProducts.${index}.unitPrice`}
                              label="Unit Price"
                              value={formik.values.rfpaProducts[index].unitPrice || ''}
                              handleChange={(event) => calculateTotoalPrice(event, index, formik)}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 4, md: 3 }}>
                            <TextInput
                              isRequired={false}
                              isReadOnly={true}
                              type="number"
                              id={`rfpaProducts.${index}.amount`}
                              name={`rfpaProducts.${index}.amount`}
                              label="Amount"
                              value={formik.values.rfpaProducts[index].amount}
                              slotProps={{
                                input: {
                                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                                },
                              }}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              id={`rfpaProducts.${index}.deliveryLocation`}
                              name={`rfpaProducts.${index}.deliveryLocation`}
                              label="Delivery Location"
                              value={formik.values.rfpaProducts[index].deliveryLocation}
                              onChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              type="date"
                              id={`rfpaProducts.${index}.purchaseDate`}
                              name={`rfpaProducts.${index}.purchaseDate`}
                              label="Purchase Date"
                              value={reverseDateString(formik.values.rfpaProducts[index].purchaseDate || '')}
                              onChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              type="date"
                              id={`rfpaProducts.${index}.dispatchDate`}
                              name={`rfpaProducts.${index}.dispatchDate`}
                              label="Dispatch Date"
                              value={reverseDateString(formik.values.rfpaProducts[index].dispatchDate || '')}
                              onChange={formik.handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 3 }}>
                            <TextInput
                              isRequired={true}
                              type="date"
                              id={`rfpaProducts.${index}.deliveryDate`}
                              name={`rfpaProducts.${index}.deliveryDate`}
                              label="Delivery Date"
                              value={reverseDateString(formik.values.rfpaProducts[index].deliveryDate || '')}
                              onChange={formik.handleChange}
                            />
                          </Grid2>
                          {formik.values.source === 'farmer' && (
                            <Grid2 size={{ xs: 12, md: 3 }}>
                              <TextInput
                                isRequired={false}
                                type="date"
                                id={`rfpaProducts.${index}.expectedHarvestDate`}
                                name={`rfpaProducts.${index}.expectedHarvestDate`}
                                label="Expected Harvest Date"
                                value={reverseDateString(formik.values.rfpaProducts[index].expectedHarvestDate || '')}
                                onChange={formik.handleChange}
                              />
                            </Grid2>
                          )}
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
                        <AddFieldButton label="Add More" onClickFn={() => push(rfpaInitVal)} />
                      </Grid2>
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs: 12 }} marginY={2}>
                <SectionHeader sectionHeader="Additional Requirements" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <SelectInput
                  isRequired={true}
                  id="paymentInfo.paymentMode"
                  name="paymentInfo.paymentMode"
                  label="Payment Mode"
                  options={PURCHASE_ARRAYS.paymentMode}
                  value={formik.values.paymentInfo.paymentMode}
                  onChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  isRequired={false}
                  type="number"
                  id="paymentInfo.advancePaidAmt"
                  name="paymentInfo.advancePaidAmt"
                  label="Advance Paid Amount"
                  value={formik.values.paymentInfo.advancePaidAmt}
                  onChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  isRequired={false}
                  label="Validity of Quote"
                  id="validityOfQuote"
                  name="paymentInfo.validityOfQuote"
                  value={formik.values.paymentInfo.validityOfQuote}
                  onChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  isRequired={true}
                  type="number"
                  label="Payment Terms"
                  id="paymentInfo.paymentTerms"
                  name="paymentInfo.paymentTerms"
                  value={formik.values.paymentInfo.paymentTerms}
                  onChange={formik.handleChange}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  id="paymentInfo.paymentDate"
                  isRequired={true}
                  type="date"
                  name="paymentInfo.paymentDate"
                  label="Payment Date"
                  value={reverseDateString(formik.values.paymentInfo.paymentDate || '')}
                  handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const paymentDate = event.target.value;
                    formik.setFieldValue('paymentInfo.paymentDate', paymentDate);
                    if (formik.values.paymentInfo.creditPeriod) {
                      const dueDate = calculateDueDate(paymentDate, formik.values.paymentInfo.creditPeriod);
                      formik.setFieldValue('paymentInfo.dueDate', dueDate);
                    }
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  id="paymentInfo.creditPeriod"
                  isRequired={false}
                  type="number"
                  label="Credit Period"
                  name="paymentInfo.creditPeriod"
                  value={formik.values.paymentInfo.creditPeriod}
                  handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const creditPeriod = Number(event.target.value);
                    formik.setFieldValue('paymentInfo.creditPeriod', creditPeriod);
                    if (formik.values.paymentInfo.paymentDate) {
                      const dueDate = calculateDueDate(formik.values.paymentInfo.paymentDate, creditPeriod);
                      formik.setFieldValue('paymentInfo.dueDate', dueDate);
                    }
                  }}
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                    },
                  }}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  isRequired={false}
                  isReadOnly={true}
                  type="date"
                  label="Due Date"
                  id="paymentInfo.dueDate"
                  name="paymentInfo.dueDate"
                  value={reverseDateString(formik.values.paymentInfo.dueDate || '')}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 3 }}>
                <TextInput
                  isRequired={true}
                  label="Delivery Receiving Person"
                  id="deliveryReceivingPerson"
                  name="deliveryReceivingPerson"
                  value={formik.values.deliveryReceivingPerson}
                  onChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 9 }}>
                <TextInput
                  isRequired={false}
                  label="Packaging Instructions"
                  id="packingInstruction"
                  name="packingInstruction"
                  value={formik.values.packingInstruction}
                  onChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  isRequired={false}
                  label="Remark"
                  id="remark"
                  name="remark"
                  value={formik.values.remark}
                  onChange={formik.handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }} marginY={2}>
                <FormButtonGroup
                  submitLabel={rfpaId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={rfpaId === '' ? errorPost : errorPatch}
                  resetLabel="Reset"
                  onReset={(e) => {
                    formik.handleReset(e);
                    dispatch(setSelectedVendorPartialData(null));
                    dispatch(setSelectedFarmerPartialData(null));
                  }}
                  previewLabel="Preview"
                  onPreview={() => onFormPreview(formik.values)}
                />
              </Grid2>
            </Grid2>
          </form>
        </FormikProvider>
      )}
      <RFPAPreview />
    </Box>
  );
};
