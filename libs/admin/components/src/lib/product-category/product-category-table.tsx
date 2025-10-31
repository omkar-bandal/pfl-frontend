import { useMemo, useRef } from 'react';
import { GetProductCategory } from '@prime-fresh/services';
import { useProductCategoryColumns } from './product-category.columns';
import { useGridApiRef } from '@mui/x-data-grid';
import { Box, DialogContentText } from '@mui/material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Add, Delete, DoneAll, Edit, Settings } from '@mui/icons-material';
import { adminRoutes, adminTableIds, useGetAllProductCategories } from '@prime-fresh/admin/modules';
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
import { useNavigate } from 'react-router-dom';

export const ProductCatTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const productCategoryColumns = useProductCategoryColumns(navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: adminTableIds.PRODUCT_CAT_TABLE_ID,
    createPath: adminRoutes.CREATE_PRODUCT_CAT,
    editPath: adminRoutes.UPDATE_PRODUCT_CAT,
  };

  const { handleCreate, handleEdit, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: productCategoryColumns,
    initialPageSize: 10,
    tableId: adminTableIds.PRODUCT_CAT_TABLE_ID,
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
        onClick: handleEdit,
        toolTipText: toolTipText.EDIT_BTN,
        visible: isMobile,
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

  const { data, isLoading, error, isError } = useGetAllProductCategories(tableConfig.queryParams, debouncedSearch);
  const productCategories = data ? data : null;

  const rowCountRef = useRef(productCategories?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (productCategories?.allRecords !== undefined) {
      rowCountRef.current = productCategories.allRecords;
    }
    return rowCountRef.current;
  }, [productCategories]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={adminTableIds.PRODUCT_CAT_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Product Categories"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="products-category-col-def"
        columns={productCategoryColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<GetProductCategory>
        apiRef={apiRef}
        loading={isLoading}
        rows={productCategories?.data || []}
        columns={productCategoryColumns}
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
        dialogKey={adminTableIds.PRODUCT_CAT_TABLE_ID}
        dialogTitle="Delete Product Category"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
