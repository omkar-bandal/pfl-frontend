import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { SectionConfig, formatDate } from '@prime-fresh/ui_shared';

export const eodReportViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 2,
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
        key: 'stockDate',
        label: 'Stock Date',
        render: (value: string) => (value ? formatDate(value || '') : '-'),
      },
      {
        key: 'submission',
        label: 'Submission',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
    ],
  },
  {
    sectionType: 'array',
    layout: 'table',
    fieldArrayName: 'eodProducts',
    keyField: 'id',
    title: 'Products',
    fields: [
      {
        key: 'sku',
        label: 'SKU',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'uom',
        label: 'UoM',
        render: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        key: 'qty',
        label: 'Quantity',
        render: (value: number) => (value ? Number(value) : 0),
      },
      {
        key: 'totalWeightinKg',
        label: 'Total Weight In Kg',
        render: (value: number) => (value ? `${Number(value)} Kg` : 0),
      },
    ],
  },
  {
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 1,
    fields: [
      {
        key: 'comments',
        label: 'Comments',
        render: (value: string) => (value ? value : '-'),
      },
    ],
  },
]