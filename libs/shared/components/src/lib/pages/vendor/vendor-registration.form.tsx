/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Formik } from 'formik';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { FormButtonGroup, FormTabs, PageTitle, TabOptions, TabPanel, toast } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import { ADMIN_ROUTES, useCreateVendor, useGetVendorById, useUpdateVendorById } from '@prime-fresh/admin/modules';
import { appendFormData, initValVendor, sharedData, vendorValidationSchema } from '@prime-fresh/shared/modules';
import {
  VendorBankDetails,
  VendorOtherDetails,
  VendorPrimaryDetails,
  VendorReferences,
  VendorSalesContact,
} from './form-sections';

export const VendorRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();
  const vendorId = id ? id : '';
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const { data, isLoading } = useGetVendorById(vendorId);
  const vendorData = data?.data ? data.data : initValVendor;
  const vendorInitValue = vendorId === '' ? initValVendor : vendorData;

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
              navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2000);
          })
          .catch(() => {
            toast.error(postError ? postError.message : 'Error while registering vendor.');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(patchRes ? patchRes.message : 'Vendor updated successfully.');
            setTimeout(() => {
              navigate(ADMIN_ROUTES.GET_ALL_VENDORS);
            }, 2000);
          })
          .catch(() => {
            toast.error(patchError ? patchError.message : 'Error while updating vendor data.');
          });
  };
  const formParts = [
    <VendorPrimaryDetails />,
    <VendorOtherDetails />,
    <VendorSalesContact />,
    <VendorBankDetails />,
    <VendorReferences />,
  ];
  const vendorFormTabs: TabOptions[] = [
    { label: 'Primary Details', isDisabled: false },
    { label: 'Other Details', isDisabled: false },
    { label: 'Sales Contact Details', isDisabled: false },
    { label: 'Bank Details', isDisabled: false },
    { label: 'References', isDisabled: false },
  ];

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <Formik
      key={vendorId === '' ? 'create-vendor' : 'update-vendor'}
      enableReinitialize={true}
      initialValues={vendorInitValue}
      validationSchema={vendorValidationSchema}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {({ handleReset, handleSubmit, values, handleChange, isSubmitting }) => (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Vendor Registration" />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              {/* <VendorPrimaryDetails />
                            <FormAccordion panel="Other Details" openOnError={true}>
                                <VendorOtherDetails />
                            </FormAccordion>
                            <FormAccordion panel="Sales Contact Details" openOnError={true}>
                                <VendorSalesContact />
                            </FormAccordion>
                            <FormAccordion panel="Bank Details" openOnError={true}>
                                <VendorBankDetails />
                            </FormAccordion>
                            <FormAccordion panel="References" openOnError={true}>
                                <VendorReferences />
                            </FormAccordion> */}
              <Box sx={{ flex: 1 }}>
                <FormTabs tabOptions={vendorFormTabs} value={tab} handleChange={handleTabChange} />
                {formParts.map((child, index) => (
                  <TabPanel key={index} index={index} value={tab}>
                    {child}
                  </TabPanel>
                ))}
              </Box>
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <FormButtonGroup
                submitLabel={vendorId === '' ? 'Create' : 'Update'}
                isSubmitting={isSubmitting}
                isSubmitError={vendorId === '' ? postError : patchError}
                resetLabel="Reset"
                onReset={handleReset}
              />
            </Grid2>
          </Grid2>
        </form>
      )}
    </Formik>
  );
};
