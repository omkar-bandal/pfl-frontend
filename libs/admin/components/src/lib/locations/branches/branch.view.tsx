/* eslint-disable @typescript-eslint/no-explicit-any */
import { Receipt, Warehouse } from '@mui/icons-material';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useGetBranchById } from '@prime-fresh/admin/modules';
import { GetBranches } from '@prime-fresh/services';
import { Address } from '@prime-fresh/services';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig, SectionConfig } from '@prime-fresh/shared/components';
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
    title: `Branch Details`,
    icon: <Warehouse />,
    layout: 'grid',
    gridColumns: 3,
    fields: [
      {
        key: 'name',
        label: 'Branch Name',
        width: 12,
        render: (value: string) => (value ? convertInTitleCase(value || '') : ''),
      },
      {
        key: 'address',
        label: 'Branch Address',
        width: 12,
        render: (value: Address) => (value ? formatAddress(value) : ''),
      },
     {
        key: 'contactPersonName',
        label: 'Contact Person Name',
        render: (value: string) => value ? convertInTitleCase( value || '') : '',
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
