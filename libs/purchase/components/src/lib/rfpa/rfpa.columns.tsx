/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { convertInTitleCase, getDocStatusColor, reverseDateString } from '@prime-fresh/shared/modules';

export const rfpaColumns: CustomGridColDef[] = [
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
    field: 'rfpaId',
    headerName: 'RFPA Number',
    flex: 1,
    minWidth: 130,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
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
  // {
  //   field: 'requestedBy',
  //   headerName: 'Requested By',
  //   flex: 1, minWidth: 150,
  //   align: 'center',
  //   headerAlign: 'center',
  //   valueGetter: (value: RequestedBy) =>
  //     value ? `${value.firstName || ''} ${value.lastName || ''}` : '',
  // },
  {
    field: 'companyName',
    headerName: 'Company',
    flex: 1,
    minWidth: 200,
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value : ''),
  },
  {
    field: 'purchaseLocation',
    headerName: 'Location',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
  {
    field: 'purchaseForSalesLocation',
    headerName: 'Destination',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
  {
    field: 'source',
    headerName: 'Source',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
  // {
  //   field: 'rfpaProducts',
  //   headerName: 'Products',
  //   minWidth: 200,
  //   flex: 1,
  //   headerAlign: 'center',
  //   renderCell: (params: GridRenderCellParams) => {
  //     const rfpaProducts = params.row.rfpaProducts.map((p: any) => p.productName)
  //     return convertInTitleCase((rfpaProducts || []).join(', '));
  //   }
  // },
  {
    field: 'paymentMode',
    headerName: 'Payment Mode',
    minWidth: 120,
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
    minWidth: 120,
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
    minWidth: 120,
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
    minWidth: 120,
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
    field: 'packingInstruction',
    headerName: 'Packing Instruction',
    flex: 1,
    minWidth: 250,
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
];
