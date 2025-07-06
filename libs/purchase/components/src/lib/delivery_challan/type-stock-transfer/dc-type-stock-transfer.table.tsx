import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { PURCHASE_ROUTES, useGetAllDCTypeStockTransfers } from '@prime-fresh/purchase/modules';
import { IDeliveryChallanTypeStockTransfer } from '@prime-fresh/purchase_api';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useDCTypeStockTransferColumns } from './dc-type-stock-transfer.column';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const DCTypeStockTransferTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('delivery-challan');
  const dcTypeStockTransferColumns = useDCTypeStockTransferColumns(canEdit, canView);

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
  } = useDataTable({ columnDef: dcTypeStockTransferColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllDCTypeStockTransfers(queryParams);
  const allDCTypeStockTransfer = data ? data : null;

  const rowCountRef = React.useRef(allDCTypeStockTransfer?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDCTypeStockTransfer?.allRecords !== undefined) {
      rowCountRef.current = allDCTypeStockTransfer.allRecords;
    }
    return rowCountRef.current;
  }, [allDCTypeStockTransfer]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_DC_TYPE_STOCK_TRANSFER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery challan for stock transfer" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="dc-type-stock-transfer-col-def"
            columns={dcTypeStockTransferColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<IDeliveryChallanTypeStockTransfer>
        loading={isLoading}
        rows={allDCTypeStockTransfer?.data || []}
        columns={dcTypeStockTransferColumns}
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
