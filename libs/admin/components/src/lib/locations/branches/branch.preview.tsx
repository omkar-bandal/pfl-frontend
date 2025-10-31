/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Warehouse } from '@mui/icons-material';
import { branchesDataStates } from '@prime-fresh/admin/modules';
import { Address } from '@prime-fresh/services';
import { useAppSelector } from '@prime-fresh/modules';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { DataViewer, PreviewContainer, SectionConfig } from '@prime-fresh/shared/components';

export const branchViewConfig: SectionConfig[] = [
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
