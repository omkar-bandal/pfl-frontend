/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { useAppSelector } from '@prime-fresh/modules';
import { grnDataState } from '@prime-fresh/purchase/modules';
import { farmersDataStates, vendorsDataStates } from '@prime-fresh/admin/modules';
import { Receipt, Store, LocalShipping, Inventory, Money } from '@mui/icons-material';
import {
  formatCurrency,
  formatDate,
  PreviewContainer,
  DataViewer,
  SectionConfig,
} from '@prime-fresh/ui_shared';
import {
  convertInTitleCase,
  formatAddress,
  getSelectedProductData,
  useGetAllDealSlipNums,
  useGetBranchesPartialData,
  useGetCompanyNames,
  useGetProductsPartialData,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import { IGRNProducts } from '@prime-fresh/purchase_api';

export const GRNPreview = () => {
  const { grnFormPreview } = useAppSelector(grnDataState);
  const { selectedVendorPartialData } = useAppSelector(vendorsDataStates);
  const { selectedFarmerPartialData } = useAppSelector(farmersDataStates);
  const { data: company } = useGetCompanyNames();
  const selectedCompany = company?.data
    ? company.data.find((name) => name.id === grnFormPreview?.companyName)?.name
    : '';
  const { data: dealSlipId } = useGetAllDealSlipNums();
  const selectedDealSlip = dealSlipId?.data
    ? dealSlipId.data.find((num) => num.id === grnFormPreview?.dealSlipId)?.dealSlipNo
    : '';
  const { data: products } = useGetProductsPartialData();
  const { data: uoms } = useGetUOMPartialData();
  const { data: loc } = useGetBranchesPartialData();
  const selectedPurchaseLoc = loc?.data
    ? loc.data.find((loc) => loc.id === grnFormPreview?.purchaseLocation)?.name
    : '';
  const selectedPurchaseForSalesLoc = loc?.data
    ? loc.data.find((loc) => loc.id === grnFormPreview?.purchaseForSalesLocation)?.name
    : '';
  const newData = {
    ...grnFormPreview,
    dealSlipId: selectedDealSlip,
    companyName: selectedCompany,
    purchaseLocation: grnFormPreview?.purchaseLocation === '' ? grnFormPreview.otherPurchaseLoc : selectedPurchaseLoc,
    purchaseForSalesLocation:
      grnFormPreview?.purchaseForSalesLocation === ''
        ? grnFormPreview.otherPurchaseForSalesLoc
        : selectedPurchaseForSalesLoc,
    selectedParty: grnFormPreview?.source === 'vendor' ? selectedVendorPartialData : selectedFarmerPartialData,
    grnProducts: grnFormPreview?.grnProducts !== undefined ? grnFormPreview?.grnProducts.map((productDet) => ({
      ...productDet,
      productName: getSelectedProductData(productDet.productName, products?.data)?.name || '',
      uom: uoms?.data ? uoms.data.find((uom) => uom.id === productDet.uom)?.unit : '',
    })) : [],
  };

  const grnDetails: SectionConfig = {
    title: 'GRN Details',
    sectionType: 'object',
    icon: <Receipt />,
    fields: [
      {
        key: 'grnType',
        label: 'GRN Type',
        render: (value: any) => <span style={{ textTransform: 'uppercase' }}>{value}</span>,
      },
      {
        key: 'locationType',
        label: 'Location Type',
        render: (value: any) => <span style={{ textTransform: 'uppercase' }}>{value}</span>,
      },
      {
        key: 'purchaseType',
        label: 'Purchase Type',
        render: (value: any) => (value ? <span style={{ textTransform: 'uppercase' }}>{value}</span> : null),
      },
      { key: 'dealSlipId', label: 'Deal Slip ID' },
      { key: 'companyName', label: 'Company' },
      { key: 'billNo', label: 'Bill Number' },
      { key: 'purchaseInstructionsBy', label: 'Instructions By' },
      { key: 'purchaseLocation', label: 'Purchase Location' },
      { key: 'purchaseForSalesLocation', label: 'Purchase For' },
      { key: 'specialReq', label: 'Special Requirements' },
    ],
    gridColumns: 3,
  }
  const grnProducts: SectionConfig = {
    title: 'GRN Products',
    sectionType: 'array',
    layout: 'table',
    icon: <Inventory />,
    fieldArrayName: 'grnProducts',
    keyField: 'id',
    fields: [
      {
        key: 'productName',
        label: 'Product',
        width: '25%',
        render: (value: string, product: IGRNProducts) => (
          <>
            <Typography variant="body2" color="text.primary" sx={{ fontWeigt: 700 }}>
              {convertInTitleCase(value)}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div">
              {`(Origin: ${product.origin || '-'}, 
                  Variety: ${product.variety || '-'}, 
                  Count: ${product.count || '-'}, 
                  Size: ${product.size || '-'})`}
            </Typography>
          </>
        ),
      },
      {
        key: 'uom',
        label: 'Unit',
        width: '10%',
      },
      {
        key: 'quantity',
        label: 'Quantity',
        width: '10%',
        render: (value: any) => (
          <Box>
            <Typography variant="caption">{value}</Typography>
            {/* {item.revisedQuantity !== value && (
                  <Typography variant="caption" color="error">
                    Revised: {item.revisedQuantity}
                  </Typography>
                )} */}
          </Box>
        ),
      },
      {
        key: 'unitPrice',
        label: 'Unit Price',
        width: '10%',
        render: (value: any) => (
          <Box>
            <Typography variant="caption">{formatCurrency(value)}</Typography>
            {/* {item.revisedRate !== value && (
                  <Typography variant="caption" color="error">
                    Revised: {formatCurrency(item.revisedRate)}
                  </Typography>
                )} */}
          </Box>
        ),
      },
      {
        key: 'amount',
        label: 'Amount',
        width: '10%',
        render: (value: any) => (value ? <Typography variant="caption">{formatCurrency(value)}</Typography> : 0),
      },
      {
        key: 'packingMaterialWeight',
        label: 'Packing Material Weight',
        width: '10%',
        render: (value: any) => (value ? <Typography variant="caption">{`${value} g`}</Typography> : 0),
      },
      {
        key: 'grossWeight',
        label: 'Gross Weight',
        width: '10%',
        render: (value: any) => (value ? <Typography variant="caption">{`${value} kg`}</Typography> : 0),
      },
      {
        key: 'netWeight',
        label: 'Net Weight',
        width: '10%',
        render: (value: any) => (value ? <Typography variant="caption">{`${value} kg`}</Typography> : 0),
      },
      {
        key: 'deliveryDate',
        label: 'Delivery',
        width: '15%',
        render: (value: any, item: any) => (
          <>
            <Typography variant="caption" display="block" component="div">
              {formatDate(value)}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div">
              {item.deliveryLocation}
            </Typography>
          </>
        ),
      },
      {
        key: 'rtv',
        label: 'RTV',
        width: '10%',
        render: (value: any) => <Chip label={value ? 'RTV' : 'Non-RTV'} color="primary" size="small" />,
      },
    ],
  }
  const grnPaymentInfo: SectionConfig = {
    title: 'Payment Information',
    sectionType: 'object',
    icon: <Money />,
    fields: [
      {
        key: 'paymentInfo.paymentTerms',
        label: 'Payment Terms',
        render: (value: any) => value ? `${value} Days` : '-',
      },
      {
        key: 'paymentInfo.creditPeriod',
        label: 'Credit Period',
        render: (value: any) => value ? `${value} Days` : '-',
      },
      {
        key: 'paymentInfo.paymentDate',
        label: 'Payment Date',
        render: (value: any) => value ? formatDate(value) : '-',
      },
      {
        key: 'paymentInfo.dueDate',
        label: 'Due Date',
        render: (value: any) => value ? formatDate(value) : '-',
      },
      {
        key: 'paymentInfo.paymentMode',
        label: 'Payment Mode',
        render: (value: any) => value ? convertInTitleCase(value) : '-',
      },
      {
        key: 'paymentInfo.advancePaidAmt',
        label: 'Advance Paid Amount',
        render: (value: any) => value ? formatCurrency(value) : '-',
      },
      {
        key: 'paymentInfo.remainingAmt',
        label: 'Remaining Amount',
        render: (value: any) => value ? formatCurrency(value) : '-',
      },
    ],
    gridColumns: 3,
  }
  const grnDeliveryInfo: SectionConfig = {
    title: 'Delivery Information',
    sectionType: 'object',
    icon: <LocalShipping />,
    fields: [
      {
        key: 'receivedThrough',
        label: 'Received Through',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
      {
        key: 'vehicleNo',
        label: 'Vehicle No',
        render: (value: string) => value ? value.toUpperCase() : '',
      },
      { key: 'timeIn', label: 'Time In' },
      { key: 'cratesIn', label: 'Crates In' },
      {
        key: 'deliveryReceivingPerson',
        label: 'Receiving Person',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
      {
        key: 'purchasedBy',
        label: 'Purchased By',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
      {
        key: 'securityPerson',
        label: 'Security Person',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
      {
        key: 'rmn',
        label: 'RM Name',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
      {
        key: 'remark',
        label: 'Remarks',
        render: (value: string) => value ? convertInTitleCase(value || '') : '',
      },
    ],
    gridColumns: 3,
  }


  const grnSourceInfo: SectionConfig = grnFormPreview?.source === 'vendor' ? {
    title: 'Vendor Information',
    sectionType: 'object',
    icon: <Store />,
    fields: [
      {
        key: 'selectedParty.companyName',
        label: 'Vendor Name',
        render: (value: any) =>
          value ? (
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {convertInTitleCase(value)}
            </Typography>
          ) : null,
      },
      { key: 'selectedParty.category', label: 'Category' },
      { key: 'selectedParty.subcategory', label: 'Subcategory' },
      { key: 'selectedParty.vendorCode', label: 'Vendor Code' },
      { key: 'selectedParty.contactPersonName', label: 'Contact Person' },
      { key: 'selectedParty.officeContactNo', label: 'Phone' },
      { key: 'selectedParty.officeEmail', label: 'Email' },
      {
        key: 'selectedParty.officeAddress',
        label: 'Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
    ],
    gridColumns: 3,
  } : {
    title: 'Farmer Information',
    sectionType: 'object',
    icon: <Store />,
    fields: [
      {
        key: 'selectedParty.fullName',
        label: 'Farmer Name',
        render: (value: any) =>
          value ? (
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {convertInTitleCase(value)}
            </Typography>
          ) : null,
      },
      { key: 'selectedParty.farmerCode', label: 'Farmer Code' },
      { key: 'selectedParty.primaryMobileNo', label: 'Phone' },
      { key: 'selectedParty.email', label: 'Email' },
      {
        key: 'selectedParty.residensialAddress',
        label: 'Residensial Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
      {
        key: 'selectedParty.farmAddress',
        label: 'Farm Address',
        render: (value: any) => (value ? formatAddress(value) : null),
      },
    ],
    gridColumns: 3,
  }

  const grnConfig = [grnDetails, grnSourceInfo, grnProducts, grnPaymentInfo, grnDeliveryInfo];

  return (
    <PreviewContainer title="GRN Preview">
      <DataViewer data={newData} config={grnConfig} />
    </PreviewContainer>
  );
};

