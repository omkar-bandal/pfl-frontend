import { Box } from '@mui/material';
import { Address } from '@prime-fresh/common_api';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { formatDate, SectionConfig } from '@prime-fresh/ui_shared';

export const FarmerFormPreviewConfig: SectionConfig[] = [
  {
    title: 'Farmer Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'farmerfName',
        label: 'First Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'farmermName',
        label: 'Middle Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'farmerlName',
        label: 'Last Name',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'primaryMobileNo',
        label: 'Contact No',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'secondaryMobileNo',
        label: 'Alternate Contact No',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'email',
        label: 'Email',
        render: (value: string) => (value ? value : '-'),
      },
      {
        key: 'gender',
        label: 'Gender',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'dob',
        label: 'Birth Date',
        render: (value: string) => (value ? formatDate(value) : '-'),
      },
      {
        key: 'idProofNo',
        label: 'ID Proof Number',
        render: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        key: 'idProofCopy',
        label: 'Attached ID Proof',
        render: (value: File) => (value ? value.name : '-'),
      },
      {
        key: 'residensialAddress',
        label: 'Residential Address',
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: 'howDoYouSell',
        label: 'How do you sell your products? ',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
    ],
  },
  {
    title: 'Farm Details',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 1,
    fields: [
      {
        key: 'farmAddress',
        label: 'Farm Address',
        render: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        key: 'landHoldingStatus',
        label: 'Land Holding Status',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'landStatus',
        label: 'Land Status',
        render: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'totalLandArea',
        label: 'Total Land Area',
        render: (value: number) => (value ? `${value} Acres` : '-'),
      },
      {
        key: 'cultivationArea',
        label: 'Cultivation Area',
        render: (value: number) => (value ? `${value} Acres` : '-'),
      },
    ],
  },
  {
    sectionType: 'array',
    layout: 'table',
    fieldArrayName: 'crops',
    title: 'Crops',
    fields: [
      { key: 'crop', label: 'Crop Name', width: '20%' },
      { key: 'variety', label: 'Variety', width: '10%' },
      { key: 'noOfPlants', label: 'No of plants', width: '20%' },
      { key: 'pruningDate', label: 'Pruning Date', width: '20%' },
      { key: 'expectedHarvestDate', label: 'Harvest Date', width: '20%' },
      { key: 'expectedQuantityInTonnes', label: 'Expected Quantity', width: '10%' },
    ],
  },
  {
    title: 'Attached Images',
    sectionType: 'object',
    layout: 'grid',
    gridColumns: 2,
    fields: [
      {
        key: 'farmerPhoto',
        label: 'Farmer Photo',
        render: (value: any) =>
          value ? (
            <Box flex={1}>
              <img src={URL.createObjectURL(value)} alt="farmer photo" />
            </Box>
          ) : (
            '-'
          ),
      },
      {
        key: 'farmPhoto',
        label: 'Farm Photo',
        render: (value: any) =>
          value ? (
            <Box flex={1}>
              <img src={URL.createObjectURL(value)} alt="farm photo" />
            </Box>
          ) : (
            '-'
          ),
      },
    ],
  },
];
