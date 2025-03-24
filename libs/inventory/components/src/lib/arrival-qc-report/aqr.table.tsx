import React from "react";
import { Box, Grid2 } from "@mui/material";
import { inventoryRouteConstants, useGetAllAQRs } from "@prime-fresh/inventory/modules";
import { GetAQR } from "@prime-fresh/inventory_api";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useAQRColumns } from "./aqr.columns";

export const AQRTable = () => {
    const navigate = useNavigate();
    const aqrColumns = useAQRColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: aqrColumns });
    const { data, isLoading, isError, error } = useGetAllAQRs();
    const aqrs = data?.data ? data.data : [];
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(inventoryRouteConstants.CREATE_AQR);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Arrival Quality Reports' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="aqrs-col-def"
                        columns={aqrColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetAQR>
                mode="client"
                loading={isLoading}
                rows={aqrs}
                columns={aqrColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box >
    )
}