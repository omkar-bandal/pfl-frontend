import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { FarmerListCols } from "./Columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, farmersDataState, setFarmerData, setOpenFor } from '@prime-fresh/admin/modules';
import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_API_URL, useGetAllFarmers } from "@prime-fresh/admin_api";
import {DataTable, TableToolbar} from '@prime-fresh/ui_shared';

export function FarmerTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const {allFarmers} = useAppSelector(farmersDataState);
  const { data, isLoading } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
  
  React.useEffect(() => {
    data ? dispatch(setFarmerData(data)) : dispatch(setFarmerData([]));
  }, [data, dispatch]);
  
  const handleCreate = () => {
    dispatch(setOpenFor('create'));
    navigate(ADMIN_ROUTES.CREATE_FARMER)
  };
  
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
            Add Farmer
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          apiRef={apiRef}
          loading={isLoading}
          rows={allFarmers}
          columns={FarmerListCols()}
        />
      </Box>
  );
}
