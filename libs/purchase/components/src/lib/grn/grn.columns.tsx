/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip, IconButton } from '@mui/material';
import { AddCard } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase, reverseDateString } from '@prime-fresh/shared/modules';

export const useGRNColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return [
    {
      field: 'grnNo',
      headerName: 'GRN Number',
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
      field: 'grnType',
      headerName: 'GRN Type',
      flex: 1, 
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'purchaseType',
      headerName: 'Purchase Type',
      flex: 1, 
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'locationType',
      headerName: 'Location Type',
      flex: 1, 
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'companyName',
      headerName: 'Company',
      flex: 1, 
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
    },
    {
      field: 'purchaseLocation',
      headerName: 'Location',
      flex: 1, 
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
    },
    {
      field: 'purchaseForSalesLocation',
      headerName: 'Destination',
      flex: 1, 
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
    },
    {
      field: 'billNo',
      headerName: 'Bill Number',
      flex: 1, 
      minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'source',
      headerName: 'Source',
      flex: 1, 
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
    },
    {
      field: 'grnProducts',
      headerName: 'Products',
      flex: 1, 
      minWidth: 200,
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const grnProducts = params.row.grnProducts.map((p: any) => p.productName);
        return convertInTitleCase((grnProducts || []).join(', '));
      },
    },
    {
      field: 'subTotalAmt',
      headerName: 'Subtotal Amount',
      flex: 1, 
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
    },
    {
      field: 'freight',
      headerName: 'Freight',
      flex: 1, 
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
    },
    {
      field: 'otherCharges',
      headerName: 'Other Charges',
      flex: 1, 
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
    },
    {
      field: 'totalAmt',
      headerName: 'Total Amount',
      flex: 1, 
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
    },
    {
      field: 'amtWords',
      headerName: 'Amount In Words',
      flex: 1, 
      minWidth: 180,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
    },
    {
      field: 'paymentMode',
      headerName: 'Payment Mode',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.paymentMode ? convertInTitleCase(paymentInfo.paymentMode) : '';
      },
    },
    {
      field: 'paymentTerms',
      headerName: 'Payment Terms',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.paymentTerms ? `${Number(paymentInfo.paymentTerms)} Days` : '';
      },
    },
    {
      field: 'paymentDate',
      headerName: 'Payment Date',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.paymentDate ? reverseDateString(paymentInfo.paymentDate) : '';
      },
    },
    {
      field: 'creditPeriod',
      headerName: 'Credit Period',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.creditPeriod ? `${paymentInfo.creditPeriod} Days` : '';
      },
    },
    {
      field: 'dueDate',
      headerName: 'Due Date',
      minWidth: 120,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.dueDate ? reverseDateString(paymentInfo.dueDate) : '';
      },
    },
    {
      field: 'advancePaidAmt',
      headerName: 'Advance Paid Amount',
      minWidth: 120,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.advancePaidAmt ? `${Number(paymentInfo.advancePaidAmt)} Rs.` : '';
      },
    },
    {
      field: 'validityOfQuote',
      headerName: 'Validity Of Quote',
      minWidth: 120,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        const paymentInfo = params.row.paymentInfo;
        return paymentInfo?.validityOfQuote ? paymentInfo.validityOfQuote : '';
      },
    },
    {
      field: 'purchasedBy',
      headerName: 'Purchased By',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'deliveryReceivingPerson',
      headerName: 'Delivery Receiving Person',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'receivedThrough',
      headerName: 'Received Through',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
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
      field: 'timeIn',
      headerName: 'Time In',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'cratesIn',
      headerName: 'Crates In',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'securityPerson',
      headerName: 'Security Person',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'rmn',
      headerName: 'RM Name',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'remark',
      headerName: 'Remark',
      flex: 1,
      minWidth: 250,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'approvalStatus',
      headerName: 'Status',
      flex: 1, minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.approvalStatus) {
          case 'pending':
            return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          case 'approved':
            return <Chip label={params.row.approvalStatus} color="info" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          case 'notApproved':
            return <Chip label={params.row.approvalStatus} color="error" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          default:
            return <Chip label="-" color="error" size="small" />;
        }
      },
    },
    {
      field: 'approvalNote',
      headerName: 'Reason',
      flex: 1, minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => {
        if (value === null) return '';
        else return value;
      },
    },
    {
      field: 'payment_req',
      headerName: 'Payment Request',
      flex: 1, minWidth: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          aria-label="payment_req"
          onClick={() => navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${params.row.id}`)}
        >
          <AddCard color="info" />
        </IconButton>
      ),
    },
    ...(canEdit
      ? [
          {
            field: 'edit',
            headerName: 'Edit',
            flex: 1, minWidth: 70,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
              <EditIconBtn onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_GRN}/${params.row.id}`)} />
            ),
          },
        ]
      : []),
    ...(canView
      ? [
          {
            field: 'view',
            headerName: 'View',
            flex: 1, minWidth: 70,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
              <ViewIconBtn onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_GRN}/${params.row.id}`)} />
            ),
          },
        ]
      : []),
  ];
};
// {
//     field: "requestedBy",
//     headerName: "Requested By",
//     flex: 1, minWidth: 150,
//     align: "center",
//     headerAlign: "center",
//     valueGetter: (value: RequestedBy) => value !== null ? convertInTitleCase(`${value.firstName || ''} ${value.lastName || ''}`) : "-",
// },
// {
//     field: "requestingDepartment",
//     headerName: "Department",
//     flex: 1, minWidth: 100,
//     align: "center",
//     headerAlign: "center",
// },
// {
//     field: "baseLocation",
//     headerName: "Base Location",
//     flex: 1, minWidth: 100,
//     align: "center",
//     headerAlign: "center",
// },
