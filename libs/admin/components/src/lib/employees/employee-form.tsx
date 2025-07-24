/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  adminRoutes,
  employeeValidationSchema,
  initValEmployee,
  useCreateEmployee,
  useGetDocumentAccessConfig,
  useGetEmployeeForUpdate,
  useUpdateEmployeeById,
} from '@prime-fresh/admin/modules';
import { FormButtonGroup, FormTabs, PageTitle, TabOptions, TabPanel, toast } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, LinearProgress } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { OfficeInfo, PermissionConfiguration, PersonalInfo } from './employee-form-parts';
import { handleFormKeyDown } from '@prime-fresh/shared/modules';

export const EmployeeForm = () => {
  const { id } = useParams<{ id: string }>();
  const employeeId = id ? id : '';
  const navigate = useNavigate();

  const { data, isLoading } = useGetEmployeeForUpdate(employeeId);
  const employeeData = data?.data ? data.data : null;
  // console.log('Fetched Employee Data: ', employeeData);

  const { data: docAccessConfig } = useGetDocumentAccessConfig();
  const documentDetails = docAccessConfig?.data ? docAccessConfig.data : [];
  // console.log('Document Details:', documentDetails);
  const employeeInitialValue = {
    ...initValEmployee,
    permissions: documentDetails.map((permissions) => ({
      documentDefinition: permissions.id,
      canCreate: false,
      canEdit: false,
      canView: false,
      canDownload: false,
      canDelete: false,
    })),
  };

  const EmployeeInitValue = employeeId.length > 1 && employeeData !== null ? employeeData : employeeInitialValue;

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateEmployee();
  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateEmployeeById(employeeId);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: EmployeeInitValue,
    validationSchema: employeeValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('Created Or Updated Employee Data', values);
      handleSubmit(values);
    },
  });

  const [tab, setTab] = useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const employeeFormTabs: TabOptions[] = [
    { label: 'Personal Information', isDisabled: false },
    { label: 'Office Information', isDisabled: false },
    { label: 'Permission Configuration', isDisabled: formik.values.department === 'admin' ? true : false },
  ];
  console.log('Emp Init Value: ', EmployeeInitValue);
  const handleSubmit = (values: any) => {
    employeeId === ''
      ? mutatePost(values)
          .then(() => {
            toast.success(postRes ? postRes.message : 'Employee data created successfully.');
            setTimeout(() => {
              navigate(adminRoutes.VIEW_ALL_EMPLOYEES);
            }, 2000);
          })
          .catch(() => {
            toast.error(postError ? postError.message : 'Error while creating employee data.');
          })
      : mutatePatch(values)
          .then(() => {
            toast.success(patchRes ? patchRes.message : 'Employee data updated successfully.');
            setTimeout(() => {
              navigate(adminRoutes.VIEW_ALL_EMPLOYEES);
            }, 2000);
          })
          .catch(() => {
            toast.error(patchError ? patchError.message : 'Error while updating employee data.');
          });
  };
  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <FormikProvider key={id === '' ? 'create-employee' : 'update-employee'} value={formik}>
      <form
        key={id === '' ? 'create-form' : 'update-form'}
        onKeyDown={handleFormKeyDown}
        onSubmit={formik.handleSubmit}
      >
        <Box flex={1}>
          <PageTitle pagetitle="Employee" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormTabs tabOptions={employeeFormTabs} value={tab} handleChange={handleTabChange} />
          <TabPanel key={`Personal Information`} index={0} value={tab}>
            <PersonalInfo />
          </TabPanel>
          <TabPanel key={`Office Information`} index={1} value={tab}>
            <OfficeInfo />
          </TabPanel>
          <TabPanel key={`Permission Configuration`} index={2} value={tab}>
            <PermissionConfiguration documentDetails={documentDetails} />
          </TabPanel>
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormButtonGroup
            submitLabel={employeeId === '' ? 'Create' : 'Update'}
            isSubmitting={formik.isSubmitting}
            isSubmitError={employeeId === '' ? postError : patchError}
            resetLabel="Reset"
            onReset={formik.handleReset}
          />
        </Box>
      </form>
    </FormikProvider>
  );
};
