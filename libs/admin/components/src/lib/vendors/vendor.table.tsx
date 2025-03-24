import React from "react";
import { Box, Grid2 } from "@mui/material";
import { useVendorColumns } from "./vendor.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllVendors } from "@prime-fresh/admin/modules";
import { toast, AddNewButton, ColumnSettingButton, DataGridTable, ColumnVisibilityPanel, PageTitle, useDataTable } from '@prime-fresh/ui_shared';

export function VendorTable() {
  const navigate = useNavigate()
  const vendorColumns = useVendorColumns();
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
  } = useDataTable({ columnDef: vendorColumns, initialPageSize: 10 });

  const { data, isError, isLoading, error } = useGetAllVendors(queryParams);
  const allVendors = data ? data : null;
  const rowCountRef = React.useRef(allVendors?.totalvendors || 0);
  const rowCount = React.useMemo(() => {
    if (allVendors?.totalvendors !== undefined) {
      rowCountRef.current = allVendors.totalvendors;
    }
    return rowCountRef.current;
  }, [allVendors]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.')
    }
  }, [isError, error])

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_VENDOR);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Vendors' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="vendors-col-def"
            columns={vendorColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allVendors?.data}
        columns={vendorColumns}
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
