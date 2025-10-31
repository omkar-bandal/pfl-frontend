import { useMemo } from 'react';
import { CustomGridColDef } from '../../components';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip, IconButton, Theme } from '@mui/material';
import { convertInTitleCase, formatAddress, sharedRoutes } from '@prime-fresh/shared/modules';
import { Address, GetCustomerCategory, GetCustomerType } from '@prime-fresh/services';
import { Edit, Preview } from '@mui/icons-material';
import { NavigateFunction } from 'react-router-dom';

export const useCustomerColumns = (theme: Theme, navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => {
          const status = convertInTitleCase(params.row.status || '');
          return (
            <Chip
              label={status}
              size="small"
              sx={{
                flex: 1,
                minWidth: 80,
                color: '#FFF',
                backgroundColor:
                  params.row.status === 'pending'
                    ? theme.palette.warning.main
                    : params.row.status === 'approved'
                    ? theme.palette.success.main
                    : params.row.status === 'notApproved'
                    ? theme.palette.error.main
                    : theme.palette.warning.main,
              }}
            />
          );
        },
      },
      {
        field: 'createdBy',
        headerName: 'Created By',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'createdTime',
        headerName: 'Created Time',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'organisationName',
        headerName: 'Name',
        headerAlign: 'center',
        flex: 1,
        minWidth: 170,
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'customerCode',
        headerName: 'Code',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 170,
        hide: false,
        isMobileVisible: true,
      },
      {
        field: 'organisationType',
        headerName: 'Organisation Type',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 170,
        hide: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'customerType',
        headerName: 'Type',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
        valueGetter: (value: GetCustomerType) => (value ? value.name : '-'),
      },
      {
        field: 'customerCategory',
        headerName: 'Category',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
        valueGetter: (value: GetCustomerCategory) => (value ? value.name : '-'),
      },
      {
        field: 'primaryContactNo',
        headerName: 'Contact No',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'emailPrimary',
        headerName: 'Email',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
      },
      {
        field: 'customerAddress',
        headerName: 'Address',
        headerAlign: 'center',
        flex: 1,
        minWidth: 300,
        hide: false,
        valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        field: 'ledgerReconciledDate',
        headerName: 'Ledger Reconcil Date',
        headerAlign: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      // {
      //   field: "employeeCode",
      //   headerName: "SalesPerson",
      //   headerAlign: 'center',
      //   flex: 1,
      //   minWidth: 150,
      // },
      {
        field: 'manager',
        headerName: 'Manager',
        headerAlign: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'referredBy',
        headerName: 'Referred By',
        headerAlign: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'contact_person',
        headerName: 'Contact Person',
        headerAlign: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'notes',
        headerName: 'Remark',
        headerAlign: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
      },
      {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        flex: 1,
        minWidth: 80,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.UPDATE_CUSTOMER}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        headerAlign: 'center',
        flex: 1,
        minWidth: 80,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.VIEW_A_CUSTOMER}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [theme, navigate]
  );
};
