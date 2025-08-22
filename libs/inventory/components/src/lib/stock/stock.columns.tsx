import { GridRenderCellParams } from "@mui/x-data-grid";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useStockColumns = (): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'productName',
        headerName: 'Products',
        flex: 1,
        minWidth: 500,
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams) => {
          return `${convertInTitleCase(params.row.productName)}  (Origin: ${params.row.origin || '-'}, Variety: ${params.row.variety || '-'}, Size: ${params.row.size || '-'}, Count: ${params.row.count || '-'})`
        },
      },
      // {
      //   field: 'origin',
      //   headerName: 'Origin',
      //   width: 150,
      //   align: 'center',
      //   headerAlign: 'center',
      //   valueGetter: (value: string) =>
      //     value ? convertInTitleCase(value) : '-',
      // },
      // {
      //   field: 'variety',
      //   headerName: 'Variety',
      //   width: 150,
      //   align: 'center',
      //   headerAlign: 'center',
      //   valueGetter: (value: string) =>
      //     value ? convertInTitleCase(value) : '-',
      // },
      // {
      //   field: 'count',
      //   headerName: 'Count',
      //   flex: 1,
      //   minWidth: 130,
      //   align: 'center',
      //   headerAlign: 'center',
      //   isMobileVisible: true,
      //   valueGetter: (value: string) =>
      //     value ? value : '-',
      // },
      // {
      //   field: 'size',
      //   headerName: 'Size',
      //   width: 150,
      //   align: 'center',
      //   headerAlign: 'center',
      //   valueGetter: (value: string) =>
      //     value ? value : '-',
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
    ],
    []
  );
};
