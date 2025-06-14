/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close } from '@mui/icons-material';
import { Button, Grid2 } from '@mui/material';
import { useGetAllEmployees } from '@prime-fresh/admin/modules';
import { PostEmployee } from '@prime-fresh/admin_api';
import {
  mapToValueLabelArray,
  useGetAllLevels,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetOfficesPartialData,
} from '@prime-fresh/shared/modules';
import {
  AddFieldButton,
  AutoCompleteInput,
  MultiSelectAutocomplete,
  SectionHeader,
  SelectInput,
  TextInput,
} from '@prime-fresh/ui_shared';
import { FieldArray, useFormikContext } from 'formik';
import { memo, useCallback, useMemo } from 'react';

export const OfficeInfo = memo(() => {
  const { values, handleChange, setFieldValue, touched } = useFormikContext<PostEmployee>();

  const { data: companyNames } = useGetCompanyNames();
  const companies = useMemo(
    () => (companyNames?.data ? mapToValueLabelArray(companyNames.data, 'id', 'name') : []),
    [companyNames]
  );

  const { data: emps } = useGetAllEmployees();
  const employees = useMemo(() => (emps?.data ? emps.data : []), [emps]);

  const { data: level } = useGetAllLevels();
  const levels = useMemo(() => (level?.data ? mapToValueLabelArray(level.data, 'id', 'name') : []), [level]);

  const currentEmpLevel = useMemo(
    () => levels.find((l) => l.value === values.currentLevel)?.label,
    [values.currentLevel, levels]
  );

  const getHierarchyLevels = useCallback(() => { 
    const currentlevel = level?.data?.find(level => level.id === values.currentLevel);
    return level?.data?.filter(level => currentlevel?.hierarchy ? (level.hierarchy > currentlevel?.hierarchy) : level)
    .map(level => ({value: level.id, label: level.name}));
  }, [level?.data, values.currentLevel]);
  
  const { data: branch } = useGetBranchesPartialData();
  const branches = useMemo(() => (branch?.data ? mapToValueLabelArray(branch.data, 'id', 'name') : []), [branch?.data]);
  const branchesWithAllOption = useMemo(
    () => (branch?.data ? [...branch.data, { id: 'all-locations', name: 'All Locations', type: '' }] : []),
    [branch?.data]
  );

  const { data: office } = useGetOfficesPartialData();
  const offices = useMemo(() => (office?.data ? mapToValueLabelArray(office.data, 'id', 'name') : []), [office?.data]);

  const mappedLocations = useMemo(() => [...branches, ...offices], [branches, offices]);

  const handleCurrentLevelChange = (e: any) => {
    const level = levels.find((l) => l.value === e.target.value);
    if (level?.label === 'Level 5') {
      setFieldValue('currentLevel', e.target.value);
      setFieldValue('reportingManagers', null);
    } else setFieldValue('currentLevel', e.target.value);
  };

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <SelectInput
          isRequired={true}
          name="companyName"
          label="Comapany Name"
          options={companies}
          value={values.companyName}
          handleChange={handleChange}
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
        <TextInput
          type="date"
          isRequired={true}
          label="Joining Date"
          name="joiningDate"
          value={values.joiningDate}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <AutoCompleteInput
          isRequired={true}
          label="Joining Location"
          name="joiningLocation"
          options={mappedLocations}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <AutoCompleteInput
          isRequired={true}
          label="Work Location"
          name="currentWorkLocation"
          options={[...mappedLocations, { value: '', label: 'Other' }]}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <MultiSelectAutocomplete
          multiple={true}
          isRequired={true}
          label="Access To mappedLocations"
          name="accessLocation"
          options={branchesWithAllOption || []}
          getOptionLabel={(option) => option?.name}
          selectAllOptId="all-locations"
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
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={true}
          name="currentLevel"
          label="Employee Level"
          options={levels}
          value={values.currentLevel}
          handleChange={(e: any) => handleCurrentLevelChange(e)}
        />
      </Grid2>
      {currentEmpLevel !== 'level 5' && currentEmpLevel !== 'admin' && currentEmpLevel !== 'super-admin' &&(
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
      )}
    </Grid2>
  );
});
