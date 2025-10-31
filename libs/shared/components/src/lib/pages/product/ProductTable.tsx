/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useRef } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useProductColumns } from './product.columns';
import { IProduct } from '@prime-fresh/services';
import { useGridApiRef } from '@mui/x-data-grid';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { sharedRoutes, sharedTableIds, toolTipText, useDebounce, useGetAllProducts } from '@prime-fresh/shared/modules';
import {
  DataGridTable,
  ColumnVisibilityPanel,
  useTableUI,
  TableNavActionsConfig,
  useTableActions,
  useDataTableFunctions,
  TableButtonConfig,
  useErrorHandler,
  DialogContainer,
  TableHeader,
} from '../../components';
import { useNavigate } from 'react-router-dom';

export function ProductTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const productColumns = useProductColumns(navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: sharedTableIds.PRODUCT_TABLE_ID,
    createPath: sharedRoutes.CREATE_PRODUCT,
    editPath: sharedRoutes.UPDATE_PRODUCT,
    viewPath: sharedRoutes.VIEW_A_PRODUCT,
  };
  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);
  const tableConfig = useDataTableFunctions({
    columnDef: productColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.PRODUCT_TABLE_ID,
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

  const { data, isLoading, error, isError } = useGetAllProducts(tableConfig.queryParams, debouncedSearch);
  const allProducts = data ? data : null;

  const rowCountRef = useRef(allProducts?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allProducts?.allRecords !== undefined) {
      rowCountRef.current = allProducts.allRecords;
    }
    return rowCountRef.current;
  }, [allProducts]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={sharedTableIds.PRODUCT_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Products"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="products-col-def"
        columns={productColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IProduct>
        apiRef={apiRef}
        loading={isLoading}
        rows={allProducts?.data || []}
        columns={productColumns}
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
        dialogKey={sharedTableIds.PRODUCT_TABLE_ID}
        dialogTitle="Delete Product Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
}
