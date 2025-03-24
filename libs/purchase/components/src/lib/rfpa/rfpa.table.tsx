/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Box, Grid2 } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useRFPAColumns } from "./rfpa.columns"
import { GetRFPA } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES, useGetAllRFPAs } from "@prime-fresh/purchase/modules";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useDispatch } from "react-redux"
import { setPreview } from "@prime-fresh/modules"

export const RFPATable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const rfpaColumns = useRFPAColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: rfpaColumns });
    const { data, isLoading, error, isError } = useGetAllRFPAs();
    const allRFPAs = data?.data ? data.data : [];

    const handleCreate = () => {
        dispatch(setPreview(false))
        navigate(PURCHASE_ROUTES.CREATE_RFPA);
    }

    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.');
        }
    }, [isError, error]);

    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <PageTitle pagetitle='Request For Purchase Approval' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="rfpas-col-def"
                        columns={rfpaColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetRFPA>
                mode="client"
                loading={isLoading}
                rows={allRFPAs}
                columns={rfpaColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}