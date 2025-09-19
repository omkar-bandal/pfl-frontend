import { useMemo } from 'react';
import { Address, GetBranches } from '@prime-fresh/admin_api';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';

export const useBranchColumns = (): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
      },
      {
        field: 'address',
        headerName: 'Address',
        flex: 1,
        minWidth: 300,
        hide: false,
        headerAlign: 'center',
        valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        field: 'fullName',
        headerName: 'Contact Person',
        flex: 1,
        minWidth: 170,
        headerAlign: 'center',
        align: 'center',
        hide: false,
        valueGetter: (value: GetBranches) =>
          value ? `${value.cFirstName || ''} ${value.cMiddleName || ''} ${value.cLastName || ''}` : '',
      },
      {
        field: 'contactNumber',
        headerName: 'Contact',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'totalCapacity',
        headerName: 'Total Capacity',
        flex: 1,
        minWidth: 100,
        align: 'center',
        hide: false,
      },
      {
        field: 'currentCapacity',
        headerName: 'Current Capacity',
        flex: 1,
        minWidth: 100,
        align: 'center',
        hide: false,
      },
      {
        field: 'balanceCapacity',
        headerName: 'Balance Capacity',
        flex: 1,
        minWidth: 100,
        align: 'center',
        hide: false,
      },
    ],
    []
  );
};
