import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { useNavigate } from 'react-router-dom';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase, getDocStatusColor, reverseDateString } from '@prime-fresh/shared/modules';

export const useDealSlipColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return [
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
    // {
    //   field: 'createdBy',
    //   headerName: 'Created By',
    //   flex: 1,
    //   minWidth: 120,
    //   align: 'center',
    //   headerAlign: 'center',
    //   hide: false,
    //   valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
    // },
    {
      field: 'createdDate',
      headerName: 'Created Date',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: string) => value ? reverseDateString(value) : '',
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
    // {
    //   field: 'rfpa',
    //   headerName: 'Refered RFPA',
    //   minWidth: 120,
    //   flex: 1,
    // },
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
        return <Chip label={status} size="small" sx={{ flex: 1, minWidth: 80, color: '#FFF', backgroundColor: getDocStatusColor(params.row.overAllStatus || '') }} />
      },
    },
    ...(canEdit
      ? [
        {
          field: 'edit',
          headerName: 'Edit',
          width: 70,
          sortable: false,
          filterable: false,
          isMobileVisible: true,
          renderCell: (params: GridRenderCellParams) => (
            <EditIconBtn onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_DEAL_SLIP}/${params.row.id}`)} />
          ),
        },
      ]
      : []),
    ...(canView
      ? [
        {
          field: 'view',
          headerName: 'View',
          width: 70,
          sortable: false,
          filterable: false,
          isMobileVisible: true,
          renderCell: (params: GridRenderCellParams) => (
            <ViewIconBtn onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_DEAL_SLIP}/${params.row.documentId}`)} />
          ),
        },
      ]
      : []),
  ];
};
