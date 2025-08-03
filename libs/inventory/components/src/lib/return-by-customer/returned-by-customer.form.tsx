/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid2, InputAdornment, LinearProgress, SelectChangeEvent, Typography } from '@mui/material';
import {
  returnedByCustomerInitialValues,
  returnedByCustomerSchema,
  inventoryRouteConstants,
  setRBCFormPreview,
  useCreateReturnedByCustomer,
  useGetReturnedByCustomerById,
  useUpdateReturnedByCustomer,
} from '@prime-fresh/inventory/modules';
import { FormButtonGroup, PageTitle, SectionHeader, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { mapToValueLabelArray, useGetCompanyNames, useGetUOMPartialData } from '@prime-fresh/shared/modules';
import { handleReturnedProductsChange } from './helper-function';
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

  const { data: company } = useGetCompanyNames();
  const companies = company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [];

  const { data: dcs } = useGetAllDCTypeCustomers();
  console.log('DC type customers: ', dcs?.data);
  const dcNums = React.useMemo(() => dcs?.data ? mapToValueLabelArray(dcs.data, 'id', 'challanNo') : [], [dcs]);

  const { data: uom } = useGetUOMPartialData();
  const uoms = uom?.data ? mapToValueLabelArray(uom.data, 'id', 'unit') : [];
  const { data: dc } = useGetDCTypeCustomerForUpdateById(challanNo);
  const dcData = dc?.data ? dc.data : null;


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: rbcInitialValue,
    validationSchema: returnedByCustomerSchema,
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
        quantity: null,
        unitPrice: null,
        amount: null,
        grossWeight: null,
        packingMaterialWeight: null,
        netWeight: null,
      }));
      formik.setFieldValue('companyName', dcData.companyName);
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
            <Grid2 size={{ xs: 12, md: 3 }}>
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
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="date"
                isRequired
                name="date"
                label="Date"
                value={formik.values.date}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <SelectInput
                isRequired={false}
                disabled
                label="Company Name"
                name="companyName"
                options={companies}
                value={formik.values.companyName}
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
                          <SelectInput
                            isRequired={false}
                            label="Returned UoM"
                            name={`returnedProducts.${index}.returnedUOM`}
                            options={uoms}
                            value={formik.values.returnedProducts[index].returnedUOM}
                            handleChange={formik.handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.quantity`}
                            label="Quantity"
                            value={formik.values.returnedProducts[index].quantity}
                            handleChange={(e) =>
                              handleReturnedProductsChange(index, 'quantity', Number(e.target.value), formik)
                            }
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
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
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.amount`}
                            label="Amount"
                            value={formik.values.returnedProducts[index].amount}
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
                            name={`returnedProducts.${index}.packingMaterialWeight`}
                            label="Total Packing Material Weight"
                            value={formik.values.returnedProducts[index].packingMaterialWeight}
                            handleChange={(e) =>
                              handleReturnedProductsChange(index, 'packingMaterialWeight', Number(e.target.value), formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`returnedProducts.${index}.grossWeight`}
                            label="Gross Weight"
                            value={formik.values.returnedProducts[index].grossWeight}
                            handleChange={(e) =>
                              handleReturnedProductsChange(index, 'grossWeight', Number(e.target.value), formik)
                            }
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            isReadOnly={true}
                            name={`returnedProducts.${index}.netWeight`}
                            label="Net Weight"
                            value={formik.values.returnedProducts[index].netWeight}
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
