import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { SectionConfig } from '@prime-fresh/ui_shared';

export const dealSlipViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    title: 'Deal Slip',
    layout: 'table',
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
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'specialRequest',
        label: 'Special Request',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
    ],
  },
];
