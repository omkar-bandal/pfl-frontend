import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { useStockColumns } from './stock.columns';
import { GetStockGlobal } from '@prime-fresh/services';
import { sharedTableIds, useGetStockGlobal } from '@prime-fresh/shared/modules';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTableFunctions,
} from '../../components';

export const StockTable = () => {
  const stockColumns = useStockColumns();
  const tableConfig = useDataTableFunctions({
    columnDef: stockColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.STOCK_TABLE_ID,
  });

  const { data, isLoading, isError, error } = useGetStockGlobal(tableConfig.queryParams);
  const stockData = data ? data : null;
  const stockTableRows = stockData?.data ? stockData?.data.filter(data => data.id !== null) : [];
  const rowCountRef = React.useRef(stockData?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (stockData?.allRecords !== undefined) {
      rowCountRef.current = stockData.allRecords;
    }
    return rowCountRef.current;
  }, [stockData]);
  console.log(stockData);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="All Stock" />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <ColumnSettingButton handleClick={tableConfig.openColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="stock-col-def"
            columns={stockColumns}
            columnVisibilityModel={tableConfig.columnVisibilityModel}
            displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
            closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
            onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetStockGlobal>
        loading={isLoading}
        rows={stockTableRows}
        columns={stockColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={tableConfig.paginationModel}
        onPaginationModelChange={tableConfig.handlePaginationChange}
        sortModel={tableConfig.sortModel}
        onSortModelChange={tableConfig.handleSortingChange}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
      />
    </Box>
  );
};
