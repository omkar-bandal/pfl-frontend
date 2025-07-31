/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Box, Grid2, InputAdornment, LinearProgress } from '@mui/material';
import {
  AutoCompleteInput,
  FormButtonGroup,
  MultiSelectAutocomplete,
  PageTitle,
  SectionHeader,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import {
  adminRoutes,
  approvalFlowInitialValue,
  approvalFlowSchema,
  useCreateApprovalFlow,
  useGetAllEmployees,
  useGetApprovalFlowById,
  useUpdateApprovalFlow,
} from '@prime-fresh/admin/modules';
import { IDocumentType, IEmployee } from '@prime-fresh/admin_api';
import { convertInTitleCase, handleFormKeyDown } from '@prime-fresh/shared/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { queryClient } from '@prime-fresh/modules';

export const ApprovalFlowForm = () => {
  const navigate = useNavigate();
  const { documentType, id } = useParams<{ documentType: IDocumentType; id: string }>();
  const approvalFlowId = id ? id : '';
  const docType = documentType ? documentType : null;
  console.log('Doc Type: ', docType);
  const { data, isLoading } = useGetApprovalFlowById(approvalFlowId);
  const approvalFlowData = data?.data ? data.data : approvalFlowInitialValue;
  console.log('Approval Flow Get By Id: ', approvalFlowData);
  const approvalFlowInitVal = approvalFlowId === '' ? { ...approvalFlowInitialValue, type: docType } : approvalFlowData;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: approvalFlowInitVal,
    validationSchema: approvalFlowSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (value) => {
      console.log(value);
      handleSubmit(value);
    },
  });

  const { data: emps, isLoading: empLoading, isFetching: empFetching } = useGetAllEmployees();
  const employees = useMemo(
    () =>
      emps?.data
        ? emps.data.map((emp) => {
          return {
            value: emp.id,
            label: convertInTitleCase(`${emp.firstName || ''} ${emp.lastName || ''}`),
          };
        })
        : [],
    [emps]
  );
  const getEmployeeOptions = useCallback(
    (option: IEmployee) =>
      convertInTitleCase(`${option.firstName || ''} ${option.middleName || ''} ${option.lastName || ''}`),
    []
  );

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateApprovalFlow();
  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateApprovalFlow(approvalFlowId);

  const handleSubmit = (values: any) => {
    approvalFlowId === ''
      ? mutatePost(values)
        .then(() => {
          toast.success(postRes ? postRes.message : 'New Approval Flow Created Successfully.');
          setTimeout(() => {
            console.log(`Navigating to ${docType} approval flow page.`);
            navigate(`${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/${docType}`);
            queryClient.invalidateQueries({ queryKey: ['get-all-approval-flows', docType], exact: true });
          }, 2000);
        })
        .catch(() => {
          toast.error(postError ? postError.message : 'Error While Creating Approval Flow.');
        })
      : mutatePatch(values)
        .then(() => {
          toast.success(patchRes ? patchRes.message : 'Approval Flow Updated Successfully.');
          setTimeout(() => {
            console.log(`Navigating to ${docType} approval flow page.`);
            navigate(`${adminRoutes.VIEW_ALL_APPROVAL_FLOWS}/${docType}`);
            queryClient.invalidateQueries({ queryKey: ['get-all-approval-flows', docType], exact: true });
          }, 2000);
        })
        .catch(() => {
          toast.error(patchError ? patchError.message : 'Error While Updating Approval Flow.');
        });
  };
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <FormikProvider key={approvalFlowId === '' ? 'create-approval-flow' : 'update-approval-flow'} value={formik}>
      <form
        key={approvalFlowId === '' ? 'create-form' : 'update-form'}
        onKeyDown={handleFormKeyDown}
        onSubmit={formik.handleSubmit}
      >
        <Grid2 container spacing={1} padding={1}>
          <Grid2 size={{ xs: 12 }} marginY={1}>
            <PageTitle pagetitle={`${docType} Approval Flow`} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
              <AutoCompleteInput
                isRequired={true}
                label="Creator"
                name="creator"
                options={employees}
                infoTipText={`Enter the name of the employee for whom the approval flow is to be created.`} />
          </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Verifiers Section" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={false}
              label="Verifiers"
              name="verifiers"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will verify the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Approvers Section" />
            </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={true}
              label="First Approver"
              name="approvers.firstApprover.users"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will apporve the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
                isReadOnly={true}
              type="number"
              label="Minimum Amount Can Approve"
              name="approvers.firstApprover.minAmtCanApprove"
              value={formik.values.approvers.firstApprover?.minAmtCanApprove}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 6, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Maximum Amount Can Approve"
              name="approvers.firstApprover.maxAmtCanApprove"
              value={formik.values.approvers.firstApprover?.maxAmtCanApprove}
                handleChange={e => {
                  formik.setFieldValue('approvers.firstApprover.maxAmtCanApprove', e.target.value);
                  formik.setFieldValue('approvers.secondApprover.minAmtCanApprove', Number((formik.values.approvers.firstApprover?.maxAmtCanApprove || 0) + 1))
                }}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={true}
              label="Second Approver"
              name="approvers.secondApprover.users"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will apporve the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
                isReadOnly={true}
              type="number"
              label="Minimum Amount Can Approve"
              name="approvers.secondApprover.minAmtCanApprove"
              value={formik.values.approvers.secondApprover?.minAmtCanApprove}
                // handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Maximum Amount Can Approve"
              name="approvers.secondApprover.maxAmtCanApprove"
              value={formik.values.approvers.secondApprover?.maxAmtCanApprove}
                handleChange={e => {
                  formik.setFieldValue('approvers.secondApprover.maxAmtCanApprove', e.target.value);
                  formik.setFieldValue('approvers.thirdApprover.minAmtCanApprove', Number((formik.values.approvers.secondApprover?.maxAmtCanApprove || 0) + 1))
                }}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
                isRequired={false}
              label="Third Approver"
              name="approvers.thirdApprover.users"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will apporve the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
                isReadOnly={true}
              type="number"
              label="Minimum Amount Can Approve"
              name="approvers.thirdApprover.minAmtCanApprove"
              value={formik.values.approvers.thirdApprover?.minAmtCanApprove}
                // handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Maximum Amount Can Approve"
              name="approvers.thirdApprover.maxAmtCanApprove"
              value={formik.values.approvers.thirdApprover?.maxAmtCanApprove}
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
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={false}
              label="Fourth Approver"
              name="approvers.fourthApprover.users"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will apporve the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Minimum Amount Can Approve"
              name="approvers.fourthApprover.minAmtCanApprove"
              value={formik.values.approvers.fourthApprover?.minAmtCanApprove}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Maximum Amount Can Approve"
              name="approvers.fourthApprover.maxAmtCanApprove"
              value={formik.values.approvers.fourthApprover?.maxAmtCanApprove}
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
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={false}
              label="Fifth Approver"
              name="approvers.fifthApprover.users"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will apporve the document created by the creator.`}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Minimum Amount Can Approve"
              name="approvers.fifthApprover.minAmtCanApprove"
              value={formik.values.approvers.fifthApprover?.minAmtCanApprove}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }} paddingTop={0.7}>
            <TextInput
              isRequired={false}
              type="number"
              label="Maximum Amount Can Approve"
              name="approvers.fifthApprover.maxAmtCanApprove"
              value={formik.values.approvers.fifthApprover?.maxAmtCanApprove}
              handleChange={formik.handleChange}
              slotProps={{
                input: {
                  endAdornment: <InputAdornment position="end">Rs</InputAdornment>,
                },
              }}
            />
          </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Finalizer Section" />
            </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={false}
              label="First Finalizer"
              name="finalizers.firstFinalizers"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will finalize the approved document created by the creator.`}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <MultiSelectAutocomplete
              isLoading={empFetching || empLoading}
                limitTags={3}
              isRequired={false}
              label="Second Finalizer"
              name="finalizers.secondFinalizers"
              options={emps?.data || []}
              getOptionLabel={getEmployeeOptions}
                infoTipText={`Add employee(s) who will finalize the approved document created by the creator.`}
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
              submitLabel={approvalFlowId === '' ? 'Create' : 'Update'}
              isSubmitting={formik.isSubmitting}
              isSubmitError={approvalFlowId === '' ? postError : patchError}
              resetLabel="Reset"
              onReset={formik.handleReset}
            />
          </Grid2>
        </Grid2>
      </form>
    </FormikProvider>
  );
};
