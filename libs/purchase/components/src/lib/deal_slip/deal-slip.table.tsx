import { Box, Button, Stack } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { PURCHASE_API_URL, GetDealSlip, useGetAllDealSlip } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules"
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";
import { DealSlipListCols } from "./deal-slip.columns"
import React from "react"

export const DealSlipTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allDealSlip, isLoading, isError, error } = useGetAllDealSlip(PURCHASE_API_URL.GET_ALL_DEAL_SLIP);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_DEAL_SLIP);
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
                    Add Deal Slip
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetDealSlip>
                loading={isLoading}
                rows={allDealSlip}
                columns={DealSlipListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}