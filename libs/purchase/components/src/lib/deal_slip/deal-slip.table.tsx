import React from "react"
import { Box, Grid2 } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { GetDealSlip } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES, useGetAllDealSlips } from "@prime-fresh/purchase/modules"
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useDealSlipColumns } from "./deal-slip.columns"

export const DealSlipTable = () => {
    const navigate = useNavigate();
    const dealSlipColumns = useDealSlipColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({columnDef: dealSlipColumns});

    const { data, isLoading, isError, error } = useGetAllDealSlips();
    const allDealSlip = data?.data ? data.data : [];

    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_DEAL_SLIP);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Deal Slip' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="deal-slips-col-def"
                        columns={dealSlipColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetDealSlip>
                mode="client"
                loading={isLoading}
                rows={allDealSlip}
                columns={dealSlipColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}