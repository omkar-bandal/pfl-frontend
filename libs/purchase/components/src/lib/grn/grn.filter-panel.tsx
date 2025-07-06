/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid2} from '@mui/material';
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import {
  mapToValueLabelArray,
  useGetBranchesPartialData,
  useGetCompanyNames,
} from '@prime-fresh/shared/modules';
import { SelectInput } from '@prime-fresh/ui_shared';

type FilterPanelProps = {
  formikInstance: any;
};

export const GRNFilterPanel: React.FC<FilterPanelProps> = ({ formikInstance }) => {
  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
  const { data: loc } = useGetBranchesPartialData();
  const branches = loc?.data ? mapToValueLabelArray(loc.data, 'id', 'name') : [];
  // const { data: farmer } = useGetFarmersPartialData();
  // const Farmers = farmer?.data ? mapToValueLabelArray(farmer.data, 'id', 'fullName') : [];
  // const { data: vendor } = useGetVendorsPartialData();
  // const Vendors = vendor?.data ? mapToValueLabelArray(vendor.data, 'id', 'companyName') : [];

  return (
    <Grid2 container rowSpacing={1} columnSpacing={1}>
      <Grid2 size={{ xs: 12 }}>
        <SelectInput
          isRequired={false}
          label="Companies"
          name="companyName"
          value={formikInstance.values.companyName}
          handleChange={formikInstance.handleChange}
          options={companyNames}
          noOptionsMessage="No options available"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <SelectInput
          isRequired={false}
          label="Purchase Location"
          name="purchaseLocation"
          value={formikInstance.values.purchaseLocation}
          handleChange={formikInstance.handleChange}
          options={branches}
          noOptionsMessage="No options available"
          />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <SelectInput
          isRequired={false}
          label="Purchase For Sales Location"
          name="purchaseForSalesLocation"
          value={formikInstance.values.purchaseForSalesLocation}
          handleChange={formikInstance.handleChange}
          options={branches}
          noOptionsMessage="No options available"
          />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={false}
          label="GRN Type"
          name="grnType"
          value={formikInstance.values.grnType}
          handleChange={formikInstance.handleChange}
          options={PURCHASE_ARRAYS.grnType}
          noOptionsMessage="No options available"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={false}
          label="Location Type"
          name="locationType"
          value={formikInstance.values.locationType}
          handleChange={formikInstance.handleChange}
          options={PURCHASE_ARRAYS.locationType}
          noOptionsMessage="No options available"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={false}
          label="Source"
          name="source"
          value={formikInstance.values.source}
          handleChange={formikInstance.handleChange}
          options={PURCHASE_ARRAYS.source}
          noOptionsMessage="No options available"
        />
      </Grid2>
    </Grid2>
  );
};

