import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { VendorSubcategoryListCols } from "./Columns";
import { Add } from "@mui/icons-material";
import { ADMIN_API_URL, useGetAllVendorSubCat } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export function VendorSubcatTable() {
  const navigate = useNavigate();
  const { data: VendorSubcat, isLoading } = useGetAllVendorSubCat(ADMIN_API_URL.GET_ALL_VENDOR_SUBCAT);
  console.log(VendorSubcat);
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
