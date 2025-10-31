import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { formatDate, SectionConfig } from '@prime-fresh/shared/components';

export const dealSlipViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    title: 'Deal Slip',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'rfpa',
        label: 'Refered RFPA',
        render: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        key: 'lotNo',
        label: 'Lot Number',
        render: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        key: 'loadingLocation',
        label: 'Loading Location',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'remark',
        label: 'Remark',
        width: 12,
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'specialRequest',
        label: 'Special Request',
        width: 12,
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'createdBy',
        label: 'Created By',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'createdDate',
        label: 'Created Date',
        render: (value: string) => (value ? formatDate(value) : '-'),
      },
      {
        key: 'createdTime',
        label: 'Created Time',
        render: (value: string) => (value ? (value) : '-'),
      },
    ],
  },
];
