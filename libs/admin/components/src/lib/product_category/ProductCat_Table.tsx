import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ProductCategoryListCols } from "./Columns";
import { Add } from "@mui/icons-material";
// import { useDispatch } from "react-redux";
import { ADMIN_API_URL, useGetAllProductsCat } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export function ProductCatTable() {
  const navigate = useNavigate();
  const { data: ProductCat, isLoading } = useGetAllProductsCat(ADMIN_API_URL.GET_ALL_PRODUCT_CATEGORY);
  console.log(ProductCat);
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
            onClick={() => navigate(ADMIN_ROUTES.CREATE_PRODUCT_CAT)}
          >
            Add Category
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          loading={isLoading}
          apiRef={apiRef}
          rows={ProductCat}
          columns={ProductCategoryListCols}
        />
      </Box>
  );
}
