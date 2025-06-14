// import { CircularProgress } from "@mui/material"
import { Receipt } from '@mui/icons-material';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useGetOfficeById } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/common_api';
import { DataViewer, ObjectViewerConfig } from '@prime-fresh/ui_shared';
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
  const { data: Office, isLoading } = useGetOfficeById(
    officeId,
    officeType || ''
  );
  const office = Office ? Office : {};
  const officeViewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        title: OfficeTypeLabel,
        layout: 'grid',
        gridColumns: 2,
        icon: <Receipt />,
        fields: [
          {
            key: 'name',
            label: 'Office Name',
          },
          {
            key: 'address',
            label: 'Office Address',
            render: (value: Address) =>
              value ? (
                <>
                  <Typography variant="body2" component="div">
                    {value.address1}, {value.address2}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {value.location}, {value.city}, {value.state},{' '}
                    {value.pincode}
                  </Typography>
                </>
              ) : null,
          },
          {
            key: 'cFirstName',
            label: 'First Name',
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
    ],
  };
  return (
    <Box flex={1}>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <DataViewer data={office} config={officeViewConfig} />
      )}
    </Box>
  );
};
