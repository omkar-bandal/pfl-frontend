import { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { UOMMatrixListCols } from "./uom-conversion-matrix.columns";
import { Add } from "@mui/icons-material";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllUOMConversionMatrix } from "@prime-fresh/admin/modules";

export function UOMConvMatrixTable() {
  const apiRef = useGridApiRef();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useGetAllUOMConversionMatrix();
  const uomConvMat = data !== null && data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleNavigate = () => {
    navigate(ADMIN_ROUTES.CREATE_UOMs_CONV_MATRIX)
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
          Add Conversion
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        apiRef={apiRef}
        loading={isLoading}
        rows={uomConvMat}
        columns={UOMMatrixListCols()}
      />
    </Box>
  );
}
