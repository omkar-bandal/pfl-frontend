import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';

export const useReturedByCustomerColumns = (
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
        field: 'deliveryChallanNo',
        headerName: 'Challan No',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'date',
        headerName: 'Date',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        minWidth: 250,
        flex: 1,
        headerAlign: 'center',
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'remark',
        headerName: 'Remark',
        minWidth: 400,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
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
            onClick={() => navigate(`${operationsRoutes.UPDATE_RBC}/${params.row.documentId}`)}
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_RBC}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
