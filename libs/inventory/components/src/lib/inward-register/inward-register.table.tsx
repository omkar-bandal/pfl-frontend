import React from "react";
import { Box, Grid2 } from "@mui/material";
import { GetInwardRegister } from "@prime-fresh/inventory_api";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { InwardRegisterColumns } from "./inward-register.column";
import { inventoryRouteConstants, useGetAllInwardRegisters } from "@prime-fresh/inventory/modules";
import { useNavigate } from "react-router-dom";
import { useGridApiRef } from "@mui/x-data-grid";

export const InwardRegisterTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllInwardRegisters();
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
                </Grid2>
            </Grid2>
            <DataTable<GetInwardRegister>
                loading={isLoading}
                rows={data}
                columns={InwardRegisterColumns()}
                apiRef={apiRef}
            />
        </Box>
    )
}