/* eslint-disable @typescript-eslint/no-explicit-any */
import { Receipt } from '@mui/icons-material';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useGetBranchById } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/common_api';
import {
  DataViewer,
  ObjectViewerConfig,
} from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const BranchView = () => {
  const { id, branchType } = useParams<{ id: string; branchType: string }>();
  const branchId = id ? id : '';
  const branchtype = branchType ? branchType : '';
  const BranchTypeLabel = useMemo(
    () =>
      branchtype
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [branchtype]
  );
  const { data: Branch, isLoading } = useGetBranchById(branchId);
  const branch = Branch?.data ? Branch.data : {};
  const branchViewConfig: ObjectViewerConfig = {
    sections: [
      {
        sectionType: 'object',
        title: `${BranchTypeLabel} Details`,
        layout: 'grid',
        gridColumns: 2,
        icon: <Receipt />,
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
  return isLoading ? (
    <Box>
      <LinearProgress />
    </Box>
  ) : (
    <Box flex={1}>
      <DataViewer data={branch} config={branchViewConfig} />
    </Box>
  );
};
