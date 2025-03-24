import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetMCvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllMultiCashVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from 'react-router-dom'
import { useMCVoucherColumns } from './multi-cash-voucher.columns'

export const MultipleCashVoucherTable = () => {
    const navigate = useNavigate();
    const mcVoucherColumns = useMCVoucherColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({columnDef: mcVoucherColumns});

    const { data, isLoading, isError, error } = useGetAllMultiCashVouchers();
    const allMCVouchers = data?.data ? data.data : [];

    React.useEffect(() => {
        if (isError) {
            toast.error(error?.message || 'Error occured please refresh the page.')
        }
    }, [isError, error])
    const handleCreate = () => {
        navigate(PURCHASE_ROUTES.CREATE_MULT_CASH_VOUCHER);
    }
    return (
        <Box sx={{ flex: 1 }}>
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Multiple Cash Voucher' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="mc-vouchers-col-def"
                        columns={mcVoucherColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetMCvoucher>
                mode="client"
                loading={isLoading}
                rows={allMCVouchers}
                columns={mcVoucherColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}
