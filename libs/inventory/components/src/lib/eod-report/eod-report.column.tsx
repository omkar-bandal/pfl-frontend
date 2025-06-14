import { GridRenderCellParams } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEODReportColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(
    () => [
      {
        field: 'location',
        headerName: 'Location',
        minWidth: 200,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'date',
        headerName: 'Date',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
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
        isMobileVisible: false,
        valueGetter: (value: string) => (value ? value : '-'),
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
                <ViewIconBtn onClick={() => navigate(`${inventoryRouteConstants.VIEW_EOD_REPORT}/${params.row.id}`)} />
              ),
            },
          ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
