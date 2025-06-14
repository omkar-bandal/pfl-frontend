/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useMemo } from 'react';
import { Close } from '@mui/icons-material';
import { Box, Grid2, IconButton, InputAdornment, LinearProgress, Typography } from '@mui/material';
import {
  inventoryOptions,
  inventoryRouteConstants,
  InwardProductInitialValue,
  InwardRegisterInitialValue,
  inwardRegisterValidationSchema,
  setInwardRegisterFormPreview,
  useCreateInwardRegister,
  useGetInwardRegisterForUpdateById,
  useUpdateInwardRegister,
} from '@prime-fresh/inventory/modules';
import { PostInwardRegister } from '@prime-fresh/inventory_api';
import {
  mapToValueLabelArray,
  useGetAllDeliveryChallanNums,
  useGetAllGRNNums,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetEmployeePartialData,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import {
  AddFieldButton,
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast,
  VendorFarmerInfo,
} from '@prime-fresh/ui_shared';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { handleInwardProductsChange, handlePushProduct, handleRemoveProduct } from './helper-function';
import { ProductFormFields } from '@prime-fresh/shared/components';
import { InwardRegisterFormPreview } from './inward-register.preview';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';

export const InwardRegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const Id = id ? id : '';

  const { data, isLoading } = useGetInwardRegisterForUpdateById(Id);
  const inwardData = data?.data ? data.data : InwardRegisterInitialValue;
  const initialValueInwardRegister = useMemo(
    () => (Id === '' ? InwardRegisterInitialValue : inwardData),
    [Id, inwardData]
  );

  const { data: employee, isLoading: isEmployeeDataLoading } = useGetEmployeePartialData();
  const employeeData = employee?.data ? mapToValueLabelArray(employee.data, 'id', 'fullName') : [];

  const formik = useFormik<PostInwardRegister>({
    initialValues: initialValueInwardRegister,
    validationSchema: inwardRegisterValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log('inward create: ', values);
      handleSubmit(values);
    },
  });

  const { data: dcnum } = useGetAllDeliveryChallanNums();
  const dcNums = useMemo(() => (dcnum?.data ? mapToValueLabelArray(dcnum.data, 'id', 'challanNo') : []), [dcnum]);

  const { data: grnno } = useGetAllGRNNums();
  const grnNums = useMemo(() => (grnno?.data ? mapToValueLabelArray(grnno.data, 'id', 'grnNo') : []), [grnno]);

  const { data: companies } = useGetCompanyNames();
  const companyNames = useMemo(
    () => (companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : []),
    [companies]
  );

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(() => (uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : []), [uoms]);

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations.data, 'id', 'name') : []),
    [locations]
  );

  const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateInwardRegister();
  const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateInwardRegister(Id);

  const handleSubmit = (values: any) => {
    Id === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(PostData ? PostData.message : 'Inward Register created successfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_INWARD_REGISTERS);
            }, 2000);
          })
          .catch(() => {
            toast.error(PostError ? PostError.message : 'Error while creating inward register.');
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(PatchData ? PatchData.message : 'Inward register updated sucessfully.');
            setTimeout(() => {
              navigate(inventoryRouteConstants.GET_ALL_INWARD_REGISTERS);
            }, 2000);
          })
          .catch(() => {
            toast.error(PatchError ? PatchError.message : 'Error while updating inward register.');
          });
  };
  return Id !== '' && isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <Fragment>
      <FormikProvider key={Id === '' ? 'create-inward' : 'update-inward'} value={formik}>
        <form key={Id === '' ? 'create-form' : 'update-form'} onSubmit={formik.handleSubmit}>
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
              <PageTitle pagetitle="Inward Register" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <RadioGroupInput
                isRequired={true}
                label="Inward Type"
                name="inwardType"
                alignment="horizontal"
                options={inventoryOptions.INWARD_TYPE}
                value={formik.values.inwardType}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Referred GRN"
                name="grnNo"
                options={grnNums}
                value={formik.values.grnNo}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Referred Challan"
                name="deliveryChallanNo"
                options={dcNums}
                value={formik.values.deliveryChallanNo}
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
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="batchNo"
                label="Batch Number"
                value={formik.values.batchNo}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput isRequired={true} name="location" label="Location" options={allLocations} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="date"
                isRequired={true}
                name="date"
                label="Date"
                value={formik.values.date}
                handleChange={formik.handleChange}
              />
            </Grid2>

            <VendorFarmerInfo<PostInwardRegister>
              source={formik.values.source}
              selectedParty={formik.values.selectedParty || ''}
            />

            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="inwardProducts">
                {() => (
                  <>
                    {formik.values.inwardProducts.map((_, index) => (
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
                          <Typography variant="caption" component="div" sx={{ fontWeight: 500 }}>
                            Product: {index + 1}
                          </Typography>
                          {formik.values.inwardProducts.length > 1 && (
                            <IconButton color="error" size="small" onClick={() => handleRemoveProduct(index, formik)}>
                              <Close fontSize="small" />
                            </IconButton>
                          )}
                        </Grid2>
                        <ProductFormFields fieldArrayName="inwardProducts" index={index} formik={formik} />
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <SelectInput
                            isRequired={true}
                            label="UOM (Inward in the form)"
                            name={`inwardProducts.${index}.uom`}
                            options={allUOMs}
                            value={formik.values['inwardProducts'][index].uom}
                            handleChange={formik.handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 3 }}>
                          <TextInput
                            isRequired={false}
                            type="number"
                            label="Weight (as per Inward UoM)"
                            name={`inwardProducts.${index}.weight`}
                            value={formik.values['inwardProducts'][index].weight || null}
                            handleChange={formik.handleChange}
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
                            name={`inwardProducts.${index}.quantity`}
                            label="Quantity"
                            value={formik.values['inwardProducts'][index].quantity || null}
                            handleChange={(e) =>
                              handleInwardProductsChange(index, 'quantity', Number(e.target.value), formik)
                            }
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={true}
                            name={`inwardProducts.${index}.unitPrice`}
                            label="Unit Price"
                            value={formik.values.inwardProducts[index].unitPrice || null}
                            handleChange={(e) =>
                              handleInwardProductsChange(index, 'unitPrice', Number(e.target.value), formik)
                            }
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={true}
                            name={`inwardProducts.${index}.amount`}
                            label="Amount"
                            value={formik.values.inwardProducts[index].amount || null}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <TextInput
                            type="number"
                            isRequired={false}
                            name={`inwardProducts.${index}.packingMaterialWeight`}
                            label="Packing Material Weight"
                            value={formik.values.inwardProducts[index].packingMaterialWeight || null}
                            handleChange={(e) =>
                              handleInwardProductsChange(index, 'packingMaterialWeight', Number(e.target.value), formik)
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
                            name={`inwardProducts.${index}.grossWeight`}
                            label="Gross Weight"
                            value={formik.values.inwardProducts[index].grossWeight || null}
                            handleChange={(e) =>
                              handleInwardProductsChange(index, 'grossWeight', Number(e.target.value), formik)
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
                            name={`inwardProducts.${index}.netWeight`}
                            label="Net Weight"
                            value={formik.values.inwardProducts[index].netWeight}
                            slotProps={{
                              input: {
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
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
                        onClickFn={() => handlePushProduct(InwardProductInitialValue, formik)}
                      />
                    </Grid2>
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="number"
                isRequired={true}
                name="purchasedQty"
                label="Purchased Quantity"
                value={formik.values.purchasedQty}
                handleChange={formik.handleChange}
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
                isRequired={true}
                isReadOnly={true}
                name="inwardQtyInKg"
                label="Inward Quantity"
                value={formik.values.inwardQtyInKg}
                handleChange={formik.handleChange}
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
                isRequired={true}
                isReadOnly={true}
                name="inwardCost"
                label="Inward Cost"
                value={formik.values.inwardCost}
                handleChange={formik.handleChange}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <AutoCompleteInput
                isRequired={true}
                name="purchasedBy"
                label="Purchased By"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <AutoCompleteInput
                isRequired={true}
                name="inwardBy"
                label="Inwarded By"
                options={employeeData}
                loading={isEmployeeDataLoading}
              />
            </Grid2>
            {/* <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="number"
                isReadOnly={true}
                isRequired={false}
                name="totalWeightInKg"
                label="Total Weight"
                value={formik.values.totalWeightInKg}
                slotProps={{
                  input: {
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                  },
                }}
              />
            </Grid2> */}
            
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
                submitLabel={Id === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={Id === '' ? PostError : PatchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                previewLabel="Preview"
                onPreview={() => {
                  dispatch(setPreview(true));
                  dispatch(setInwardRegisterFormPreview(formik.values));
                }}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <InwardRegisterFormPreview />
    </Fragment>
  );
};
