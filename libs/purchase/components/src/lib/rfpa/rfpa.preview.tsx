/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { rfpaDataState } from '@prime-fresh/purchase/modules';
import { useAppSelector } from '@prime-fresh/modules';
import {
  DataViewer,
  formatCurrency,
  formatDate,
  getStatusColor,
  ObjectViewerConfig,
  PreviewContainer,
} from '@prime-fresh/ui_shared';
import { Inventory, LocalShipping, Person, Receipt } from '@mui/icons-material';
import { Address } from '@prime-fresh/common_api';
import {
  convertInTitleCase,
  getSelectedProductData,
  useGetProductsPartialData,
  useGetProductsPartialDataById,
} from '@prime-fresh/shared/modules';
import { IRFPAProducts } from '@prime-fresh/purchase_api';

export const RFPAPreview = () => {
  const { rfpaFormPreview } = useAppSelector(rfpaDataState);
  const { data: products } = useGetProductsPartialData();

  const rfpaPreviewConfig: ObjectViewerConfig = {
    sections: [
      {
        title: 'RFPA Details',
        sectionType: 'object',
        icon: <Receipt />,
        fields: [
          {
            key: 'companyName',
            label: 'Company',
          },
          {
            key: 'purchaseLocation',
            label: 'Purchase Location',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'purchaseForSalesLocation',
            label: 'Purchase For',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          {
            key: 'specialReq',
            label: 'Special Requirements',
          },
          {
            key: 'source',
            label: 'Source',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
        ],
        gridColumns: 3,
      },
      {
        title: 'Vendor / Farmer Information',
        sectionType: 'object',
        icon: <Person />,
        fields: [
          {
            key: 'selectedParty.companyName',
            label: 'Vendor Name',
            render: (value: any) => (value ? convertInTitleCase(value) : null),
          },
          { key: 'selectedParty.category', label: 'Category' },
          { key: 'selectedParty.subcategory', label: 'Subcategory' },
          { key: 'selectedParty.vendorCode', label: 'Vendor Code' },
          {
            key: 'selectedParty.contactPersonName',
            label: 'Contact Person',
            render: (value: string) => (value ? convertInTitleCase(value) : '-'),
          },
          { key: 'selectedParty.officeContactNo', label: 'Phone' },
          { key: 'selectedParty.officeEmail', label: 'Email' },
          {
            key: 'selectedParty.officeAddress',
            label: 'Address',
            render: (value: Address) =>
              value ? (
                <>
                  <Typography variant="body1" component="div">
                    {convertInTitleCase(`${value.address1}, ${value.address2}`)}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {convertInTitleCase(`${value.location}, ${value.city}, ${value.state}, ${value.pincode}`)}
                  </Typography>
                </>
              ) : null,
          },
        ],
        gridColumns: 3,
      },
      {
        title: 'RFPA Products',
        sectionType: 'array',
        icon: <Inventory />,
        fieldArrayName: 'rfpaProducts',
        keyField: 'id',
        fields: [
          {
            key: 'productName',
            label: 'Product',
            width: '20%',
            render: (value: string, product: IRFPAProducts) => (
              <>
                <Typography variant="body2" color="text.primary" sx={{ fontWeigt: 700 }}>
                  {convertInTitleCase(getSelectedProductData(value, products?.data)?.name || '')}
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
            width: '8%',
          },
          {
            key: 'quantity',
            label: 'Quantity',
            width: '8%',
            render: (value: any) => (
              <Box>
                <Typography variant="caption">{Number(value)}</Typography>
              </Box>
            ),
          },
          {
            key: 'unitPrice',
            label: 'Unit Price',
            width: '8%',
            render: (value: any) => (
              <Box>
                <Typography variant="caption">{formatCurrency(Number(value))}</Typography>
              </Box>
            ),
          },
          {
            key: 'amount',
            label: 'Amount',
            width: '8%',
            render: (value: any) =>
              value ? <Typography variant="caption">{formatCurrency(Number(value))}</Typography> : 0,
          },
          {
            key: 'purchaseDate',
            label: 'Purchase Date',
            width: '10%',
            render: (value: any, item: any) => (
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
            ),
          },
          {
            key: 'dispatchDate',
            label: 'Dispatch Date',
            width: '10%',
            render: (value: any, item: any) => (
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
            ),
          },
          {
            key: 'deliveryDate',
            label: 'Delivery',
            width: '10%',
            render: (value: any, item: any) => (
              <Typography variant="caption" display="block" component="div">
                {formatDate(value)}
              </Typography>
            ),
          },
          {
            key: 'deliveryLocation',
            label: 'Delivery Location',
            width: '8%',
            render: (value: any) => (
              <Box>
                <Typography variant="caption">{value}</Typography>
              </Box>
            ),
          },
        ],
      },
      {
        title: 'Additional Requirements',
        sectionType: 'object',
        icon: <LocalShipping />,
        fields: [
          { key: 'paymentInfo.paymentMode', label: 'Payment Mode' },
          { key: 'paymentInfo.paymentDate', label: 'Payment Date' },
          { key: 'paymentInfo.paymentTerms', label: 'Payment Terms' },
          { key: 'paymentInfo.dueDate', label: 'Due Date' },
          { key: 'paymentInfo.advancePaidAmt', label: 'Advance Paid Amount' },
          { key: 'paymentInfo.creditPeriod', label: 'Credit Period' },
          { key: 'paymentInfo.validityOfQuote', label: 'Validity of Quote' },
          { key: 'packingInstruction', label: 'Packing Instruction' },
          { key: 'remark', label: 'Remarks' },
        ],
        gridColumns: 3,
      },
    ],
  };
  return (
    <PreviewContainer title="Request For Purchase Approval">
      <DataViewer config={rfpaPreviewConfig} data={rfpaFormPreview ? rfpaFormPreview : []} />
    </PreviewContainer>
  );
};
