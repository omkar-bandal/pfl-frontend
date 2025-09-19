/* eslint-disable @typescript-eslint/no-explicit-any */
import { Business } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { officesDataStates } from '@prime-fresh/admin/modules';
import { GetOffices } from '@prime-fresh/admin_api';
import { Address } from '@prime-fresh/common_api';
import { useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const officePreviewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    title: `Office Details`,
    icon: <Business />,
    layout: 'grid',
    gridColumns: 2,
    fields: [
      {
        key: 'name',
        label: 'Office Name',
        render: (value) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        key: 'address',
        label: 'Office Address',
        render: (value: Address) => (value ? formatAddress(value) : null),
      },
      {
        key: 'contactPersonName',
        label: 'Contact Person Name',
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
