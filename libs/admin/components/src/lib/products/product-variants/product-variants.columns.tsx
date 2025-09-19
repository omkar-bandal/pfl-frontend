import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useProductVariantsColumns = (): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'variantCode',
        headerName: 'Product Code',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        field: 'count',
        headerName: 'Count',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'size',
        headerName: 'Size',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'variety',
        headerName: 'Variety',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'origin',
        headerName: 'Origin',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'brand',
        headerName: 'Brand',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'thresholdStock',
        headerName: 'Threshold Quantity (Kg)',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: number) => (value ? value : '-'),
      },
    ], []
)}