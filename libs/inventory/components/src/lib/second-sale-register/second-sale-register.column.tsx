import { Chip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { convertInTitleCase, getDocStatusColor } from '@prime-fresh/shared/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSecondSaleRegisterColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
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
        valueGetter: (value: string) => value ? value : '-',
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
              <ViewIconBtn onClick={() => navigate(`${inventoryRouteConstants.VIEW_SECOND_SALE_REGISTER}/${params.row.documentId}`)} />
            )
          },
        ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
