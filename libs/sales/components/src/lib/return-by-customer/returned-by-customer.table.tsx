import React from "react";
import { Box, Grid2 } from "@mui/material";
import { salesRoutes, useGetAllReturnedByCustomers } from "@prime-fresh/sales/modules";
import { IReturnByCustomer } from "@prime-fresh/sales_api";
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useReturnedByCustomerColumns } from "./returned-by-customer.columns";
import { Add, Settings } from "@mui/icons-material";
import { usePermission } from "@prime-fresh/modules";

export const ReturnedByCustomerTable = () => {
    const navigate = useNavigate();
    const { canEdit, canView } = usePermission('return-by-customer');
    const returedByCustomerColumns = useReturnedByCustomerColumns(canEdit, canView);
    const {
        paginationModel,
        sortModel,
        handleSortingChange,
        handlePaginationChange,
        queryParams,
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel,
    } = useDataTable({ columnDef: returedByCustomerColumns });
    const { data, isLoading, isError, error } = useGetAllReturnedByCustomers(queryParams);
    const rbcData = data ? data : null;
    const rowCountRef = React.useRef(rbcData?.allRecords || 0);
    const rowCount = React.useMemo(() => {
        if (rbcData?.allRecords !== undefined) {
            rowCountRef.current = rbcData.allRecords;
        }
        return rowCountRef.current;
    }, [rbcData]);

    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.');
        }
    }, [isError, error]);
    const handleCreate = () => navigate(salesRoutes.CREATE_RBC);
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Returned By Customers' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
                    <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="rbcs-col-def"
                        columns={returedByCustomerColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<IReturnByCustomer>
                loading={isLoading}
                rows={rbcData?.data || []}
                columns={returedByCustomerColumns}
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
    )
}