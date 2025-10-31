/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { IDeliveryChallanTypeCustomer } from '@prime-fresh/services';
import { DeliveryChallanBaseForm } from '../delivery-challan-base.form';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { DCTypeCustomerPreview } from './dc-type-customer.preview';
import {
  dcTypeCustomerInitialValue,
  dcTypeCustomerSchema,
  operationsRoutes,
  setPreviewDCTypeCustomer,
  useCreateDCTypeCustomer,
  useGetAllGRNNums,
  useGetDCTypeCustomerForUpdateById,
  useGetGRNForUpdateById,
  useUpdateDCTypeCustomerById,
} from '@prime-fresh/operations/modules';
import {
  AutoCompleteInput,
  FormButtonGroup,
  PageTitle,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/shared/components';
import {
  mapToValueLabelArray,
  appendFormData,
  useGetCompanyNames,
  useGetCustomerPartialData,
  useGetCustomerNames,
  useGetBranchesPartialData,
  formatAddress,
  handleFormKeyDown,
  getSelectedProductData,
  useGetProductsPartialData,
  useGetUOMPartialData,
  useGetAllPackagingMaterials,
} from '@prime-fresh/shared/modules';

export const DCTypeCustomerForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //Get Id from URL
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';

  //Get delivery challan data by id
  const { data: dc, isLoading } = useGetDCTypeCustomerForUpdateById(dcId);
  const dcData = dc?.data ? dc.data : dcTypeCustomerInitialValue;
  const dcTypeCustomerInitVal = dcId === '' ? dcTypeCustomerInitialValue : dcData;

  const formik = useFormik<IDeliveryChallanTypeCustomer>({
    enableReinitialize: true,
    initialValues: dcTypeCustomerInitVal,
    validationSchema: dcTypeCustomerSchema,
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

  const { data: grn } = useGetGRNForUpdateById(formik.values.grnNo || '');
  const grnData = grn?.data ? grn?.data : null;

  const { data: customernames, isFetching: isFetchingCustomerNames } = useGetCustomerNames();
  const customerNames = useMemo(
    () => (customernames?.data ? mapToValueLabelArray(customernames?.data, 'id', 'organisationName') : []),
    [customernames?.data]
  );

  const { data: customer } = useGetCustomerPartialData(formik.values.customerName || '');
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
  const { data: products } = useGetProductsPartialData();
  const allProducts = useMemo(() => (products?.data ? products.data : []), [products]);

  const { data: uoms } = useGetUOMPartialData();
  const allUoMs = useMemo(() => (uoms?.data ? uoms.data : []), [uoms]);

  const { data: packMatData } = useGetAllPackagingMaterials();
  const packagingMaterials = useMemo(() => (packMatData?.data ? packMatData?.data : []), [packMatData?.data]);
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
              navigate(operationsRoutes.VIEW_ALL_DC_TYPE_CUSTOMER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating delivery challan.');
          })
      : mutatePatch(formData)
          .then(() => {
            toast.success(resPatch ? resPatch.message : 'Delivery challan updated.');
            setTimeout(() => {
              navigate(operationsRoutes.VIEW_ALL_DC_TYPE_CUSTOMER);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPatch ? errorPatch.message : 'Error while updating delivery challan.');
          });
  };

  const handlePreviewData = () => {
    const formdata = formik.values;
    return {
      ...formdata,
      companyName: companyNames.find((item) => item.value === formdata.companyName)?.label || '',
      grnNo: allGRNNumbers.find((item) => item.value === formdata.grnNo)?.label || '',
      fromLocation: allLocations.find((item) => item.value === formdata.fromLocation)?.label || '',
      customerName: customerNames?.find((item) => item.value === formdata.customerName)?.label || '',
      deliveryChallanProducts: formdata.deliveryChallanProducts?.map((product) => ({
        ...product,
        productName: getSelectedProductData(product.productName, allProducts)?.name || '',
        saleUoM: allUoMs.find((uom) => uom.id === product.saleUoM)?.unit || '',
        packagingMaterial:
          packagingMaterials.find((item) => item.id === product.packagingMaterial)?.packagingMaterialName || '',
        packagingMaterialUoM: allUoMs.find((uom) => uom.id === product.packagingMaterialUoM)?.unit || '',
      })),
    };
  };
  const handlePreview = () => {
    const previewData = handlePreviewData();
    dispatch(setPreview(true));
    dispatch(setPreviewDCTypeCustomer(previewData));
  };
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider key={dcId === '' ? 'create-dc' : 'update-dc'} value={formik}>
        <form
          key={dcId === '' ? 'create-form' : 'update-form'}
          onKeyDown={handleFormKeyDown}
          onSubmit={formik.handleSubmit}
        >
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
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                name="poNumber"
                label="PO Number"
                type="text"
                value={formik.values.poNumber}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                name="transitInsuranceNo"
                label="Transit Insurance No"
                type="text"
                value={formik.values.transitInsuranceNo}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <AutoCompleteInput
                isRequired
                loading={isFetchingLocations}
                name="fromLocation"
                label="Deliver From Location"
                options={allLocations}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
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
                isReadOnly={true}
                name="customerShippingAddress"
                label="Shipping Address"
                value={customerShippingAddress}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                isReadOnly={true}
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
                previewLabel="Preview"
                onPreview={() => handlePreview()}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <DCTypeCustomerPreview />
    </>
  );
};
