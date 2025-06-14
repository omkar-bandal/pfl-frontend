import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { GetFinalInvoice } from '@prime-fresh/inventory_api';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useFinalInvoiceColumns } from './final-invoice.column';
import { useGetAllFinalInvoices } from '@prime-fresh/inventory/modules';

export const FinalInvoicesTable = () => {
  const finalInvoiceColumns = useFinalInvoiceColumns();
  const {
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: finalInvoiceColumns });
  const { data, isLoading, isError, error } = useGetAllFinalInvoices();
  const finalInv = data?.data ? data.data : [];
  console.log(data);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Final Invoices" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="final-invoice-col-def"
            columns={finalInvoiceColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetFinalInvoice>
        mode="client"
        loading={isLoading}
        rows={finalInv}
        columns={finalInvoiceColumns}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
