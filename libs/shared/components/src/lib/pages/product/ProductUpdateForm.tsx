/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import { ProductDetails, ProductFormPreview, ProductImage, QCParameters, VariantDetails } from './form-section';
import {
  useGetProductById,
  useUpdateProductById,
  appendFormData,
  productValidationSchema,
  initValProduct,
  sharedRoutes
} from '@prime-fresh/shared/modules';
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
import {
  BtnSmall,
  FormMobileStepper,
  FormScrollContainer,
  FormStepper,
  PageTitle,
  toast,
} from '../../components';


export const ProductUpdateForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const productId = id ? id : '';

  const { data, isLoading } = useGetProductById(productId);
  const product = data !== null && data?.data ? data.data : null;
  const productInitVal = product ? product : initValProduct;

  const productFormSteps = ['Product Details', 'Variants Details', 'QC Parameters', 'Product Image', 'Preview'];
  const LAST_STEP = productFormSteps.length - 1;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: productInitVal,
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
  };

  const { mutateAsync: mutatePatch, error: patchError, data: patchRes, isPending } = useUpdateProductById(productId);

  const handleSubmit = (values: any) => {
    console.log('Product Update: ', values);
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePatch(formData)
      .then(() => {
        toast.success(patchRes ? patchRes.message : 'Product data updated successfully.');
        setTimeout(() => {
          navigate(sharedRoutes.VIEW_ALL_PRODUCT);
        }, 2000);
      })
      .catch(() => {
        toast.error(patchError ? patchError.message : 'Error while updating product data.');
      });
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
        <FormikProvider key="update-product" value={formik}>
          <form key="update-product-form" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1}>
              {activeStep === 0 && <ProductDetails />}
              {activeStep === 1 && <VariantDetails />}
              {activeStep === 2 && <QCParameters />}
              {activeStep === 3 && <ProductImage />}
              {activeStep === 4 && <ProductFormPreview />}
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
              label={isPending ? <CircularProgress size="small" /> : 'Update'}
              color="success"
              onClick={handleNext}
              disabled={isPending}
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
          steps={productFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
