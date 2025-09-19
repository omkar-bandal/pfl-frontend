import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';

export const eodReportColumns : CustomGridColDef[] = [
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
        minWidth: 200,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
        hide: false,
      },
      {
        field: 'location',
        headerName: 'Location',
        minWidth: 100,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'date',
        headerName: 'Date',
        minWidth: 100,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'submission',
        headerName: 'Submission',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'comments',
        headerName: 'Comments',
        flex: 1,
        minWidth: 300,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        isMobileVisible: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
    ];