import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
// import { useDispatch } from "react-redux";
import { ADMIN_API_URL, useGetAllProductClassification } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { ProductClassificationListCols } from "./Columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export function ProductClassTable() {
  const navigate = useNavigate();
  const { data: ProductClassification, isLoading } = useGetAllProductClassification(ADMIN_API_URL.GET_ALL_PRODUCT_CLASSIFICATION);
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
            onClick={() => navigate(ADMIN_ROUTES.CREATE_PRODUCT_CLASS)}
          >
            Add Classification
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          loading={isLoading}
          apiRef={apiRef}
          rows={ProductClassification}
          columns={ProductClassificationListCols}
        />
      </Box>
  );
}
