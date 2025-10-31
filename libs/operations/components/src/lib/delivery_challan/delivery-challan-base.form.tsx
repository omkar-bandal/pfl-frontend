import { FC, useCallback, useMemo } from 'react';
import { FieldArray } from 'formik';
import { Close } from '@mui/icons-material';
import { handleProductChange } from './helper-function';
import { Grid2, IconButton, InputAdornment, Typography } from '@mui/material';
import { dcProductsInitialValues } from '@prime-fresh/operations/modules';
import {
  AddFieldButton,
  AutoCompleteInput,
  ImageUpload,
  SectionHeader,
  SelectInput,
  TextInput,
  ProductFormFields,
} from '@prime-fresh/shared/components';
import {
  getSelectedPackMatData,
  mapToValueLabelArray,
  useGetUOMPartialData,
  useGetAllPackagingMaterials,
} from '@prime-fresh/shared/modules';

/* eslint-disable @typescript-eslint/no-explicit-any */
type DeliveryChallanBaseFormProp = {
  formik: any;
};
export const DeliveryChallanBaseForm: FC<DeliveryChallanBaseFormProp> = (props) => {
  const { formik } = props;

  const { data: uom } = useGetUOMPartialData();
  const allUOMs = useMemo(() => (uom?.data ? mapToValueLabelArray(uom.data, 'id', 'unit') : []), [uom?.data]);

  const { data: packMatData, isFetching } = useGetAllPackagingMaterials();
  const packagingMaterials = useMemo(
    () => (packMatData?.data ? mapToValueLabelArray(packMatData?.data, 'id', 'packagingMaterialName') : []),
    [packMatData?.data]
  );

  const handlePackagingMaterialChange = useCallback(
    (newValue: any, index: number) => {
      if (packMatData?.data) {
        const selectedData = packMatData?.data?.find((data) => data.id === newValue.value);
        formik.setFieldValue(`deliveryChallanProducts.${index}.packagingMaterial`, newValue.value);
        selectedData?.packagingMaterialWeight !== null
          ? formik.setFieldValue(
              `deliveryChallanProducts.${index}.packingMaterialWeight`,
              selectedData?.packagingMaterialWeight
            )
          : formik.setFieldValue(`deliveryChallanProducts.${index}.packingMaterialWeight`, null);
      } else {
        formik.setFieldValue(`deliveryChallanProducts.${index}.packagingMaterial`, null);
        formik.setFieldValue(`deliveryChallanProducts.${index}.packingMaterialWeight`, null);
      }
    },
    [formik, packMatData?.data]
  );

  const getQtyPerPackage = useCallback(
    (index: number) => {
      const containsQty = getSelectedPackMatData(
        formik.values.deliveryChallanProducts[index].packagingMaterial,
        packMatData?.data
      )?.containsQuantity;
      const containsQtyUoM = getSelectedPackMatData(
        formik.values.deliveryChallanProducts[index].packagingMaterial,
        packMatData?.data
      )?.uom;
      if (containsQty && containsQtyUoM) return `${containsQty} ${containsQtyUoM}`;
      else return null;
    },
    [formik.values.deliveryChallanProducts, packMatData?.data]
  );

  return (
    <>
      <Grid2 size={{ xs: 12 }} marginY={1}>
        <SectionHeader sectionHeader="Products" />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <FieldArray name="deliveryChallanProducts">
          {({ remove, push }) => (
            <>
              {formik.values.deliveryChallanProducts.map((_item: any, index: number) => (
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
                    {formik.values.deliveryChallanProducts.length > 1 ? (
                      <IconButton color="error" size="small" onClick={() => remove(index)}>
                        <Close />
                      </IconButton>
                    ) : (
                      ''
                    )}
                  </Grid2>
                  <Grid2 container size={{ xs: 12 }} spacing={1}>
                    <Grid2 size={{ xs: 12 }} marginY={1}>
                      <Typography variant="caption" component="div" sx={{ borderBottom: `1px solid #ccc` }}>
                        Product Details
                      </Typography>
                    </Grid2>
                    <ProductFormFields fieldArrayName="deliveryChallanProducts" index={index} formik={formik} />
                  </Grid2>
                  <Grid2 container size={{ xs: 12 }} spacing={1}>
                    <Grid2 size={{ xs: 12 }} marginY={1}>
                      <Typography variant="caption" component="div" sx={{ borderBottom: `1px solid #ccc` }}>
                        Packaging Material Details
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <AutoCompleteInput
                        name={`deliveryChallanProducts.${index}.packagingMaterial`}
                        label="Packaging Material"
                        options={packagingMaterials}
                        loading={isFetching}
                        handleChange={(event, newValue) => {
                          handlePackagingMaterialChange(newValue, index);
                        }}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        isReadOnly={false}
                        name="containsQuantity"
                        label="Quantity Per Package"
                        value={getQtyPerPackage(index)}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        type="number"
                        isRequired={false}
                        name={`deliveryChallanProducts.${index}.packingMaterialWeight`}
                        label="Packing Material Weight"
                        value={formik.values.deliveryChallanProducts[index].packingMaterialWeight || ''}
                        handleChange={(event) => handleProductChange(event, index, formik)}
                        slotProps={{
                          input: {
                            endAdornment: <InputAdornment position="end">grams</InputAdornment>,
                          },
                        }}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <SelectInput
                        isRequired={false}
                        name={`deliveryChallanProducts.${index}.packagingMaterialUoM`}
                        label="Material UoM"
                        options={allUOMs}
                        value={formik.values.deliveryChallanProducts[index].packagingMaterialUoM}
                        handleChange={formik.handleChange}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        isRequired={false}
                        name={`deliveryChallanProducts.${index}.packagingMaterialQuantity`}
                        label="Material Quantity"
                        value={formik.values.deliveryChallanProducts[index].packagingMaterialQuantity}
                        handleChange={(event) => handleProductChange(event, index, formik)}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        isRequired={false}
                        name={`deliveryChallanProducts.${index}.packagingMaterialUnitPrice`}
                        label="Material Unit Price"
                        value={formik.values.deliveryChallanProducts[index].packagingMaterialUnitPrice}
                        handleChange={(event) => handleProductChange(event, index, formik)}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        isRequired={false}
                        isReadOnly={true}
                        name={`deliveryChallanProducts.${index}.packagingMaterialAmount`}
                        label="Material Amount"
                        value={formik.values.deliveryChallanProducts[index].packagingMaterialAmount}
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
                        isReadOnly={true}
                        name={`deliveryChallanProducts.${index}.packagingMaterialTotalWeight`}
                        label="Material Total Weight"
                        value={formik.values.deliveryChallanProducts[index].packagingMaterialTotalWeight}
                        slotProps={{
                          input: {
                            endAdornment: <InputAdornment position="end">grams</InputAdornment>,
                          },
                        }}
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={1}>
                    <Grid2 size={{ xs: 12 }} marginY={1}>
                      <Typography variant="caption" component="div" sx={{ borderBottom: `1px solid #ccc` }}>
                        Product Net Weight & Amount
                      </Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <SelectInput
                        isRequired={false}
                        label="Sale UoM"
                        name={`deliveryChallanProducts.${index}.saleUoM`}
                        options={allUOMs}
                        value={formik.values.deliveryChallanProducts[index].saleUoM}
                        handleChange={formik.handleChange}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <TextInput
                        type="number"
                        isRequired={true}
                        name={`deliveryChallanProducts.${index}.grossWeight`}
                        label="Product Gross Weight"
                        value={formik.values.deliveryChallanProducts[index].grossWeight || ''}
                        handleChange={(event) => handleProductChange(event, index, formik)}
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
                        name={`deliveryChallanProducts.${index}.netWeight`}
                        label="Product Net Weight"
                        value={formik.values.deliveryChallanProducts[index].netWeight}
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
                        isRequired={true}
                        name={`deliveryChallanProducts.${index}.quantity`}
                        label="Quantity"
                        value={Number(formik.values.deliveryChallanProducts[index].quantity) || ''}
                        handleChange={(event) => handleProductChange(event, index, formik)}
                      />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                      <TextInput
                        type="number"
                        isRequired={true}
                        name={`deliveryChallanProducts.${index}.unitPrice`}
                        label="Unit Price"
                        value={Number(formik.values.deliveryChallanProducts[index].unitPrice) || ''}
                        handleChange={(event) => handleProductChange(event, index, formik)}
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
                        name={`deliveryChallanProducts.${index}.amount`}
                        label="Amount"
                        value={Number(formik.values.deliveryChallanProducts[index].amount)}
                        slotProps={{
                          input: {
                            endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                          },
                        }}
                      />
                    </Grid2>
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
                <AddFieldButton label="Add More" onClickFn={() => push(dcProductsInitialValues)} />
              </Grid2>
            </>
          )}
        </FieldArray>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          isReadOnly={true}
          name="netPackagingMaterialWeight"
          label="Net Packaging Material Weight"
          value={formik.values.netPackagingMaterialWeight}
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
          isRequired={false}
          isReadOnly={true}
          name="totalPackagingMaterialAmount"
          label="Total Packaging Material Amount"
          value={formik.values.totalPackagingMaterialAmount}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          isReadOnly={true}
          name="netProductWeight"
          label="Net Product Weight"
          value={formik.values.netProductWeight}
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
          isRequired={false}
          isReadOnly={true}
          name="totalProductAmount"
          label="Total Product Amount"
          value={Number(formik.values.totalProductAmount)}
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
          name="totalAmtInWords"
          label="Amount in words"
          value={formik.values.totalAmtInWords}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="driverName"
          label="Driver Name"
          value={formik.values.driverName}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="licenseNo"
          label="Driver's License Number"
          value={formik.values.licenseNo}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="contactNo"
          label="Contact No"
          value={formik.values.contactNo}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="altContactNo"
          label="Alternate Contact No"
          value={formik.values.altContactNo}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="vehicleNo"
          label="Vehicle No"
          value={formik.values.vehicleNo}
          handleChange={formik.handleChange}
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="receiverName"
          label="Receiver Name"
          value={formik.values.receiverName}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="rmn"
          label="RM Name"
          value={formik.values.rmn}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="remark"
          label="Remark"
          value={formik.values.remark}
          handleChange={formik.handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
      </Grid2>
    </>
  );
};
