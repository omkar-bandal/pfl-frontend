import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ProductSubcategoryListCols } from "./product-subcategory.columns";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllProductSubcategories } from "@prime-fresh/admin/modules";
import { useEffect } from "react";

export function ProductSubCatTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  
  const { data, isLoading, error, isError } = useGetAllProductSubcategories();
  const productSubcategories = data !== null && data?.data ? data.data : [];

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
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            size="medium"
            startIcon={<Add />}
            sx={{ marginY: 2 }}
            fullWidth={false}
            onClick={handleNavigate}
          >
            Add Subcategory
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          loading={isLoading}
          apiRef={apiRef}
          rows={productSubcategories}
          columns={ProductSubcategoryListCols()}
        />
      </Box>
  );
}
