import React from "react";
import { Box, Grid2 } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { PURCHASE_ROUTES, useGetAllDeliveryChallans } from "@prime-fresh/purchase/modules";
import { GetDeliveryChallan } from "@prime-fresh/purchase_api";
import { AddNewButton, DataTable, PageTitle, toast } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { DeliveryChallanListCols } from "./delivery-challan.column";

export const DeliveryChallanTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllDeliveryChallans();
    const allDCs = data?.data ? data.data : [];
    console.log("all DCs", allDCs);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Delivery Challan' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable<GetDeliveryChallan>
                loading={isLoading}
                rows={allDCs}
                columns={DeliveryChallanListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
