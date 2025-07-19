import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { inventoryRouteConstants, useGetAllSecondSaleRegisters } from '@prime-fresh/inventory/modules';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { ISecondSaleRegister } from '@prime-fresh/inventory_api';
import { useSecondSaleRegisterColumns } from './second-sale-register.column';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const SecondSaleRegisterTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('second-sale');
  const secondSaleRegisterColumns = useSecondSaleRegisterColumns(canEdit, canView);
  const {
    paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: secondSaleRegisterColumns });
  const { data, isLoading, isError, error } = useGetAllSecondSaleRegisters(queryParams);
  const secondSales = data ? data : null;
  console.log('SS data: ', secondSales);
  const rowCountRef = React.useRef(secondSales?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (secondSales?.allRecords !== undefined) {
      rowCountRef.current = secondSales.allRecords;
    }
    return rowCountRef.current;
  }, [secondSales]);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Second Sale Register" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="second-sales-col-def"
            columns={secondSaleRegisterColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<ISecondSaleRegister>
        loading={isLoading}
        rows={secondSales?.data || []}
        columns={secondSaleRegisterColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
