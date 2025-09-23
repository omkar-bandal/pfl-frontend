import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { IDeliveryChallanTypeCustomer } from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { dcTypeCustomerColumns } from './dc-type-customer.column';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import {
  dataTableIds,
  PURCHASE_ROUTES,
  useDeleteMultipleDCTypeCustomers,
  useGetAllDCTypeCustomers,
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

export const DCTypeCustomerTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('delivery-challan');

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.DC_TYPE_CUSTOMER_TABLE_ID,
    createPath: PURCHASE_ROUTES.CREATE_DC_TYPE_CUSTOMER,
    editPath: PURCHASE_ROUTES.UPDATE_DC_TYPE_CUSTOMER,
    viewPath: PURCHASE_ROUTES.VIEW_DC_TYPE_CUSTOMER,
  };

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: dcTypeCustomerColumns,
    initialPageSize: 10,
    tableId: dataTableIds.GRN_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllDCTypeCustomers(tableConfig.queryParams, debouncedSearch);
  const allDCTypeCustomers = data ? data : null;

  const rowCountRef = React.useRef(allDCTypeCustomers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDCTypeCustomers?.allRecords !== undefined) {
      rowCountRef.current = allDCTypeCustomers.allRecords;
    }
    return rowCountRef.current;
  }, [allDCTypeCustomers]);

  useErrorHandler(isError, error);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleDCTypeCustomers();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a delivery challan to delete.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Delivery challan deleted');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_CUSTOMER);
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
        key={dataTableIds.DC_TYPE_CUSTOMER_TABLE_ID}
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
        popoverId="dc-type-customer-col-def"
        columns={dcTypeCustomerColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IDeliveryChallanTypeCustomer>
        apiRef={apiRef}
        loading={isLoading}
        rows={allDCTypeCustomers?.data || []}
        columns={dcTypeCustomerColumns}
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
        dialogKey={dataTableIds.DC_TYPE_CUSTOMER_TABLE_ID}
        dialogTitle="Delete Delivery Challan"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
