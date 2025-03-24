import React from "react";
import { Box, Grid2 } from "@mui/material";
import { useCustomerColumns } from "./customer-columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllCustomers } from '@prime-fresh/admin/modules';
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';

export function CustomerTable() {

  const navigate = useNavigate();
  const customerColumns = useCustomerColumns();
  const { paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel
  } = useDataTable();

  const { data, isLoading, isError, error } = useGetAllCustomers(queryParams);
  const allCustomers = data ? data : null;
  const rowCountRef = React.useRef(allCustomers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allCustomers?.allRecords !== undefined) {
      rowCountRef.current = allCustomers.allRecords;
    }
    return rowCountRef.current;
  }, [allCustomers]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_CUSTOMER);
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Customers' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="customers-col-def"
            columns={customerColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allCustomers?.data || []}
        columns={customerColumns}
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
}
