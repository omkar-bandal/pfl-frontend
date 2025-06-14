import { GridRenderCellParams } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useDumpRegisterColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(
    () => [
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 130,
        align: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'createdTime',
        headerName: 'Created Time',
        width: 130,
        align: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'companyName',
        headerName: 'Company',
        width: 200,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'location',
        headerName: 'Location',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'date',
        headerName: 'Date',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'batchNo',
        headerName: 'Batch No',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      ...(canEdit
        ? [
            {
              field: 'edit',
              headerName: 'Edit',
              width: 70,
              sortable: false,
              filterable: false,
              isMobileVisible: true,
              renderCell: (params: GridRenderCellParams) => (
                <EditIconBtn
                  onClick={() => navigate(`${inventoryRouteConstants.UPDATE_DUMP_REGISTER}/${params.row.id}`)}
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
              width: 70,
              sortable: false,
              filterable: false,
              isMobileVisible: true,
              renderCell: (params: GridRenderCellParams) => (
                <ViewIconBtn
                  onClick={() => navigate(`${inventoryRouteConstants.VIEW_DUMP_REGISTER}/${params.row.id}`)}
                />
              ),
            },
          ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
