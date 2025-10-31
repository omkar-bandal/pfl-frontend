// import { CircularProgress } from "@mui/material"
import { Receipt } from '@mui/icons-material';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useGetOfficeById } from '@prime-fresh/admin/modules';
import { GetOffices } from '@prime-fresh/services';
import { Address } from '@prime-fresh/services';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig, SectionConfig } from '@prime-fresh/shared/components';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const OfficeView = () => {
  const { id, officeType } = useParams<{ id: string; officeType: string }>();
  const officeId = id ? id : '';
  const OfficeTypeLabel = useMemo(
    () =>
      officeType
        ? officeType
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : '',
    [officeType]
  );
  const { data: Office, isLoading } = useGetOfficeById(officeId, officeType || '');
  const office = Office?.data ? Office.data : {};
  console.log('office data: ', office);
  const officeViewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      title: OfficeTypeLabel,
      layout: 'grid',
      gridColumns: 3,
      icon: <Receipt />,
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

  return <Box flex={1}>{isLoading ? <LinearProgress /> : <DataViewer data={office} config={officeViewConfig} />}</Box>;
};
