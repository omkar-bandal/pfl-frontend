import { Chip, IconButton } from '@mui/material';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { NavigateFunction } from 'react-router-dom';
import { useMemo } from 'react';

export const useAQRColumns = (canEdit: boolean, canView: boolean, navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'overAllStatus',
        headerName: 'Status',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
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
        field: 'supplierName',
        headerName: 'Supplier Name',
        hide: false,
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'supplierLocation',
        headerName: 'Location',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'arrivalDate',
        headerName: 'Arrival Date',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'arrivedQty',
        headerName: 'Arrived Quantity',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'samplingQty',
        headerName: 'Sampling Quantity',
        hide: false,
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'qcCheckBy',
        headerName: 'QC Checked By',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'remark',
        headerName: 'Remark',
        headerAlign: 'center',
        flex: 1,
        minWidth: 300,
        hide: true,
        valueGetter: (value: string) => (value ? value : '-'),
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
            color="info"
            disabled={params.row.overAllStatus === 'COMPLETE' || params.row.overAllStatus === 'REJECT' ? true : false}
            onClick={() => navigate(`${operationsRoutes.UPDATE_AQR}/${params.row.id}`)}
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
            color="success"
            onClick={() => navigate(`${operationsRoutes.VIEW_AN_AQR}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [canEdit, canView, navigate]
  );
};
