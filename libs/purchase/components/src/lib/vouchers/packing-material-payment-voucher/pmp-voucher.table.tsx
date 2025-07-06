import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { IPackingMaterialPaymentVoucher } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useGetAllPackingMeterialPaymentVouchers } from '@prime-fresh/purchase/modules';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { usePMPVoucherColumns } from './pmp-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const PackingMaterialPaymentVoucherTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('packaging-material-voucher');
  const pmpVoucherColumns = usePMPVoucherColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: pmpVoucherColumns, initialPageSize: 10 });
  const { data, isLoading, isError, error } = useGetAllPackingMeterialPaymentVouchers(queryParams);
  const allPMPVouchers = data ? data : null;
  const rowCountRef = React.useRef(allPMPVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allPMPVouchers?.allRecords !== undefined) {
      rowCountRef.current = allPMPVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allPMPVouchers]);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_PACKING_MATERIAL_VOUCHER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Packing Material Payment Voucher" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
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
      <DataGridTable<IPackingMaterialPaymentVoucher>
        loading={isLoading}
        rows={allPMPVouchers?.data || []}
        columns={pmpVoucherColumns}
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
