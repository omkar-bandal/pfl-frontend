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
import {
  DataViewer,
  FormMobileStepper,
  FormScrollContainer,
  FormStepper,
  PageTitle,
  toast,
} from '@prime-fresh/shared/components';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Grid2, IconButton, LinearProgress, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FormikProvider, setIn, useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { OfficeInfo, PermissionConfiguration, PersonalInfo } from './employee-form-parts';
import {
  handleFormKeyDown,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetOfficesPartialData,
} from '@prime-fresh/shared/modules';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import { employeeViewConfig } from './employee-view';

export const EmployeeForm = () => {
  const { id } = useParams<{ id: string }>();
  const employeeId = id ? id : '';
  const navigate = useNavigate();

  const { data, isLoading } = useGetEmployeeForUpdate(employeeId);
  const employeeData = data?.data ? data.data : null;

  const { data: docAccessConfig } = useGetDocumentAccessConfig();
  const documentDetails = docAccessConfig?.data ? docAccessConfig.data : [];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);

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

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: EmployeeInitValue,
    validationSchema: employeeValidationSchema[activeStep],
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => handleSubmit(values),
  });

  const employeeFormSteps = ['Personal Information', 'Office Information', 'Permission Configuration', 'Preview'];
  const LAST_STEP = employeeFormSteps.length - 1;

  const handleNext = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    } else {
      // Deeply set all error fields as touched
      let touched: any = {};
      const markTouched = (errObj: any, path: string[] = []) => {
        Object.keys(errObj).forEach((key) => {
          if (typeof errObj[key] === 'object' && errObj[key] !== null) {
            markTouched(errObj[key], [...path, key]);
          } else {
            touched = setIn(touched, [...path, key].join('.'), true);
          }
        });
      };
      markTouched(errors);
      formik.setTouched(touched, true);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    formik.handleReset(formik.values);
    setActiveStep(0);
  };

  const { data: companyNames } = useGetCompanyNames();
  const companies = useMemo(() => (companyNames?.data ? companyNames.data : []), [companyNames]);

  const { data: branch, isLoading: branchLoading } = useGetBranchesPartialData();
  const branches = useMemo(() => (branch?.data ? branch.data : []), [branch]);

  const { data: office } = useGetOfficesPartialData();
  const offices = useMemo(() => (office?.data ? office.data : []), [office]);

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateEmployee();
  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateEmployeeById(employeeId);

  const handleSubmit = (values: any) => {
    if (activeStep === LAST_STEP) {
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
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const employeeFormPreviewConfig = {
    ...formik.values,
    companyName: companies.filter((comp) => formik.values.companyName.includes(comp.id)).map((c) => c.name),
    joiningLocation: [...branches, ...offices].find((loc) => loc.id === formik.values.joiningLocation)?.name,
    currentWorkLocation: [...branches, ...offices].find((loc) => loc.id === formik.values.joiningLocation)?.name,
    accessLocation: branches.filter((loc) => formik.values.accessLocation.includes(loc.id)).map((l) => l.name),
    roles: formik.values.roles[0],
    permissions: formik.values.permissions.map(doc => ({
      ...doc,
      documentDefinition: documentDetails.find(d => d.id === doc.documentDefinition)?.name,
    }))
  };
  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{ p: 1, borderBottom: '1px solid #ccc', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 11, md: 6 }}>
            <PageTitle pagetitle="Employee Registration" />
          </Grid2>
          <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="secondary" onClick={() => handleReset()}>
              <RestartAlt />
            </IconButton>
          </Grid2>
          <Grid2 size={12}>{!isMobile && <FormStepper activeStep={activeStep} steps={employeeFormSteps} />}</Grid2>
        </Grid2>
      </Box>
      <FormScrollContainer>
        <FormikProvider key={id === '' ? 'create-employee' : 'update-employee'} value={formik}>
          <form
            key={id === '' ? 'create-form' : 'update-form'}
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
          >
            <Box sx={{ flex: 1 }}>
              {activeStep === 0 && <PersonalInfo />}
              {activeStep === 1 && <OfficeInfo companyData={companies} branchData={branches} officeData={offices} />}
              {activeStep === 2 &&
                (formik.values.roles.includes('admin') ? (
                  <Box flex={1}>
                    <Typography>No permission needed for 'Admin'. Press 'Submit' button to submit the form.</Typography>
                  </Box>
                ) : (
                  <PermissionConfiguration documentDetails={documentDetails} />
                ))}
              {activeStep === 3 && <DataViewer data={employeeFormPreviewConfig} config={employeeViewConfig} />}
            </Box>
          </form>
        </FormikProvider>
      </FormScrollContainer>
      {!isMobile && (
        <Box
          sx={{
            py: 1,
            borderTop: '1px solid #ccc',
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button variant="text" startIcon={<KeyboardArrowLeft />} disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant={activeStep === LAST_STEP ? 'contained' : 'text'}
            endIcon={<KeyboardArrowRight />}
            color={activeStep === LAST_STEP ? 'success' : 'primary'}
            onClick={handleNext}
          >
            {activeStep === LAST_STEP ? 'Submit' : 'Next'}
          </Button>
        </Box>
      )}
      {isMobile && (
        <FormMobileStepper
          steps={employeeFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
