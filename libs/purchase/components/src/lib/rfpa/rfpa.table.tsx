import React from "react"
import { Box, Button, Stack, Typography } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { RFPAListCols } from "./rfpa.columns"
import { GetRFPA } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES, useGetAllRFPAs } from "@prime-fresh/purchase/modules";
import { DataTable, toast } from "@prime-fresh/ui_shared";

export const RFPATable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, error, isError } = useGetAllRFPAs();
    const allRFPAs = data?.data ? data.data : [];
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_RFPA);
    }
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.');
        }
    }, [isError, error]);
    return (
        <Box sx={{ flex: 1 }}>
            <Typography component="div" variant="h5" sx={{fontWeight: 700, color: "#595959"}}>Request For Purchase Approval</Typography>
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
                <Button
                    variant="outlined"
                    size="small"
                    startIcon={<Add />}
                    sx={{ marginY: 1, textTransform: 'none', fontWeight: 600 }}
                    onClick={handleCreate}
                >
                    Add New
                </Button>
            </Stack>
            <DataTable<GetRFPA>
                loading={isLoading}
                rows={allRFPAs}
                columns={RFPAListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}