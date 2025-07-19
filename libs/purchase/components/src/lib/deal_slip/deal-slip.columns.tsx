import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { useNavigate } from 'react-router-dom';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

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
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'createdDate',
      headerName: 'Created Date',
      minWidth: 120,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'createdTime',
      headerName: 'Created Time',
      minWidth: 120,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
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
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'lotNo',
      headerName: 'Lot Number',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'remark',
      headerName: 'Remarks',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'specialRequest',
      headerName: 'Special Request',
      minWidth: 200,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'approvalStatus',
      headerName: 'Status',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.approvalStatus) {
          case 'pending':
            return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ width: 80 }} />;
          case 'approved':
            return <Chip label={params.row.approvalStatus} color="info" size="small" sx={{ width: 80 }} />;
          default:
            return <Chip label="pending" color="error" size="small" />;
        }
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
