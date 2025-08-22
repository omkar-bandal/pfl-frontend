import React, { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  Select,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useStockColumns } from './stock.columns';
import { useGetStockByAccessLoc } from '@prime-fresh/inventory/modules';
import { IStockData } from '@prime-fresh/inventory_api';
import { mapToValueLabelArray, useGetBranchesPartialData } from '@prime-fresh/shared/modules';
import { authState, useAppSelector } from '@prime-fresh/modules';

export const StockTable = () => {
  const {loggedInUserInfo} = useAppSelector(authState);
  console.log('logged in user work location', loggedInUserInfo?.currentWorkLocation);
  const [locationId, setLocationId] = useState<string>(loggedInUserInfo?.currentWorkLocation || '');
  const stockColumns = useStockColumns();
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

  const { data, isLoading, isError, error } = useGetStockByAccessLoc(locationId)
  console.log('Stock Data: ', data?.data);
  // const stockData = data?.data
  //   ? data.data.map((item, index) => ({
  //     ...item,
  //     id: `uniqueId-${index}`,
  //   }))
  //   : null;
  //   const rowCountRef = React.useRef(stockData?.allRecords || 0);
  //   const rowCount = React.useMemo(() => {
  //     if (stockData?.allRecords !== undefined) {
  //       rowCountRef.current = stockData.allRecords;
  //     }
  //     return rowCountRef.current;
  //   }, [stockData]);
  // console.log(stockData);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const {data: loc} = useGetBranchesPartialData();
  const branches = loc?.data ? mapToValueLabelArray(loc?.data, 'id', 'name') : [];
  console.log(branches);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Main Stock" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <Select
            name='locId'
            label='Location'
            options={branches}
            value={locationId}
            onChange={e => setLocationId(e.target.value)}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 2 }}
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
      <DataGridTable<IStockData>
        loading={isLoading}
        rows={data?.data || []}
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
