import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { UOMListCols } from "./Columns";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ADMIN_API_URL, useGetAllUOMs } from "@prime-fresh/admin_api";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function UOMTable() {
  const navigate = useNavigate();
  const { data: UOMs, isLoading } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const apiRef = useGridApiRef();
  console.log(UOMs);
  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_UOM)
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
          Add UOM
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable apiRef={apiRef} loading={isLoading} rows={UOMs} columns={UOMListCols} />
    </Box>
  );
}
