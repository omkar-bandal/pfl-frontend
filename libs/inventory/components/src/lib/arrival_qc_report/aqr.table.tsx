import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { GetAQR, INVENTORY_API_URL, useGetAllAQR } from "@prime-fresh/inventory_api";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { AQRColumns } from "./aqr.columns";
import React from "react";

export const AQRTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllAQR(INVENTORY_API_URL.GET_ALL_AQR);
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
            <Box marginY={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Add />}
                    fullWidth={false}
                    onClick={handleCreate}
                >
                    Add AQR
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Box>
            <DataTable<GetAQR>
                loading={isLoading}
                rows={data}
                columns={AQRColumns()}
                apiRef={apiRef}
            />
        </Box >
    )
}