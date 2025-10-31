import { Box, Grid2 } from '@mui/material';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  useDataTableFunctions,
  useErrorHandler,
} from '@prime-fresh/shared/components';
import { useFinalInvoiceColumns } from './final-invoice.column';
import { dataTableIds, useGetAllFinalInvoices } from '@prime-fresh/operations/modules';
import { GetFinalInvoice } from '@prime-fresh/services';

export const FinalInvoicesTable = () => {
  const finalInvoiceColumns = useFinalInvoiceColumns();
  const tableConfig = useDataTableFunctions({
    columnDef: finalInvoiceColumns,
    initialPageSize: 10,
    tableId: dataTableIds.FINAL_INV_TABLE_ID,
  });
  const { data, isLoading, isError, error } = useGetAllFinalInvoices();
  const finalInv = data?.data ? data.data : [];
  console.log(data);
  useErrorHandler(isError, error);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Final Invoices" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <ColumnSettingButton handleClick={tableConfig.openColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="final-invoice-col-def"
            columns={finalInvoiceColumns}
            columnVisibilityModel={tableConfig.columnVisibilityModel}
            displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
            closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
            onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetFinalInvoice>
        mode="client"
        loading={isLoading}
        rows={finalInv}
        columns={finalInvoiceColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
      />
    </Box>
  );
};
