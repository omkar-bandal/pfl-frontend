/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo } from 'react';
import { Grid2, Typography, Box, LinearProgress } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import {
  dealSlipSchema,
  dealSlipInitialValue,
  PURCHASE_ROUTES,
  useGetDealSlipForUpdateById,
  useUpdateDealSlipById,
  useGetRFPAForViewById,
  useCreateDealSlip,
} from '@prime-fresh/purchase/modules';
import { useAppDispatch, useAppSelector } from '@prime-fresh/modules';
import { useNavigate, useParams } from 'react-router-dom';
import {
  FarmerReadOnlyFields,
  FormButtonGroup,
  Label,
  PageTitle,
  SectionHeader,
  SelectInput,
  TextInput,
  toast,
  VendorReadOnlyFields,
} from '@prime-fresh/ui_shared';
import {
  farmersDataStates,
  setSelectedFarmerPartialData,
  setSelectedVendorPartialData,
  vendorsDataStates,
} from '@prime-fresh/admin/modules';
import {
  convertInTitleCase,
  handleFormKeyDown,
  mapToValueLabelArray,
  useGetAllRFPANums,
  useGetFarmersPartialData,
  useGetVendorsPartialData,
} from '@prime-fresh/shared/modules';

export const DealSlipForm = () => {
  //Get Dealslip id
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const dealSlipId = id ? id : '';

  //Get Dealslip by id
  const { data: dealSlip, isLoading } = useGetDealSlipForUpdateById(dealSlipId);
  const dealSlipData = dealSlip?.data ? dealSlip.data : dealSlipInitialValue;
  const dealSlipInitVal = dealSlipId === '' ? dealSlipInitialValue : dealSlipData;

  const { data: RFPA } = useGetAllRFPANums();
  const rfpas = useMemo(() => (RFPA?.data ? mapToValueLabelArray(RFPA.data, 'id', 'rfpaId') : []), [RFPA?.data]);

  const { data: Farmers } = useGetFarmersPartialData();
  const { data: Vendors } = useGetVendorsPartialData();
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);

  //Hook to update Dealslip
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: dealSlipInitVal,
    validationSchema: dealSlipSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  const { data } = useGetRFPAForViewById(formik.values.rfpa || '');
  const rfpa = data?.data ? data.data : null;
  console.log('RFPA for Deal Slip: ', rfpa);
  console.log('source:', rfpa?.source);
  useEffect(() => {
    rfpa?.source === 'vendor'
      ? dispatch(setSelectedVendorPartialData(Vendors?.data?.find((vendor) => vendor.id === rfpa?.selectedParty)))
      : dispatch(setSelectedFarmerPartialData(Farmers?.data?.find((farmer) => farmer.id === rfpa?.selectedParty)));
  }, [Farmers?.data, Vendors?.data, dispatch, rfpa?.selectedParty, rfpa?.source]);

  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateDealSlip();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateDealSlipById(dealSlipId);
  const handleSubmit = (values: any) => {
    dealSlipId === ''
      ? mutatePost(values)
          .then(() => {
            toast.success(resPost ? resPost.message : 'Deal Slip created');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPost ? errorPost.message : 'Error while creating deal slip.');
          })
      : mutatePatch(values)
          .then(() => {
            toast.success(resPatch ? resPatch.message : 'Deal Slip Updated');
            setTimeout(() => {
              navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 2000);
          })
          .catch(() => {
            toast.error(errorPatch ? errorPatch.message : 'Error while updating deal slip.');
          });
  };

  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <FormikProvider key={dealSlipId === '' ? 'create-deal-slip' : 'update-deal-slip'} value={formik}>
      <form key={dealSlipId === '' ? 'create-form' : 'update-form'} onKeyDown={handleFormKeyDown} onSubmit={formik.handleSubmit}>
        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
          <Grid2 size={{ xs: 12 }} marginBottom={2}>
            <PageTitle pagetitle="Deal Slip" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              isRequired={true}
              label="Select RFPA"
              name="rfpa"
              value={formik.values.rfpa}
              options={rfpas}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label="Company Name"
              name="companyName"
              value={rfpa?.companyName || ''}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label="Purchase Location"
              name="purchaseLocation"
              value={rfpa?.purchaseLocation}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label="Purchase For Sales Location"
              name="purchaseForSalesLocation"
              value={rfpa?.purchaseForSalesLocation}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <TextInput
              isRequired={true}
              label="Loading Location"
              name="loadingLocation"
              value={formik.values.loadingLocation}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 2 }}>
            <TextInput
              isRequired={true}
              label="Lot Number"
              name="lotNo"
              value={formik.values.lotNo}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <TextInput
              isRequired={false}
              label="Special Request"
              name="specialRequest"
              value={formik.values.specialRequest}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <TextInput
              isRequired={false}
              label="Remark"
              name="remark"
              value={formik.values.remark}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} marginY={2}>
            <SectionHeader sectionHeader="Vendor / Farmer Information" />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Label name="source" label="Source:" isError={false} />
            <Typography variant="body2" sx={{ marginLeft: 2 }}>
              {convertInTitleCase(rfpa?.source || '')}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={false}
              isReadOnly={true}
              label={rfpa?.source === 'vendor' ? 'Vendor Name' : 'Farmer Name'}
              name="selectedParty"
              value={
                rfpa?.source === 'vendor' ? selectedVendorPartialData?.companyName : selectedFarmerPartialData?.fullName
              }
            />
          </Grid2>
          {rfpa?.source === 'vendor' ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
          <Grid2 size={{ xs: 12 }} marginY={2}>
            <SectionHeader sectionHeader="Products" />
          </Grid2>
            {rfpa?.rfpaProducts.length !== 0 && rfpa !== null ? (
              rfpa?.rfpaProducts.map((product, index) => (
                <Grid2
                  container
                  spacing={1}
                  key={index}
                  padding={1}
                  sx={{
                    border: '1px solid #BDBDBD',
                    borderRadius: 2,
                    marginY: 1,
                  }}
                >
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="productName"
                      label="Product Name"
                      value={product.productName}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 8 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="productDescription"
                      label="Description"
                      value={''}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      label="Origin"
                      name="origin"
                      value={product.origin}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      label="Variety"
                      name="variety"
                      value={product.variety}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} label="Count" name="count" value={product.count} />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} label="Size" name="size" value={product.size} />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="productCode"
                      label="Product Code"
                      value={''}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} name="productBrand" label="Brand" value={''} />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} name="grade" label="Grade" value={product.grade} />
                  </Grid2>
                  <Grid2 size={{ xs: 6, md: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} name="uom" label="Unit" value={product.uom} />
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="quantity"
                      label="Quantity"
                      value={product.quantity}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="unitPrice"
                      label="Unit Price"
                      value={product.unitPrice}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 4, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="amount"
                      label="Amount"
                      value={product.amount}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      name="deliveryLocation"
                      label="Delivery Location"
                      value={product.deliveryLocation}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      type="date"
                      name="purchaseDate"
                      label="Purchase Date"
                      value={product.purchaseDate}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      type="date"
                      name="dispatchDate"
                      label="Dispatch Date"
                      value={product.dispatchDate}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 3 }}>
                    <TextInput
                      isRequired={false}
                      isReadOnly={true}
                      type="date"
                      name="deliveryDate"
                      label="Delivery Date"
                      value={product.deliveryDate}
                    />
                  </Grid2>
                  {rfpa?.source === 'farmer' && (
                    <Grid2 size={{ xs: 12, md: 3 }}>
                      <TextInput
                        isRequired={false}
                        isReadOnly={true}
                        type="date"
                        name="expectedHarvestDate"
                        label="Expected Harvest Date"
                        value={product.expectedHarvestDate}
                      />
                    </Grid2>
                  )}
                </Grid2>
              ))
            ) : (
              <Typography variant="body2" component="data" color="error">
                Product not found in selected RFPA
              </Typography>
            )}
          <Grid2 size={{ xs: 12 }} marginY={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormButtonGroup
              submitLabel={dealSlipId === '' ? 'Create' : 'Update'}
              isSubmitting={formik.isSubmitting}
              isSubmitError={dealSlipId === '' ? errorPost : errorPatch}
              resetLabel="Reset"
              onReset={formik.handleReset}
            />
          </Grid2>
        </Grid2>
      </form>
    </FormikProvider>
  );
};
