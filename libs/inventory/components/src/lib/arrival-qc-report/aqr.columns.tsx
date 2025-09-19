import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';

export const aqrColumns: CustomGridColDef[] = [
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
    field: 'supplierName',
    headerName: 'Supplier Name',
    hide: false,
    flex: 1,
    minWidth: 200,
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'supplierLocation',
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
    field: 'arrivalDate',
    headerName: 'Arrival Date',
    flex: 1,
    minWidth: 100,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'arrivedQty',
    headerName: 'Arrived Quantity',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    isMobileVisible: true,
    valueGetter: (value: number) => (value ? value : 0),
  },
  {
    field: 'samplingQty',
    headerName: 'Sampling Quantity',
    hide: false,
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    valueGetter: (value: number) => (value ? value : 0),
  },
  {
    field: 'qcCheckBy',
    headerName: 'QC Checked By',
    flex: 1,
    minWidth: 150,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value : '-'),
  },
  {
    field: 'remark',
    headerName: 'Remark',
    headerAlign: 'center',
    flex: 1,
    minWidth: 300,
    hide: true,
    valueGetter: (value: string) => (value ? value : '-'),
  },
];
