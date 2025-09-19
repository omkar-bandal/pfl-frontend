import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { convertInTitleCase, getDocStatusColor, reverseDateString } from '@prime-fresh/shared/modules';

export const dealSlipColumns: CustomGridColDef[] = [
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
    field: 'dealSlipNo',
    headerName: 'Deal Slip No',
    minWidth: 150,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    isMobileVisible: true,
    hide: false,
    valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
  },
  // {
  //   field: 'createdBy',
  //   headerName: 'Created By',
  //   flex: 1,
  //   minWidth: 120,
  //   align: 'center',
  //   headerAlign: 'center',
  //   hide: false,
  //   valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
  // },
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
  //   field: 'rfpa',
  //   headerName: 'Refered RFPA',
  //   minWidth: 120,
  //   flex: 1,
  // },
  {
    field: 'loadingLocation',
    headerName: 'Loading Location',
    minWidth: 150,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
  {
    field: 'lotNo',
    headerName: 'Lot Number',
    minWidth: 150,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    hide: false,
    valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
  },
  {
    field: 'remark',
    headerName: 'Remarks',
    minWidth: 200,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    hide: true,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
  {
    field: 'specialRequest',
    headerName: 'Special Request',
    minWidth: 200,
    flex: 1,
    align: 'center',
    headerAlign: 'center',
    hide: true,
    valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
  },
];
