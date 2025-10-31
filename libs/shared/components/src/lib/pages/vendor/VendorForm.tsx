/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikProvider, setIn, useFormik } from 'formik';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import { Box, Button, Grid2, IconButton, LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import {
  VendorBankDetails,
  VendorOtherDetails,
  VendorPrimaryDetails,
  VendorReferences,
  VendorSalesContact,
  VendorFormPreviewConfig,
} from './form-sections';
import { DataViewer, FormMobileStepper, FormScrollContainer, FormStepper, PageTitle, toast, useErrorHandler } from '../../components';
import {
  useCreateVendor,
  useUpdateVendorById,
  appendFormData,
  initValVendor,
  vendorValidationSchema,
  sharedRoutes,
  useGetAllVendorCategories,
  useGetVendorSubcategoriesByQuery,
  mapToValueLabelArray,
  sharedData,
  useGetProductsPartialData,
  useGetPackagingMaterialPartialData,
  useGetVendorByIdForUpdate,
} from '@prime-fresh/shared/modules';

export const VendorForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const { id } = useParams<{ id: string }>();
  const vendorId = id ? id : '';
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetVendorByIdForUpdate(vendorId);
  useErrorHandler(isError, error);
  const vendorData = data?.data ? data.data : initValVendor;
  console.log('Vendor Data Get By Id: ', vendorData);
  const vendorInitValue = vendorId === '' ? initValVendor : vendorData;

  const vendorFormSteps = [
    'Primary Details',
    'Other Details',
    'Sales Contact Details',
    'Bank Details',
    'References',
    'Preview',
  ];
  const LAST_STEP = vendorFormSteps.length - 1;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: vendorInitValue,
    validationSchema: vendorValidationSchema[activeStep],
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

  const { data: vCat } = useGetAllVendorCategories();
  const vendorCategory = vCat?.data ? mapToValueLabelArray(vCat.data, 'id', 'name') : [];

  const { data: vSubcat } = useGetVendorSubcategoriesByQuery(formik.values.category || '');
  const vendorSubcategory = vSubcat?.data ? mapToValueLabelArray(vSubcat.data, 'id', 'name') : [];

  const { data: productData, isFetching: isProductFetching } = useGetProductsPartialData();
  const products = productData?.data ? productData.data : [];

  const { data: packMatData, isFetching: isPackMatFetching } = useGetPackagingMaterialPartialData();
  const packingMaterails = packMatData?.data ? packMatData.data : [];

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateVendor();
  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateVendorById(vendorId);

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    vendorId === ''
      ? mutatePost(formData)
          .then(() => {
            toast.success(postRes ? postRes.message : 'Vendor created successfully.');
            setTimeout(() => {
              navigate(sharedRoutes.VIEW_ALL_VENDOR);
            }, 2000);
          })
          .catch(() => {
            toast.error(postError ? postError.message : 'Error while registering vendor.');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(patchRes ? patchRes.message : 'Vendor updated successfully.');
            setTimeout(() => {
              navigate(sharedRoutes.VIEW_ALL_VENDOR);
            }, 2000);
          })
          .catch(() => {
            toast.error(patchError ? patchError.message : 'Error while updating vendor data.');
          });
  };
  const vendorFormPreviewData = {
    ...formik.values,
    classification: sharedData.vendorClassifications.find((item) => item.value === formik.values.classification)?.label,
    category: vendorCategory.find((item) => item.value === formik.values.category)?.label,
    subcategory: vendorSubcategory.find((item) => item.value === formik.values.subcategory)?.label,
    listOfAllProducts: products?.filter((prod) => formik.values.listOfAllProducts.includes(prod?.id)).map((p) => p.name),
    mainProduct: products.find((product) => product.id === formik.values.mainProduct)?.name,
    listOfPackingMaterial: [],
    mainPackingMaterial: packingMaterails.find((pack) => pack.id === formik.values.mainPackingMaterial),
  };
  console.log('Preview data of vendor', vendorFormPreviewData);
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{ p: 1, borderBottom: '1px solid #ccc', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}
      >
        <Grid2 container>
          <Grid2 size={{ xs: 11, md: 6 }}>
            <PageTitle pagetitle="Vendor Registration" />
          </Grid2>
          <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="secondary" onClick={() => handleReset()}>
              <RestartAlt />
            </IconButton>
          </Grid2>
          <Grid2 size={12}>{!isMobile && <FormStepper activeStep={activeStep} steps={vendorFormSteps} />}</Grid2>
        </Grid2>
      </Box>
      <FormScrollContainer>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              {activeStep === 0 && (
                <VendorPrimaryDetails vendorCategory={vendorCategory} vendorSubcategory={vendorSubcategory} />
              )}
              {activeStep === 1 && (
                <VendorOtherDetails
                  products={products}
                  isProductFetching={isProductFetching}
                  packingMaterails={packingMaterails}
                  isPackMatFetching={isPackMatFetching}
                />
              )}
              {activeStep === 2 && <VendorSalesContact />}
              {activeStep === 3 && <VendorBankDetails />}
              {activeStep === 4 && <VendorReferences />}
              {activeStep === 5 && <DataViewer data={vendorFormPreviewData} config={VendorFormPreviewConfig} />}
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
          steps={vendorFormSteps.length}
          activeStep={activeStep}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </Box>
  );
};
