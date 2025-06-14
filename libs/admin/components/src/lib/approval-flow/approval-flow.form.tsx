import React, { useMemo } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Grid2, InputAdornment } from '@mui/material';
import {
  AutoCompleteInput,
  FormButtonGroup,
  MultiSelectAutocomplete,
  PageTitle,
  TextInput,
} from '@prime-fresh/ui_shared';
import { approvalFlowInitialValue, useGetAllEmployees } from '@prime-fresh/admin/modules';

export const ApprovalFlowForm = () => {
  const formik = useFormik({
    initialValues: approvalFlowInitialValue,
    onSubmit: (value) => console.log(value),
  });
  const { data: emps } = useGetAllEmployees();
  const employees = useMemo(
    () =>
      emps?.data
        ? emps.data.map((emp) => {
            return { value: emp.id, label: `${emp.firstName} ${emp.middleName} ${emp.lastName}` };
          })
        : [],
    [emps]
  );
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container spacing={1} padding={1}>
          <Grid2 size={{ xs: 12 }} marginY={1}>
            <PageTitle pagetitle="Approval Flow" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <AutoCompleteInput isRequired={true} label="Creator" name="creator" options={employees} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="Verifiers"
              name="verifiers"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="First Approver"
              name="approvers.firstApprovers.employeeIds"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              type="number"
              label="Can approve upto amount"
              name="approvers.fifthApprovers.approveUpToAmt"
              value={formik.values.approvers.firstApprovers.approveUpToAmt}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="Second Approver"
              name="approvers.secondApprovers.employeeIds"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              type="number"
              label="Can approve upto amount"
              name="approvers.secondApprovers.approveUpToAmt"
              value={formik.values.approvers.secondApprovers.approveUpToAmt}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="Third Approver"
              name="approvers.thirdApprovers.employeeIds"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              type="number"
              label="Can approve upto amount"
              name="approvers.thirdApprovers.approveUpToAmt"
              value={formik.values.approvers.thirdApprovers.approveUpToAmt}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="Fourth Approver"
              name="approvers.fourthApprovers.employeeIds"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              type="number"
              label="Can approve upto amount"
              name="approvers.fourthApprovers.approveUpToAmt"
              value={formik.values.approvers.fourthApprovers.approveUpToAmt}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              multiple={true}
              isRequired={true}
              label="Fifth Approver"
              name="approvers.fifthApprovers.employeeIds"
              options={emps?.data || []}
              getOptionLabel={(option) => `${option.firstName} ${option.middleName} ${option.lastName}`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              type="number"
              label="Can approve upto amount"
              name="approvers.fifthApprovers.approveUpToAmt"
              value={formik.values.approvers.fifthApprovers.approveUpToAmt}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
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
              submitLabel={'Create'}
              isSubmitting={formik.isSubmitting}
              isSubmitError={null}
              resetLabel="Reset"
              onReset={formik.handleReset}
            />
          </Grid2>
        </Grid2>
      </form>
    </FormikProvider>
  );
};
