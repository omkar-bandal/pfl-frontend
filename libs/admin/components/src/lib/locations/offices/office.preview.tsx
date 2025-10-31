/* eslint-disable @typescript-eslint/no-explicit-any */
import { Business } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { officesDataStates } from '@prime-fresh/admin/modules';
import { GetOffices } from '@prime-fresh/services';
import { Address } from '@prime-fresh/services';
import { useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/shared/components';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const officePreviewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    title: `Office Details`,
    icon: <Business />,
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'name',
        label: 'Office Name',
        width: 12,
        render: (value) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'address',
        label: 'Office Address',
        width: 12,
        render: (value: Address) => (value ? formatAddress(value) : null),
      },
      {
        key: '',
        label: 'Contact Person Name',
        width: 12,
        isHeader: true,
      },
      {
        key: 'cFirstName',
        label: 'First Name',
        render: (value: string) => value ? convertInTitleCase( value || '') : '',
      },
      {
        key: 'cMiddleName',
        label: 'Middle Name',
        render: (value: string) => value ? convertInTitleCase( value || '') : '',
      },
      {
        key: 'cLastName',
        label: 'Last Name',
        render: (value: string) => value ? convertInTitleCase( value || '') : '',
      },
      {
        key: 'contactNumber',
        label: 'Contact Number',
      },
      {
        key: 'officeEmail',
        label: 'Office Email',
      },
      {
        key: 'notes',
        label: 'Notes',
      },
    ],
  },
];

export const OfficeFormPreview = () => {
  const { officeType } = useParams<{ officeType: string }>();
  const OfficeType = officeType ? officeType : '';
  const OfficeTypeLabel = useMemo(
    () =>
      OfficeType.split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [OfficeType]
  );
  const { officeFormPreview } = useAppSelector(officesDataStates);
  // console.log("officeFormPreview", officeFormPreview)

  return (
    <PreviewContainer title={OfficeTypeLabel}>
      <DataViewer data={officeFormPreview || []} config={officePreviewConfig} />
    </PreviewContainer>
  );
};
