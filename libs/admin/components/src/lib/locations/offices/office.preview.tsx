/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { officesDataStates } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/common_api';
import { useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import {
  DataViewer,
  ObjectViewerConfig,
  PreviewContainer,
} from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

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
  const {officeFormPreview} = useAppSelector(officesDataStates);
  // console.log("officeFormPreview", officeFormPreview)
  const officePreviewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        layout: 'grid',
        gridColumns: 2,
        fields: [
          {
            key: 'name',
            label: 'Office Name',
            render: (value) => value? convertInTitleCase(value) : '-',
          },
          {
            key: 'address',
            label: 'Office Address',
            render: (value: Address) =>
              value ? (
                <>
                  <Typography variant="body2" component="div">
                    {convertInTitleCase(`${value.address1}, ${value.address2}`)}
                  </Typography>
                  <Typography variant="body2" component="div">
                   {convertInTitleCase(`${value.location}, ${value.city}, ${value.state}, ${value.pincode}`)}
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
    <PreviewContainer title={OfficeTypeLabel}>
      <DataViewer data={officeFormPreview || []} config={officePreviewConfig} />
    </PreviewContainer>
  );
};
