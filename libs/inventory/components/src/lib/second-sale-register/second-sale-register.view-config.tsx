/* eslint-disable @typescript-eslint/no-explicit-any */
import { SectionConfig, formatCurrency, formatDate } from '@prime-fresh/ui_shared';
import { Typography } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { Inventory, LocalShipping } from '@mui/icons-material';

export const secondSaleRegisterViewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 3,
      fields: [
        {
          key: 'companyName',
          label: 'Company',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'location',
          label: 'Location',
          render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
        },
        {
          key: 'dcNo',
          label: 'Delivery Challan Number',
          render: (value: string) => (value ? String(value)?.toUpperCase() : '-'),
        },
        {
          key: 'saleDate',
          label: 'Sale Date',
          render: (value: any) => (value ? formatDate(value || '') : '-'),
        },
        {
          key: 'buyerName',
          label: 'Buyer Name',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'buyerMobNo',
          label: 'Buyer Mob. No.',
        },
        {
          key: 'approvedBy',
          label: 'Approved By',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'soldBy',
          label: 'Sold By',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'reasonForSale',
          label: 'Reason For Sale',
          render: (value: string) => (value ? value : ''),
        },
      ],
    },
    {
      title: 'Second Sale Products',
      sectionType: 'array',
      layout: 'table',
      icon: <Inventory />,
      fieldArrayName: 'secondSaleProducts',
      keyField: 'id',
      fields: [
        {
          key: 'productName',
          label: 'Product',
          width: '25%',
          render: (value: string) => value ? (
            <Typography variant="body1" color="text.primary">
              {convertInTitleCase(value || '')}
            </Typography>
          ) : '',
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
        },
        {
          key: 'unitPrice',
          label: 'Unit Price',
          width: '10%',
        },
        {
          key: 'amount',
          label: 'Amount',
          width: '10%',
          render: (value: any) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        {
          key: 'netWeight',
          label: 'Net Weight',
          width: '10%',
          render: (value: any) => (value ? `${Number(value)} kg` : 0),
        },
      ],
    },
    {
      title: `Second Sale Product's Quantity & Cost`,
      sectionType: 'object',
      icon: <LocalShipping />,
      fields: [
        {
          key: 'totalNetWeight',
          label: 'Total Net Weight',
          render: (value: number) => (value ? `${Number(value)} Kg` : ''),
        },
        {
          key: 'totalAmt',
          label: 'Total Amount',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        {
          key: 'totalAmtInWords',
          label: 'Total Amount in Words',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'paymentMode',
          label: 'Payment Mode',
        },
        {
          key: 'paidAmount',
          label: 'Paid Amount',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        {
          key: 'pendingAmt',
          label: 'Pending Amount',
          render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
        },
        { key: 'remarks', label: 'Remarks' },
        { key: 'comments', label: 'Comments' },
      ],
      gridColumns: 3,
    },
]