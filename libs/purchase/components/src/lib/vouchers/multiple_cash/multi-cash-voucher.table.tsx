import React from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetMCvoucher, PURCHASE_API_URL, useGetAllMCVoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules'
import { DataTable, TableToolbar } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { MCVoucherListCols } from './multi-cash-voucher.columns'

export const MultipleCashVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allMCVouchers, isLoading } = useGetAllMCVoucher(PURCHASE_API_URL.GET_ALL_MC_VOUCHER);
    console.log(allMCVouchers);
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_MULT_CASH_VOUCHER);
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
            <DataTable<GetMCvoucher>
                loading={isLoading}
                rows={allMCVouchers}
                columns={MCVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
