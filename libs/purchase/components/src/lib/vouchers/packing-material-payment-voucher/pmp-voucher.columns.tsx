import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase, formatAddress, getDocStatusColor } from '@prime-fresh/shared/modules';
import { Address } from '@prime-fresh/common_api';

export const usePMPVoucherColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return [
    {
      field: 'voucherNo',
      headerName: 'Voucher Number',
      flex: 1,
      minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
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
      hide: false
    },
    {
      field: 'createdTime',
      headerName: 'Created Time',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      hide: false
    },
    {
      field: 'grnNo',
      headerName: 'Refered GRN',
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
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'debitCreditTo',
      headerName: 'Debit From / Credit To',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'payReceivedFrom',
      headerName: 'Received From / Pay To',
      flex: 1,
      minWidth: 150,
      align: 'center',
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
      field: 'sellerName',
      headerName: 'Seller Name',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'address',
      headerName: 'Seller Address',
      flex: 1,
      minWidth: 250,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: Address) => (value ? formatAddress(value) : ''),
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
      headerName: 'Alt Contact No',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'purpose',
      headerName: 'Purpose',
      flex: 1,
      minWidth: 200,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'totalAmt',
      headerName: 'Total Amount',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: number) => (value ? `${Number(value)} Rs.` : ''),
    },
    {
      field: 'amtWords',
      headerName: 'Amount in Words',
      flex: 1,
      minWidth: 200,
      align: 'center',
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
      field: "receiverName",
      headerName: "Receiver Name",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
    },
    {
      field: "kyc",
      headerName: "KYC",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: boolean) => value === true ? 'Yes' : 'No',
    },
    {
      field: "remark",
      headerName: "Remark",
      flex: 1,
      minWidth: 200,
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
    },
    {
      field: 'overAllStatus',
      headerName: 'Status',
      flex: 1, minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        const status = convertInTitleCase(params.row.overAllStatus || '');
        return <Chip
          label={status}
          size="small"
          sx={{
            flex: 1,
            minWidth: 80,
            color: '#FFF',
            backgroundColor: getDocStatusColor(params.row.overAllStatus || '')
          }} />
      },
    },
    ...(canEdit
      ? [
        {
          field: 'edit',
          headerName: 'Edit',
          flex: 1,
          minWidth: 70,
          sortable: false,
          filterable: false,
          isMobileVisible: true,
          renderCell: (params: GridRenderCellParams) => (
            <EditIconBtn
              onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_PACKING_MATERIAL_VOUCHER}/${params.row.id}`)}
            />
          ),
        },
      ]
      : []),
    ...(canView
      ? [
        {
          field: 'view',
          headerName: 'View',
          flex: 1,
          minWidth: 70,
          sortable: false,
          filterable: false,
          isMobileVisible: true,
          renderCell: (params: GridRenderCellParams) => (
            <ViewIconBtn
              onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_PACKING_MATERIAL_VOUCHER}/${params.row.documentId}`)}
            />
          ),
        },
      ]
      : []),
  ];
};
