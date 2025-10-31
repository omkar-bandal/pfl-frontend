import { useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGridApiRef } from '@mui/x-data-grid';
import { useCustomerTypeColumns } from './customer-type.columns';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Box, DialogContentText } from '@mui/material';
import { Add, Delete, DoneAll, Edit, Settings } from '@mui/icons-material';
import { adminRoutes, adminTableIds, useGetAllCustomerTypes } from '@prime-fresh/admin/modules';
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
} from '@prime-fresh/shared/components';

export const CustomerTypeTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const customerTypeColumns = useCustomerTypeColumns(navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: adminTableIds.CUSTOMER_TYPE_TABLE_ID,
    createPath: adminRoutes.CREATE_CUSTOMER_TYPE,
    editPath: adminRoutes.UPDATE_CUSTOMER_TYPE,
  };

  const { handleCreate, handleEdit, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: customerTypeColumns,
    initialPageSize: 10,
    tableId: adminTableIds.CUSTOMER_TYPE_TABLE_ID,
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
      tableConfig.handleToggleCheckboxSelection,
      tableConfig.openColumnVisibilityPanel,
    ]
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllCustomerTypes(tableConfig.queryParams, debouncedSearch);
  const customerType = data ? data : null;

  const rowCountRef = useRef(customerType?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (customerType?.allRecords !== undefined) {
      rowCountRef.current = customerType.allRecords;
    }
    return rowCountRef.current;
  }, [customerType]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={adminTableIds.CUSTOMER_TYPE_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Customer Types"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="customer-type-col-def"
        columns={customerTypeColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable
        apiRef={apiRef}
        loading={isLoading}
        rows={customerType?.data || []}
        columns={customerTypeColumns}
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
        dialogKey={adminTableIds.CUSTOMER_TYPE_TABLE_ID}
        dialogTitle="Delete Customer Type"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
