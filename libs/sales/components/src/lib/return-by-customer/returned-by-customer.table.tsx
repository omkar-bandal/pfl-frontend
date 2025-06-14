import { Box, Grid2 } from "@mui/material";
import { salesRoutes, useGetAllReturnedByCustomers } from "@prime-fresh/sales/modules";
import { GetReturnByCustomer } from "@prime-fresh/sales_api";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useReturnedByCustomerColumns } from "./returned-by-customer.columns";
import { useEffect } from "react";

export const ReturnedByCustomerTable = () => {
    const navigate = useNavigate();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable();
    const returedByCustomerColumns = useReturnedByCustomerColumns();
    const {data, isLoading, isError, error} = useGetAllReturnedByCustomers();
    const rbcData = data?.data ? data.data : [];
    useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = async () => await navigate(salesRoutes.CREATE_RBC);
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Returned By Customers' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
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
            <DataGridTable<GetReturnByCustomer>
                mode="client"
                loading={isLoading}
                rows={rbcData}
                columns={returedByCustomerColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}