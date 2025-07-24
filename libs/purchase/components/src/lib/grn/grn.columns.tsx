/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip, IconButton } from '@mui/material';
import { AddCard } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase, getDocStatusColor, reverseDateString } from '@prime-fresh/shared/modules';

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
      hide: false,
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
      field: 'grnType',
      headerName: 'GRN Type',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      isMobileVisible: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      hide: true,
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
      hide: true,
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
      hide: true,
    },
    {
      field: 'companyName',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
      hide: false,
    },
    {
      field: 'purchaseLocation',
      headerName: 'Location',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
      hide: false,
    },
    {
      field: 'purchaseForSalesLocation',
      headerName: 'Destination',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
      hide: false,
    },
    {
      field: 'billNo',
      headerName: 'Bill Number',
      flex: 1,
      minWidth: 130,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      hide: true,
    },
    {
      field: 'source',
      headerName: 'Source',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? value : '-'),
      hide: false,
    },
    // {
    //   field: 'grnProducts',
    //   headerName: 'Products',
    //   flex: 1, 
    //   minWidth: 200,
    //   headerAlign: 'center',
    //   renderCell: (params: GridRenderCellParams) => {
    //     const grnProducts = params.row.grnProducts.map((p: any) => p.productName);
    //     return convertInTitleCase((grnProducts || []).join(', '));
    //   },
    // },
    {
      field: 'subTotalAmt',
      headerName: 'Subtotal Amount',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
      hide: true,
    },
    {
      field: 'freight',
      headerName: 'Freight',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
      hide: true,
    },
    {
      field: 'otherCharges',
      headerName: 'Other Charges',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (value: number) => (value ? `${Number(value)} Rs` : '-'),
      hide: true,
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
      field: 'amtWords',
      headerName: 'Amount In Words',
      flex: 1,
      minWidth: 180,
      headerAlign: 'center',
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
      hide: true,
    },
    {
      field: 'paymentMode',
      headerName: 'Payment Mode',
      minWidth: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      hide: true,
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
      hide: true,
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
      hide: true,
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
      hide: true,
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
      hide: true,
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
      hide: true,
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
      hide: true,
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
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'deliveryReceivingPerson',
      headerName: 'Delivery Receiving Person',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'receivedThrough',
      headerName: 'Received Through',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'vehicleNo',
      headerName: 'Vehicle No',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
    },
    {
      field: 'timeIn',
      headerName: 'Time In',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'cratesIn',
      headerName: 'Crates In',
      flex: 1,
      minWidth: 100,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? value : ''),
    },
    {
      field: 'securityPerson',
      headerName: 'Security Person',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'rmn',
      headerName: 'RM Name',
      flex: 1,
      minWidth: 150,
      align: 'center',
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'remark',
      headerName: 'Remark',
      flex: 1,
      minWidth: 250,
      headerAlign: 'center',
      hide: true,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: 'payment_req',
      headerName: 'Payment Request',
      flex: 1, minWidth: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      hide: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          aria-label="payment_req"
          onClick={() => navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${params.row.id}`)}
        >
          <AddCard color="info" />
        </IconButton>
      ),
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
          renderCell: (params: GridRenderCellParams) => {
            console.log('Document ID in column:', params.row.documentId);
            return <ViewIconBtn onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_GRN}/${params.row.documentId}`)} />
          },
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
