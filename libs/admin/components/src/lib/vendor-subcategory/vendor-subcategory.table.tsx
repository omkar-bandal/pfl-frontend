import { useEffect, useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useVendorSubcategoryColumns } from "./vendor-subcategory.columns";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllVendorSubcategories } from "@prime-fresh/admin/modules";

export function VendorSubcatTable() {
  const navigate = useNavigate();
  const vendorSubcategoryColumns = useVendorSubcategoryColumns();
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
  } = useDataTable({ columnDef: vendorSubcategoryColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllVendorSubcategories(queryParams);
  const VendorSubcat = data ? data : null;
  const rowCountRef = useRef(VendorSubcat?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (VendorSubcat?.allRecords !== undefined) {
      rowCountRef.current = VendorSubcat.allRecords;
    }
    return rowCountRef.current;
  }, [VendorSubcat]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleNavigate = () => navigate(ADMIN_ROUTES.CREATE_VENDORS_SUBCAT)

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Vendor Subcategories' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleNavigate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="vendor-subcat-col-def"
            columns={vendorSubcategoryColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={VendorSubcat?.data || []}
        columns={vendorSubcategoryColumns}
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
