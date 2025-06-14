/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ADMIN_ROUTES,
  initValEmployee,
  useCreateEmployee,
  useGetDocumentAccessConfig,
  useGetEmployeeById,
  useUpdateEmployeeById,
} from '@prime-fresh/admin/modules';
import {
  FormButtonGroup,
  FormTabs,
  PageTitle,
  TabPanel,
  toast,
} from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  LinearProgress,
} from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { GetEmployee, PostEmployee } from '@prime-fresh/admin_api';
import { OfficeInfo, PermissionConfiguration, PersonalInfo } from './employee-form-parts';

export const EmployeeForm = () => {
  const { id } = useParams<{ id: string }>();
  const employeeId = id ? id : '';
  const navigate = useNavigate();

  const { data, isLoading } = useGetEmployeeById(employeeId);
  const employeeData = data?.data ? data.data : null;
  console.log('Fetched Employee Data: ', employeeData);
  const normalizedEmployeeData = (data: GetEmployee): PostEmployee => {
    return {
      ...data,
      companyName: data?.companyName?.id || '',
      currentLevel: data?.currentLevel?.id || '',
      reportingManagers:
        data?.reportingManagers?.map((reportingMData) => ({
          ...reportingMData,
          level: reportingMData.level.id,
          reportingTo:
            reportingMData.reportingTo?.map((reportingData) => ({
              id: reportingData.id,
            })) || [],
        })) || [],
      permissions: data?.permissions.map((perm) => ({
        documentDefinition: perm.documentDefinition.id,
        canCreate: perm.canCreate,
        canEdit: perm.canEdit,
        canView: perm.canView,
        canDownload: perm.canDownload,
        canDelete: perm.canDelete,
      })),
    };
  };
  const { data: docAccessConfig } = useGetDocumentAccessConfig();
  const documentDetails = docAccessConfig?.data ? docAccessConfig.data : [];
  
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

  const EmployeeInitValue =
    employeeId.length > 1 && employeeData !== null
      ? normalizedEmployeeData(employeeData)
      : employeeInitialValue;

  const {
    mutateAsync: mutatePost,
    error: postError,
    data: postRes,
  } = useCreateEmployee();
  const {
    mutateAsync: mutatePatch,
    error: patchError,
    data: patchRes,
  } = useUpdateEmployeeById(employeeId);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: EmployeeInitValue,
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
  const employeeFormTabs = [
    'Personal Information',
    'Office Information',
    'Permission Configuration',
  ];
  const handleSubmit = (values: any) => {
    employeeId === ''
      ? mutatePost(values)
          .then(() => {
            toast.success(
              postRes ? postRes.message : 'Employee data created successfully.'
            );
            setTimeout(() => {
              navigate(ADMIN_ROUTES.GET_ALL_EMPLOYEES);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              postError
                ? postError.message
                : 'Error while creating employee data.'
            );
          })
      : mutatePatch(values)
          .then(() => {
            toast.success(
              patchRes
                ? patchRes.message
                : 'Employee data updated successfully.'
            );
            setTimeout(() => {
              navigate(ADMIN_ROUTES.GET_ALL_EMPLOYEES);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              patchError
                ? patchError.message
                : 'Error while updating employee data.'
            );
          });
  };

  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <FormikProvider
      key={id === '' ? 'create-employee' : 'update-employee'}
      value={formik}
    >
      <form
        key={id === '' ? 'create-form' : 'update-form'}
        onSubmit={formik.handleSubmit}
      >
        <Box flex={1}>
          <PageTitle pagetitle="Employee" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormTabs
            tabLabels={employeeFormTabs}
            value={tab}
            handleChange={handleTabChange}
          />
          <TabPanel key={`Personal Information`} index={0} value={tab}>
            <PersonalInfo />
          </TabPanel>
          <TabPanel key={`Office Information`} index={1} value={tab}>
            <OfficeInfo />
          </TabPanel>
          <TabPanel key={`Permission Configuration`} index={2} value={tab}>
            <PermissionConfiguration documentDetails={documentDetails}/>
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
