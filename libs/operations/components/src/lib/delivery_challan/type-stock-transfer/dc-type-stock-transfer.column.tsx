import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/shared/components';

export const useDCTypeStockTransferColumns = (
  canEdit: boolean,
  canView: boolean,
  navigate: NavigateFunction
): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'overAllStatus',
        headerName: 'Status',
        headerAlign: 'center',
        align: 'center',
        width: 130,
        renderCell: (params: GridRenderCellParams) => {
          const status = convertInTitleCase(params.row.overAllStatus || '');
          return (
            <Chip
              label={status}
              size="small"
              sx={{
                flex: 1,
                minWidth: 80,
                color: '#FFF',
                backgroundColor: getDocStatusColor(params.row.overAllStatus || ''),
              }}
            />
          );
        },
      },
      {
        field: 'challanNo',
        headerName: 'Challan Number',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value?.toUpperCase() : '-'),
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
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'createdTime',
        headerName: 'Created Time',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'stockTransferType',
        headerName: 'Transfer Type',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'fromLocation',
        headerName: 'From Location',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'toLocation',
        headerName: 'To Location',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'netProductWeight',
        headerName: 'Net Weight',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? `${value} Kg` : '-'),
      },
      {
        field: 'totalProductAmount',
        headerName: 'Total Amount',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? `${value} Rs` : '-'),
      },
      {
        field: 'totalAmtInWords',
        headerName: 'Amount In Words',
        width: 220,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? `${value} Rs` : '-'),
      },
      {
        field: 'netPackagingMaterialWeight',
        headerName: 'Packing Material Weight',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? `${value} Kg` : '-'),
      },
      {
        field: 'totalPackagingMaterialAmount',
        headerName: 'Packing Material Amount',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? `${value} Rs` : '-'),
      },
      {
        field: 'driverName',
        headerName: 'Driver Name',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'licenseNo',
        headerName: 'License No',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        field: 'contactNo',
        headerName: 'Contact No',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'vehicleNo',
        headerName: 'Vehicle No',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value !== null ? value?.toUpperCase() : '-'),
      },
      {
        field: 'receiverName',
        headerName: 'Receiver Name',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'rmn',
        headerName: 'RM Name',
        width: 120,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'remark',
        headerName: 'Remark',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        hide: !canEdit,
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
          <IconButton
            aria-label="edit"
            color='info'
            disabled={(params.row.overAllStatus === 'COMPLETE' || params.row.overAllStatus === 'REJECT') ? true : false}
            onClick={() => navigate(`${operationsRoutes.UPDATE_DC_TYPE_STOCK_TRANSFER}/${params.row.id}`)}
          >
            <Edit />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        hide: !canView,
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
          <IconButton
            aria-label="view"
            onClick={() => navigate(`${operationsRoutes.VIEW_A_DC_TYPE_STOCK_TRANSFER}/${params.row.documentId}`)}
          >
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [canEdit, canView, navigate]
  );
};
