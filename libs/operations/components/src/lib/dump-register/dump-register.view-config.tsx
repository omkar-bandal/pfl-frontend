import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { formatDate, formatCurrency, SectionConfig } from '@prime-fresh/shared/components';

export const dumpRegisterViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'companyName',
        label: 'Company Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'location',
        label: 'Location',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'date',
        label: 'Date',
        render: (value: string) => (value ? formatDate(value || '') : '-'),
      },
      {
        key: 'batchNo',
        label: 'Batch No',
        render: (value: string) => (value ? value?.toUpperCase() : '-'),
      },
      {
        key: 'grn',
        label: 'Refered GRN',
        render: (value: string) => (value ? value?.toUpperCase() : '-'),
      },
    ],
  },
  {
    sectionType: 'array',
    layout: 'table',
    fieldArrayName: 'dumpProducts',
    keyField: 'id',
    title: 'Dump Products',
    fields: [
      {
        key: 'productName',
        label: 'Product Name',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'quantity',
        label: 'Quantity',
        render: (value: number) => (value ? value : 0),
      },
      {
        key: 'uom',
        label: 'UoM',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'unitPrice',
        label: 'Unit Price',
        render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
      },
      {
        key: 'amount',
        label: 'Amount',
        render: (value: number) => (value ? formatCurrency(Number(value) || 0) : 0),
      },
    ],
  },
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'totalDumpCost',
        label: 'Total Dump Cost',
        render: (value: number) => (value ? formatCurrency(value || 0) : 0),
      },
      {
        key: 'totalCostInWords',
        label: 'Amount in Words',
        render: (value: string) => (value ? convertInTitleCase(value || '') : 0),
      },
      {
        key: 'remark',
        label: 'Remark',
      },
    ],
  },
]
