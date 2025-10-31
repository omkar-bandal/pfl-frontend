/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checklist } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { formatDate, SectionConfig } from '@prime-fresh/shared/components';

export const aqrViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 4,
    fields: [
      {
        key: 'dcNo',
        label: 'Challan No',
        render: (value: string) => (value ? value?.toUpperCase() : '-'),
      },
      {
        key: 'dcDate',
        label: 'Challan Date',
        render: (value: string) => (value ? formatDate(value || '') : '-'),
      },
      {
        key: 'supplierName',
        label: 'Supplier Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'supplierLocation',
        label: 'Supplier Location',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'product',
        label: 'Product Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'arrivalDate',
        label: 'Arrival Date',
        render: (value: string) => (value ? formatDate(value || '') : '-'),
      },
      {
        key: 'arrivedQty',
        label: 'Arrived Quantity',
        render: (value: string) => (value ? `${value} Kg` : '-'),
      },
      {
        key: 'samplingQty',
        label: 'Sampling Quantity',
        render: (value: string) => (value ? `${value} Kg` : '-'),
      },
      {
        key: 'purchaseBy',
        label: 'Purchase By',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'receivedBy',
        label: 'Received By',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'qcCheckBy',
        label: 'QC Check By',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'varifiedBy',
        label: 'Varified By',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'remark',
        label: 'Remark',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
    ],
  },
  {
    title: 'Quality Check Parameters',
    sectionType: 'array',
    layout: 'table',
    icon: <Checklist />,
    fieldArrayName: 'parameters',
    keyField: 'qualityParameterId',
    fields: [
      {
        key: 'qualityParameterName',
        label: 'Parameter Name',
        width: '25%',
        render: (value: string) => (
          <Typography variant="body1" color="text.primary">
            {convertInTitleCase(value || '') || ''}
          </Typography>
        ),
      },
      {
        key: 'qualityParameterType',
        label: 'Parameter Type',
        width: '10%',
      },
      {
        key: 'quantity',
        label: 'Quantity',
        width: '10%',
      },
      {
        key: 'percentage',
        label: 'Percentage',
        width: '10%',
        render: (value: any) => value ? `${value}%` : '',
      },
    ],
  },
]
