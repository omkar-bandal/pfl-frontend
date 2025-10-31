import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';

export const useMCVoucherColumns = (
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
        field: 'voucherNo',
        headerName: 'Voucher No',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        isMobileVisible: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
      },
      {
        field: 'createdBy',
        headerName: 'Created By',
        flex: 1,
        minWidth: 120,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'createdTime',
        headerName: 'Created Time',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : ''),
        hide: false,
      },
      {
        field: 'debitCreditTo',
        headerName: 'Debit From / Credit To',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: false,
      },
      {
        field: 'payReceivedFrom',
        headerName: 'Received From / Pay To',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: false,
      },
      {
        field: 'location',
        headerName: 'Location',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: false,
      },
      {
        field: 'totalAmt',
        headerName: 'Total Amount',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? `${Number(value)} Rs.` : 0),
        hide: false,
      },
      {
        field: 'amtWords',
        headerName: 'Amount in Words',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: true,
      },
      {
        field: 'paymentMode',
        headerName: 'Payment Mode',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: true,
      },
      {
        field: 'receiverName',
        headerName: 'Receiver Name',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: true,
      },
      {
        field: 'grnNo',
        headerName: 'Refered GRN',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
        hide: true,
      },
      {
        field: 'challanNo',
        headerName: 'Refered Challan',
        minWidth: 120,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
        hide: true,
      },
      {
        field: 'remark',
        headerName: 'Remark',
        minWidth: 200,
        flex: 1,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        hide: true,
      },
      {
        field: 'edit',
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
            color='info'
            disabled={(params.row.overAllStatus === 'COMPLETE' || params.row.overAllStatus === 'REJECT') ? true : false}
            onClick={() => navigate(`${operationsRoutes.UPDATE_MULT_CASH_VOUCHER}/${params.row.id}`)}
          >
            <Edit />
          </IconButton>
        ),
      },
      {
        field: 'view',
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_MULT_CASH_VOUCHER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
