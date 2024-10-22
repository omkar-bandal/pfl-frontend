import React from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import {GetTPvoucher, PURCHASE_API_URL, useGetAllTPVoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules'
import { DataTable, TableToolbar } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { TPVoucherListCols } from './Columns'

export const TransportPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allTPVouchers, isLoading } = useGetAllTPVoucher(PURCHASE_API_URL.GET_ALL_TP_VOUCHER);
    console.log(allTPVouchers);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_TRANSPORT_CASH_VOUCHER);
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
                    Add Voucher
                </Button>
                <TableToolbar apiRef={apiRef} />
            </Stack>
            <DataTable<GetTPvoucher>
                loading={isLoading}
                rows={allTPVouchers}
                columns={TPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
