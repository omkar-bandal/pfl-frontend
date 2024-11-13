import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { ADMIN_API_URL, useGetAllCustomers } from '@prime-fresh/admin_api';
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { CustomerListCols } from "./Columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, setCustomerData } from '@prime-fresh/admin/modules';
import {DataTable, TableToolbar} from '@prime-fresh/ui_shared';

export function CustomerTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const { data: Customers, isLoading } = useGetAllCustomers(ADMIN_API_URL.GET_ALL_CUSTOMERS);

  React.useEffect(() => {
    Customers ? dispatch(setCustomerData(Customers)) : dispatch(setCustomerData([]));
  }, [Customers, dispatch]);
  console.log(Customers);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_CUSTOMER);
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
          onClick={() => handleCreate()}
        >
          Add Customer
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Stack>
      <DataTable
        apiRef={apiRef}
        loading={isLoading}
        rows={Customers}
        columns={CustomerListCols()}
      />
    </Box>
  );
}
