import { useEffect, useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useUOMColumns } from "./uom.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllUOMs } from "@prime-fresh/admin/modules";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";

export const UOMTable = () => {
  const navigate = useNavigate();
  const uomColumns = useUOMColumns();
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
  } = useDataTable({ columnDef: uomColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllUOMs(queryParams);
  const UOMs = data ? data : null;
  const rowCountRef = useRef(UOMs?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (UOMs?.allRecords !== undefined) {
      rowCountRef.current = UOMs.allRecords;
    }
    return rowCountRef.current;
  }, [UOMs]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_UOM)
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Unit of Measures' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleNavigate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="uom-col-def"
            columns={uomColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={UOMs?.data || []}
        columns={uomColumns}
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
