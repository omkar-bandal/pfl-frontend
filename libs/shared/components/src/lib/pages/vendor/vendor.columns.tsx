import { useMemo } from 'react';
import { CustomGridColDef } from '../../components';
import { Address, GetVendorCategory, GetVendorSubcategory } from '@prime-fresh/services';
import { convertInTitleCase, formatAddress, sharedRoutes } from '@prime-fresh/shared/modules';
import { Chip, IconButton, Theme, useTheme } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { NavigateFunction } from 'react-router-dom';
import { Edit, Preview } from '@mui/icons-material';

export const useVendorColumns = (theme: Theme, navigate: NavigateFunction): CustomGridColDef[] => {
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
        field: 'vendorCode',
        headerName: 'Code',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        field: 'companyName',
        headerName: 'Business',
        headerAlign: 'center',
        flex: 1,
        minWidth: 200,
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
      },
      {
        field: 'category',
        headerName: 'Category',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
        valueGetter: (value: GetVendorCategory) => (value ? convertInTitleCase(value.name || '') : ''),
      },
      {
        field: 'subcategory',
        headerName: 'Subcategory',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
        valueGetter: (value: GetVendorSubcategory) => (value ? convertInTitleCase(value.name || '') : ''),
      },
      {
        field: 'officeAddress',
        headerName: 'Address',
        headerAlign: 'center',
        flex: 1,
        minWidth: 300,
        hide: false,
        valueGetter: (value: Address) => (value ? formatAddress(value) : ''),
      },
      {
        field: 'officeContactNo',
        headerName: 'Office Contact',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: false,
      },
      {
        field: 'mainProduct',
        headerName: 'Main Product',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
      },
      {
        field: 'listOfAllProducts',
        headerName: 'Other Product',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'dispatchCenter',
        headerName: 'Dispatch Center',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
      },
      {
        field: 'warehouseLocations',
        headerName: 'Warehouse',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
      },
      {
        field: 'packingCenterLocation',
        headerName: 'Packing Center',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 100,
        hide: true,
      },
      {
        field: 'submittedBy',
        headerName: 'Submitted By',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'registeredBy',
        headerName: 'Registered By',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'registeredDate',
        headerName: 'Regd Date',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 150,
        hide: true,
      },
      {
        field: 'edit',
        headerName: 'Edit',
        flex: 1,
        minWidth: 80,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.UPDATE_VENDOR}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 80,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.VIEW_A_VENDOR}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [navigate, theme]
  );
};
