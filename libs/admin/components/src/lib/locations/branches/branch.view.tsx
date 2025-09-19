/* eslint-disable @typescript-eslint/no-explicit-any */
import { Receipt, Warehouse } from '@mui/icons-material';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useGetBranchById } from '@prime-fresh/admin/modules';
import { GetBranches } from '@prime-fresh/admin_api';
import { Address } from '@prime-fresh/common_api';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig, SectionConfig } from '@prime-fresh/ui_shared';
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

  const branchViewConfig: SectionConfig[] = [
    {
      sectionType: 'object',
      title: `${BranchTypeLabel} Details`,
      layout: 'grid',
      gridColumns: 2,
      icon: <Warehouse />,
      fields: [
        {
          key: 'name',
          label: 'Branch Name',
          render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
          key: 'address',
          label: 'Branch Address',
          render: (value: Address) => (value ? formatAddress(value) : ''),
        },
        {
          key: 'cFirstName',
          label: 'Contact Person Name',
          render: (value: GetBranches) =>
            value
              ? convertInTitleCase(
                  `${value.cFirstName || ''} ${value.cMiddleName || ''} ${value.cLastName || ''}` || ''
                )
              : '',
        },
        { key: 'contactNumber', label: 'Contact Number' },
        { key: 'currentCapacity', label: 'Current Capacity' },
        { key: 'balanceCapacity', label: 'Balance Capacity' },
        { key: 'totalCapacity', label: 'Totoal Capacity' },
      ],
    },
  ];

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
