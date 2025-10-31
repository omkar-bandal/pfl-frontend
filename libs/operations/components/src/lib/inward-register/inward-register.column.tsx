import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';

export const useInwardRegisterColumns = (
  canEdit: boolean,
  canView: boolean,
  navigate: NavigateFunction
): CustomGridColDef[] => {
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
        field: 'location',
        headerName: 'Location',
        minWidth: 100,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
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
        field: 'purchasedQty',
        headerName: 'Purchased Qty',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'inwardQtyInKg',
        headerName: 'Inward Qty',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'inwardCost',
        headerName: 'Inward Cost',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'inwardType',
        headerName: 'Inward Type',
        width: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'companyName',
        headerName: 'Company',
        flex: 1,
        minWidth: 200,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
        hide: false,
      },
      {
        field: 'date',
        headerName: 'Date',
        minWidth: 100,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'source',
        headerName: 'Source',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'batchNo',
        headerName: 'Batch No',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        field: 'remarks',
        headerName: 'Remark',
        headerAlign: 'center',
        align: 'center',
        minWidth: 200,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'edit',
        hide: !canEdit,
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
          <IconButton
            aria-label="edit"
            color="info"
            disabled={params.row.overAllStatus === 'COMPLETE' || params.row.overAllStatus === 'REJECT' ? true : false}
            onClick={() => navigate(`${operationsRoutes.UPDATE_INWARD_REGISTER}/${params.row.documentId}`)}
          >
            <Edit />
          </IconButton>
        ),
      },
      {
        field: 'view',
        hide: !canView,
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
          <IconButton
            aria-label="view"
            color="success"
            onClick={() => navigate(`${operationsRoutes.VIEW_AN_INWARD_REGISTER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
