import React from "react";
import { Box, Grid2} from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { EmployeeListCols } from "./employee.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllEmployees } from "@prime-fresh/admin/modules";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";

export function EmployeeTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();

  const { data, isLoading, isError, error } = useGetAllEmployees();
  const employees = data?.data ? data.data : [];

  React.useEffect(() => {
    if (isError) {
        toast.error(error?.message || 'Error occured please refresh the page.')
    }
}, [isError, error])

  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_EMPLOYEE);
  }

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Employees' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
        </Grid2>
      </Grid2>
      <DataTable
        apiRef={apiRef}
        loading={isLoading}
        rows={employees}
        columns={EmployeeListCols()}
      />
    </Box>
  );
}
