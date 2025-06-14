import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { ObjectViewerConfig, formatDate } from '@prime-fresh/ui_shared';

export const eodReportViewConfig: ObjectViewerConfig = {
  sections: [
    {
      sectionType: 'object',
      layout: 'grid',
      gridColumns: 2,
      fields: [
        {
          key: 'companyName',
          label: 'Company Name',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'location',
          label: 'Location',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'stockDate',
          label: 'Stock Date',
          render: (value: string) => (value ? formatDate(value) : '-'),
        },
        {
          key: 'submission',
          label: 'Submission',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
      ],
    },
    {
      sectionType: 'array',
      fieldArrayName: 'eodProducts',
      keyField: 'id',
      title: 'Products',
      fields: [
        {
          key: 'sku',
          label: 'SKU',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'uom',
          label: 'UoM',
          render: (value: string) => (value ? convertInTitleCase(value) : '-'),
        },
        {
          key: 'qty',
          label: 'Quantity',
          render: (value: number) => (value ? value : 0),
        },
        {
          key: 'totalWeightinKg',
          label: 'Total Weight In Kg',
          render: (value: number) => (value ? `${value} Kg` : 0),
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
  ],
};
