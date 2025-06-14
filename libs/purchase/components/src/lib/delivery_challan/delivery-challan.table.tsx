import React from "react";
import { Box, Grid2 } from "@mui/material";
import { PURCHASE_ROUTES, useGetAllDeliveryChallans } from "@prime-fresh/purchase/modules";
import { GetDeliveryChallan } from "@prime-fresh/purchase_api";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { useDeliveryChallanColumns } from "./delivery-challan.column";
import { usePermission } from "@prime-fresh/modules";

export const DeliveryChallanTable = () => {
    const navigate = useNavigate();
    const { canEdit, canView } = usePermission('delivery-challan');
    const deliveryChallanColumns = useDeliveryChallanColumns(canEdit, canView);
    const {
        paginationModel,
        sortModel,
        handleSortingChange,
        handlePaginationChange,
        queryParams,
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: deliveryChallanColumns, initialPageSize: 10 });
    const { data, isLoading, isError, error } = useGetAllDeliveryChallans(queryParams);
    const allDCs = data ? data : null;
    const rowCountRef = React.useRef(allDCs?.allRecords || 0);
    const rowCount = React.useMemo(() => {
        if (allDCs?.allRecords !== undefined) {
            rowCountRef.current = allDCs.allRecords;
        }
        return rowCountRef.current;
    }, [allDCs]);
    console.log("all DCs", allDCs);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_DELIVERY_CHALLAN);
    }
    const navigateToDCTypeCustomerForm = () => {
        navigate(PURCHASE_ROUTES.CREATE_DC_TYPE_CUSTOMER);
    }
    const navigateToDCTypeStockTransferForm = () => {
        navigate(PURCHASE_ROUTES.CREATE_DC_TYPE_STOCK_TRANSFER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Delivery Challan' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <AddNewButton handleClick={navigateToDCTypeCustomerForm} />
                    <AddNewButton handleClick={navigateToDCTypeStockTransferForm} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="dcs-col-def"
                        columns={deliveryChallanColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetDeliveryChallan>
                loading={isLoading}
                rows={allDCs?.data || []}
                columns={deliveryChallanColumns}
                mode="server"
                initialPageSize={10}
                totalRows={rowCount}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                sortModel={sortModel}
                onSortModelChange={handleSortingChange}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}
