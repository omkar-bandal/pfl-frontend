import React from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetLPvoucher, PURCHASE_API_URL, useGetAllLPVoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules'
import { DataTable, TableToolbar } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { LPVoucherListCols } from './labor-payment-voucher.columns'

export const LabourPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allLPVouchers, isLoading } = useGetAllLPVoucher(PURCHASE_API_URL.GET_ALL_LP_VOUCHER);
    console.log(allLPVouchers);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_LABOUR_CASH_VOUCHER);
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
            <DataTable<GetLPvoucher>
                loading={isLoading}
                rows={allLPVouchers}
                columns={LPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
