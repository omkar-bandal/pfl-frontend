import { GridRenderCellParams } from '@mui/x-data-grid';
import { Address } from '@prime-fresh/common_api';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { formatAddress } from '@prime-fresh/shared/modules';
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from '@prime-fresh/ui_shared';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useVehicleDispatchRegisterColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        field: 'companyName',
        type: 'string',
        headerName: 'Company',
        width: 200,
        headerAlign: 'center',
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
        field: 'vehicleNo',
        type: 'string',
        headerName: 'Vehicle No',
        width: 150,
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'vehicleType',
        type: 'string',
        headerName: 'Vehicle No',
        width: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'driverName',
        type: 'string',
        headerName: 'Driver Name',
        width: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'driverMobNo',
        type: 'string',
        headerName: 'Driver Mob No',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'paymentDiscussed',
        type: 'number',
        headerName: 'Payment Discussed',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'transportationBillAmt',
        type: 'number',
        headerName: 'Transportation Bill Amount',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'advancePaid',
        type: 'number',
        headerName: 'Advance Paid Amount',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'clientName',
        type: 'string',
        headerName: 'Client Name',
        width: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'clientAddress',
        headerName: 'Client Address',
        width: 200,
        headerAlign: 'center',
        valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        field: 'receivingPerson',
        type: 'string',
        headerName: 'Receiving Person',
        width: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'outTime',
        type: 'string',
        headerName: 'Out Time',
        width: 100,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'reachingTime',
        type: 'string',
        headerName: 'Reaching Time',
        width: 100,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'netInwardQty',
        type: 'number',
        headerName: 'Net Inward Qty',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'rejection',
        type: 'number',
        headerName: 'Rejection',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'shrinkageDump',
        type: 'number',
        headerName: 'Shrinkage Dump',
        width: 100,
        align: 'center',
        headerAlign: 'center',
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
                  onClick={() =>
                    navigate(`${inventoryRouteConstants.UPDATE_VEHILCE_DISPATCH_REGISTER}/${params.row.id}`)
                  }
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
                  onClick={() => navigate(`${inventoryRouteConstants.VIEW_VEHILCE_DISPATCH_REGISTER}/${params.row.id}`)}
                />
              ),
            },
          ]
        : []),
    ],
    [canEdit, canView, navigate]
  );
};
