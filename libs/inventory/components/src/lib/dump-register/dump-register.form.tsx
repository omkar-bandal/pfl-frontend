/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import {
  dumpProductsInitialValue,
  dumpRegisterInitialValue,
  dumpRegisterSchema,
  inventoryRouteConstants,
  setDumpRegisterFormPreview,
  useCreateDumpRegister,
  useGetDumpRegisterForUpdateById,
  useUpdateDumpRegister,
} from '@prime-fresh/inventory/modules';
import {
  Box,
  Grid2,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
} from '@mui/material';
import {
  AddFieldButton,
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { Close } from '@mui/icons-material';
import {
  handleFormKeyDown,
  mapToValueLabelArray,
  numToWords,
  useGetAllGRNNums,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import { ProductFormFields } from '@prime-fresh/shared/components';
import { IDumpRegister } from '@prime-fresh/inventory_api';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { DumpRegisterFormPreview } from './dump-register.preview';

export const DumpRegisterForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const dumpRegiId = id ? id : '';
  const navigate = useNavigate();

  const {
    data: dumpRecord,
    isLoading,
    isError,
    error,
  } = useGetDumpRegisterForUpdateById(dumpRegiId);
  const dumpRegi = dumpRecord?.data
    ? dumpRecord.data
    : dumpRegisterInitialValue;
  console.log('dump by id: ', dumpRegi);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const { data: Companies } = useGetCompanyNames();
  const companies = useMemo(
    () =>
      Companies?.data ? mapToValueLabelArray(Companies.data, 'id', 'name') : [],
    [Companies]
  );

  const { data: grns } = useGetAllGRNNums();
  const grnNums = useMemo(
    () => (grns?.data ? mapToValueLabelArray(grns.data, 'id', 'grnNo') : []),
    [grns]
  );

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(
    () => (uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : []),
    [uoms]
  );

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () =>
      locations?.data
        ? mapToValueLabelArray(locations?.data, 'id', 'name')
        : [],
    [locations]
  );

  const initialValuesDumpRegi =
    dumpRegiId === '' ? dumpRegisterInitialValue : dumpRegi;

  const formik = useFormik<Omit<IDumpRegister,'id'>>({
    enableReinitialize: true,
    initialValues: initialValuesDumpRegi,
    validationSchema: dumpRegisterSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => handleSubmit(values),
  });
  const recalcTotalDumpCost = useCallback(
    (products: IDumpRegister['dumpProducts']): number =>
      products.reduce((sum, prod) => sum + (Number(prod.amount) || 0), 0),
    []
  );
  const calculateTotalDumpCost = useCallback(
    (
      fieldName: 'quantity' | 'unitPrice',
      newValue: number,
      index: number,
      formik: any
    ) => {
      if (index !== null) {
        const updatedProducts = [...formik.values.dumpProducts];
        const product = { ...updatedProducts[index] };
        product[fieldName] = newValue;
        product.amount = product.quantity * product.unitPrice;
        updatedProducts[index] = product;
        formik.setFieldValue('dumpProducts', updatedProducts, false);
        const totalDumpCost = recalcTotalDumpCost(updatedProducts).toFixed(2);
        formik.setFieldValue('totalDumpCost', Number(totalDumpCost));
        formik.setFieldValue(
          'totalCostInWords',
          numToWords(Number(totalDumpCost))
        );
      }
    },
    [recalcTotalDumpCost]
  );
  const handleRemoveDumpProduct = useCallback(
    (index: number, formik: any): void => {
      const updatedProducts = formik.values.dumpProducts.filter(
        (_: any, i: number) => i !== index
      );
      const totalDumpCost = recalcTotalDumpCost(updatedProducts).toFixed(2);
      formik.setFieldValue('dumpProducts', updatedProducts, false);
      formik.setFieldValue('totalDumpCost', Number(totalDumpCost));
      formik.setFieldValue(
        'totalCostInWords',
        numToWords(Number(totalDumpCost))
      );
    },
    [recalcTotalDumpCost]
  );
  const handlePreview = useCallback(() => {
    const previewData = {
      ...formik.values,
      companyName:
        companies?.find(
          (company) => company.value === formik.values.companyName
        )?.label || null,
      location:
        allLocations.find((loc) => loc.value === formik.values.location)
          ?.label || null,
      grn:
        grnNums.find((grn) => grn.value === formik.values.grn)?.label || null,
      dumpProducts: formik.values.dumpProducts.map((product) => ({
        ...product,
        uom: allUOMs.find((uom) => uom.value === product.uom)?.label || null,
      })),
    };
    dispatch(setPreview(true));
    dispatch(setDumpRegisterFormPreview(previewData));
  }, [allLocations, allUOMs, companies, dispatch, formik.values, grnNums]);

  const {
    mutateAsync: mutateAsyncPost,
    error: PostError,
    data: PostData,
  } = useCreateDumpRegister();
  const {
    mutateAsync: mutateAsyncPatch,
    error: PatchError,
    data: PatchData,
  } = useUpdateDumpRegister(dumpRegiId);

  const handleSubmit = (values: any) => {
    dumpRegiId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(
              PostData ? PostData.message : 'Dump record created sucessfully.'
            );
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              PostError
                ? PostError.message
                : 'Error while creating dump record .'
            );
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(
              PatchData ? PatchData.message : 'Dump record updated sucessfully.'
            );
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_DUMP_REGISTERS);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              PatchError
                ? PatchError.message
                : 'Error while updating dump record.'
            );
          });
  };
  return dumpRegiId !== '' && isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider
        key={dumpRegiId === '' ? 'create-dump' : 'update-dump'}
        value={formik}
      >
        <form
          key={dumpRegiId === '' ? 'create-form' : 'update-form'}
          onKeyDown={handleFormKeyDown}
          onSubmit={formik.handleSubmit}
        >
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Dump Register" />
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
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={allLocations}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
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
              <TextInput
                type="text"
                isRequired={false}
                name="batchNo"
                label="Batch Number"
                value={formik.values.batchNo}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <SelectInput
                isRequired={false}
                label="Referred GRN"
                name="grn"
                options={grnNums}
                value={formik.values.grn}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="dumpProducts">
                {({ push }) => (
                  <>
                    {formik.values.dumpProducts.map((_, index) => (
                      <Grid2
                        container
                        spacing={1}
                        key={index}
                        sx={{
                          border: `1px solid #BDBDBD`,
                          marginY: 1,
                          padding: 1,
                          borderRadius: 2,
                        }}
                      >
                        <Grid2
                          size={{ xs: 12 }}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <Typography
                            variant="caption"
                            component="div"
                            sx={{ fontWeight: 500 }}
                          >
                            Product: {index + 1}
                          </Typography>
                          {formik.values.dumpProducts.length > 1 && (
                            <IconButton
                              color="error"
                              size="small"
                              onClick={() =>
                                handleRemoveDumpProduct(index, formik)
                              }
                            >
                              <Close fontSize="small" />
                            </IconButton>
                          )}
                        </Grid2>
                        <ProductFormFields
                          fieldArrayName="dumpProducts"
                          index={index}
                          formik={formik}
                        />
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={true}
                            name={`dumpProducts.${index}.uom`}
                            label="UOM"
                            options={allUOMs}
                            value={formik.values.dumpProducts[index].uom}
                            handleChange={formik.handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={true}
                            name={`dumpProducts.${index}.quantity`}
                            label="Quantity"
                            value={formik.values.dumpProducts[index].quantity}
                            handleChange={(e) =>
                              calculateTotalDumpCost(
                                'quantity',
                                Number(e.target.value),
                                index,
                                formik
                              )
                            }
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={true}
                            name={`dumpProducts.${index}.unitPrice`}
                            label="Unit Price"
                            value={formik.values.dumpProducts[index].unitPrice}
                            handleChange={(e) =>
                              calculateTotalDumpCost(
                                'unitPrice',
                                Number(e.target.value),
                                index,
                                formik
                              )
                            }
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    Rs
                                  </InputAdornment>
                                ),
                              },
                            }}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            isReadOnly={true}
                            name={`dumpProducts.${index}.amount`}
                            label="Dump Cost"
                            value={formik.values.dumpProducts[index].amount}
                            slotProps={{
                              input: {
                                endAdornment: (
                                  <InputAdornment position="end">
                                    Rs
                                  </InputAdornment>
                                ),
                              },
                            }}
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
                      <AddFieldButton
                        label="Add More"
                        onClickFn={() => push(dumpProductsInitialValue)}
                      />
                    </Grid2>
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                isReadOnly={true}
                name="totalDumpCost"
                label="Total Dump Cost"
                value={formik.values.totalDumpCost}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">Rs</InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 9 }}>
              <TextInput
                isRequired={false}
                isReadOnly={true}
                name="totalCostInWords"
                label="Total Dump Cost In Words"
                value={formik.values.totalCostInWords}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
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
                submitLabel={dumpRegiId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={dumpRegiId === '' ? PostError : PatchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                previewLabel="Preview"
                onPreview={() => handlePreview()}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <DumpRegisterFormPreview />
    </>
  );
};
