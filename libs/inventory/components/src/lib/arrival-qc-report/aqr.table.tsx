import React from "react";
import { Box, Grid2 } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { inventoryRouteConstants, useGetAllAQRs } from "@prime-fresh/inventory/modules";
import { GetAQR } from "@prime-fresh/inventory_api";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { AQRColumns } from "./aqr.columns";

export const AQRTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
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
                </Grid2>
            </Grid2>
            <DataTable<GetAQR>
                loading={isLoading}
                rows={aqrs}
                columns={AQRColumns()}
                apiRef={apiRef}
            />
        </Box >
    )
}