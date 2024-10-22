import { Box, Button, Stack } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { RFPAListCols } from "./Columns"
import { PURCHASE_API_URL, GetRFPA, useGetAllRFPA } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { DataTable, TableToolbar } from "@prime-fresh/ui_shared";

export const RFPATable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allRFPA, isLoading } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    console.log(allRFPA);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_RFPA);
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
                    Add RFPA
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetRFPA>
                loading={isLoading}
                rows={allRFPA}
                columns={RFPAListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}