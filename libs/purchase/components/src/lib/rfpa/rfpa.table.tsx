import React from "react"
import { Box, Button, Stack } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { RFPAListCols } from "./rfpa.columns"
import { PURCHASE_API_URL, GetRFPA, useGetAllRFPA } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { DataTable, TableToolbar, toast } from "@prime-fresh/ui_shared";

export const RFPATable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allRFPA, isLoading, error, isError } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_RFPA);
    }
    React.useEffect(() => {
        if (isError) {
          toast.error(error?.message || 'Error occured please refresh the page.'); 
        }
      }, [isError, error]);
    return (
        <Box sx={{ flex: 1}}>
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