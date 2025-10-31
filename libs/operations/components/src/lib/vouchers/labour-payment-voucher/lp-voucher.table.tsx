import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLPVoucherColumns } from './lp-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { ILaborPaymentVoucher } from '@prime-fresh/services';
import {
  dataTableIds,
  operationsRoutes,
  useDeleteMultipleLaborPaymentVouchers,
  useGetAllLaborPaymentVouchers,
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

export const LabourPaymentVoucherTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('labor-payment-voucher');
  const lpVoucherColumns = useLPVoucherColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.LP_VOUCHER_TABLE_ID,
    createPath: operationsRoutes.CREATE_LABOUR_CASH_VOUCHER,
    editPath: operationsRoutes.UPDATE_LABOUR_CASH_VOUCHER,
    viewPath: operationsRoutes.VIEW_A_LABOUR_CASH_VOUCHER,
  };

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: lpVoucherColumns,
    initialPageSize: 10,
    tableId: dataTableIds.GRN_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllLaborPaymentVouchers(tableConfig.queryParams, debouncedSearch);
  const allLPVouchers = data ? data : null;

  const rowCountRef = React.useRef(allLPVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allLPVouchers?.allRecords !== undefined) {
      rowCountRef.current = allLPVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allLPVouchers]);

  useErrorHandler(isError, error);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleLaborPaymentVouchers();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a voucher to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Voucher deleted');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_LABOUR_CASH_VOUCHER);
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
        key={dataTableIds.LP_VOUCHER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Labor Payment Voucher"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="lp-vouchers-col-def"
        columns={lpVoucherColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<ILaborPaymentVoucher>
        apiRef={apiRef}
        loading={isLoading}
        rows={allLPVouchers?.data || []}
        columns={lpVoucherColumns}
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
        dialogKey={dataTableIds.LP_VOUCHER_TABLE_ID}
        dialogTitle="Delete Labour Payment Voucher"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
