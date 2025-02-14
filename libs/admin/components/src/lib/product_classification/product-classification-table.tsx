import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { ProductClassificationListCols } from "./product-classification.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllProductClassifications } from "@prime-fresh/admin/modules";

export function ProductClassTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  
  const { data, isLoading, error, isError } = useGetAllProductClassifications();
  const productClassification = data !== null && data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.'); 
    }
  }, [isError, error]); 

  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_PRODUCT_CLASS);
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
          Add Classification
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        loading={isLoading}
        apiRef={apiRef}
        rows={productClassification}
        columns={ProductClassificationListCols()}
      />
    </Box>
  );
}
