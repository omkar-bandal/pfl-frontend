import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { UOMMatrixListCols } from "./uom-conversion-matrix.columns";
import { Add } from "@mui/icons-material";
import { ADMIN_API_URL, useGetAllUOMConversionMatrixs } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { useDispatch } from "react-redux";
import { hideNotification } from "@prime-fresh/modules";


export function UOMConvMatrixTable() {
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllUOMConversionMatrixs(ADMIN_API_URL.GET_ALL_UOM_CONVERSION);
  const uomConvMat = data? data: [];
  console.log(data);
  const handleNavigate = () => {
    dispatch(hideNotification());
    dispatch(setOpenFor('create'));
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
      <DataTable apiRef={apiRef} loading={isLoading} rows={uomConvMat} columns={UOMMatrixListCols()} />
    </Box>
  );
}
