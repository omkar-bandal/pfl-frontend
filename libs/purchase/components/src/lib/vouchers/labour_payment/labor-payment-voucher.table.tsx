import React from 'react'
import { Box, Grid2} from '@mui/material'
import { useGridApiRef } from '@mui/x-data-grid'
import { GetLPvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllLaborPaymentVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, DataTable, PageTitle, toast } from '@prime-fresh/ui_shared'
import { useNavigate } from 'react-router-dom'
import { LPVoucherListCols } from './labor-payment-voucher.columns'

export const LabourPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const apiRef = useGridApiRef();
    const { data, isLoading, isError, error } = useGetAllLaborPaymentVouchers();
    const allLPVouchers = data?.data ? data.data : [];
    console.log(allLPVouchers)

    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])

    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_LABOUR_CASH_VOUCHER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Labor Payment Voucher' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{display: 'flex', justifyContent: "flex-end", alignItems: "center"}}>
                    <AddNewButton handleClick={handleCreate} />
                </Grid2>
            </Grid2>
            <DataTable<GetLPvoucher>
                loading={isLoading}
                rows={allLPVouchers}
                columns={LPVoucherListCols()}
                apiRef={apiRef}
            />
        </Box>
    )
}
