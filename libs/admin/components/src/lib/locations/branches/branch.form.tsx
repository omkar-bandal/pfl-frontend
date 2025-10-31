/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from 'react';
import { FormikProvider, setIn, useFormik } from 'formik';
import {
  Box,
  Button,
  CircularProgress,
  Grid2,
  IconButton,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  adminRoutes,
  BranchesInitialValues,
  branchValidationSchema,
  useCreateBranch,
  useGetBranchById,
  useUpdateBranchById,
} from '@prime-fresh/admin/modules';
import {
  BtnSmall,
  DataViewer,
  FormMobileStepper,
  FormScrollContainer,
  FormStepper,
  PageTitle,
  SectionHeader,
  TextInput,
  toast,
} from '@prime-fresh/shared/components';
import { GetBranches, PostBranches } from '@prime-fresh/services';
import { branchViewConfig } from './branch.preview';
import { handleFormKeyDown } from '@prime-fresh/shared/modules';
import { AddressFormFields } from '@prime-fresh/shared/components';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';

export const BranchForm = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const branchFormSteps = ['Branch Name & Address', 'Contacts & Other Details', 'Preview'];
  const LAST_STEP = branchFormSteps.length - 1;

  const { id, branchType } = useParams<{ id: string; branchType: string }>();
  const branchId = id ? id : '';
  const branchtype = branchType ? branchType : '';
  const BranchTypeLabel = useMemo(
    () =>
      branchtype
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [branchtype]
  );

  const { data, isLoading } = useGetBranchById(branchId);
  const branch = data?.data ? data.data : BranchesInitialValues;
  const branchesInitValue = branchId ? branch : BranchesInitialValues;

  const formik = useFormik<PostBranches>({
    enableReinitialize: true,
    initialValues: branchesInitValue,
    validationSchema: branchValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (activeStep === LAST_STEP) {
        console.log('Final Submit', values);
        handleSubmit(values);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    },
  });

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

  //To create new office Data
  const {
    mutateAsync: mutatePost,
    data: postRes,
    error: postError,
    isPending: isPostPending,
  } = useCreateBranch(branchtype);
  //To update existing office Data
  const {
    mutateAsync: mutatePatch,
    data: patchRes,
    error: patchError,
    isPending: isPatchPending,
  } = useUpdateBranchById(branchId, branchtype);

  const handleSubmit = (values: any) => {
    branchId !== ''
      ? mutatePatch(values)
        .then(() => {
          toast.success(patchRes ? patchRes.message : 'Branch location updated successfully.');
          setTimeout(() => {
            navigate(`${adminRoutes.VIEW_ALL_BRANCHES}/${branchtype}`);
          }, 2000);
        })
        .catch(() => {
          toast.error(patchError ? patchError.message : 'Error while updating new branch.');
        })
      : mutatePost(values)
        .then(() => {
          toast.success(postRes ? postRes.message : 'Branch location created successfully.');
          setTimeout(() => {
            navigate(`${adminRoutes.VIEW_ALL_BRANCHES}/${branchtype}`);
          }, 2000);
        })
        .catch(() => {
          toast.error(postError ? postError.message : 'Error while creating new branch.');
        });
  };

  const previewData = {
    ...formik.values,
    contactPersonName: `${formik.values.cFirstName || ''} ${formik.values.cMiddleName || ''} ${formik.values.cLastName || ''
      } `,
  };

  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{
          p: 1,
          borderBottom: '1px solid #ccc',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1,
        }}
      >
        <Grid2 container spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
          <Grid2 size={{ xs: 11, md: 6 }}>
            <PageTitle pagetitle={BranchTypeLabel} />
          </Grid2>
          <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {isMobile ? (
              <IconButton color="secondary" onClick={() => handleReset()}>
                <RestartAlt />
              </IconButton>
            ) : (
              <BtnSmall label="Reset" color="secondary" onClick={() => handleReset()} />
            )}
          </Grid2>
          <Grid2 size={12}>{!isMobile && <FormStepper activeStep={activeStep} steps={branchFormSteps} />}</Grid2>
        </Grid2>
      </Box>
      <FormScrollContainer>
        <FormikProvider key={branchId === '' ? 'create-branch' : 'update-branch'} value={formik}>
          <form
            key={branchId === '' ? 'create-form' : 'update-form'}
            onKeyDown={handleFormKeyDown}
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <Grid2 container columnSpacing={1} rowSpacing={1}>
              {activeStep === 0 && (
                <>
                  <Grid2 size={{ xs: 12, md: 8 }}>
                    <TextInput
                      isRequired={true}
                      label="Branch Name"
                      name="name"
                      value={formik.values.name}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextInput
                      isRequired={true}
                      label="Prefix"
                      name="prefix"
                      value={formik.values.prefix}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12 }} marginY={2}>
                    <SectionHeader sectionHeader="Branch Address" />
                  </Grid2>
                  <AddressFormFields<GetBranches> fieldPrefix="address" requiredFields={['pincode', 'state', 'city', 'address1']} />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Grid2 size={{ xs: 12 }} marginY={2}>
                    <SectionHeader sectionHeader="Contact Person Details" />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      label="First Name"
                      name="cFirstName"
                      value={formik.values.cFirstName}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      label="Middle Name"
                      name="cMiddleName"
                      value={formik.values.cMiddleName}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      label="Last Name"
                      name="cLastName"
                      value={formik.values.cLastName}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      label="Contact Number"
                      name="contactNumber"
                      value={formik.values.contactNumber}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12 }} marginY={2}>
                    <SectionHeader sectionHeader=" Other Details" />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextInput
                      type="number"
                      isRequired={false}
                      label="Total Capacity"
                      name="totalCapacity"
                      value={formik.values.totalCapacity}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextInput
                      type="number"
                      isRequired={false}
                      label="Current Capacity"
                      name="currentCapacity"
                      value={formik.values.currentCapacity}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextInput
                      type="number"
                      isRequired={false}
                      label="Balance Capacity"
                      name="balanceCapacity"
                      value={formik.values.balanceCapacity}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12 }}>
                    <TextInput
                      multiline
                      maxRows={4}
                      isRequired={false}
                      label="Notes"
                      name="notes"
                      value={formik.values.notes}
                      handleChange={formik.handleChange}
                    />
                  </Grid2>
                </>
              )}
              {activeStep === 2 && (
                <Grid2 size={12}>
                  <DataViewer config={branchViewConfig} data={previewData} />
                </Grid2>
              )}
            </Grid2>
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
          {activeStep === LAST_STEP ? (
            <BtnSmall
              label={isPostPending || isPatchPending ? <CircularProgress size="small" /> : 'Submit'}
              color="success"
              onClick={handleNext}
              disabled={isPostPending || isPatchPending}
            />
          ) : (
            <Button variant="text" endIcon={<KeyboardArrowRight />} color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      )}
      {isMobile && (
        <FormMobileStepper
          steps={branchFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
