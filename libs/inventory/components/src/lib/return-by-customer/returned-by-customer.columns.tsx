import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Chip } from '@mui/material';

export const returedByCustomerColumns: CustomGridColDef[] = [
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
    field: 'deliveryChallanNo',
    headerName: 'Challan No',
    minWidth: 150,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    isMobileVisible: true,
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'date',
    headerName: 'Date',
    minWidth: 150,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    isMobileVisible: true,
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    minWidth: 250,
    flex: 1,
    headerAlign: 'center',
    isMobileVisible: true,
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'remark',
    headerName: 'Remark',
    minWidth: 400,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    isMobileVisible: true,
    hide: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
];
