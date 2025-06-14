import React, { useMemo, useRef } from "react";
import { Box, Grid2 } from "@mui/material";
import { useEmployeeColumns } from "./employee.columns";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, useGetAllEmployees } from "@prime-fresh/admin/modules";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";

export function EmployeeTable() {

  const navigate = useNavigate();
  const employeeColumns = useEmployeeColumns();
  const { paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel
  } = useDataTable({ columnDef: employeeColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllEmployees(queryParams);
  const allEmployees = data ? data : null;
  console.log("All Employees: ", allEmployees);
  const rowCountRef = useRef(allEmployees?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allEmployees?.allRecords !== undefined) {
      rowCountRef.current = allEmployees.allRecords;
    }
    return rowCountRef.current;
  }, [allEmployees]);

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
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="employees-col-def"
            columns={employeeColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allEmployees?.data || []}
        columns={employeeColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
}
