import React from "react"
import { Box, Grid2 } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useGridApiRef } from "@mui/x-data-grid"
import { RFPAListCols } from "./rfpa.columns"
import { GetRFPA } from "@prime-fresh/purchase_api"
import { PURCHASE_ROUTES, useGetAllRFPAs } from "@prime-fresh/purchase/modules";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";

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
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Request For Purchase Approval' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable<GetRFPA>
                loading={isLoading}
                rows={allRFPAs}
                columns={RFPAListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}