/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Grid2, IconButton, LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import { FormMobileStepper, FormScrollContainer, FormStepper, PageTitle, toast } from '@prime-fresh/ui_shared';
import { ADMIN_ROUTES, useCreateFarmer, useGetFarmerById, useUpdateFarmerById } from '@prime-fresh/admin/modules';
import { appendFormData, farmerValidationSchema, initValFarmer } from '@prime-fresh/shared/modules';
import { FarmDetails, FarmerDetails, CropDetails, FarmerImageSection } from './form-sections';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';

export const FarmerRegistrationForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const farmerId = id ? id : '';
  const { data, isLoading } = useGetFarmerById(farmerId);
  const farmerData = data?.data ? data.data : initValFarmer;
  console.log('Farmer: ', farmerData);
  const farmerInitVal = farmerId === '' ? initValFarmer : farmerData;

  const farmerFormSteps = ['Farmer Details', 'Farm Details', 'Crop Details', 'Images'];
  const LAST_STEP = farmerFormSteps.length - 1;

  const formik = useFormik({
    initialValues: farmerInitVal,
    validationSchema: farmerValidationSchema[activeStep],
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      if (activeStep === LAST_STEP) {
        console.log('Final Submit', values);
        handleSubmit(values);
      } else {
        setActiveStep((prev) => prev + 1);
      }
    }
  })

  const handleNext = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit()
    } else {
      formik.setTouched(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as any)
      );
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    formik.handleReset(formik.values);
    setActiveStep(0);

  }
  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateFarmer();
  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateFarmerById(farmerId);

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    farmerId === ''
      ? mutatePost(formData)
        .then(() => {
          toast.success(postRes ? postRes.message : 'Farmer created successfully.');
          setTimeout(() => {
            navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
          }, 2000);
        })
        .catch(() => {
          toast.error(postError ? postError.message : 'Error while registering farmer.');
        })
      : mutatePatch(formData)
        .then(() => {
          toast.success(patchRes ? patchRes.message : 'Farmer updated successfully.');
          setTimeout(() => {
            navigate(ADMIN_ROUTES.GET_ALL_FARMERS);
          }, 2000);
        })
        .catch(() => {
          toast.error(patchError ? patchError.message : 'Error while updating farmer.');
        });
  };
  return isLoading ?
    (
      <Box flex={1}>
        <LinearProgress />
      </Box>
    ) :
    (
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box sx={{ p: 1, borderBottom: "1px solid #ccc", position: "sticky", top: 0, backgroundColor: "white", zIndex: 1 }}>
          <Grid2 container>
            <Grid2 size={{ xs: 11, md: 6 }}>
              <PageTitle pagetitle="Farmer Registration" />
            </Grid2>
            <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color='secondary' onClick={() => handleReset()}><RestartAlt /></IconButton>
            </Grid2>
            <Grid2 size={12}>
              {!isMobile && <FormStepper activeStep={activeStep} steps={farmerFormSteps} />}
            </Grid2>
          </Grid2>
        </Box>
        <FormScrollContainer>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                {activeStep === 0 && <FarmerDetails />}
                {activeStep === 1 && <FarmDetails />}
                {activeStep === 2 && <CropDetails />}
                {activeStep === 3 && <FarmerImageSection />}
              </Grid2>
            </form>
          </FormikProvider>
        </FormScrollContainer>
        {!isMobile &&
          <Box sx={{ py: 1, borderTop: "1px solid #ccc", position: "sticky", bottom: 0, backgroundColor: "white", zIndex: 1, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant='text'
              startIcon={<KeyboardArrowLeft />}
              disabled={activeStep === 0}
              onClick={handleBack}>Back</Button>
            <Button
              variant={activeStep === LAST_STEP ? 'contained' : 'text'}
              endIcon={<KeyboardArrowRight />}
              color={activeStep === LAST_STEP ? "success" : "primary"}
              onClick={handleNext}>{activeStep === LAST_STEP ? 'Submit' : 'Next'}</Button>
          </Box>
        }
        {isMobile &&
          <FormMobileStepper
            steps={farmerFormSteps.length}
            activeStep={activeStep}
            onNext={handleNext}
            onBack={handleBack}
          />}
      </Box >
    );
};