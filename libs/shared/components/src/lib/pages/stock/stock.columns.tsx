import { useMemo } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { ChevronRight, Preview } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CustomGridColDef } from '../../components';
import { convertInTitleCase, sharedRoutes } from '@prime-fresh/shared/modules';

export const useStockColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(
    () => [
      {
        field: 'companyname',
        headerName: 'Company Name',
        flex: 1,
        minWidth: 250,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'name',
        headerName: 'Location',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) =>
          value ? convertInTitleCase(value) : '-',
      },
      // {
      //     field: "createdDate",
      //     headerName: "Created Date",
      //     width: 120,
      //     align: "center",
      //     headerAlign: "center"
      // },
      // {
      //     field: "createdTime",
      //     headerName: "Created Time",
      //     width: 120,
      //     align: "center",
      //     headerAlign: "center"
      // },
      // {
      //   field: 'product',
      //   headerName: 'Product',
      //   width: 150,
      //   align: 'center',
      //   headerAlign: 'center',
      //   valueGetter: (value: string) =>
      //     value ? convertInTitleCase(value) : '-',
      // },
      // {
      //   field: 'varients',
      //   headerName: 'Product Variant',
      //   width: 200,
      //   align: 'center',
      //   headerAlign: 'center',
      //   valueGetter: (value: string) =>
      //     value ? convertInTitleCase(value) : '-',
      // },
      {
        field: 'onHandQty',
        headerName: 'Quantity (Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'amount',
        headerName: 'Amount (Rs.)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'details',
        headerName: 'Details',
        align: 'center',
        headerAlign: 'center',
        width: 80,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="details"
            onClick={() =>
              navigate(`${sharedRoutes.GET_STOCK_BY_LOCATION}/${params.row.name}/${params.row.companyname}`)
            }
          >
            <ChevronRight color="primary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
