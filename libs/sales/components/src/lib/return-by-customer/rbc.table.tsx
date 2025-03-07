import { Add } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import { GetReturnByCustomer } from "@prime-fresh/sales_api";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { RBCColumns } from "./rbc.columns";

export const RBCTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const data: GetReturnByCustomer[] = [];
    const handleCreate = async () => {
        await navigate(SALES_ROUTES.CREATE_RBC);
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
                    Add RBC
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetReturnByCustomer>
                loading={false}
                rows={data}
                columns={RBCColumns()}
                apiRef={apiRef}
            />
        </Box>
    )
}