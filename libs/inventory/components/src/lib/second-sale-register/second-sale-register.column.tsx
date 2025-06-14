import { GridRenderCellParams } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSecondSaleRegisterColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      // {
      //   field: 'location',
      //   headerName: 'Location',
      //   flex: 1,
      //   minWidth: 100,
      //   align: 'center',
      //   headerAlign: 'center',
      //   isMobileVisible: true,
      //   valueGetter: (value: string) => {
      //     return value ? value : '-';
      //   },
      // },
      {
        field: 'saleDate',
        headerName: 'Sale Date',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
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
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'reasonForSale',
        headerName: 'Reason For Sale',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'approvedBy',
        headerName: 'Approved By',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
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
                  onClick={() => navigate(`${inventoryRouteConstants.UPDATE_SECOND_SALE_REGISTER}/${params.row.id}`)}
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
                <ViewIconBtn
                  onClick={() => navigate(`${inventoryRouteConstants.VIEW_SECOND_SALE_REGISTER}/${params.row.id}`)}
                />
              ),
            },
          ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
