import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { IMultiCashVoucher } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useGetAllMultiCashVouchers } from '@prime-fresh/purchase/modules';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useMCVoucherColumns } from './mc-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const MultipleCashVoucherTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('multi-cash-voucher');
  const mcVoucherColumns = useMCVoucherColumns(canEdit, canView);
  const {
    paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: mcVoucherColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllMultiCashVouchers(queryParams);
  const allMCVouchers = data ? data : null;
  const rowCountRef = React.useRef(allMCVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allMCVouchers?.allRecords !== undefined) {
      rowCountRef.current = allMCVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allMCVouchers]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  
  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_MULT_CASH_VOUCHER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Multiple Cash Voucher" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
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
      <DataGridTable<IMultiCashVoucher>
        loading={isLoading}
        rows={allMCVouchers?.data || []}
        columns={mcVoucherColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
