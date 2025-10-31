/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import {IRFPAProducts} from '@prime-fresh/services';
import { rfpaDataState } from '@prime-fresh/operations/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { DataViewer, formatCurrency, formatDate, PreviewContainer, SectionConfig } from '@prime-fresh/shared/components';
import { Inventory, LocalShipping, Person, Receipt } from '@mui/icons-material';
import {
  convertInTitleCase,
  formatAddress,
  getSelectedProductData,
  useGetProductsPartialData,
} from '@prime-fresh/shared/modules';

export const RFPAPreview = () => {
  const { rfpaFormPreview } = useAppSelector(rfpaDataState);
  const { data: products } = useGetProductsPartialData();

  const rfpaPreviewConfig: SectionConfig[] = [
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
      title: 'RFPA Products',
      sectionType: 'array',
      layout: 'table',
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
              {/* <Typography variant="caption" color="text.secondary" component="div">
                {`(Origin: ${product.origin || '-'}, 
                              Variety: ${product.variety || '-'}, 
                              Count: ${product.count || '-'}, 
                              Size: ${product.size || '-'})`}
              </Typography> */}
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
  ];
  const rfpaSourceInfo: SectionConfig =
    rfpaFormPreview?.source === 'vendor'
      ? {
          title: 'Vendor Information',
          sectionType: 'object',
          icon: <Person />,
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
        }
      : {
          title: 'Farmer Information',
          sectionType: 'object',
          icon: <Person />,
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
        };
  const config = [...rfpaPreviewConfig.slice(0, 1), rfpaSourceInfo, ...rfpaPreviewConfig.slice(1)];
  return (
    <PreviewContainer title="Request For Purchase Approval">
      <DataViewer config={config} data={rfpaFormPreview ? rfpaFormPreview : []} />
    </PreviewContainer>
  );
};
