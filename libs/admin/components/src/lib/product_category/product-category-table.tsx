import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ProductCategoryListCols } from "./product-category.columns";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllProductCategories } from "@prime-fresh/admin/modules";
import { useEffect } from "react";

export function ProductCatTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();

  const { data, isLoading, error, isError } = useGetAllProductCategories();
  const productCategories = data !== null && data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  
  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_PRODUCT_CAT)
  }
  return (
    <Box sx={{ flex: 1 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          sx={{ marginY: 2 }}
          fullWidth={false}
          onClick={handleNavigate}
        >
          Add Category
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        loading={isLoading}
        apiRef={apiRef}
        rows={productCategories}
        columns={ProductCategoryListCols()}
      />
    </Box>
  );
}
