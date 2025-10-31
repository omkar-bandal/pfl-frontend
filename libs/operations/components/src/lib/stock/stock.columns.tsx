import { GridRenderCellParams } from "@mui/x-data-grid";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/shared/components";
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
        hide: false,
        renderCell: (params: GridRenderCellParams) => {
          return `${convertInTitleCase(params.row.productName)}  (Origin: ${params.row.origin || '-'}, Variety: ${params.row.variety || '-'}, Size: ${params.row.size || '-'}, Count: ${params.row.count || '-'})`
        },
      },
      {
        field: 'inwardQty',
        headerName: 'Inwarded Qty (Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'inwardAmt',
        headerName: 'Inwarded Amt (Rs)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'purchaseQty',
        headerName: 'Purchased Qty(Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'purchaseAmt',
        headerName: 'Purchased Amt (Rs)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'rtvQty',
        headerName: 'RTV Based Qty(Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'rtvAmt',
        headerName: 'RTV Based Amt (Rs)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'nonRtvQty',
        headerName: 'Non-RTV Based Qty(Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'nonRtvAmt',
        headerName: 'Non-RTV Based Amt (Rs)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'dumpQty',
        headerName: 'Dump Qty(Kg)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
      {
        field: 'dumpAmt',
        headerName: 'Dump Amt (Rs)',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : 0),
      },
    ],
    []
  );
};
