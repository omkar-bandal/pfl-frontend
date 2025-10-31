import React, { useState } from 'react';
import { Box, Grid2 } from '@mui/material';
import { useStockColumns } from './stock.columns';
import { IStockData } from '@prime-fresh/services';
import { useGetStockByAccessLoc } from '@prime-fresh/operations/modules';
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames } from '@prime-fresh/shared/modules';
import { authState, useAppSelector } from '@prime-fresh/modules';
import {
  ColumnSettingButton,
  ColumnVisibilityPanel,
  DataGridTable,
  DateInput,
  PageTitle,
  Select,
  toast,
  useDataTableFunctions,
} from '@prime-fresh/shared/components';

export const StockTable = () => {
  const { loggedInUserInfo } = useAppSelector(authState);
  console.log('logged in user work location', loggedInUserInfo?.currentWorkLocation);

  const [companyId, setCompanyId] = useState<string>('');
  const [locationId, setLocationId] = useState<string>(loggedInUserInfo?.currentWorkLocation || '');
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);

  const stockColumns = useStockColumns();
  const tableConfig = useDataTableFunctions({
    columnDef: stockColumns,
    initialPageSize: 10,
    tableId: 'stock-table-id',
  });
  const { data, isLoading, isError, error } = useGetStockByAccessLoc(companyId, locationId, startDate, endDate);
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

  const { data: loc } = useGetBranchesPartialData();
  const branches = loc?.data ? mapToValueLabelArray(loc?.data, 'id', 'name') : [];

  const { data: company } = useGetCompanyNames();
  const companies = company?.data ? mapToValueLabelArray(company?.data, 'id', 'name') : [];

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container rowSpacing={2} columnSpacing={2} marginY={2} sx={{ alignItems: 'center' }}>
        <Grid2 size={{ xs: 10 }}>
          <PageTitle pagetitle="Main Stock" />
        </Grid2>
        <Grid2
          size={{ xs: 2 }}
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
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Select
            name="companyId"
            label="Company Name"
            options={companies}
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 2 }}>
          <Select
            name="locationId"
            label="Location"
            options={branches}
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <DateInput
            name="startDate"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <DateInput name="endDate" label="End Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
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
        columnVisibilityModel={tableConfig.columnVisibilityModel}
      />
    </Box>
  );
};
