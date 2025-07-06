/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import {
  dcTypeCustomerInitialValue,
  deliveryChallanSchema,
  PURCHASE_ROUTES,
  useCreateDCTypeCustomer,
  useGetDCTypeCustomerForUpdateById,
  useUpdateDCTypeCustomerById,
} from '@prime-fresh/purchase/modules';
import {
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import {
  mapToValueLabelArray,
  appendFormData,
  useGetCompanyNames,
  useGetAllGRNNums,
  useGetCustomerPartialData,
  useGetCustomerNames,
  useGetBranchesPartialData,
  formatAddress,
  handleFormKeyDown,
} from '@prime-fresh/shared/modules';
import { IDeliveryChallanTypeCustomer } from '@prime-fresh/purchase_api';
import { DeliveryChallanBaseForm } from '../delivery-challan-base.form';

export const DCTypeCustomerForm = () => {
  const navigate = useNavigate();

  //Get Id from URL
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';

  //Get delivery challan data by id
  const { data: dc, isLoading } = useGetDCTypeCustomerForUpdateById(dcId);
  console.log('DC Type Customer: ',dc?.data);
  const dcData = dc?.data ? dc.data : dcTypeCustomerInitialValue;
  const dcTypeCustomerInitVal = dcId === '' ? dcTypeCustomerInitialValue : dcData;

  const formik = useFormik<IDeliveryChallanTypeCustomer>({
    enableReinitialize: true,
    initialValues: dcTypeCustomerInitVal,
    validationSchema: deliveryChallanSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => handleSubmit(values),
  });

  const { data: companies } = useGetCompanyNames();
  const companyNames = useMemo(
    () => (companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : []),
    [companies?.data]
  );

  const { data: grnNums } = useGetAllGRNNums();
  const allGRNNumbers = useMemo(
    () => (grnNums?.data ? mapToValueLabelArray(grnNums.data, 'id', 'grnNo') : []),
    [grnNums?.data]
  );

  const { data: customernames, isFetching: isFetchingCustomerNames } = useGetCustomerNames();
  const customerNames = useMemo(
    () => (customernames?.data ? mapToValueLabelArray(customernames?.data, 'id', 'organisationName') : []),
    [customernames?.data]
  );

  const { data: customer } = useGetCustomerPartialData(formik.values.customerName || '');
  console.log("Fetched Customer: ",customer);
  const customerShippingAddress = useMemo(
    () => (customer?.data ? formatAddress(customer.data.deliveryAddress) : ''),
    [customer?.data]
  );
  const customerBillingAddress = useMemo(
    () => (customer?.data ? formatAddress(customer.data.billingAddress) : ''),
    [customer?.data]
  );

  const { data: locations, isFetching: isFetchingLocations } = useGetBranchesPartialData();
  const allLocations = useMemo(
    () => (locations?.data ? mapToValueLabelArray(locations.data, 'id', 'name') : []),
    [locations?.data]
  );

  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateDCTypeCustomer();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateDCTypeCustomerById(dcId);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    dcId === ''
      ? mutatePost(formData)
          .then(() => {
            toast.success(resPost ? resPost.message : 'Delivery challan created.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_CUSTOMER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating delivery challan.');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(resPatch ? resPatch.message : 'Delivery challan updated.');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_CUSTOMER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPatch ? errorPatch.message : 'Error while updating delivery challan.');
          });
  };

  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider key={dcId === '' ? 'create-dc' : 'update-dc'} value={formik}>
        <form key={dcId === '' ? 'create-form' : 'update-form'} onKeyDown={handleFormKeyDown} onSubmit={formik.handleSubmit}>
          <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery challan form for the customer" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <SelectInput
                isRequired={true}
                name="companyName"
                label="Company Name"
                value={formik.values.companyName}
                options={companyNames}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <SelectInput
                isRequired={false}
                name="grnNo"
                label="Referred GRN"
                value={formik.values.grnNo}
                options={allGRNNumbers}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={true}
                name="poNumber"
                label="PO Number"
                type="text"
                value={formik.values.poNumber}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired
                loading={isFetchingLocations}
                name="fromLocation"
                label="Deliver From Location"
                options={allLocations}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired={true}
                loading={isFetchingCustomerNames}
                name="customerName"
                label="Customer Name"
                options={customerNames}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                isReadOnly={false}
                name="customerShippingAddress"
                label="Shipping Address"
                value={customerShippingAddress}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                isReadOnly={false}
                name="customerBillingAddress"
                label="Billing Address"
                value={customerBillingAddress}
              />
            </Grid2>
            <DeliveryChallanBaseForm formik={formik} />
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FormButtonGroup
                submitLabel={dcId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={dcId === '' ? errorPost : errorPatch}
                resetLabel="Reset"
                onReset={formik.handleReset}
                // previewLabel="Preview"
                // onPreview={() => {
                //   console.log('Buttons press');
                //   dispatch(setPreview(true));
                //   dispatch(setPreviewDC(formik.values));
                // }}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      {/* <DeliveryChallanPreview /> */}
    </>
  );
};
