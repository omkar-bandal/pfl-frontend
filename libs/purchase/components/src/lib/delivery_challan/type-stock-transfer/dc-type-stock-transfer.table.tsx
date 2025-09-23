import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { dcTypeStockTransferColumns } from './dc-type-stock-transfer.column';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { IDeliveryChallanTypeStockTransfer } from '@prime-fresh/purchase_api';
import {
  dataTableIds,
  PURCHASE_ROUTES,
  useDeleteMultipleDCTypeStockTransfer,
  useGetAllDCTypeStockTransfers,
} from '@prime-fresh/purchase/modules';
import {
  ColumnVisibilityPanel,
  DataGridTable,
  DialogContainer,
  TableButtonConfig,
  TableHeader,
  TableNavActionsConfig,
  toast,
  useDataTableFunctions,
  useErrorHandler,
  useTableActions,
  useTableUI,
} from '@prime-fresh/ui_shared';

export const DCTypeStockTransferTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('delivery-challan');

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.DC_TYPE_STOCK_TRANSFER_TABLE_ID,
    createPath: PURCHASE_ROUTES.CREATE_DC_TYPE_STOCK_TRANSFER,
    editPath: PURCHASE_ROUTES.UPDATE_DC_TYPE_STOCK_TRANSFER,
    viewPath: PURCHASE_ROUTES.VIEW_DC_TYPE_STOCK_TRANSFER,
  };

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: dcTypeStockTransferColumns,
    initialPageSize: 10,
    tableId: dataTableIds.DC_TYPE_STOCK_TRANSFER_TABLE_ID,
  });

  const buttonConfig: TableButtonConfig[] = useMemo(
    () => [
      {
        icon: <DoneAll />,
        label: 'Select',
        color: 'secondary',
        onClick: tableConfig.handleToggleCheckboxSelection,
        toolTipText: toolTipText.SELECT_BTN,
        visible: true,
      },
      {
        icon: <Edit />,
        label: 'Edit',
        color: 'info',
        onClick: handleEditByDocumentId,
        toolTipText: toolTipText.EDIT_BTN,
        visible: canEdit,
      },
      {
        icon: <Visibility />,
        label: 'View',
        color: 'warning',
        onClick: handleViewByDocumentId,
        toolTipText: toolTipText.VIEW_BTN,
        visible: canView,
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: handleDelete,
        toolTipText: toolTipText.DELETE_BTN,
        visible: canDelete,
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: handleCreate,
        toolTipText: toolTipText.ADD_NEW_BTN,
        visible: true,
      },
      {
        icon: <Settings />,
        label: 'Column',
        color: 'primary',
        onClick: tableConfig.openColumnVisibilityPanel,
        toolTipText: toolTipText.COLUMN_BTN,
        visible: true,
      },
    ],
    []
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllDCTypeStockTransfers(tableConfig.queryParams, debouncedSearch);
  const allDCTypeStockTransfer = data ? data : null;

  const rowCountRef = React.useRef(allDCTypeStockTransfer?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDCTypeStockTransfer?.allRecords !== undefined) {
      rowCountRef.current = allDCTypeStockTransfer.allRecords;
    }
    return rowCountRef.current;
  }, [allDCTypeStockTransfer]);

  useErrorHandler(isError, error);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleDCTypeStockTransfer();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a delivery challan to delete.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Delivery challan deleted');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting delivery challan');
        });
    } else {
      toast.info('Please select delivery challan to delete.');
    }
  }, [apiRef, mutateAsync, navigate, toast]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={dataTableIds.DC_TYPE_STOCK_TRANSFER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Delivery Challan"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="dc-type-stock-transfer-col-def"
        columns={dcTypeStockTransferColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IDeliveryChallanTypeStockTransfer>
        apiRef={apiRef}
        loading={isLoading}
        rows={allDCTypeStockTransfer?.data || []}
        columns={dcTypeStockTransferColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={tableConfig.paginationModel}
        onPaginationModelChange={tableConfig.handlePaginationChange}
        sortModel={tableConfig.sortModel}
        onSortModelChange={tableConfig.handleSortingChange}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        checkboxSelection={tableConfig.enableCheckboxSelection}
      />
      <DialogContainer
        dialogKey={dataTableIds.DC_TYPE_STOCK_TRANSFER_TABLE_ID}
        dialogTitle="Delete Delivery Challan"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
