import { useMemo } from 'react';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const useStockProductWiseColumns = (): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'companyName',
        headerName: 'Company Name',
        flex: 1,
        minWidth: 250,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) => (value ? value : '-'),
      },
      {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        minWidth: 130,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: string) =>
          value ? convertInTitleCase(value) : '-',
      },
      {
        field: 'product',
        headerName: 'Product',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) =>
          value ? convertInTitleCase(value) : '-',
      },
      {
        field: 'varients',
        headerName: 'Variants',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (value: string) =>
          value ? value.toUpperCase() : '-',
      },
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
