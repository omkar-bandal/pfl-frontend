import React from "react";
import { Box } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid";
import { GetProformaInvoice, useGetAllProformaInvoices } from "@prime-fresh/inventory_api";
import { DataTable, toast } from "@prime-fresh/ui_shared";
import { ProformaInvoiceColumns } from "./proforma-invoice.column";

export const ProformaInvoicesTable = () => {
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllProformaInvoices("/invoice/getAll");
    console.log(data);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    return (
        <Box sx={{ flex: 1 }}>
            <DataTable<GetProformaInvoice>
                loading={isLoading}
                rows={data}
                columns={ProformaInvoiceColumns()}
                apiRef={apiRef}
            />
        </Box >
    )
}