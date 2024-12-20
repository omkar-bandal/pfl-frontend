import { Box, Button, Stack } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { GRNListCols } from "./Columns"
import { PURCHASE_API_URL, GetGRN, useGetAllGRN } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules"
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import {inventoryRouteConstants} from "@prime-fresh/inventory/modules";
export const GRNTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allGRN, isLoading } = useGetAllGRN(PURCHASE_API_URL.GET_ALL_GRN);
    console.log(allGRN);
    const handleCreate = async() => {
        const route = localStorage.getItem("department") === "Inventory" ? inventoryRouteConstants.CREATE_GRN : PURCHASE_ROUTES.CREATE_GRN; 
        await navigate(route);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Add />}
                    sx={{ marginY: 2 }}
                    fullWidth={false}
                    onClick={handleCreate}
                >
                    Add GRN
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetGRN>
                loading={isLoading}
                rows={allGRN}
                columns={GRNListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}