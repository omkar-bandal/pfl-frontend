import { Grid2, IconButton, InputAdornment, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import { STRINGS } from '@prime-fresh/admin/modules';
import { queryClient, useActions, useAppDispatch } from '@prime-fresh/modules';
import {
  grnInitialValue,
  grnProductsInitialValue,
  grnSchema,
  PURCHASE_ARRAYS,
  PURCHASE_ROUTES,
  purchaseOptionsConstants,
  setGRNFormPreview,
  useCreateGRN,
  useGetGRNForUpdateById,
} from '@prime-fresh/purchase/modules';
import { IGRN } from '@prime-fresh/purchase_api';
import {
  useGetCompanyNames,
  mapToValueLabelArray,
  useGetAllDealSlipNums,
  useGetBranchesPartialData,
  appendFormData,
  useGetUOMPartialData,
  reverseDateString,
  handleFormKeyDown,
} from '@prime-fresh/shared/modules';
import {
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  AutoCompleteInput,
  VendorFarmerInfo,
  AddFieldButton,
  ImageUpload,
  FormButtonGroup,
  SectionHeader,
} from '@prime-fresh/ui_shared';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handlePushProduct, handleGRNProductsChange, calculateDueDate, handleRemoveProduct, handleCalculateRemainingAmt } from './helper-functions';
import { ProductFormFields } from '@prime-fresh/shared/components';
import { Close } from '@mui/icons-material';
import { GRNPreview } from './grn.preview';

export const GRNForm = () => {
  const { id } = useParams<{ id: string }>();
  const grnId = id ? id : '';

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setPreview } = useActions();

  const { data: companies } = useGetCompanyNames();
  const companyNames = useMemo(
    () => (companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : []),
    [companies?.data]
  );

  const { data: dsNums } = useGetAllDealSlipNums();
  const dealSlipNums = useMemo(
    () => (dsNums?.data ? mapToValueLabelArray(dsNums.data, 'id', 'dealSlipNo') : []),
    [dsNums?.data]
  );

  const { data: UOMs } = useGetUOMPartialData();
  const allUOMs = useMemo(() => (UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : []), [UOMs?.data]);

  const { data: locations, isLoading: loadingLocations } = useGetBranchesPartialData();

  const allPurchaseLocation = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations.data, 'id', 'name') : []),
    [locations?.data]
  );

  const allPurchaseForEachLocations = useMemo(
    () =>
      locations?.data
        ? mapToValueLabelArray(
            locations.data.filter((loc) => loc.type === STRINGS.DC),
            'id',
            'name'
          )
        : [],
    [locations?.data]
  );

  const { data: grn, isLoading } = useGetGRNForUpdateById(grnId);
  const grnData = grn?.data ? grn.data : grnInitialValue;
  const initialValuesForGRN = grnId === '' ? grnInitialValue : grnData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValuesForGRN,
    validationSchema: grnSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => handleSubmit(values),
  });
  const { mutateAsync: mutatePost, data, error } = useCreateGRN();

  const handleSubmit = (values: Omit<IGRN, 'id'>) => {
    console.log('submitted Grn products,', values.grnProducts);
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData)
      .then(() => {
        toast.success(data ? data.message : 'GRN created.');
        queryClient.invalidateQueries({ queryKey: ['user-notifications'] })
        setTimeout(() => {
          navigate(PURCHASE_ROUTES.GET_ALL_GRN);
        }, 2000);
      })
      .catch(() => {
        toast.error(error ? error.message : 'Error while creating GRN.');
      });
  };

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
    <FormikProvider key={grnId === '' ? 'create-grn' : 'update-grn'} value={formik}>
      <form
        encType="multipart/form-data"
        key={grnId === '' ? 'create-form' : 'update-grn'}
        onKeyDown={handleFormKeyDown}
        onSubmit={formik.handleSubmit}
      >
        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
          <Grid2 size={{ xs: 12 }} marginBottom={2}>
            <PageTitle pagetitle="Goods Received Note" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <RadioGroupInput
              isRequired={true}
              label="Type of GRN"
              name="grnType"
              alignment="vertical"
              options={purchaseOptionsConstants.grnType}
              value={formik.values.grnType}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <RadioGroupInput
              isRequired={true}
              label="Location Type"
              name="locationType"
              alignment="vertical"
              options={purchaseOptionsConstants.locationTypes}
              value={formik.values.locationType}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <RadioGroupInput
              isRequired={true}
              label="Purchase Type"
              name="purchaseType"
              alignment="vertical"
              options={purchaseOptionsConstants.purchaseType}
              value={formik.values.purchaseType}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SelectInput
              isRequired={false}
              label="Select Deal Slip"
              name="dealSlipId"
              options={dealSlipNums}
              value={formik.values.dealSlipId}
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
              isRequired={false}
              type="text"
              name="billNo"
              label="Bill Number"
              value={formik.values.billNo}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={true}
              type="text"
              name="purchaseInstructionsBy"
              label="Purchase Instructions By"
              value={formik.values.purchaseInstructionsBy}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <AutoCompleteInput
              isRequired={true}
              name="purchaseLocation"
              label="Purchase Location"
              loading={loadingLocations}
              options={allPurchaseLocation}
              handleChange={(event, newValue) => {
                if (newValue !== null) {
                  if (typeof newValue === 'string') formik.setFieldValue(`purchaseLocation`, null);
                  else {
                    formik.setFieldValue(`purchaseLocation`, newValue.value);
                  }
                } else formik.setFieldValue('purchaseLocation', null);
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <AutoCompleteInput
              isRequired={true}
              name="purchaseForSalesLocation"
              label="Purchase For Sales Location"
              loading={loadingLocations}
              options={allPurchaseForEachLocations}
              handleChange={(event, newValue) => {
                if (newValue !== null) {
                  if (typeof newValue === 'string') formik.setFieldValue(`purchaseForSalesLocation`, null);
                  else {
                    formik.setFieldValue(`purchaseForSalesLocation`, newValue.value);
                  }
                } else formik.setFieldValue('purchaseForSalesLocation', null);
              }}
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
              name="specialReq"
              label="Special Request"
              value={formik.values.specialReq}
              handleChange={formik.handleChange}
            />
          </Grid2>

          {/*Vendor or Farmer info depend on selected source */}
          <VendorFarmerInfo<IGRN> source={formik.values.source} selectedParty={formik.values.selectedParty || ''} />

          <Grid2 size={{ xs: 12 }} marginY={2}>
            <SectionHeader sectionHeader="Product Required" />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <FieldArray name="grnProducts">
              {({ push, remove }) => (
                <>
                  {formik.values.grnProducts.map((_, index) => (
                    <Grid2
                      container
                      spacing={1}
                      key={index}
                      alignItems="center"
                      marginY={1}
                      padding={1}
                      sx={{ border: `1px solid #ccc`, borderRadius: 2 }}
                    >
                      <Grid2
                        size={{ xs: 12 }}
                        sx={{
                          display: 'flex',
                          justifyContent: 'end',
                          alignItems: 'center',
                        }}
                      >
                        {formik.values.grnProducts.length > 1 ? (
                          <IconButton color="error" size="small" onClick={() => handleRemoveProduct(index, formik)}>
                            <Close fontSize="small" />
                          </IconButton>
                        ) : (
                          ''
                        )}
                      </Grid2>
                      <ProductFormFields fieldArrayName="grnProducts" index={index} formik={formik} />
                      <Grid2 size={{ xs: 6, md: 3 }}>
                        <SelectInput
                          isRequired={false}
                          id={`grnProducts.${index}.uom`}
                          name={`grnProducts.${index}.uom`}
                          label="Unit"
                          options={allUOMs}
                          value={formik.values.grnProducts[index].uom}
                          handleChange={formik.handleChange}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          isRequired={true}
                          label="Quantity"
                          name={`grnProducts.${index}.quantity`}
                          type="number"
                          value={formik.values.grnProducts[index].quantity || null}
                          handleChange={(event) =>
                            handleGRNProductsChange(
                              index,
                              'quantity',
                              Number(event.target.value),
                              formik
                            )
                          }
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          isRequired={true}
                          type="number"
                          label="Rate"
                          id={`grnProducts.${index}.unitPrice`}
                          name={`grnProducts.${index}.unitPrice`}
                          value={formik.values.grnProducts[index].unitPrice || null}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                            },
                          }}
                          handleChange={(event) =>
                            handleGRNProductsChange(
                              index,
                              'unitPrice',
                              Number(event.target.value),
                              formik
                            )
                          }
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          isRequired={false}
                          isReadOnly={true}
                          type="number"
                          label="Amount"
                          id={`grnProducts.${index}.amount`}
                          name={`grnProducts.${index}.amount`}
                          value={formik.values.grnProducts[index].amount || ''}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                            },
                          }}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          type="number"
                          isRequired={true}
                          id={`grnProducts.${index}.packingMaterialWeight`}
                          name={`grnProducts.${index}.packingMaterialWeight`}
                          label="Packing Material Weight (in grams)"
                          value={formik.values.grnProducts[index].packingMaterialWeight || null}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">grams</InputAdornment>,
                            },
                          }}
                          handleChange={(event) =>
                            handleGRNProductsChange(
                              index,
                              'packingMaterialWeight',
                              Number(event.target.value),
                              formik
                            )
                          }
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          type="number"
                          isRequired={true}
                          id={`grnProducts.${index}.grossWeight`}
                          name={`grnProducts.${index}.grossWeight`}
                          label="Gross Weight (in kg)"
                          value={formik.values.grnProducts[index].grossWeight || null}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            },
                          }}
                          handleChange={(event) =>
                            handleGRNProductsChange(
                              index,
                              'grossWeight',
                              Number(event.target.value),
                              formik
                            )
                          }
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 4 }}>
                        <TextInput
                          type="number"
                          isRequired={false}
                          isReadOnly={true}
                          id={`grnProducts.${index}.netWeight`}
                          name={`grnProducts.${index}.netWeight`}
                          label="Net Weight (in kg)"
                          value={formik.values.grnProducts[index].netWeight}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                            },
                          }}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 3 }}>
                        <TextInput
                          isRequired={true}
                          label="Purchase Date"
                          name={`grnProducts.${index}.purchaseDate`}
                          type="date"
                          value={reverseDateString(formik.values.grnProducts[index].purchaseDate || '')}
                          handleChange={formik.handleChange}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 3 }}>
                        <TextInput
                          isRequired={true}
                          label="Dispatch Date"
                          name={`grnProducts.${index}.dispatchDate`}
                          type="date"
                          value={reverseDateString(formik.values.grnProducts[index].dispatchDate || '')}
                          handleChange={formik.handleChange}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 3 }}>
                        <TextInput
                          isRequired={true}
                          label="Delivery Date"
                          name={`grnProducts.${index}.deliveryDate`}
                          type="date"
                          value={reverseDateString(formik.values.grnProducts[index].deliveryDate || '')}
                          handleChange={formik.handleChange}
                        />
                      </Grid2>
                      {formik.values.source === 'farmer' ? (
                        <Grid2 size={{ xs: 6, md: 3 }}>
                          <TextInput
                            isRequired={false}
                            label="Expected Harvest Date"
                            name={`grnProducts.${index}.expectedHarvestDate`}
                            type="date"
                            value={formik.values.grnProducts[index].expectedHarvestDate}
                            handleChange={formik.handleChange}
                          />
                        </Grid2>
                      ) : (
                        ''
                      )}
                      <Grid2 size={{ xs: 6, md: 3 }}>
                        <TextInput
                          isRequired={true}
                          label="Delivery Location"
                          name={`grnProducts.${index}.deliveryLocation`}
                          type="text"
                          value={formik.values.grnProducts[index].deliveryLocation}
                          handleChange={formik.handleChange}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 6, md: 9 }}>
                        <RadioGroupInput
                          isRequired={true}
                          label="RTV"
                          alignment="vertical"
                          name={`grnProducts.${index}.rtv`}
                          options={[
                            { label: 'Yes', value: true },
                            { label: 'No', value: false },
                          ]}
                          value={formik.values.grnProducts[index].rtv}
                          onChange={formik.handleChange}
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
                      onClickFn={() => handlePushProduct(grnProductsInitialValue, formik)}
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
              label="Subtotal"
              name="subTotalAmt"
              type="number"
              value={formik.values.subTotalAmt}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={false}
              label="Freight"
              name="freight"
              type="number"
              value={formik.values.freight || ''}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
              handleChange={(e) =>
                handleGRNProductsChange(null, 'freight', Number(e.target.value), formik)
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={false}
              label="Other Charges"
              name="otherCharges"
              type="number"
              value={formik.values.otherCharges || ''}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
              handleChange={(e) =>
                handleGRNProductsChange(
                  null,
                  'otherCharges',
                  Number(e.target.value),
                  formik
                )
              }
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label="Total Amount"
              name="totalAmt"
              type="number"
              value={formik.values.totalAmt}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label="Total Amount in Words"
              name="amtWords"
              type="text"
              value={formik.values.amtWords}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} marginY={2}>
            <SectionHeader sectionHeader="Payment Information" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={true}
              type="number"
              label="Payment Terms"
              id="paymentInfo.paymentTerms"
              name="paymentInfo.paymentTerms"
              value={formik.values.paymentInfo?.paymentTerms}
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
              id="paymentInfo.creditPeriod"
              isRequired={true}
              type="number"
              label="Credit Period (in Days)"
              name="paymentInfo.creditPeriod"
              value={formik.values.paymentInfo?.creditPeriod}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Days</InputAdornment>,
                },
              }}
              handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const creditPeriod = parseInt(event.target.value, 10) || 0;
                formik.setFieldValue('paymentInfo.creditPeriod', creditPeriod);
                if (formik.values.paymentInfo?.paymentDate) {
                  const dueDate = calculateDueDate(formik.values.paymentInfo.paymentDate, creditPeriod);
                  formik.setFieldValue('paymentInfo.dueDate', dueDate);
                }
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
              value={formik.values.paymentInfo?.paymentDate}
              handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const paymentDate = event.target.value;
                formik.setFieldValue('paymentInfo.paymentDate', paymentDate);
                if (formik.values.paymentInfo?.creditPeriod) {
                  const dueDate = calculateDueDate(paymentDate, Number(formik.values.paymentInfo?.creditPeriod));
                  formik.setFieldValue('paymentInfo.dueDate', dueDate);
                }
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
              value={formik.values.paymentInfo?.dueDate}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              isRequired={true}
              id="paymentInfo.paymentMode"
              name="paymentInfo.paymentMode"
              label="Payment Mode"
              options={PURCHASE_ARRAYS.paymentMode}
              value={formik.values.paymentInfo?.paymentMode}
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
              value={formik.values.paymentInfo?.advancePaidAmt}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
              handleChange={(e) => handleCalculateRemainingAmt(Number(e.target.value), formik)}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              type="number"
              id="paymentInfo.remainingAmt"
              name="paymentInfo.remainingAmt"
              label="Remaining Amount"
              value={formik.values.paymentInfo?.remainingAmt}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
              // onChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} marginY={2}>
            <SectionHeader sectionHeader="Other Information" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <TextInput
              isRequired={false}
              label="Vehicle Number"
              name="vehicleNo"
              type="text"
              value={formik.values.vehicleNo}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <TextInput
              isRequired={false}
              label="Crates In"
              name="cratesIn"
              type="number"
              value={formik.values.cratesIn}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <TextInput
              isRequired={false}
              label="Time In"
              name="timeIn"
              type="time"
              value={formik.values.timeIn}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={false}
              label="Received Through"
              name="receivedThrough"
              type="text"
              value={formik.values.receivedThrough}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextInput
              isRequired={false}
              label="Purchase By"
              name="purchasedBy"
              type="text"
              value={formik.values.purchasedBy}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={true}
              label="Delivery Receiving Person"
              name="deliveryReceivingPerson"
              type="text"
              value={formik.values.deliveryReceivingPerson}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={false}
              label="Security Person Name"
              name="securityPerson"
              type="text"
              value={formik.values.securityPerson}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={true}
              label="RM Name"
              name="rmn"
              type="text"
              value={formik.values.rmn}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextInput
              isRequired={false}
              label="Remark"
              name="remark"
              type="text"
              value={formik.values.remark}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <ImageUpload isRequired={false} name="billImage" label="Bill Image" />
          </Grid2>
          <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormButtonGroup
              submitLabel={grnId === '' ? "Create" : "Update"}
              isSubmitting={formik.isSubmitting}
              isSubmitError={error}
              resetLabel="Reset"
              onReset={formik.handleReset}
              previewLabel="Preview"
              onPreview={() => {
                dispatch(setGRNFormPreview(formik.values));
                dispatch(setPreview(true));
              }}
            />
          </Grid2>
        </Grid2>
      </form>
    </FormikProvider>
    <GRNPreview />
    </>
  );
};
