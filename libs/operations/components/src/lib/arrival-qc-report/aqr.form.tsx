/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { Box, Divider, Grid2, InputAdornment, LinearProgress, Typography } from '@mui/material';
import { AQRParameters, IAQR, IProduct, QueryParams } from '@prime-fresh/services';
import {
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  FormikScrollableAutocomplete,
  SectionHeader,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/shared/components';
import {
  AQRinitalValues,
  aqrValidationSchema,
  operationsRoutes,
  setAQRFormPreview,
  useCreateAQR,
  useGetAllDeliveryChallanNums,
  useGetAQRForUpdateById,
  useUpdateAQR,
} from '@prime-fresh/operations/modules';
import {
  convertInTitleCase,
  handleFormKeyDown,
  mapToValueLabelArray,
  useDebounce,
  useGetEmployeePartialData,
} from '@prime-fresh/shared/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { AQRFormPreview } from './aqr.preview';
import { useGetAllProducts, useGetProductById } from '@prime-fresh/shared/modules';

export const AQRForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const aqrId = id ? id : '';

  const { data, isLoading, isError, error: getError } = useGetAQRForUpdateById(aqrId);
  const aqrData = data?.data ? data.data : AQRinitalValues;
  console.log('AQR Data', aqrData);
  const AQRinitVal = useMemo(() => (aqrId === '' ? AQRinitalValues : aqrData), [aqrId, aqrData]);

  const { data: employee, isLoading: isEmployeeDataLoading } = useGetEmployeePartialData();
  const employeeData = employee?.data ? mapToValueLabelArray(employee.data, 'id', 'fullName') : [];

  useEffect(() => {
    if (isError) {
      toast.error(getError?.message || 'Error occured please refresh the page.');
    }
  }, [isError, getError]);

  const [productQueryParams, setProductQueryParams] = useState<QueryParams>({ page: 1, limit: 10, sort: '' });
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const debouncedProductSearchQuery = useDebounce(productSearchQuery, 500);
  const { data: produces, isFetching, error } = useGetAllProducts(productQueryParams, debouncedProductSearchQuery);
  const searchedProduct = useMemo(() => (produces ? produces : null), [produces]);

  const handleProductNextPage = useCallback(() => {
    setProductQueryParams((prev) => ({
      ...prev,
      page: prev.page ? prev.page + 1 : 2,
    }));
  }, []);

  const handleProductPrevPage = useCallback(() => {
    setProductQueryParams((prev) => ({
      ...prev,
      page: prev.page && prev.page > 1 ? prev.page - 1 : 1,
    }));
  }, []);

  const handleProductSearchChange = useCallback((_: any, newInput: string) => {
    setProductSearchQuery(newInput);
    if (newInput === '' || newInput) {
      setProductQueryParams((prev) => ({ ...prev, page: 1 })); // reset to first page on clear
    } else {
      setProductQueryParams((prev) => ({ ...prev, page: 1 })); // optionally reset page on new search too
    }
  }, []);

  const handleProductListOpen = () => {
    setProductQueryParams((prev) => ({ ...prev, page: 1 }));
  };

  const { data: dcnums } = useGetAllDeliveryChallanNums();
  const dcNums = dcnums?.data ? mapToValueLabelArray(dcnums.data, 'id', 'challanNo') : [];

  const calculateTotalQty = (values: Omit<IAQR, 'id'>, setFieldValue: (field: string, value: any) => void) => {
    const updatedParameters = values.parameters.map((param: AQRParameters) => ({
      ...param,
      percentage: values.samplingQty ? parseFloat(((Number(param.quantity) / values.samplingQty) * 100).toFixed(2)) : 0,
    }));

    const totalQty = updatedParameters.reduce((acc: number, param: any) => acc + param.quantity, 0);
    const totalPercent = updatedParameters.reduce((acc: number, param: any) => acc + param.percentage, 0);

    setFieldValue('parameters', updatedParameters);
    setFieldValue('totalQty', totalQty);
    setFieldValue('totalpercent', totalPercent);
  };
  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateAQR();
  const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateAQR(aqrId);

  const handleSubmit = (values: any) => {
    console.log('Submitted AQR', values);
    aqrId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(PostData ? PostData.message : 'AQR created sucessfully.');
            setTimeout(() => {
              navigate(operationsRoutes.VIEW_ALL_AQR);
            }, 2000);
          })
          .catch(() => {
            toast.error(PostError ? PostError.message : 'Error while creating AQR .');
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(PatchData ? PatchData.message : 'AQR updated sucessfully.');
            setTimeout(() => {
              navigate(operationsRoutes.VIEW_ALL_AQR);
            }, 2000);
          })
          .catch(() => {
            toast.error(PatchError ? PatchError.message : 'Error while updating AQR.');
          });
  };
  const formik = useFormik<Omit<IAQR, 'id'>>({
    enableReinitialize: true,
    initialValues: AQRinitVal,
    validationSchema: aqrValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => handleSubmit(values),
  });
  const { data: product, isLoading: productLoading } = useGetProductById(formik.values.product || '');
  const selectedProduct = useMemo(() => (product?.data ? product.data : null), [product]);
  const aqrFormPreviewData = {
    ...formik.values,
    product: produces?.data?.find((pro) => pro.id === formik.values.product)?.name ?? '',
    purchaseBy: employeeData.find((emp) => emp.value === formik.values.purchaseBy)?.label ?? '',
    receivedBy: employeeData.find((emp) => emp.value === formik.values.purchaseBy)?.label ?? '',
    qcCheckBy: employeeData.find((emp) => emp.value === formik.values.purchaseBy)?.label ?? '',
    verifiedBy: employeeData.find((emp) => emp.value === formik.values.purchaseBy)?.label ?? '',
  };
  return aqrId !== '' && isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider key={aqrId === '' ? 'create-aqr' : 'update-aqr'} value={formik}>
        <form onSubmit={formik.handleSubmit} onKeyDown={handleFormKeyDown}>
          <Grid2 container rowSpacing={1} columnSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
              <PageTitle pagetitle="Arrival Quality Reports" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Challan Number"
                name="dcNo"
                value={formik.values.dcNo}
                options={dcNums}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="date"
                label="Challan Date"
                name="dcDate"
                value={formik.values.dcDate}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                type="number"
                label="Arrived Quantity"
                name="arrivedQty"
                value={formik.values.arrivedQty}
                handleChange={formik.handleChange}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                type="date"
                label="Date of Arrival"
                name="arrivalDate"
                value={formik.values.arrivalDate}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={true}
                type="text"
                label="Supplier Name"
                name="supplierName"
                value={formik.values.supplierName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={true}
                type="text"
                label="Supplier Location"
                name="supplierLocation"
                value={formik.values.supplierLocation}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormikScrollableAutocomplete<IProduct>
                isRequired={true}
                optionValueKey="id"
                name="product"
                label="Product Name"
                options={selectedProduct ? [selectedProduct] : searchedProduct?.data || []}
                isLoading={selectedProduct ? productLoading : isFetching}
                page={productQueryParams.page || 1}
                totalPages={searchedProduct?.totalPages || 1}
                getOptionLabel={(option) => option.name || ''}
                noOptionsText={error ? error.message : 'Enter product name'}
                handleOpenList={handleProductListOpen}
                handleInputChange={handleProductSearchChange}
                handleNextPage={handleProductNextPage}
                handlePrevPage={handleProductPrevPage}
                onOptionSelected={(selectedProduct) => {
                  if (selectedProduct) {
                    const qcParameters = selectedProduct.qualityParameters.map((params) => ({
                      qualityParameterId: params.id,
                      qualityParameterType: params.type,
                      qualityParameterName: params.name,
                      quantity: 0,
                      percentage: 0,
                    }));
                    formik.setFieldValue('parameters', qcParameters);
                  } else {
                    formik.setFieldValue('parameters', AQRinitalValues.parameters);
                  }
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={true}
                type="number"
                label="Sampling Qantity"
                name="samplingQty"
                value={formik.values.samplingQty}
                handleChange={formik.handleChange}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <SectionHeader sectionHeader="Quality Check Report" />
            </Grid2>
            <Grid2 size={{ xs: 0, md: 12 }}>
              <Box sx={{ flex: 1 }}>
                <Grid2
                  container
                  alignItems="center"
                  sx={{ display: { xs: 'none', sm: 'none', md: 'flex', l: 'flex', xl: 'flex' } }}
                >
                  <Grid2 size={{ xs: 3 }} sx={{ borderRight: `1px solid #ccc` }}>
                    <Typography textAlign="start" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Quality Parameter
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }} sx={{ borderRight: `1px solid #ccc` }}>
                    <Typography textAlign="center" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Parameter Type
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }} sx={{ borderRight: `1px solid #ccc` }}>
                    <Typography textAlign="center" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Quantity
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <Typography textAlign="center" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Percent %
                    </Typography>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Divider />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="parameters">
                {() =>
                  formik.values.parameters?.map((_, index) => (
                    <Grid2
                      container
                      key={index}
                      spacing={1}
                      alignItems="center"
                      marginY={1}
                      padding={1}
                      sx={{ border: { xs: `1px solid #ccc`, md: 'none', lg: 'none', xl: 'none' }, borderRadius: 2 }}
                    >
                      <Grid2 size={{ xs: 5 }} sx={{ display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                        <Typography textAlign="start" variant="caption" sx={{ fontWeight: 700 }}>
                          Quality Parameter
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 7, md: 3 }}>
                        <input
                          hidden={true}
                          name={`parameters.${index}.qualityParameterId`}
                          value={formik.values.parameters[index]?.qualityParameterId}
                          readOnly={true}
                        />
                        <Typography component="div" variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {formik.values.parameters
                            ? convertInTitleCase(formik.values.parameters[index].qualityParameterName)
                            : ''}
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 5 }} sx={{ display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                        <Typography textAlign="start" variant="caption" sx={{ fontWeight: 700 }}>
                          Parameter Type
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 7, md: 3 }}>
                        <Typography
                          component="div"
                          variant="subtitle1"
                          sx={{ fontWeight: 500, textAlign: { xs: 'left', md: 'center' } }}
                        >
                          {formik.values.parameters
                            ? convertInTitleCase(formik.values.parameters[index].qualityParameterType || '')
                            : ''}
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 5 }} sx={{ display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                        <Typography textAlign="start" variant="caption" sx={{ fontWeight: 700 }}>
                          Quantity
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 7, md: 3 }}>
                        <TextInput
                          isRequired={false}
                          type="number"
                          label=""
                          name={`parameters.${index}.quantity`}
                          value={formik.values.parameters[index]?.quantity}
                          sx={{ borderColor: 'transparent' }}
                          handleChange={formik.handleChange}
                          onBlur={() => calculateTotalQty(formik.values, formik.setFieldValue)}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 5 }} sx={{ display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
                        <Typography textAlign="start" variant="caption" sx={{ fontWeight: 700 }}>
                          Percentage
                        </Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 7, md: 3 }}>
                        <TextInput
                          isRequired={false}
                          isReadOnly={true}
                          type="number"
                          label=""
                          name={`parameters.${index}.percentage`}
                          value={formik.values.parameters[index].percentage}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            },
                          }}
                        />
                      </Grid2>
                    </Grid2>
                  ))
                }
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Divider />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <Box sx={{ flex: 1 }}>
                <Grid2 container spacing={1} alignItems="center">
                  <Grid2 size={{ xs: 4, md: 6 }}>
                    <Typography textAlign="end" variant="subtitle1" sx={{ fontWeight: 700, marginRight: 5 }}>
                      Total
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      type="number"
                      label=""
                      name="totalQty"
                      value={formik.values.totalQty}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      type="number"
                      label=""
                      name="totalpercent"
                      value={formik.values.totalpercent}
                    />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <AutoCompleteInput
                isRequired={true}
                label="Purchase By"
                name="purchaseBy"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <AutoCompleteInput
                isRequired={true}
                label="Received By"
                name="receivedBy"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <AutoCompleteInput
                isRequired={true}
                label="QC Checked By"
                name="qcCheckBy"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <AutoCompleteInput
                isRequired={true}
                label="Verified By"
                name="verifiedBy"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                multiline
                maxRows={4}
                type="text"
                label="Remark"
                name="remark"
                value={formik.values.remark}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <FormButtonGroup
                submitLabel={aqrId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={aqrId === '' ? PostError : PatchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                previewLabel="Preview"
                onPreview={() => {
                  dispatch(setPreview(true));
                  dispatch(setAQRFormPreview(aqrFormPreviewData));
                }}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <AQRFormPreview />
    </>
  );
};
