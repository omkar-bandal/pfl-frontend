/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  appendFormData,
  customerValidationSchema,
  initValCustomer,
  sharedData,
} from '@prime-fresh/shared/modules';
import {
  FormButtonGroup,
  FormTabs,
  PageTitle,
  TabPanel,
  toast,
} from '@prime-fresh/ui_shared';
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
import {
  ADMIN_ROUTES,
  useCreateCustomer,
  useGetCustomerById,
  useUpdateCustomerById,
} from '@prime-fresh/admin/modules';

export const CustomerRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();
  const customerId = id ? id : '';
  const { data, isLoading } = useGetCustomerById(customerId);
  const customerData = data?.data ? data.data : initValCustomer;
  console.log("Customer Data: ", customerData);
  const customerFormInitVal = React.useMemo(
    () => (customerId !== '' ? customerData : initValCustomer),
    [customerData, customerId]
  );
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: customerFormInitVal,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => handleSubmit(values),
  });
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const navigate = useNavigate();

  const {
    mutateAsync: mutatePost,
    error: postError,
    data: postRes,
  } = useCreateCustomer();

  const {
    mutateAsync: mutatePatch,
    error: patchError,
    data: patchRes,
  } = useUpdateCustomerById(customerId);

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    customerId === '' ?
    (mutatePost(formData)
      .then(() => {
        toast.success(
          postRes ? postRes.message : 'Customer registered successfully.'
        );
        setTimeout(() => {
          navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
        }, 2000);
      })
      .catch(() => {
        toast.error(
          postError ? postError.message : 'Error while registering customer.'
        );
      })) :
    (mutatePatch(formData)
      .then(() => {
        toast.success(
          patchRes ? patchRes.message : 'Customer data update successfully.'
        );
        setTimeout(() => {
          navigate(ADMIN_ROUTES.GET_ALL_CUSTOMERS);
        }, 2000);
      })
      .catch(() => {
        toast.error(
          patchError ? patchError.message : 'Error while updating customer data.'
        );
      })) 
  };
  const formParts = [
    <CustomerEmpanelment />,
    <CustomerKeyMobileNo />,
    <CustomerReferences />,
    <CustomerBillingDetails />,
    <CustomerDeliveryDetails />,
    <CustomerStatutoryDetails />,
    <CustomerBankDetails />,
    <CustomerProductSpecification />,
    <CustomerPaymentTerms />,
    <CustomerOfficeUseOnly />,
  ];
  return (
    <Box flex={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <FormikProvider
          key={customerId === '' ? 'create-customer' : 'update-customer'}
          value={formik}
        >
          <form
            key={customerId === '' ? 'create-form' : 'update-form'}
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2
                size={{ xs: 12 }}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <PageTitle pagetitle="Customer Registration" />
              </Grid2>
              <Grid2 size={{ xs: 12 }}>
                <Box sx={{ flex: 1 }}>
                  <FormTabs
                    tabLabels={sharedData.customerFormTabs}
                    value={tab}
                    handleChange={handleTabChange}
                  />
                  {formParts.map((child, index) => (
                    <TabPanel key={index} index={index} value={tab}>
                      {child}
                    </TabPanel>
                  ))}
                </Box>
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FormButtonGroup
                  submitLabel={customerId === '' ? 'Create' : 'Update'}
                  isSubmitting={formik.isSubmitting}
                  isSubmitError={customerId === '' ? postError : patchError}
                  resetLabel="Reset"
                  onReset={formik.handleReset}
                />
              </Grid2>
            </Grid2>
          </form>
        </FormikProvider>
      )}
    </Box>
  );
};
