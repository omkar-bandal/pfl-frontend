import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';

export const secondSaleRegisterColumns: CustomGridColDef[] = [
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
    field: 'createdBy',
    headerName: 'Created By',
    flex: 1,
    minWidth: 120,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
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
    field: 'companyName',
    headerName: 'Company',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'location',
    headerName: 'Location',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'saleDate',
    headerName: 'Sale Date',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'buyerName',
    headerName: 'Buyer Name',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'buyerMobNo',
    headerName: 'Buyer Mob No',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'reasonForSale',
    headerName: 'Reason For Sale',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'totalNetWeight',
    headerName: 'Total Net Weight',
    flex: 1,
    minWidth: 120,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: number) => (value ? `${Number(value)} Kg` : '-'),
    hide: false,
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
    field: 'approvedBy',
    headerName: 'Approved By',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
];
