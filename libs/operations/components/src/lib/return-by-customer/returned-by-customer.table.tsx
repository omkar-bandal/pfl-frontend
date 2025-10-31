import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, DialogContentText } from '@mui/material';
import { IReturnByCustomer } from '@prime-fresh/services';
import { operationsRoutes, useGetAllReturnedByCustomers } from '@prime-fresh/operations/modules';
import { useReturedByCustomerColumns } from './returned-by-customer.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
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

export const ReturnedByCustomerTable = () => {
  const TABLE_ID = 'rbc-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('return-by-customer');
  const returedByCustomerColumns = useReturedByCustomerColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_RBC,
    editPath: operationsRoutes.UPDATE_RBC,
    viewPath: operationsRoutes.VIEW_A_RBC,
  };

  const tableConfig = useDataTableFunctions({
    columnDef: returedByCustomerColumns,
    initialPageSize: 10,
    tableId: TABLE_ID,
  });

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllReturnedByCustomers(tableConfig.queryParams, debouncedSearch);
  const rbcData = data ? data : null;

  const rowCountRef = React.useRef(rbcData?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (rbcData?.allRecords !== undefined) {
      rowCountRef.current = rbcData.allRecords;
    }
    return rowCountRef.current;
  }, [rbcData]);

  useErrorHandler(isError, error);

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a retrun by customer data to edit.');
    } else if (selectedRows.length > 0) {
      // mutateAsync(selectedRows as Array<string>)
      //   .then(() => {
      //     toast.success(deleteRes ? deleteRes.message : 'Inward register deleted');
      //     setTimeout(() => {
      //       navigate(operationsRoutes.GET_ALL_INWARD_REGISTERS);
      //     }, 2000);
      //   })
      //   .catch(() => {
      //     toast.error(deleteError ? deleteError.message : 'Error while deleting Ineard Register');
      //   });
    } else {
      toast.info('Please select return by customer data to delete.');
    }
  }, [
    apiRef,
    {
      /*mutateAsync, navigate,*/
    },
    toast,
  ]);

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
        onClick: handleEdit,
        toolTipText: toolTipText.EDIT_BTN,
        visible: canEdit && isMobile,
      },
      {
        icon: <Visibility />,
        label: 'View',
        color: 'warning',
        onClick: handleView,
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

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Returned By Customers"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="rbcs-col-def"
        columns={returedByCustomerColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IReturnByCustomer>
        apiRef={apiRef}
        loading={isLoading}
        rows={rbcData?.data || []}
        columns={returedByCustomerColumns}
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
        dialogKey={TABLE_ID}
        dialogTitle="Delete Return By Customer Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
