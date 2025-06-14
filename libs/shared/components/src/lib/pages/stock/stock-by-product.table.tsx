import React from 'react';
import { Box, Grid2 } from '@mui/material';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { convertInTitleCase, useGetStockProductWise } from '@prime-fresh/shared/modules';
import { GetStockProductWise } from '@prime-fresh/common_api';
import { useParams } from 'react-router-dom';
import { useStockProductWiseColumns } from './stock-by-product.columns';

export const StockProductWiseTable = () => {
  const { product, location, companyName } = useParams<{ product: string, location: string, companyName: string }>();
  const productName = product ? product : '';
  const locationName = location ? location : '';
  const company = companyName ? companyName : '';
  const stockColumns = useStockProductWiseColumns();
  const {
    // paginationModel,
    // sortModel,
    // handleSortingChange,
    // handlePaginationChange,
    // queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: stockColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } =
    useGetStockProductWise(productName, locationName, company);
  const stockData = data?.data
    ? data.data.map((item, index) => ({
        ...item,
        id: `uniqueId-${index}`,
      }))
    : null;
  //   const rowCountRef = React.useRef(stockData?.allRecords || 0);
  //   const rowCount = React.useMemo(() => {
  //     if (stockData?.allRecords !== undefined) {
  //       rowCountRef.current = stockData.allRecords;
  //     }
  //     return rowCountRef.current;
  //   }, [stockData]);
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
          <PageTitle pagetitle={`Product: ${convertInTitleCase(productName)}`} />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="stock-col-def"
            columns={stockColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetStockProductWise>
        loading={isLoading}
        rows={stockData || []}
        columns={stockColumns}
        mode="client"
        // initialPageSize={10}
        // totalRows={rowCount}
        // paginationModel={paginationModel}
        // onPaginationModelChange={handlePaginationChange}
        // sortModel={sortModel}
        // onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
