import React from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { FormikProvider, useFormik } from 'formik';
import {
  dcTypeStockTransferInitialValue,
  dcTypeStockTransferSchema,
  PURCHASE_ROUTES,
  purchaseOptionsConstants,
  setPreviewDCTypeStockTransfer,
  useCreateDCTypeStockTransfer,
  useGetDCTypeStockTransferForUpdateById,
  useUpdateDCTypeStockTransferById,
} from '@prime-fresh/purchase/modules';
import { AutoCompleteInput, FormButtonGroup, PageTitle, SelectInput, toast } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import {
  mapToValueLabelArray,
  appendFormData,
  useGetCompanyNames,
  useGetAllGRNNums,
  useGetBranchesPartialData,
  handleFormKeyDown,
  useGetProductsPartialData,
  useGetUOMPartialData,
  getSelectedProductData,
} from '@prime-fresh/shared/modules';
import { IDeliveryChallanTypeStockTransfer } from '@prime-fresh/purchase_api';
import { DeliveryChallanBaseForm } from '../delivery-challan-base.form';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { DCTypeStockTransferPreview } from './dc-type-stock-transfer.preview';
import { useGetAllPackagingMaterials } from '@prime-fresh/admin/modules';

export const DCTypeStockTransferForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //Get Id from URL
  const { id } = useParams<{ id: string }>();
  const dcId = id ? id : '';

  //Get delivery challan data by id
  const { data: dc, isLoading } = useGetDCTypeStockTransferForUpdateById(dcId);
  const dcData = dc?.data ? dc.data : dcTypeStockTransferInitialValue;
  const dcTypeStockTransferInitVal = dcId === '' ? dcTypeStockTransferInitialValue : dcData;

  const formik = useFormik<IDeliveryChallanTypeStockTransfer>({
    enableReinitialize: true,
    initialValues: dcTypeStockTransferInitVal,
    validationSchema: dcTypeStockTransferSchema,
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

  const { data: locations, isFetching: isFetchingLocations } = useGetBranchesPartialData();

  const allCCLocations = useMemo(
    () =>
      locations?.data
        ? mapToValueLabelArray(
          locations.data.filter((loc) => loc.type === 'collection-center'),
          'id',
          'name'
        )
        : [],
    [locations]
  );

  const allDCLocations = useMemo(
    () =>
      locations?.data
        ? mapToValueLabelArray(
          locations.data.filter((loc) => loc.type === 'distribution-center'),
          'id',
          'name'
        )
        : [],
    [locations]
  );

  const { data: products } = useGetProductsPartialData();
  const allProducts = useMemo(() => products?.data ? products.data : [], [products]);

  const { data: uoms } = useGetUOMPartialData();
  const allUoMs = useMemo(() => uoms?.data ? uoms.data : [], [uoms]);

  const { data: packMatData } = useGetAllPackagingMaterials();
  const packagingMaterials = useMemo(
    () => (packMatData?.data ? packMatData?.data : []),
    [packMatData?.data]
  );

  const getFromLocations = () => {
    switch (formik.values.stockTransferType) {
      case 'from-cc-to-cc':
        return allCCLocations;
      case 'from-cc-to-dc':
        return allCCLocations;
      case 'from-dc-to-cc':
        return allDCLocations;
      case 'from-dc-to-dc':
        return allDCLocations;
      default:
        return allCCLocations;
    }
  };
  const getToLocations = () => {
    switch (formik.values.stockTransferType) {
      case 'from-cc-to-cc':
        return allCCLocations;
      case 'from-cc-to-dc':
        return allDCLocations;
      case 'from-dc-to-cc':
        return allCCLocations;
      case 'from-dc-to-dc':
        return allDCLocations;
      default:
        return allDCLocations;
    }
  };
  const { mutateAsync: mutatePost, error: errorPost, data: resPost } = useCreateDCTypeStockTransfer();
  const { mutateAsync: mutatePatch, error: errorPatch, data: resPatch } = useUpdateDCTypeStockTransferById(dcId);

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    dcId === ''
      ? mutatePost(formData)
        .then(() => {
          toast.success(resPost ? resPost.message : 'Delivery challan created.');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER);
          }, 2000);
        })
        .catch(() => {
          toast.error(errorPost ? errorPost.message : 'Error while creating delivery challan.');
        })
      : mutatePatch(formData)
        .then(() => {
          toast.success(resPatch ? resPatch.message : 'Delivery challan updated.');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER);
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
      companyName: companyNames.find(item => item.value === formdata.companyName)?.label || '',
      grnNo: allGRNNumbers.find(item => item.value === formdata.grnNo)?.label || '',
      fromLocation: [...allCCLocations, ...allDCLocations].find(item => item.value === formdata.fromLocation)?.label || '',
      toLocation: [...allCCLocations, ...allDCLocations].find(item => item.value === formdata.fromLocation)?.label || '',
      deliveryChallanProducts: formdata.deliveryChallanProducts?.map((product) => ({
        ...product,
        productName: getSelectedProductData(product.productName, allProducts)?.name || '',
        saleUoM: allUoMs.find(uom => uom.id === product.saleUoM)?.unit || '',
        packagingMaterial: packagingMaterials.find(item => item.id === product.packagingMaterial)?.packagingMaterialName || '',
        packagingMaterialUoM: allUoMs.find(uom => uom.id === product.packagingMaterialUoM)?.unit || '',
      }))
    }
  }
  const handlePreview = () => {
    const previewData = handlePreviewData();
    dispatch(setPreview(true));
    dispatch(setPreviewDCTypeStockTransfer(previewData));
  }

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
              <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery challan only for stock transfer." />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <SelectInput
                isRequired={true}
                name="companyName"
                label="Company Name"
                value={formik.values.companyName}
                options={companyNames}
                handleChange={formik.handleChange}
                noOptionsMessage="Unable to load company names."
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
                noOptionsMessage="Unable to load GRN numbers."
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <SelectInput
                isRequired={false}
                name="stockTransferType"
                label="Type of Transfer"
                value={formik.values.stockTransferType}
                options={purchaseOptionsConstants.stockTransferType}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired
                loading={isFetchingLocations}
                name="fromLocation"
                label="Deliver From Location"
                options={getFromLocations()}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <AutoCompleteInput
                isRequired
                loading={isFetchingLocations}
                name="toLocation"
                label="Deliver To Location"
                options={getToLocations()}
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
        <DCTypeStockTransferPreview />
    </>
  );
};
