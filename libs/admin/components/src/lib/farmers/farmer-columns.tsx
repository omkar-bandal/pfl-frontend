import { useMemo } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Download } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Address } from '@prime-fresh/admin_api';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { convertInTitleCase, downloadDoc, formatAddress } from '@prime-fresh/shared/modules';

export const useFarmerColumns = (): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        type: 'string',
        field: 'farmerCode',
        headerName: 'Farmer Code',
        headerAlign: 'center',
        minWidth: 130,
        isMobileVisible: true,
        hide: false,
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
      {
        field: 'downloadAttachments',
        headerName: 'Attachments',
        headerAlign: 'center',
        width: 70,
        sortable: false,
        filterable: false,
        hide: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="download" onClick={() => downloadDoc(params.row.idProofCopy)}>
            <Download color="secondary" />
          </IconButton>
        ),
      },
      // {
      //   field: 'edit',
      //   headerName: 'Edit',
      //   headerAlign: 'center',
      //   width: 70,
      //   sortable: false,
      //   filterable: false,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.EDIT_FARMER}/${params.row.id}`)}>
      //       <Edit color="secondary" />
      //     </IconButton>
      //   ),
      // },
      // {
      //   field: 'view',
      //   headerName: 'View',
      //   headerAlign: 'center',
      //   width: 70,
      //   sortable: false,
      //   filterable: false,
      //   isMobileVisible: true,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_FARMER}/${params.row.id}`)}>
      //       <Preview color="primary" />
      //     </IconButton>
      //   ),
      // },
    ],
    []
  );
};
