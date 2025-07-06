import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { ILaborPaymentVoucher } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useGetAllLaborPaymentVouchers } from '@prime-fresh/purchase/modules';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useLPVoucherColumns } from './lp-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const LabourPaymentVoucherTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('labor-payment-voucher');
  const lpVoucherColumns = useLPVoucherColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: lpVoucherColumns, initialPageSize: 10 });
  const { data, isLoading, isError, error } = useGetAllLaborPaymentVouchers(queryParams);
  const allLPVouchers = data ? data : null;
  const rowCountRef = React.useRef(allLPVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allLPVouchers?.allRecords !== undefined) {
      rowCountRef.current = allLPVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allLPVouchers]);
  console.log(allLPVouchers);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () =>  navigate(PURCHASE_ROUTES.CREATE_LABOUR_CASH_VOUCHER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Labor Payment Voucher" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="lp-vouchers-col-def"
            columns={lpVoucherColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<ILaborPaymentVoucher>
        loading={isLoading}
        rows={allLPVouchers?.data || []}
        columns={lpVoucherColumns}
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
