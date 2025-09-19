/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid2 } from '@mui/material';
import { ADMIN_ARRAYS } from '@prime-fresh/admin/modules';
import { IEmployee } from '@prime-fresh/admin_api';
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
  RadioGroupInput,
  SelectInput,
  TextInput,
} from '@prime-fresh/ui_shared';
import { getIn, useFormikContext } from 'formik';
import { memo, useMemo } from 'react';

export const OfficeInfo = memo(() => {
  const { values, handleChange, touched, setFieldValue, errors } = useFormikContext<IEmployee>();

  const { data: companyNames } = useGetCompanyNames();
  const companies = useMemo(
    () => (companyNames?.data ? companyNames.data : []),
    [companyNames]
  );

  const { data: branch, isLoading: branchLoading } = useGetBranchesPartialData();
  const branches = useMemo(() => (branch?.data ? mapToValueLabelArray(branch.data, 'id', 'name') : []), [branch?.data]);
  const branchesWithAllOption = useMemo(
    () => (branch?.data ? [...branch.data, { id: 'all-locations', name: 'All Locations', type: '' }] : []),
    [branch?.data]
  );

  const { data: office } = useGetOfficesPartialData();
  const offices = useMemo(() => (office?.data ? mapToValueLabelArray(office.data, 'id', 'name') : []), [office?.data]);

  const mappedLocations = useMemo(() => [...branches, ...offices], [branches, offices]);
  const typeOfUser = [
    { value: 'admin', label: 'Is going to handle Admin Module ?' },
    { value: 'verifier', label: 'Is going to verify the documents ?' },
    { value: 'approver', label: 'Is going to approve the documents ?' },
    { value: 'finalizer', label: 'Is going to finalize the documents ?' },
    { value: 'employee', label: 'None of the above' },
  ];

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
          options={companies}
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
          options={ADMIN_ARRAYS.departments}
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
          isLoading={branchLoading}
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
        {/* <RadioGroupInput
          alignment="vertical"
          optionAlignment="vertical"
          isRequired={true}
          label="Type of User"
          name="role"
          value={values.role}
          options={typeOfUser}
          handleChange={handleChange}
        /> */}
        <FormControl component="fieldset" error={isError}>
        <Label name='roles' label='Type of User' isRequired={true} isError={isError || false} />
        <FormGroup>
          {typeOfUser.map((option, index) => (
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

//Approval Hierarchy Part

// const { data: emps } = useGetAllEmployees();
// const employees = useMemo(() => (emps?.data ? emps.data : []), [emps]);

// const { data: level } = useGetAllLevels();
// const levels = useMemo(() => (level?.data ? mapToValueLabelArray(level.data, 'id', 'name') : []), [level]);

// const currentEmpLevel = useMemo(
//   () => levels.find((l) => l.value === values.currentLevel)?.label,
//   [values.currentLevel, levels]
// );

// const getHierarchyLevels = useCallback(() => {
//   const currentlevel = level?.data?.find((level) => level.id === values.currentLevel);
//   return level?.data
//     ?.filter((level) => (currentlevel?.hierarchy ? level.hierarchy > currentlevel?.hierarchy : level))
//     .map((level) => ({ value: level.id, label: level.name }));
// }, [level?.data, values.currentLevel]);

// const handleCurrentLevelChange = (e: any) => {
//   const level = levels.find((l) => l.value === e.target.value);
//   if (level?.label === 'Level 5') {
//     setFieldValue('currentLevel', e.target.value);
//     setFieldValue('reportingManagers', null);
//   } else setFieldValue('currentLevel', e.target.value);
// };

/* <Grid2 size={{ xs: 12, md: 3 }}>
  <SelectInput
    isRequired={true}
    name="currentLevel"
    label="Employee Level"
    options={levels}
    value={values.currentLevel}
    handleChange={(e: any) => handleCurrentLevelChange(e)}
  />
</Grid2>;
{
  currentEmpLevel !== 'level 5' && currentEmpLevel !== 'admin' && currentEmpLevel !== 'super-admin' && (
    <>
      <Grid2 size={{ xs: 12 }}>
        <SectionHeader sectionHeader="Approval Hierarchy" />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <FieldArray name="reportingManagers">
          {({ push, remove }) => (
            <>
              {values.reportingManagers.map((_, index) => (
                <Grid2 container columnSpacing={1} key={index} alignItems="center">
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <SelectInput
                      isRequired={true}
                      name={`reportingManagers.${index}.level`}
                      label="Level"
                      options={getHierarchyLevels()}
                      value={values.reportingManagers[index].level}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 9 }}>
                    <MultiSelectAutocomplete
                    multiple={true}
                    isRequired={true}
                    label="Reporting To"
                    name={`reportingManagers.${index}.reportingTo`}
                    options={employees || []}
                    getOptionLabel={(option) =>
                      `${option?.firstName || ''} ${option?.middleName || ''} ${option?.lastName || ''}`
                    }
                  />
                  </Grid2>
                  <Grid2
                    size={{ xs: 12 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'end',
                    }}
                  >
                    <AddFieldButton
                      onClick={() =>
                        push({
                          level: null,
                          reportingTo: [
                            {
                              id: null,
                            },
                          ],
                        })
                      }
                    />

                    {values.reportingManagers.length > 1 && (
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        startIcon={<Close />}
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </Grid2>
                </Grid2>
              ))}
            </>
          )}
        </FieldArray>
      </Grid2>
    </>
  );
} */
