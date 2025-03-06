import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetTPvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllTransportPaymentVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, DataTable, PageTitle, toast } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { TPVoucherListCols } from './transport-payment-voucher.columns'

export const TransportPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
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
                </Grid2>
            </Grid2>
            <DataTable<GetTPvoucher>
                loading={isLoading}
                rows={allTPVouchers}
                columns={TPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
