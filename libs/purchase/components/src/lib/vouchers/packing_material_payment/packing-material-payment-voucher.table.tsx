import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetPMPvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllPackingMeterialPaymentVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, DataTable, PageTitle, toast } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { PMPVoucherListCols } from './packing-material-payment-voucher.columns'

export const PackingMaterialPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllPackingMeterialPaymentVouchers();
    const allPMPVouchers = data?.data ? data.data : [];
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
            <Grid2 container marginY={1}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Packing Material Payment Voucher' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable<GetPMPvoucher>
                loading={isLoading}
                rows={allPMPVouchers}
                columns={PMPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
