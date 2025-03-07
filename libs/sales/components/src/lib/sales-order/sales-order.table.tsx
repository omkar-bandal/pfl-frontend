import { Add } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { SalesOrderColumns } from "./sales-order.columns";
import { useNavigate } from "react-router-dom";
import { useGridApiRef } from "@mui/x-data-grid";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import {GetSalesOrder} from "@prime-fresh/sales_api";

export const SalesOrderTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const data: GetSalesOrder[] = [];
    const handleCreate = async () => {
        await navigate(SALES_ROUTES.CREATE_SALES_ORDER);
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
                    Add Sales Order
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetSalesOrder>
                loading={false}
                rows={data}
                columns={SalesOrderColumns()}
                apiRef={apiRef}
            />
        </Box>
    )
}