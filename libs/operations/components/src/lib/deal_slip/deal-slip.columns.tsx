import { useMemo } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { usePermission } from '@prime-fresh/modules';
import { Chip, IconButton } from '@mui/material';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase, getDocStatusColor, reverseDateString } from '@prime-fresh/shared/modules';

export const useDealSlipColumns = (
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
        valueGetter: (value: string) => (value ? reverseDateString(value) : ''),
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
        field: 'dealSlipNo',
        headerName: 'Deal Slip No',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        field: 'rfpa',
        headerName: 'Refered RFPA',
        minWidth: 120,
        flex: 1,
      },
      {
        field: 'loadingLocation',
        headerName: 'Loading Location',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'lotNo',
        headerName: 'Lot Number',
        minWidth: 150,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        field: 'remark',
        headerName: 'Remarks',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'specialRequest',
        headerName: 'Special Request',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
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
            onClick={() => navigate(`${operationsRoutes.UPDATE_DEAL_SLIP}/${params.row.id}`)}
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_DEAL_SLIP}/${params.row.documentId}`)}
          >
            <Preview color="success" />
          </IconButton>
        ),
      },
    ],
    [canEdit, canView, navigate]
  );
};
