import { FC, useMemo } from 'react';
import { useFormikContext } from 'formik';
import { IVendor, PackagingMaterialPartialData, ProductPartialData } from '@prime-fresh/services';
import { Grid2, InputAdornment } from '@mui/material';
import {
  mapToValueLabelArray,
  sharedData,
  useGetPackagingMaterialPartialData,
  useGetProductsPartialData,
} from '@prime-fresh/shared/modules';
import {
  AutoCompleteInput,
  FileUpload,
  MultiSelectAutocomplete,
  RadioGroupInput,
  SelectInput,
  TextInput,
} from '../../../components';

type VendorOtherDetailsProps = {
  products: ProductPartialData[];
  isProductFetching: boolean;
  packingMaterails: PackagingMaterialPartialData[];
  isPackMatFetching: boolean;
};

export const VendorOtherDetails: FC<VendorOtherDetailsProps> = ({
  products,
  isProductFetching,
  packingMaterails,
  isPackMatFetching,
}) => {
  const { values, handleChange } = useFormikContext<IVendor>();
  const disableGSTNinfo = useMemo(
    () => (values.ifGstnCopy === false || String(values.ifGstnCopy) === 'false' ? true : false),
    [values.ifGstnCopy]
  );
  const disablePANinfo = useMemo(
    () => (values.ifPanCardCopy === false || String(values.ifPanCardCopy) === 'false' ? true : false),
    [values.ifPanCardCopy]
  );
  const disableMSMEinfo = useMemo(
    () => (values.ifMsmeCopy === false || String(values.ifMsmeCopy) === 'false' ? true : false),
    [values.ifMsmeCopy]
  );

  const mappedProducts = mapToValueLabelArray(products, 'id', 'name');

  const mappedPackingMaterails = mapToValueLabelArray(packingMaterails, 'id', 'packagingMaterialName');

  return (
    <Grid2 container spacing={1}>
      {['fresh fruits', 'mangoes', 'vegetables', 'onion', 'potato', 'tomato', 'value added product'].includes(
        values.classification || ''
      ) && (
        <>
          <Grid2 size={{ xs: 12, md: 9 }}>
            <MultiSelectAutocomplete
              isLoading={isProductFetching}
              isRequired={false}
              limitTags={3}
              name="listOfAllProducts"
              label="List Of All Products"
              options={products}
              getOptionLabel={(option) => option.name}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 3 }}>
            <AutoCompleteInput
              isRequired={false}
              name="mainProduct"
              label="Main Products To Be Supplied"
              options={mappedProducts}
            />
          </Grid2>
        </>
      )}
      {values.classification === 'packing material' && (
        <>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <MultiSelectAutocomplete
              isLoading={isPackMatFetching}
              isRequired={false}
              limitTags={3}
              name="listOfPackingMaterial"
              label="List Of Packing Materials"
              options={packingMaterails}
              getOptionLabel={(option) => option.packagingMaterialName}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <AutoCompleteInput
              isRequired={false}
              name="mainPackingMaterial"
              label="Main Packing Material To Be Supplied"
              options={mappedPackingMaterails}
            />
          </Grid2>
        </>
      )}
      {['service', 'stationary', 'crockery', 'marketing product', 'staff wellfare', 'other'].includes(
        values.classification || ''
      ) && (
        <Grid2 size={{ xs: 12 }}>
          <TextInput
            type="text"
            isRequired={false}
            name="otherProductOrService"
            label="Products or Services"
            value={values.otherProductOrService || ''}
            handleChange={handleChange}
          />
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="dispatchCenter"
          label="Dispatch Center"
          value={values.dispatchCenter || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="warehouseLocations"
          label="Warehouse Locations"
          value={values.warehouseLocations || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="packingCenterLocation"
          label="Packing Center Location"
          value={values.packingCenterLocation || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <RadioGroupInput
          isRequired={false}
          alignment="vertical"
          name="ifGstnCopy"
          label="GSTN available?"
          value={values.ifGstnCopy}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="gstn"
          label="GSTN (if available)"
          value={values.gstn || ''}
          handleChange={handleChange}
          isReadOnly={disableGSTNinfo}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <FileUpload
          isRequired={false}
          isReadOnly={disableGSTNinfo}
          name="gstnCopy"
          label="GST Regn. Cert. Copy (if available)"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <RadioGroupInput
          isRequired={false}
          alignment="vertical"
          name="ifPanCardCopy"
          label="PAN card available?"
          value={values.ifPanCardCopy}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <TextInput
          type="text"
          isRequired={false}
          isReadOnly={disablePANinfo}
          name="panNo"
          label="PAN Number (if available)"
          value={values.panNo || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <FileUpload
          isRequired={false}
          isReadOnly={disablePANinfo}
          name="panCardCopy"
          label="PAN Card Copy (if available)"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <RadioGroupInput
          isRequired={false}
          alignment="vertical"
          name="ifMsmeCopy"
          label="MSME Cert. available?"
          value={values.ifMsmeCopy}
          options={sharedData.fileYesOrNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <TextInput
          type="text"
          isRequired={false}
          isReadOnly={disableMSMEinfo}
          name="msmeNo"
          label="MSME Number (if available)"
          value={values.msmeNo || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 5 }}>
        <FileUpload
          isRequired={false}
          isReadOnly={disableMSMEinfo}
          name="msmeCopy"
          label="UDYAM (MSME) Card Copy (if available)"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="tradeLicenseNumber"
          label="Trade License Number"
          value={values.tradeLicenseNumber || ''}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          name="paymentMode"
          label="Proposed Payment Mode"
          value={values.paymentMode}
          options={sharedData.paymentMode}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          name="proposedPaymentTerms"
          label="Proposed Payment Terms"
          value={values.proposedPaymentTerms}
          handleChange={handleChange}
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
          name="creditTerms"
          label="Credit Terms"
          value={values.creditTerms}
          handleChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Days</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextInput
          type="text"
          isRequired={false}
          multiline
          maxRows={4}
          name="anyDetailsTeamAndInfra"
          label="Any Other Details Regarding Team And Infrastructure"
          value={values.anyDetailsTeamAndInfra || ''}
          handleChange={handleChange}
        />
      </Grid2>
    </Grid2>
  );
};
