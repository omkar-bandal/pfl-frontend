import React from "react";
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { GetDumpRegister, INVENTORY_API_URL, useGetAllDumpRegisters } from "@prime-fresh/inventory_api";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { DumpRegisterColumns } from "./dump-register.column";

export const DumpRegisterTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllDumpRegisters(INVENTORY_API_URL.GET_ALL_DUMP_REGISTERS);
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
            <Box marginY={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Add />}
                    fullWidth={false}
                    onClick={handleCreate}
                >
                    Add Dump Register
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Box>
            <DataTable<GetDumpRegister>
                loading={isLoading}
                rows={data}
                columns={DumpRegisterColumns()}
                apiRef={apiRef}
            />
        </Box >
    )
}