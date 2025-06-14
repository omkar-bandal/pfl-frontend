/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { branchesDataStates } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/common_api';
import { useAppSelector } from '@prime-fresh/modules';
import {
  DataViewer,
  ObjectViewerConfig,
  PreviewContainer,
} from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const BranchFormPreview = () => {
  const { branchType } = useParams<{ id: string; branchType: string }>();
  const branchtype = branchType ? branchType : '';
  const BranchTypeLabel = useMemo(
    () =>
      branchtype
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [branchtype]
  );
  const branchFormPreview = useAppSelector(branchesDataStates);
  const branchViewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        layout: 'grid',
        gridColumns: 2,
        fields: [
          {
            key: 'name',
            label: 'Branch Name',
            render: (value: string) =>
              value ? (
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {value}
                </Typography>
              ) : null,
          },
          {
            key: 'address',
            label: 'Branch Address',
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
            render: (value: any) => (
              <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: 600 }}
              >
                {value}
              </Typography>
            ),
          },
          {
            key: 'contactNumber',
            label: 'Contact Number',
            render: (value: any) =>
              value ? (
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ fontWeight: 600 }}
                >
                  {value}
                </Typography>
              ) : null,
          },
          { key: 'currentCapacity', label: 'Current Capacity' },
          { key: 'balanceCapacity', label: 'Balance Capacity' },
          { key: 'totalCapacity', label: 'Totoal Capacity' },
        ],
      },
    ],
  };
  return (
    <PreviewContainer title={BranchTypeLabel}>
      <DataViewer data={branchFormPreview} config={branchViewConfig} />
    </PreviewContainer>
  );
};
