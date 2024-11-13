import { Add } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { GetDeliveryChallan, PURCHASE_API_URL, useGetAllDeliveryChallan } from "@prime-fresh/purchase_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { DeliveryChallanListCols } from "./Columns";

export const DeliveryChallanTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allDCs, isLoading } = useGetAllDeliveryChallan(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN);
    console.log(allDCs);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN);
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
                    Add Delivery Challan
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetDeliveryChallan>
                loading={isLoading}
                rows={allDCs}
                columns={DeliveryChallanListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
