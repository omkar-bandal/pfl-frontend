import React, { useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { UOMListCols } from "./uom.columns";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllUOMs } from "@prime-fresh/admin/modules";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";


export function UOMTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, isError, error } = useGetAllUOMs();
  const UOMs = data !== null && data?.data ? data.data :[];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.'); 
    }
  }, [isError, error]); 

  const handleNavigate = () => {
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
          onClick={handleNavigate}
        >
          Add UOM
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable apiRef={apiRef} loading={isLoading} rows={UOMs} columns={UOMListCols()} />
    </Box>
  );
}
