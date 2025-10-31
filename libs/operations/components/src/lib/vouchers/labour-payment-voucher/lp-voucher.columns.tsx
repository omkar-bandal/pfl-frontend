import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';

export const useLPVoucherColumns = (
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
        headerName: 'Voucher Number',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
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
        field: 'grnNo',
        headerName: 'GRN Number',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        flex: 1,
        minWidth: 200,
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'debitCreditTo',
        headerName: 'Debit From / Credit To',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'payReceivedFrom',
        headerName: 'Received From / Pay To',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'noOfLabours',
        type: 'number',
        headerName: 'No Of Labours',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? Number(value) : ''),
      },
      {
        field: 'ratePerLabour',
        headerName: 'Rate Per Labours',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? `${Number(value)} Rs` : ''),
      },
      {
        field: 'loadingDate',
        headerName: 'Loading Date',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        field: 'totalAmt',
        headerName: 'Total Amount',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? `${Number(value)} Rs` : ''),
      },
      {
        field: 'amtWords',
        headerName: 'Amount in Words',
        flex: 1,
        minWidth: 200,
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'paymentMode',
        headerName: 'Payment Mode',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'contactNo',
        headerName: 'Contact No',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        field: 'altContactNo',
        headerName: 'Alt. Contact No',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        field: 'receiverName',
        headerName: 'Receiver Name',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'kyc',
        headerName: 'KYC',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: boolean) => (value === true ? 'Yes' : 'No'),
      },
      {
        field: 'remark',
        headerName: 'Remark',
        flex: 1,
        minWidth: 200,
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
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
            onClick={() => navigate(`${operationsRoutes.UPDATE_LABOUR_CASH_VOUCHER}/${params.row.id}`)}
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
            onClick={() => navigate(`${operationsRoutes.VIEW_A_LABOUR_CASH_VOUCHER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
