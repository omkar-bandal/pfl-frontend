import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { VendorCategoryListCols } from "./vendor-category.columns";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllVendorCategories } from "@prime-fresh/admin/modules";

export function VendorCatTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();

  const { data, isLoading, isError, error } = useGetAllVendorCategories();
  const VendorCat = data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => { 
    navigate(ADMIN_ROUTES.CREATE_VENDORS_CAT); 
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
          onClick={handleCreate}
        >
          Add Category
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        loading={isLoading}
        apiRef={apiRef}
        rows={VendorCat}
        columns={VendorCategoryListCols()}
      />
    </Box>
  );
}
