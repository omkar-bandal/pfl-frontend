/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider, Grid2, InputAdornment, LinearProgress, SelectChangeEvent, Typography } from '@mui/material';
import {
  returnedByCustomerInitialValues,
  returnedByCustomerSchema,
  inventoryRouteConstants,
  setRBCFormPreview,
  useCreateReturnedByCustomer,
  useGetReturnedByCustomerById,
  useUpdateReturnedByCustomer,
} from '@prime-fresh/inventory/modules';
import { AutoCompleteInput, FormButtonGroup, PageTitle, SectionHeader, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames, useGetCustomerNames, useGetUOMPartialData } from '@prime-fresh/shared/modules';
import { calculateRejectedProductDetails, calculateReturnedProductDetails, handleReturnedProductsChange } from './helper-function';
import { useGetAllDCTypeCustomers, useGetDCTypeCustomerForUpdateById } from '@prime-fresh/purchase/modules';
import { ProductFormFields } from '@prime-fresh/shared/components';
import { ReturnedByCustomerFormPreview } from './returned-by-customer.preview';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { IReturnByCustomer } from '@prime-fresh/inventory_api';

export const ReturnedByCustomerForm = () => {
  const { id } = useParams<{ id: string }>();
  const rbcId = id ? id : '';
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [challanNo, setChallanNo] = useState('');

  const { data, isLoading, isError, error } = useGetReturnedByCustomerById(rbcId);
  const rbcData = data?.data ? data.data : returnedByCustomerInitialValues;
  const rbcInitialValue = React.useMemo(() => (rbcData ? rbcData : returnedByCustomerInitialValues), [rbcData]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);


  const { data: dcs } = useGetAllDCTypeCustomers();
  const dcNums = React.useMemo(() => dcs?.data ? mapToValueLabelArray(dcs.data, 'id', 'challanNo') : [], [dcs]);

  const { data: dc } = useGetDCTypeCustomerForUpdateById(challanNo);
  const dcData = dc?.data ? dc.data : null;
  console.log('DC type customer: ', dcData);

  const { data: company } = useGetCompanyNames();
  const rbcCompanyData = React.useMemo(() => company?.data ? company?.data.find(data => data.id === dcData?.companyName) : null, [dcData]);
  console.log('RBC Company Data', rbcCompanyData);

  const { data: loc } = useGetBranchesPartialData();
  const rbcLocationData = React.useMemo(() => loc?.data ? loc?.data.find(data => data.id === dcData?.fromLocation) : null, [dcData]);
  console.log('RBC Location Data', rbcLocationData);

  const { data: custNames } = useGetCustomerNames();
  const rbcCustomer = React.useMemo(() => custNames?.data ? custNames?.data?.find(data => data.id === dcData?.customerName) : null, [dcData]);
  console.log('RBC Customer Data', rbcCustomer);

  const { data: uom } = useGetUOMPartialData();
  const uoms = uom?.data ? mapToValueLabelArray(uom.data, 'id', 'unit') : [];


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: rbcInitialValue,
    // validationSchema: returnedByCustomerSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  useEffect(() => {
    if (dcData && dcData?.deliveryChallanProducts !== null) {
      const mappedProductArray = dcData.deliveryChallanProducts.map((product) => ({
        productName: product.productName,
        count: product.count,
        size: product.size,
        origin: product.origin,
        variety: product.variety,
        saleUoM: product.saleUoM,
        unitPrice: product.unitPrice,
        returnedUoM: null,
        returnedQty: null,
        returnedQtyAmt: null,
        returnedPackingMaterialWt: null,
        returnedGrossWt: null,
        returnedNetWt: null,
        rejectedUoM: null,
        rejectedQty: null,
        rejectedQtyAmt: null,
        rejectedPackingMaterialWt: null,
        rejectedGrossWt: null,
        rejectedNetWt: null,
      }));
      formik.setFieldValue('companyName', rbcCompanyData?.id);
      formik.setFieldValue('location', rbcLocationData?.id);
      formik.setFieldValue('customerName', rbcCustomer?.id);
      formik.setFieldValue('returnedProducts', mappedProductArray);
    }
  }, [dcData, formik.setFieldValue]);

  const handleDcNumChange = useCallback(
    (dcId: string, values: Omit<IReturnByCustomer, 'id'>, setFieldValue: any) => {
      setFieldValue('deliveryChallanNo', dcId, false);
      if (values.deliveryChallanNo !== '' || values.deliveryChallanNo !== null) {
        setChallanNo(dcId);
      } else {
        setFieldValue('deliveryChallanNo', '');
        setChallanNo('');
      }
    },
    [setChallanNo]
  );

  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateReturnedByCustomer();
  const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateReturnedByCustomer(rbcId);

  const handleSubmit = (values: any) => {
    console.log('RBC submitted: ', values);
    rbcId === '' ?
      (mutateAsyncPost(values)
        .then(() => {
          toast.success(PostData ? PostData.message : 'Returned by customer created sucessfully.');
          setTimeout(() => {
            navigate(inventoryRouteConstants.GET_ALL_RBC);
          }, 2000);
        })
        .catch(() => {
          toast.error(PostError ? PostError.message : 'Error while creating returned by customer.');
        })) :
      (mutateAsyncPatch(values)
        .then(() => {
          toast.success(PatchData ? PatchData.message : 'Returned by customer updated sucessfully.');
          setTimeout(() => {
            navigate(inventoryRouteConstants.GET_ALL_RBC);
          }, 2000);
        })
        .catch(() => {
          toast.error(PatchError ? PatchError.message : 'Error while updating returned by customer.');
        }))
  };

  return rbcId !== '' && isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Products Returned By Customer" />
            </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
              <SelectInput
                isRequired
                label="Delivery Challan No"
                name="deliveryChallanNo"
                options={dcNums}
                value={formik.values.deliveryChallanNo}
                handleChange={(e: SelectChangeEvent) =>
                  handleDcNumChange(e.target.value, formik.values, formik.setFieldValue)
                }
              />
            </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="date"
                isRequired
                name="date"
                label="Date"
                value={formik.values.date}
                handleChange={formik.handleChange}
              />
            </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <TextInput
                  type="text"
                  isRequired={false}
                  isReadOnly={true}
                  name="location"
                  label="Location"
                  value={rbcLocationData?.name}
                />
              </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                isRequired={false}
                  isReadOnly={true}
                label="Company Name"
                name="companyName"
                  value={rbcCompanyData?.name}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  isRequired={false}
                  isReadOnly={true}
                  label="Customer Name"
                  name="customerName"
                  value={rbcCustomer?.organisationName}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <SectionHeader sectionHeader="Products" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="returnedProducts">
                {() =>
                  formik.values.returnedProducts.length !== 0 ? (
                    formik.values.returnedProducts.map((_, index) => (
                      <Grid2
                        container
                        spacing={1}
                        key={index}
                        alignItems="center"
                        marginY={1}
                        padding={1}
                        sx={{ border: `1px solid #ccc`, borderRadius: 2 }}
                      >
                        <ProductFormFields fieldArrayName="returnedProducts" index={index} formik={formik} />
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={false}
                            label="Sale UoM"
                            name={`returnedProducts.${index}.saleUoM`}
                            options={uoms}
                            value={formik.values.returnedProducts[index].saleUoM}
                            handleChange={formik.handleChange}
                            disable={true}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.unitPrice`}
                            label="Unit Price"
                            value={formik.values.returnedProducts[index].unitPrice}
                            handleChange={(e) =>
                              handleReturnedProductsChange(index, 'unitPrice', Number(e.target.value), formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={12} marginY={1}>
                          <Divider sx={{ fontSize: 12 }}>Returned Product Details</Divider>
                        </Grid2>
                        {/* <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={false}
                            label="Returned in UoM"
                            name={`returnedProducts.${index}.returnedUoM`}
                            options={uoms}
                            value={formik.values.returnedProducts[index].returnedUoM}
                            handleChange={formik.handleChange}
                          />
                        </Grid2> */}
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.returnedQty`}
                            label="Quantity"
                            infoTipText="Quantity of returned product"
                            value={formik.values.returnedProducts[index].returnedQty}
                            handleChange={(e) => {
                              calculateReturnedProductDetails(e, index, formik);
                            }
                            }
                          />
                        </Grid2>
                        {/* <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.returnedUnitPrice`}
                            label="Unit Price"
                            value={formik.values.returnedProducts[index].returnedUnitPrice}
                            handleChange={(e) => {
                              calculateReturnedProductDetails(e, index, formik);
                            }
                            }
                          />
                        </Grid2> */}
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.returnedQtyAmt`}
                            label="Amount"
                            infoTipText="Amount as per returned quantity"
                            value={formik.values.returnedProducts[index].returnedQtyAmt}
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.returnedPackingMaterialWt`}
                            label="Packing Material Weight"
                            infoTipText="Weight of packing material of returned product if any (in grams)"
                            value={formik.values.returnedProducts[index].returnedPackingMaterialWt}
                            handleChange={(e) =>
                              calculateReturnedProductDetails(e, index, formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">g</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.returnedGrossWt`}
                            label="Gross Weight"
                            infoTipText="Gross weight of returned product (in kilograms)"
                            value={formik.values.returnedProducts[index].returnedGrossWt}
                            handleChange={(e) =>
                              calculateReturnedProductDetails(e, index, formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.returnedNetWt`}
                            label="Net Weight"
                            infoTipText="Net weight of returned product (in kilograms)"
                            value={formik.values.returnedProducts[index].returnedNetWt}
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={12} marginY={1}>
                          <Divider sx={{ fontSize: 12 }}>Rejected Product Details</Divider>
                        </Grid2>
                        {/* <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={false}
                            label="Rejected UoM"
                            name={`returnedProducts.${index}.rejectedUoM`}
                            options={uoms}
                            value={formik.values.returnedProducts[index].rejectedUoM}
                            handleChange={formik.handleChange}
                          />
                        </Grid2> */}
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.rejectedQty`}
                            label="Quantity"
                            infoTipText="Quantity of rejected product"
                            value={formik.values.returnedProducts[index].rejectedQty}
                            handleChange={(e) =>
                              calculateRejectedProductDetails(e, index, formik)
                            }
                          />
                        </Grid2>
                        {/* <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.rejectedUnitPrice`}
                            label="Unit Price"
                            value={formik.values.returnedProducts[index].rejectedUnitPrice}
                            handleChange={(e) =>
                              calculateRejectedProductDetails(e, index, formik)
                            }
                          />
                        </Grid2> */}
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.rejectedQtyAmt`}
                            label="Amount"
                            infoTipText="Amount as per rejected quantity"
                            value={formik.values.returnedProducts[index].rejectedQtyAmt}
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.rejectedPackingMaterialWt`}
                            label="Packing Material Weight"
                            infoTipText="Weight of packing material of rejected product if any (in grams)"
                            value={formik.values.returnedProducts[index].rejectedPackingMaterialWt}
                            handleChange={(e) =>
                              calculateRejectedProductDetails(e, index, formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">g</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.rejectedGrossWt`}
                            label="Gross Weight"
                            infoTipText="Gross weight of rejected product (in kilograms)"
                            value={formik.values.returnedProducts[index].rejectedGrossWt}
                            handleChange={(e) =>
                              calculateRejectedProductDetails(e, index, formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 2.4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.rejectedNetWt`}
                            label="Net Weight"
                            infoTipText="Net weight of rejected product (in kilograms)"
                            value={formik.values.returnedProducts[index].rejectedNetWt}
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                      </Grid2>
                    ))
                  ) : (
                    <Typography variant="caption" component="div" color="error">
                      No Products found in selected delivery challan
                    </Typography>
                  )
                }
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                multiline
                maxRows={2}
                name="remark"
                label="Remark"
                value={formik.values.remark}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FormButtonGroup
                submitLabel="Create"
                isSubmitting={formik.isSubmitting}
                isSubmitError={PostError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                  previewLabel="Preview"
                  onPreview={() => {
                    dispatch(setPreview(true));
                    dispatch(setRBCFormPreview(formik.values));
                  }}
                />
              </Grid2>
            </Grid2>
          </form>
        </FormikProvider>
        <ReturnedByCustomerFormPreview />
      </>
  );
};
