import React from "react";
import { Box, Grid2 } from "@mui/material";
import { inventoryRouteConstants, useGetAllDumpRegisters } from "@prime-fresh/inventory/modules";
import { GetDumpRegister } from "@prime-fresh/inventory_api";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useDumpRegisterColumns } from "./dump-register.column";

export const DumpRegisterTable = () => {
    const navigate = useNavigate();
    const dumpRegisterColumns = useDumpRegisterColumns();
    const { 
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel,
        paginationModel,
        setPaginationModel
    } = useDataTable({ columnDef: dumpRegisterColumns, initialPageSize: 10 });
    const { data, isLoading, isError, error } = useGetAllDumpRegisters();
    const dumps = data?.data ? data.data : [];
    console.log(dumps);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const handleCreate = () => {
        navigate(inventoryRouteConstants.CREATE_DUMP_REGISTER);
    }

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Dump Register' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="dumps-col-def"
                        columns={dumpRegisterColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetDumpRegister>
                mode="client"
                loading={isLoading}
                rows={dumps}
                columns={dumpRegisterColumns}
                columnVisibilityModel={columnVisibilityModel}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
            />
        </Box >
    )
}