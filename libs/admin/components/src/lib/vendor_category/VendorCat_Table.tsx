import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { VendorCategoryListCols } from "./Columns";
import { Add } from "@mui/icons-material";
import { ADMIN_API_URL, useGetAllVendorCat } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export function VendorCatTable() {
  const navigate = useNavigate();
  const { data: VendorCat, isLoading } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
  const apiRef = useGridApiRef();
  
  return (
      <Box sx={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            size="medium"
            startIcon={<Add />}
            sx={{ marginY: 2 }}
            fullWidth={false}
            onClick={() => navigate(ADMIN_ROUTES.CREATE_VENDORS_CAT)}
          >
            Add Category
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          loading={isLoading}
          apiRef={apiRef}
          rows={VendorCat}
          columns={VendorCategoryListCols}
        />
      </Box>
  );
}
