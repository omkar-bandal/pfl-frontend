/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useMemo } from 'react';
import { useGridApiRef } from '@mui/x-data-grid';
import { useCustomerColumns } from './customer-columns';
import { ICustomer } from '@prime-fresh/services';
import { Box, DialogContentText } from '@mui/material';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import {
  sharedRoutes,
  sharedTableIds,
  toolTipText,
  useDebounce,
  useGetAllCustomers,
} from '@prime-fresh/shared/modules';
import {
  ColumnVisibilityPanel,
  DataGridTable,
  DialogContainer,
  TableButtonConfig,
  TableHeader,
  TableNavActionsConfig,
  useDataTableFunctions,
  useErrorHandler,
  useTableActions,
  useTableUI,
} from '../../components';
import { useNavigate } from 'react-router-dom';

export const CustomerTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile, theme } = useTableUI();
  const customerColumns = useCustomerColumns(theme, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: sharedTableIds.CUSTOMER_TABLE_ID,
    createPath: sharedRoutes.CREATE_CUSTOMER,
    editPath: sharedRoutes.UPDATE_CUSTOMER,
    viewPath: sharedRoutes.VIEW_A_CUSTOMER,
  };

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: customerColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.CUSTOMER_TABLE_ID,
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
      // {
      //   icon: <Edit />,
      //   label: 'Edit',
      //   color: 'info',
      //   onClick: handleEdit,
      //   toolTipText: toolTipText.EDIT_BTN,
      //   visible: isMobile,
      // },
      // {
      //   icon: <Visibility />,
      //   label: 'View',
      //   color: 'warning',
      //   onClick: handleView,
      //   toolTipText: toolTipText.VIEW_BTN,
      //   visible: isMobile,
      // },
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
      // {
      //   icon: <Delete />,
      //   label: 'Delete',
      //   color: 'error',
      //   onClick: handleDelete,
      //   toolTipText: toolTipText.DELETE_BTN,
      //   visible: true,
      // },
    ],
    [
      handleCreate,
      handleDelete,
      handleEdit,
      handleView,
      tableConfig.handleToggleCheckboxSelection,
      tableConfig.openColumnVisibilityPanel,
    ]
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllCustomers(tableConfig.queryParams, debouncedSearch);
  const allCustomers = data ? data : null;

  const rowCountRef = useRef(allCustomers?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allCustomers?.allRecords !== undefined) {
      rowCountRef.current = allCustomers.allRecords;
    }
    return rowCountRef.current;
  }, [allCustomers]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={sharedTableIds.CUSTOMER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Registered Customers"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="customers-col-def"
        columns={customerColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<ICustomer>
        apiRef={apiRef}
        loading={isLoading}
        rows={allCustomers?.data || []}
        columns={customerColumns}
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
        dialogKey={sharedTableIds.CUSTOMER_TABLE_ID}
        dialogTitle="Delete Customer Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
