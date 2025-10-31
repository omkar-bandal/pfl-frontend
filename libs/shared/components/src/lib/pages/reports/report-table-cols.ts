import { ColumnDef } from '../../components';

export const registrationReportCols: ColumnDef<any>[] = [
  { key: 'title', label: '', align: 'left' },
  { key: 'pending', label: 'Pending', align: 'center' },
  { key: 'approved', label: 'Approved', align: 'center' },
  { key: 'notApproved', label: 'Not Approved', align: 'center' },
  { key: 'total', label: 'Total', align: 'center' },
];

export const documentReportCols: ColumnDef<any>[] = [
  { key: 'title', label: 'Document', align: 'left' },
  { key: 'hold', label: 'Pending', align: 'center' },
  { key: 'approved', label: 'Approved', align: 'center' },
  { key: 'rejected', label: 'Not Approved', align: 'center' },
  { key: 'complete', label: 'Complete', align: 'center' },
  { key: 'total', label: 'Total', align: 'center' },
];

export const purchaseReportCols: ColumnDef<any>[] = [
  { key: 'date', label: 'Purchase Date', align: 'center' },
  { key: 'totalQty', label: 'Quantity (Kg)', align: 'center' },
  { key: 'totalAmount', label: 'Amount (Rs)', align: 'center' },
];

export const salesReportCols: ColumnDef<any>[] = [
  { key: 'date', label: 'Sale Date', align: 'center' },
  { key: 'totalQty', label: 'Quantity (Kg)', align: 'center' },
  { key: 'totalAmount', label: 'Amount (Rs)', align: 'center' },
];
