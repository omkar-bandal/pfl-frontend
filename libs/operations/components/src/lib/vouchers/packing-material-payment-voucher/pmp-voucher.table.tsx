import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { usePMPVoucherColumns } from './pmp-voucher.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { IPackingMaterialPaymentVoucher } from '@prime-fresh/services';
import {
  dataTableIds,
  operationsRoutes,
  useDeleteMultiplePackingMeterialPaymentVouchers,
  useGetAllPackingMeterialPaymentVouchers,
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

export const PackingMaterialPaymentVoucherTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('packaging-material-voucher');
  const pmpVoucherColumns = usePMPVoucherColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.PMP_VOUCHER_TABLE_ID,
    createPath: operationsRoutes.CREATE_PACKING_MATERIAL_VOUCHER,
    editPath: operationsRoutes.UPDATE_PACKING_MATERIAL_VOUCHER,
    viewPath: operationsRoutes.VIEW_A_PACKING_MATERIAL_VOUCHER,
  };

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: pmpVoucherColumns,
    initialPageSize: 10,
    tableId: dataTableIds.PMP_VOUCHER_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllPackingMeterialPaymentVouchers(
    tableConfig.queryParams,
    debouncedSearch
  );
  const allPMPVouchers = data ? data : null;

  const rowCountRef = React.useRef(allPMPVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allPMPVouchers?.allRecords !== undefined) {
      rowCountRef.current = allPMPVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allPMPVouchers]);

  useErrorHandler(isError, error);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultiplePackingMeterialPaymentVouchers();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a voucher to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Voucher deleted');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_PACKING_MATERIAL_VOUCHER);
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
        key={dataTableIds.PMP_VOUCHER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Packing Material Payment Voucher"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="pmp-vouchers-col-def"
        columns={pmpVoucherColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IPackingMaterialPaymentVoucher>
        apiRef={apiRef}
        loading={isLoading}
        rows={allPMPVouchers?.data || []}
        columns={pmpVoucherColumns}
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
        dialogKey={dataTableIds.PMP_VOUCHER_TABLE_ID}
        dialogTitle="Delete Packing Material Payment Voucher"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
