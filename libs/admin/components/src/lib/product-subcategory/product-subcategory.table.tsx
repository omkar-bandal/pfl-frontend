import { useEffect, useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useProductSubcategoryColumns } from "./product-subcategory.columns";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllProductSubcategories } from "@prime-fresh/admin/modules";

export function ProductSubCatTable() {
  const navigate = useNavigate();
  const productSubcategoryColumns = useProductSubcategoryColumns();
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
  } = useDataTable({ columnDef: productSubcategoryColumns, initialPageSize: 10 });

  const { data, isLoading, error, isError } = useGetAllProductSubcategories(queryParams);
  const productSubcategories = data ? data : null;
  const rowCountRef = useRef(productSubcategories?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (productSubcategories?.allRecords !== undefined) {
      rowCountRef.current = productSubcategories.allRecords;
    }
    return rowCountRef.current;
  }, [productSubcategories]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_PRODUCT_SUBCAT)
  }
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Product Subcategories' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleNavigate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="products-subcategory-col-def"
            columns={productSubcategoryColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={productSubcategories?.data || []}
        columns={productSubcategoryColumns}
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
