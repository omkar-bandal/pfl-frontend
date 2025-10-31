import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/shared/components';

export const useDumpRegisterColumns = (
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
        field: 'location',
        headerName: 'Location',
        minWidth: 100,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
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
        field: 'totalDumpCost',
        headerName: 'Dump Cost',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? `${value} Rs` : '-'),
      },
      {
        field: 'totalCostInWords',
        headerName: 'Cost In Words',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'grn',
        headerName: 'Refered GRN',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
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
        field: 'remark',
        headerName: 'Remark',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
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
            onClick={() => navigate(`${operationsRoutes.UPDATE_DUMP_REGISTER}/${params.row.id}`)}
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_DUMP_REGISTER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [canEdit, canView, navigate]
  );
};
