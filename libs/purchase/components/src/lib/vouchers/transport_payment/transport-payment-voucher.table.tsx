import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetTPvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllTransportPaymentVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from 'react-router-dom'
import { useTPVoucherColumns } from './transport-payment-voucher.columns'

export const TransportPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const tpVoucherColumns = useTPVoucherColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: tpVoucherColumns, initialPageSize: 10 });
    const { data, isLoading, isError, error } = useGetAllTransportPaymentVouchers();
    const allTPVouchers = data?.data ? data.data : [];
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_TRANSPORT_CASH_VOUCHER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Transport Payment Voucher' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="tp-vouchers-col-def"
                        columns={tpVoucherColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetTPvoucher>
                mode="client"
                loading={isLoading}
                rows={allTPVouchers}
                columns={tpVoucherColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}
