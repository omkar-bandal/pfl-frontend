/* eslint-disable @typescript-eslint/no-explicit-any */
import { Warehouse } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { branchesDataStates } from '@prime-fresh/admin/modules';
import { GetBranches } from '@prime-fresh/admin_api';
import { Address } from '@prime-fresh/common_api';
import { useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, ObjectViewerConfig, PreviewContainer, SectionConfig } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export const branchViewConfig: SectionConfig[] = [
  {
    sectionType: 'object',
    title: `Branch Details`,
    icon: <Warehouse />,
    layout: 'grid',
    gridColumns: 2,
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
  const { branchFormPreview } = useAppSelector(branchesDataStates);

  return (
    <PreviewContainer title={BranchTypeLabel}>
      <DataViewer data={branchFormPreview || []} config={branchViewConfig} />
    </PreviewContainer>
  );
};
