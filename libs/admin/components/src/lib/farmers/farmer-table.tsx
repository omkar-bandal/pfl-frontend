import React from "react";
import { Box, Grid2 } from "@mui/material";
import { useFarmerColumns } from "./farmer-columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllFarmers } from '@prime-fresh/admin/modules';
import { toast, AddNewButton, ColumnSettingButton, DataGridTable, ColumnVisibilityPanel, PageTitle, useDataTable } from '@prime-fresh/ui_shared';

export function FarmerTable() {

  const navigate = useNavigate();
  const farmerColumns = useFarmerColumns();
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
  } = useDataTable({ columnDef: farmerColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllFarmers(queryParams);
  const allFarmers = data ? data : null;
  const rowCountRef = React.useRef(allFarmers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allFarmers?.allRecords !== undefined) {
      rowCountRef.current = allFarmers.allRecords;
    }
    return rowCountRef.current;
  }, [allFarmers]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_FARMER)
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Farmers' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="farmers-col-def"
            columns={farmerColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allFarmers?.data || []}
        columns={farmerColumns}
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
