import React from "react";
import { Box, Grid2 } from "@mui/material";
import { GetProformaInvoice} from "@prime-fresh/inventory_api";
import { ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useProformaInvoiceColumns } from "./proforma-invoice.column";

export const ProformaInvoicesTable = () => {
    const proformaInvoiceColumns = useProformaInvoiceColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({columnDef: proformaInvoiceColumns});
    // const { data, isLoading, isError, error } = useGetAllProformaInvoices("/invoice/getAll");
    // console.log(data);
    // React.useEffect(() => {
    //     if (isError) {
    //         toast.error(error?.message || 'Error occured please refresh the page.')
    //     }
    // }, [isError, error])
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Proforma Invoices' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="proforma-invoice-col-def"
                        columns={proformaInvoiceColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetProformaInvoice>
                mode="client"
                loading={false}
                rows={[]}
                columns={proformaInvoiceColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box >
    )
}