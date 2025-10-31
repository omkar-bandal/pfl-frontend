import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { Chip, IconButton } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { Edit, Preview } from '@mui/icons-material';
import { operationsRoutes } from '@prime-fresh/operations/modules';
import { convertInTitleCase, formatAddress, getDocStatusColor } from '@prime-fresh/shared/modules';
import { Address } from '@prime-fresh/services';

export const useVehicleDispatchRegisterColumns = (
  canEdit: boolean,
  canView: boolean,
  navigate: NavigateFunction
): CustomGridColDef[] => {
  return useMemo(
    () => [
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
        field: 'vehicleNo',
        type: 'string',
        headerName: 'Vehicle No',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'vehicleType',
        type: 'string',
        headerName: 'Vehicle No',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'driverName',
        type: 'string',
        headerName: 'Driver Name',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'driverMobNo',
        type: 'string',
        headerName: 'Driver Mob No',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'paymentDiscussed',
        type: 'number',
        headerName: 'Payment Discussed',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'transportationBillAmt',
        type: 'number',
        headerName: 'Transportation Bill Amount',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'advancePaid',
        type: 'number',
        headerName: 'Advance Paid Amount',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'clientName',
        type: 'string',
        headerName: 'Client Name',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'clientAddress',
        headerName: 'Client Address',
        flex: 1,
        minWidth: 200,
        headerAlign: 'center',
        valueGetter: (value: Address) => (value ? formatAddress(value) : '-'),
      },
      {
        field: 'receivingPerson',
        type: 'string',
        headerName: 'Receiving Person',
        flex: 1,
        minWidth: 150,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'outTime',
        type: 'string',
        headerName: 'Out Time',
        flex: 1,
        minWidth: 100,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'reachingTime',
        type: 'string',
        headerName: 'Reaching Time',
        flex: 1,
        minWidth: 100,
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'netInwardQty',
        type: 'number',
        headerName: 'Net Inward Qty',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'rejection',
        type: 'number',
        headerName: 'Rejection',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'shrinkageDump',
        type: 'number',
        headerName: 'Shrinkage Dump',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'edit',
        hide: !canEdit,
        headerName: 'Edit',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 70,
        hideable: false,
        sortable: false,
        filterable: false,
        disableExport: true,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="edit"
            color="info"
            disabled={params.row.overAllStatus === 'COMPLETE' || params.row.overAllStatus === 'REJECT' ? true : false}
            onClick={() => navigate(`${operationsRoutes.UPDATE_VEHILCE_DISPATCH_REGISTER}/${params.row.id}`)}
          >
            <Edit />
          </IconButton>
        ),
      },
      {
        field: 'view',
        hide: !canView,
        headerName: 'View',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 70,
        hideable: false,
        sortable: false,
        filterable: false,
        disableExport: true,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="view"
            color="success"
            onClick={() => navigate(`${operationsRoutes.VIEW_A_VEHILCE_DISPATCH_REGISTER}/${params.row.documentId}`)}
          >
            <Preview />
          </IconButton>
        ),
      },
    ],
    [navigate, canEdit, canView]
  );
};
