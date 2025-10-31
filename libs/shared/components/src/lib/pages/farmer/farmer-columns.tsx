import { useMemo } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Download, Edit, Preview } from '@mui/icons-material';
import { Chip, IconButton, Theme, useTheme } from '@mui/material';
import { Address } from '@prime-fresh/services';
import { CustomGridColDef } from '../../components';
import { convertInTitleCase, downloadDoc, formatAddress, sharedRoutes } from '@prime-fresh/shared/modules';
import { NavigateFunction } from 'react-router-dom';

export const useFarmerColumns = (theme: Theme, navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => {
          const status = convertInTitleCase(params.row.status || '');
          return (
            <Chip
              label={status}
              size="small"
              sx={{
                flex: 1,
                minWidth: 80,
                color: '#FFF',
                backgroundColor:
                  params.row.status === 'pending'
                    ? theme.palette.warning.main
                    : params.row.status === 'approved'
                    ? theme.palette.success.main
                    : params.row.status === 'notApproved'
                    ? theme.palette.error.main
                    : theme.palette.warning.main,
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
        type: 'string',
        field: 'farmerCode',
        headerName: 'Farmer Code',
        headerAlign: 'center',
        minWidth: 130,
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => value ? value.toUpperCase() : '',
      },
      {
        type: 'string',
        field: 'farmerName',
        headerName: 'Farmer Name',
        headerAlign: 'center',
        minWidth: 200,
        flex: 1,
        isMobileVisible: true,
        hide: false,
        valueGetter: (value, row) => {
          return convertInTitleCase(`${row.farmerfName || ''} ${row.farmermName || ''} ${row.farmerlName || ''}`);
        },
      },
      {
        type: 'string',
        field: 'farmAddress',
        headerAlign: 'center',
        headerName: 'Farm Address',
        minWidth: 400,
        flex: 1,
        hide: false,
        valueGetter: (value: Address) => (value ? formatAddress(value) : ''),
      },
      {
        type: 'string',
        field: 'residensialAddress',
        headerName: 'Residential Address',
        headerAlign: 'center',
        minWidth: 400,
        flex: 1,
        hide: false,
        valueGetter: (value: Address) => (value ? formatAddress(value) : ''),
      },
      {
        type: 'string',
        field: 'primaryMobileNo',
        headerName: 'Contact No',
        headerAlign: 'center',
        align: 'center',
        minWidth: 130,
        flex: 1,
        hide: false,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        type: 'string',
        field: 'landHoldingStatus',
        headerName: 'Land Holding Status',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        type: 'string',
        field: 'landStatus',
        headerName: 'Land Status',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        field: 'cultivationArea',
        headerName: 'Cultivation Area',
        headerAlign: 'center',
        align: 'center',
        width: 120,
        hide: true,
        valueGetter: (value: number) => (value ? `${Number(value).toFixed(2)} Acres` : 0),
      },
      {
        type: 'number',
        field: 'totalLandArea',
        headerName: 'Farm Area (Total)',
        headerAlign: 'center',
        align: 'center',
        width: 150,
        hide: true,
        valueGetter: (value: number) => (value ? `${Number(value).toFixed(2)} Acres` : 0),
      },
      // {
      //   field: "farmerGrading",
      //   headerName: "Grade",
      //   width: 100,
      // },
      {
        type: 'string',
        field: 'secondaryMobileNo',
        headerName: 'Alternate Contact No',
        headerAlign: 'center',
        align: 'center',
        minWidth: 130,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        type: 'string',
        field: 'email',
        headerName: 'Email',
        headerAlign: 'center',
        align: 'center',
        minWidth: 150,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        type: 'string',
        field: 'gender',
        headerName: 'Gender',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
      },
      {
        type: 'string',
        field: 'dob',
        headerName: 'Birth Date',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? value : ''),
      },
      {
        type: 'string',
        field: 'idProofNo',
        headerAlign: 'center',
        headerName: 'Aadhar / PAN /License No.',
        align: 'center',
        minWidth: 100,
        flex: 1,
        hide: true,
        valueGetter: (value: string) => (value ? value.toUpperCase() : ''),
      },
      // {
      //   field: 'downloadAttachments',
      //   headerName: 'Attachments',
      //   headerAlign: 'center',
      //   width: 70,
      //   sortable: false,
      //   filterable: false,
      //   hide: true,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <IconButton aria-label="download" onClick={() => downloadDoc(params.row.idProofCopy)}>
      //       <Download color="secondary" />
      //     </IconButton>
      //   ),
      // },
      {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        width: 70,
        sortable: false,
        filterable: false,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.UPDATE_FARMER}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        headerAlign: 'center',
        width: 70,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="view" onClick={() => navigate(`${sharedRoutes.VIEW_A_FARMER}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [theme, navigate]
  );
};
