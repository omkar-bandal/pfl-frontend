/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useMemo } from 'react';
import { useFormikContext } from 'formik';
import { CompanyNamesData, IEmployee, LocationPartialData } from '@prime-fresh/services';
import { adminStaticData } from '@prime-fresh/admin/modules';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid2 } from '@mui/material';
import {
  mapToValueLabelArray,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetOfficesPartialData,
} from '@prime-fresh/shared/modules';
import {
  AutoCompleteInput,
  Label,
  MultiSelectAutocomplete,
  TextInput,
} from '@prime-fresh/shared/components';

type OfficeInfoTypes = {
  companyData: CompanyNamesData[];
  branchData: LocationPartialData[];
  officeData: LocationPartialData[];
}
export const OfficeInfo: FC<OfficeInfoTypes> = memo(({branchData, companyData, officeData}) => {
  const { values, handleChange, touched, setFieldValue, errors } = useFormikContext<IEmployee>();

 
  const branches = useMemo(() => (branchData ? mapToValueLabelArray(branchData, 'id', 'name') : []), [branchData]);
  const branchesWithAllOption = useMemo(
    () => (branchData ? [...branchData, { id: 'all-locations', name: 'All Locations', type: '' }] : []),
    [branchData]
  );

  const offices = useMemo(() => (officeData ? mapToValueLabelArray(officeData, 'id', 'name') : []), [officeData]);

  const mappedLocations = useMemo(() => [...branches, ...offices], [branches, offices]);

  const handleCheckboxChange = (value: string) => {
    const currentSelection = values.roles;
    if (currentSelection.includes(value)) {
      // If already selected, deselect it
      setFieldValue(
        'roles',
        currentSelection.filter(v => v !== value)
      );
    } else {
      // If not selected, replace with this one
      setFieldValue('roles', [value]);
    }
  };

  const isError = touched.roles && Boolean(errors.roles);

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <MultiSelectAutocomplete
          isRequired={true}
          limitTags={1}
          name="companyName"
          label="Comapany Name"
          options={companyData}
          getOptionLabel={option => option.name}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="Designation"
          name="designation"
          value={values.designation}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <MultiSelectAutocomplete
          isRequired={true}
          limitTags={1}
          label="Department"
          name="department"
          options={adminStaticData.departments}
          getOptionLabel={(option) => option?.label}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextInput
          type="date"
          isRequired={true}
          label="Joining Date"
          name="joiningDate"
          value={values.joiningDate}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AutoCompleteInput
          isRequired={true}
          label="Joining Location"
          name="joiningLocation"
          options={mappedLocations}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AutoCompleteInput
          isRequired={true}
          label="Work Location"
          name="currentWorkLocation"
          options={[...mappedLocations, { value: '', label: 'Other' }]}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <MultiSelectAutocomplete
          isRequired={true}
          limitTags={2}
          label="Access To Locations"
          name="accessLocation"
          options={branchesWithAllOption || []}
          getOptionLabel={(option) => option?.name}
          selectAllId="all-locations"
        />
      </Grid2>
      {touched.currentWorkLocation && values.currentWorkLocation === '' && (
        <Grid2 size={{ xs: 12 }}>
          <TextInput
            isRequired={false}
            label="Other Work Location"
            name="otherWorkLocationInput"
            value={values.otherWorkLocationInput}
            handleChange={handleChange}
          />
        </Grid2>
      )}
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="CUG Number"
          name="cugNo"
          value={values.cugNo}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          isRequired={false}
          label="Work Email"
          name="workEmail"
          value={values.workEmail}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={12}>
        <FormControl component="fieldset" error={isError}>
          <Label name='roles' label='Type of User' isRequired={true} isError={isError || false} />
          <FormGroup>
            {adminStaticData.typeOfUser.map((option, index) => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    name={`roles`}
                    value={option.value}
                    checked={values.roles?.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                  />
                }
                label={option.label}
              />
            ))}
          </FormGroup>
          {isError && <FormHelperText>{errors.roles}</FormHelperText>}
        </FormControl>
      </Grid2>
    </Grid2>
  );
});
