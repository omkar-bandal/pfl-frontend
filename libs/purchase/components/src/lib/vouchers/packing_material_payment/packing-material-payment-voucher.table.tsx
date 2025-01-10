import React from 'react'
import { Add } from '@mui/icons-material'
import { Box, Button, Stack } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetPMPvoucher, PURCHASE_API_URL, useGetAllPMPVoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES } from '@prime-fresh/purchase/modules'
import { DataTable, TableToolbar, toast } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { PMPVoucherListCols } from './packing-material-payment-voucher.columns'

export const PackingMaterialPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data: allPMPVouchers, isLoading, isError, error } = useGetAllPMPVoucher(PURCHASE_API_URL.GET_ALL__PMP_VOUCHER);
    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_PACKING_MATERIAL_VOUCHER);
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
            <DataTable<GetPMPvoucher>
                loading={isLoading}
                rows={allPMPVouchers}
                columns={PMPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
