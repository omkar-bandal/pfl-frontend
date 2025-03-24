import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetPMPvoucher } from '@prime-fresh/purchase_api'
import { PURCHASE_ROUTES, useGetAllPackingMeterialPaymentVouchers } from '@prime-fresh/purchase/modules'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from 'react-router-dom'
import { usePMPVoucherColumns } from './packing-material-payment-voucher.columns'

export const PackingMaterialPaymentVoucherTable = () => {
    const navigate = useNavigate();
    const pmpVoucherColumns = usePMPVoucherColumns();
    const {
        columnVisibilityModel,
        displayColumnVisibilityPanel,
        handleColumnVisibilityModelChange,
        handleCloseColumnVisibilityPanel,
        handleOpenColumnVisibilityPanel
    } = useDataTable({ columnDef: pmpVoucherColumns });
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
            <Grid2 container marginY={2}>
                <Grid2 size={{ xs: 12, md: 8 }}>
                    <PageTitle pagetitle='Packing Material Payment Voucher' />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="pmp-vouchers-col-def"
                        columns={pmpVoucherColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetPMPvoucher>
                mode="client"
                loading={isLoading}
                rows={allPMPVouchers}
                columns={pmpVoucherColumns}
                columnVisibilityModel={columnVisibilityModel}
            />
        </Box>
    )
}
