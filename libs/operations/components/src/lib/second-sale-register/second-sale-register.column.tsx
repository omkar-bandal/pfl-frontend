import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';

export const useSecondSaleRegisterColumns = (
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
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'location',
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
        field: 'saleDate',
        headerName: 'Sale Date',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'buyerName',
        headerName: 'Buyer Name',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'buyerMobNo',
        headerName: 'Buyer Mob No',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'reasonForSale',
        headerName: 'Reason For Sale',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'totalNetWeight',
        headerName: 'Total Net Weight',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? `${Number(value)} Kg` : '-'),
        hide: false,
      },
      {
        field: 'totalAmt',
        headerName: 'Total Amount',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
        hide: false,
      },
      {
        field: 'approvedBy',
        headerName: 'Approved By',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
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
            onClick={() => navigate(`${operationsRoutes.UPDATE_SECOND_SALE_REGISTER}/${params.row.id}`)}
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_SECOND_SALE_REGISTER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
