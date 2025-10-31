import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { IMultiCashVoucher } from '@prime-fresh/services';
import { useNavigate } from 'react-router-dom';
import { useMCVoucherColumns } from './mc-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import {
  dataTableIds,
  operationsRoutes,
  useDeleteMultipleMultiCashVouchers,
  useGetAllMultiCashVouchers,
} from '@prime-fresh/operations/modules';
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
} from '@prime-fresh/shared/components';

export const MultipleCashVoucherTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('multi-cash-voucher');
  const mcVoucherColumns = useMCVoucherColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.MC_VOUCHER_TABLE_ID,
    createPath: operationsRoutes.CREATE_MULT_CASH_VOUCHER,
    editPath: operationsRoutes.UPDATE_MULT_CASH_VOUCHER,
    viewPath: operationsRoutes.VIEW_A_MULT_CASH_VOUCHER,
  };

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: mcVoucherColumns,
    initialPageSize: 10,
    tableId: dataTableIds.MC_VOUCHER_TABLE_ID,
  });

  const buttonConfig: TableButtonConfig[] = useMemo(
    () => [
      // {
      //   icon: <DoneAll />,
      //   label: 'Select',
      //   color: 'secondary',
      //   onClick: tableConfig.handleToggleCheckboxSelection,
      //   toolTipText: toolTipText.SELECT_BTN,
      //   visible: true,
      // },
      {
        icon: <Edit />,
        label: 'Edit',
        color: 'info',
        onClick: handleEditByDocumentId,
        toolTipText: toolTipText.EDIT_BTN,
        visible: canEdit && isMobile,
      },
      {
        icon: <Visibility />,
        label: 'View',
        color: 'warning',
        onClick: handleViewByDocumentId,
        toolTipText: toolTipText.VIEW_BTN,
        visible: canView && isMobile,
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
        color: 'secondary',
        onClick: tableConfig.openColumnVisibilityPanel,
        toolTipText: toolTipText.COLUMN_BTN,
        visible: true,
      },
    ],
    []
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllMultiCashVouchers(tableConfig.queryParams, debouncedSearch);
  const allMCVouchers = data ? data : null;
  console.log('All MC vouchers:', allMCVouchers);

  const rowCountRef = React.useRef(allMCVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allMCVouchers?.allRecords !== undefined) {
      rowCountRef.current = allMCVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allMCVouchers]);

  useErrorHandler(isError, error);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleMultiCashVouchers();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a voucher to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Voucher deleted');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_MULT_CASH_VOUCHER);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting voucher');
        });
    } else {
      toast.info('Please select voucher to delete.');
    }
  }, [apiRef, mutateAsync, navigate, toast]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={dataTableIds.MC_VOUCHER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Multiple Voucher"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="mc-vouchers-col-def"
        columns={mcVoucherColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IMultiCashVoucher>
        apiRef={apiRef}
        loading={isLoading}
        rows={allMCVouchers?.data || []}
        columns={mcVoucherColumns}
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
        dialogKey={dataTableIds.MC_VOUCHER_TABLE_ID}
        dialogTitle="Delete Multi Cash Payment Voucher"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
