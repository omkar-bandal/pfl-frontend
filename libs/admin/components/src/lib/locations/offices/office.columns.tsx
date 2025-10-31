import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Edit, Preview } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { adminRoutes } from '@prime-fresh/admin/modules';
import { Address, GetOffices } from '@prime-fresh/services';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { formatAddress } from '@prime-fresh/shared/modules';

export const useOfficeColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
        isMobileVisible: true,
        hide: false,
      },
      {
        field: 'address',
        headerName: 'Address',
        flex: 1,
        minWidth: 400,
        hide: false,
        valueGetter: (value: Address) => (value ? formatAddress(value) : ''),
      },
      {
        field: 'cFirstName',
        headerName: 'Contact Person',
        flex: 1,
        minWidth: 170,
        hide: false,
        valueGetter: (value: GetOffices) =>
          value ? `${value?.cFirstName || ''} ${value?.cMiddleName || ''} ${value?.cLastName || ''}` : '',
      },
      {
        field: 'contactNumber',
        headerName: 'Contact',
        flex: 1,
        minWidth: 100,
        hide: false,
      },
      {
        field: 'officeEmail',
        headerName: 'Email',
        flex: 1,
        minWidth: 150,
        hide: false,
      },
      {
        field: 'notes',
        headerName: 'Remark',
        flex: 1,
        minWidth: 250,
        hide: true,
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
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_OFFICE}/${params.row.type}/${params.row.id}`)}>
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
          <IconButton aria-label="view" onClick={() => navigate(`${adminRoutes.VIEW_AN_OFFICE}/${params.row.type}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
