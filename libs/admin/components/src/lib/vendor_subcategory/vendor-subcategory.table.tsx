import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { VendorSubcategoryListCols } from "./vendor-subcategory.columns";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllVendorSubcategories } from "@prime-fresh/admin/modules";

export function VendorSubcatTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  
  const { data, isLoading, isError, error } = useGetAllVendorSubcategories();
  const VendorSubcat = data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  
  return (
      <Box sx={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            size="medium"
            startIcon={<Add />}
            sx={{ marginY: 2 }}
            fullWidth={false}
            onClick={() => navigate(ADMIN_ROUTES.CREATE_VENDORS_SUBCAT)}
          >
            Add Subcategory
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          loading={isLoading}
          apiRef={apiRef}
          rows={VendorSubcat}
          columns={VendorSubcategoryListCols()}
        />
      </Box>
  );
}
