import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { EmployeeListCols } from "./Columns";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ROUTES, employeesState, setEmployeeData } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, useGetAllEmployee } from "@prime-fresh/admin_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export function EmployeeTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();
  const Employees = useAppSelector(employeesState);

  const { data, isLoading } = useGetAllEmployee(ADMIN_API_URL.GET_ALL_EMPLOYEES);
  React.useEffect(() => {
    data ? dispatch(setEmployeeData(data)) : dispatch(setEmployeeData([]));
  }, [data, dispatch]);
  
  const handleCreate = () => {
    navigate(ADMIN_ROUTES.CREATE_EMPLOYEE);
  }

  console.log(Employees);
  return (
      <Box sx={{ flex: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            variant="outlined"
            size="medium"
            startIcon={<Add />}
            sx={{ marginY: 2 }}
            fullWidth={false}
            onClick={() => handleCreate()}
          >
            Add Employee
          </Button>
          <TableToolbar apiRef={apiRef} />
        </Stack>
        <DataTable
          apiRef={apiRef}
          loading={isLoading}
          rows={Employees}
          columns={EmployeeListCols()}
        />
      </Box>
  );
}
