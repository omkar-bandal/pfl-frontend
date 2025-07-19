import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEODReportColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(
    () => [
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
          const status = convertInTitleCase(params.row.overAllStatus);
          return <Chip label={status} size="small" sx={{ flex: 1, minWidth: 80, color: '#FFF', backgroundColor: getDocStatusColor(params.row.overAllStatus) }} />
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
                onClick={() => navigate(`${inventoryRouteConstants.UPDATE_EOD_REPORT}/${params.row.id}`)}
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
              <ViewIconBtn onClick={() => navigate(`${inventoryRouteConstants.VIEW_EOD_REPORT}/${params.row.documentId}`)} />
            ),
          },
        ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
