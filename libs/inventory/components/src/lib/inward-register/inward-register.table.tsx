import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { GetInwardRegister, INVENTORY_API_URL, useGetAllInwardRegisters } from "@prime-fresh/inventory_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { InwardRegisterColumns } from "./inward-register.column";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { useNavigate } from "react-router-dom";
import { useGridApiRef } from "@mui/x-data-grid";

export const InwardRegisterTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading } = useGetAllInwardRegisters(INVENTORY_API_URL.GET_ALL_INWARD_REGISTERS);
    console.log(data);
    const handleCreate = () => {
        navigate(inventoryRouteConstants.CREATE_INWARD_REGISTER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Box marginY={2} sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Add />}
                    fullWidth={false}
                    onClick={handleCreate}
                >
                    Add Inward Register
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Box>
            <DataTable<GetInwardRegister>
                loading={isLoading}
                rows={data}
                columns={InwardRegisterColumns()}
                apiRef={apiRef}
            />
        </Box>
    )
}