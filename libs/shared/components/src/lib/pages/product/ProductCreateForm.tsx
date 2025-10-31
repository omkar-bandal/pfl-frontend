/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormikProvider, setIn, useFormik } from 'formik';
import { Box, Button, Grid2, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import { ProductDetails, ProductFormPreview, ProductImage, QCParameters, VariantDetails } from './form-section';
import { BtnSmall, FormMobileStepper, FormScrollContainer, FormStepper, PageTitle, toast } from '../../components';
import { appendFormData, initValProduct, productValidationSchema, sharedRoutes, useCreateProduct } from '@prime-fresh/shared/modules';

export const ProductCreateForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const productFormSteps = ['Product Details', 'Variants Details', 'QC Parameters', 'Product Image', 'Preview'];
  const LAST_STEP = productFormSteps.length - 1;

  const formik = useFormik({
    initialValues: initValProduct,
    validationSchema: productValidationSchema[activeStep],
    validateOnBlur: true,
    validateOnChange: false,
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
        Object.keys(errObj).forEach(key => {
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
  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateProduct();

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData)
      .then(() => {
        toast.success(postRes ? postRes.message : 'Product created successfully.');
        setTimeout(() => {
          navigate(sharedRoutes.VIEW_ALL_PRODUCT);
        }, 2000);
      })
      .catch(() => {
        toast.error(postError ? postError.message : 'Error while registering farmer.');
      });
  };

  return (
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
            <PageTitle pagetitle="Product" />
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
          <Grid2 size={12}>{!isMobile && <FormStepper activeStep={activeStep} steps={productFormSteps} />}</Grid2>
        </Grid2>
      </Box>
      <FormScrollContainer>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              {activeStep === 0 && <ProductDetails />}
              {activeStep === 1 && <VariantDetails />}
              {activeStep === 2 && <QCParameters />}
              {activeStep === 3 && <ProductImage />}
              {activeStep === 4 && <ProductFormPreview />}
              {/* {activeStep === 4 && <DataViewer config={FarmerFormPreviewConfig} data={formik.values} />} */}
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
          steps={productFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
