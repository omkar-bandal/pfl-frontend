/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Grid2, IconButton, LinearProgress, useMediaQuery, useTheme } from '@mui/material';
import { appendFormData, customerValidationSchema, initValCustomer } from '@prime-fresh/shared/modules';
import { FormMobileStepper, FormScrollContainer, FormStepper, PageTitle, toast } from '@prime-fresh/ui_shared';
import { ADMIN_ROUTES, useCreateCustomer, useGetCustomerById, useUpdateCustomerById } from '@prime-fresh/admin/modules';
import { KeyboardArrowLeft, KeyboardArrowRight, RestartAlt } from '@mui/icons-material';
import {
  CustomerEmpanelment,
  CustomerKeyMobileNo,
  CustomerReferences,
  CustomerBillingDetails,
  CustomerDeliveryDetails,
  CustomerStatutoryDetails,
  CustomerBankDetails,
  CustomerProductSpecification,
  CustomerPaymentTerms,
  CustomerOfficeUseOnly,
} from './form-section';

export const CustomerRegistrationForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const customerId = id ? id : '';
  const { data, isLoading } = useGetCustomerById(customerId);
  const customerData = data?.data ? data.data : initValCustomer;
  console.log('Customer Data: ', customerData);
  const customerFormInitVal = React.useMemo(
    () => (customerId !== '' ? customerData : initValCustomer),
    [customerData, customerId]
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = React.useState(0);
  const customerFormSteps = [
    'Empanelment',
    'Key Mobile No',
    'References',
    'Billing Details',
    'Delivery Details',
    'Statutory Details',
    'Bank Details',
    'Product Specification',
    'Payment Terms',
    'Office Use Only',
  ];
  const LAST_STEP = customerFormSteps.length - 1;

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: customerFormInitVal,
    validationSchema: customerValidationSchema[activeStep],
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

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateCustomer();

  const { mutateAsync: mutatePatch, error: patchError, data: patchRes } = useUpdateCustomerById(customerId);

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    customerId === ''
      ? mutatePost(formData)
        .then(() => {
          toast.success(postRes ? postRes.message : 'Customer registered successfully.');
          setTimeout(() => {
            navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
          }, 2000);
        })
        .catch(() => {
          toast.error(postError ? postError.message : 'Error while registering customer.');
        })
      : mutatePatch(formData)
        .then(() => {
          toast.success(patchRes ? patchRes.message : 'Customer data update successfully.');
          setTimeout(() => {
            navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
          }, 2000);
        })
        .catch(() => {
          toast.error(patchError ? patchError.message : 'Error while updating customer data.');
        });
  };

  return (
    <Box flex={1}>
      {isLoading ? (
        <Box flex={1}>
          <LinearProgress />
        </Box>
      ) : (
          <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Box sx={{ p: 1, borderBottom: "1px solid #ccc", position: "sticky", top: 0, backgroundColor: "white", zIndex: 1 }}>
              <Grid2 container>
                <Grid2 size={{ xs: 11, md: 6 }}>
                  <PageTitle pagetitle="Customer Registration" />
                </Grid2>
                <Grid2 size={{ xs: 1, md: 6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton color='secondary' onClick={() => handleReset()}><RestartAlt /></IconButton>
                </Grid2>
                <Grid2 size={12}>
                  {!isMobile && <FormStepper alternativeLabel activeStep={activeStep} steps={customerFormSteps} />}
                </Grid2>
              </Grid2>
            </Box>
            <FormScrollContainer>
              <FormikProvider key={customerId === '' ? 'create-customer' : 'update-customer'} value={formik}>
                <form
                  key={customerId === '' ? 'create-form' : 'update-form'}
                  onSubmit={formik.handleSubmit}
                  encType="multipart/form-data"
                >
                  <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                    {activeStep === 0 && <CustomerEmpanelment />}
                    {activeStep === 1 && <CustomerKeyMobileNo />}
                    {activeStep === 2 && <CustomerReferences />}
                    {activeStep === 3 && <CustomerBillingDetails />}
                    {activeStep === 4 && <CustomerDeliveryDetails />}
                    {activeStep === 5 && <CustomerStatutoryDetails />}
                    {activeStep === 6 && <CustomerBankDetails />}
                    {activeStep === 7 && <CustomerProductSpecification />}
                    {activeStep === 8 && <CustomerPaymentTerms />}
                    {activeStep === 9 && <CustomerOfficeUseOnly />}
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
              steps={customerFormSteps.length}
              activeStep={activeStep}
              onNext={handleNext}
              onBack={handleBack}
            />}
        </Box >
      )
      }
    </Box>
  )
}
