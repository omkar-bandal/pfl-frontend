/* eslint-disable @nx/enforce-module-boundaries */
import React from "react";
import { Box, Grid2 } from "@mui/material";
import { GetInwardRegister } from "@prime-fresh/inventory_api";
import { useInwardRegisterColumns } from "./inward-register.column";
import { inventoryRouteConstants, useGetAllInwardRegisters } from "@prime-fresh/inventory/modules";
import { useNavigate } from "react-router-dom";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";

export const InwardRegisterTable = () => {
    const navigate = useNavigate();
    const inwardRegisterColumns = useInwardRegisterColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable();
    const { data, isLoading, isError, error } = useGetAllInwardRegisters();
    const inwards = data?.data ? data.data : [];
    console.log(inwards)
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(inventoryRouteConstants.CREATE_INWARD_REGISTER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Inward Register' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="inwards-col-def"
                        columns={inwardRegisterColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetInwardRegister>
                mode="client"
                loading={isLoading}
                rows={inwards}
                columns={inwardRegisterColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}