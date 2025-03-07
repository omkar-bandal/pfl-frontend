import { useEffect } from "react";
import { Box, Grid2 } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { CustomerListCols } from "./customer-columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllCustomers } from '@prime-fresh/admin/modules';
import { AddNewButton, DataTable, PageTitle, toast } from '@prime-fresh/ui_shared';

export function CustomerTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, isError, error } = useGetAllCustomers();
  const Customers = data?.data ? data.data : [];

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_CUSTOMER);
  }
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Customers' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
        </Grid2>
      </Grid2>
      <DataTable
        apiRef={apiRef}
        loading={isLoading}
        rows={Customers}
        columns={CustomerListCols()}
      />
    </Box>
  );
}
