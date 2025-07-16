import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const useTPVoucherColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();

  return [
    {
      field: 'voucherNo',
      headerName: 'Voucher No',
      flex: 1,
      minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'createdDate',
      headerName: 'Created Date',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'createdTime',
      headerName: 'Created Time',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'companyName',
      headerName: 'Company Name',
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'location',
      headerName: 'Location',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'debitCreditTo',
      headerName: 'Debit From / Credit To',
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'payReceivedFrom',
      headerName: 'Received From / Pay To',
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'driverName',
      headerName: 'Driver',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'contactNo',
      headerName: 'Contact No',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'altContactNo',
      headerName: 'Alt Contact No',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'vehicleNo',
      headerName: 'Vehicle No',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'dispatchLocation',
      headerName: 'Dispatch Location',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'destinationLocation',
      headerName: 'Destination Location',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'paymentMode',
      headerName: 'Payment Mode',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'freightAmt',
      headerName: 'Freight Amount',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? `${Number(value)} Rs.` : ''),
    },
    {
      field: 'totalAmt',
      headerName: 'Total Amount',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? `${Number(value)} Rs.` : ''),
    },
    {
      field: 'amtWords',
      headerName: 'Amount In Words',
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'grnNo',
      headerName: 'Reference GRN',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'receiverName',
      headerName: 'Receiver Name',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'kyc',
      headerName: 'KYC',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: boolean) => (value === true ? 'Yes' : 'No'),
    },
    {
      field: 'remark',
      headerName: 'Remark',
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'approvalStatus',
      headerName: 'Status',
      flex: 1,
      minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.approvalStatus) {
          case 'pending':
            return (
              <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ flex: 1, minWidth: 80 }} />
            );
          case 'approved':
            return <Chip label="Approved" color="info" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          case 'rejected':
            return <Chip label="Not Approved" color="error" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          default:
            return <Chip label="pending" color="error" size="small" />;
        }
      },
    },
    {
      field: 'approvalNote',
      headerName: 'Reason',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => {
        if (value === null) return '';
        else return value;
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
                onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_TRANSPORT_CASH_VOUCHER}/${params.row.id}`)}
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
                onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_TRANSPORT_CASH_VOUCHER}/${params.row.documentId}`)}
              />
            ),
          },
        ]
      : []),
  ];
};
