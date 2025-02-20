import React from "react"
import { Box, Grid2 } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { GRNListCols } from "./grn.columns"
import { GetGRN } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES, useGetAllGRNs } from "@prime-fresh/purchase/modules"
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";

export const GRNTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllGRNs();
    const allGRN = data?.data ? data.data : [];
    console.log("All GRNs :", allGRN);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = async () => {
        const route = localStorage.getItem("department") === "Inventory" ? inventoryRouteConstants.CREATE_GRN : PURCHASE_ROUTES.CREATE_GRN;
        await navigate(route);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Goods Received Note' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable<GetGRN>
                loading={isLoading}
                rows={allGRN}
                columns={GRNListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}