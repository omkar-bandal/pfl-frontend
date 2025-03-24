import { Box, Grid2} from "@mui/material";
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { SalesOrderColumns } from "./sales-order.columns";
import { useNavigate } from "react-router-dom";
import { SALES_ROUTES } from "@prime-fresh/sales/modules";
import {GetSalesOrder} from "@prime-fresh/sales_api";

export const SalesOrderTable = () => {
    const navigate = useNavigate();
    const {
        columnVisibilityModel,
        setColumnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable();
    const data: GetSalesOrder[] = [];
    // React.useEffect(() => {
    //     if (isError) {
    //         toast.error(error?.message || 'Error occured please refresh the page.')
    //     }
    // }, [isError, error])
    const handleCreate = async () => await navigate(SALES_ROUTES.CREATE_SALES_ORDER);
    return (
        <Box sx={{ flex: 1 }}>
           <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Sales Orders' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="sales-orders-col-def"
                        columns={SalesOrderColumns()}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetSalesOrder>
                mode="client"
                loading={false}
                rows={data}
                columns={SalesOrderColumns()}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(newModel: React.SetStateAction<{ [field: string]: boolean }>) => setColumnVisibilityModel(newModel)}
            />
        </Box>
    )
}