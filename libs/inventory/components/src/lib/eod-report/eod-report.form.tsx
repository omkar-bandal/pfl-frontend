/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo } from 'react';
import {
  inventoryOptions,
  eodReportInitialValue,
  eodReportProductsInitialValue,
  eodReportValidatoinSchema,
  inventoryRouteConstants,
  useCreateEODReport,
  useGetEODReportById,
  useUpdateEODReport,
  setEODReportFormPreview,
} from '@prime-fresh/inventory/modules';
import { FieldArray, Formik } from 'formik';
import { Box, Grid2, IconButton, LinearProgress } from '@mui/material';
import { AutoCompleteInput, FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { Add, Close } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  handleFormKeyDown,
  mapToValueLabelArray,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetProductsPartialData,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import { EODReportFormPreview } from './eod-report.preview';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';

export const EODReportForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const eodId = id ? id : '';
  const navigate = useNavigate();
  const { data: eods, isLoading, isError, error } = useGetEODReportById(eodId);
  const EODReportInitialValue = React.useMemo(() => (eods?.data ? eods.data : eodReportInitialValue), [eods]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const { data: Companies } = useGetCompanyNames();
  const companies = useMemo(
    () => (Companies?.data ? mapToValueLabelArray(Companies.data, 'id', 'name') : []),
    [Companies]
  );

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(() => (uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : []), [uoms]);

  const { data: products } = useGetProductsPartialData();
  const allProducts = useMemo(
    () => (products?.data ? mapToValueLabelArray(products?.data, 'id', 'name') : []),
    [products]
  );

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : []),
    [locations]
  );

  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateEODReport();
  const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateEODReport(eodId);

  const handleSubmit = (values: any) => {
    eodId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(PostData ? PostData.message : 'EOD report created sucessfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
            }, 2000);
          })
          .catch(() => {
            toast.error(PostError ? PostError.message : 'Error while creating EOD report.');
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(PatchData ? PatchData.message : 'EOD report updated sucessfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
            }, 2000);
          })
          .catch(() => {
            toast.error(PatchError ? PatchError.message : 'Error while updating EOD report.');
          });
  };
  return eodId !== '' && isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <Formik
        key={eodId === '' ? 'create-eod' : 'edit-eod'}
        enableReinitialize={true}
        initialValues={EODReportInitialValue}
        validationSchema={eodReportValidatoinSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleReset, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown}>
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs: 12 }}>
                <PageTitle pagetitle="EOD Report" />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired
                  label="Company Name"
                  name="companyName"
                  options={companies}
                  value={values.companyName}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <AutoCompleteInput isRequired={true} name="location" label="Location" options={allLocations} />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <TextInput
                  isRequired={true}
                  type="date"
                  label="Stock Date"
                  name="stockDate"
                  value={values.stockDate}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <SelectInput
                  isRequired={true}
                  label="Submission"
                  name="submission"
                  options={inventoryOptions.EOD_SUBMISSION_TYPE}
                  value={values.submission}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <FieldArray name="eodProducts">
                  {({ push, remove }) => (
                    <>
                      {values.eodProducts.map((_, index) => (
                        <Grid2 container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                          <Grid2 size={{ xs: 12, md: 5 }}>
                            <AutoCompleteInput
                              isRequired={true}
                              name={`eodProducts.${index}.sku`}
                              label={`SKU ${index + 1}`}
                              options={allProducts}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 2 }}>
                            <SelectInput
                              isRequired
                              name={`eodProducts.${index}.uom`}
                              label="UOM"
                              options={allUOMs}
                              value={values.eodProducts[index].uom}
                              handleChange={handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 2 }}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              name={`eodProducts.${index}.qty`}
                              label="UOM Quantity"
                              value={values.eodProducts[index].qty}
                              handleChange={handleChange}
                            />
                          </Grid2>
                          <Grid2 size={{ xs: 12, md: 2 }}>
                            <TextInput
                              type="number"
                              isRequired={false}
                              name={`eodProducts.${index}.totalWeightinKg`}
                              label="Total Weight (in kg)"
                              value={values.eodProducts[index].totalWeightinKg}
                              handleChange={handleChange}
                            />
                          </Grid2>
                          <Grid2
                            size={{ xs: 12, md: 1 }}
                            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
                          >
                            <IconButton
                              color="success"
                              size="small"
                              sx={{ marginTop: 3 }}
                              onClick={() => push(eodReportProductsInitialValue)}
                            >
                              <Add />
                            </IconButton>
                            {values.eodProducts.length > 1 && (
                              <IconButton
                                color="error"
                                size="small"
                                sx={{ marginTop: 3 }}
                                onClick={() => remove(index)}
                              >
                                <Close />
                              </IconButton>
                            )}
                          </Grid2>
                        </Grid2>
                      ))}
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <TextInput
                  isRequired={true}
                  multiline={true}
                  maxRows={2}
                  label="Comments"
                  name="comments"
                  value={values.comments}
                  handleChange={handleChange}
                />
              </Grid2>
              <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <FormButtonGroup
                  submitLabel={eodId === '' ? 'Create' : 'Update'}
                  isSubmitting={isSubmitting}
                  isSubmitError={eodId === '' ? PostError : PatchError}
                  resetLabel="Reset"
                  onReset={handleReset}
                  previewLabel="Preview"
                  onPreview={() => {
                    dispatch(setPreview(true));
                    dispatch(setEODReportFormPreview(values));
                  }}
                />
              </Grid2>
            </Grid2>
          </form>
        )}
      </Formik>
      <EODReportFormPreview />
    </>
  );
};
