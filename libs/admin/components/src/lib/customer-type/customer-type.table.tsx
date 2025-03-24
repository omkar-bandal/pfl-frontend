import { useEffect, useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useCustomerTypeColumns } from "./customer-type.columns";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllCustomerTypes } from "@prime-fresh/admin/modules";

export function CustomerTypeTable() {
  const navigate = useNavigate();
  const customerTypeColumns = useCustomerTypeColumns();
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
    handleOpenColumnVisibilityPanel
  } = useDataTable({ columnDef: customerTypeColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllCustomerTypes(queryParams);
  const customerType = data ? data : null;
  const rowCountRef = useRef(customerType?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (customerType?.allRecords !== undefined) {
      rowCountRef.current = customerType.allRecords;
    }
    return rowCountRef.current;
  }, [customerType]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_CUSTOMER_TYPE);
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Customer Type' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleNavigate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="customer-type-col-def"
            columns={customerTypeColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={customerType?.data || []}
        columns={customerTypeColumns}
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
