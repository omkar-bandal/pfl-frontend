import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Address, GetBranches } from '@prime-fresh/services';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase, formatAddress } from '@prime-fresh/shared/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit, Preview } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useBranchColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
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
      {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 70,
        hideable: false,
        sortable: false,
        filterable: false,
        disableExport: true,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_BRANCHES}/${params.row.type}/${params.row.id}`)}>
            <Edit color="info" />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 70,
        hideable: false,
        sortable: false,
        filterable: false,
        disableExport: true,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="view" onClick={() => navigate(`${adminRoutes.VIEW_A_BRANCHES}/${params.row.type}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
