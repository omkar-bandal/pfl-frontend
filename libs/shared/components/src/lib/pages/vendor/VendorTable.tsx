import { useMemo, useRef } from 'react';
import { useGridApiRef } from '@mui/x-data-grid';
import { Box, DialogContentText } from '@mui/material';
import { useVendorColumns } from './vendor.columns';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { useGetAllVendors, sharedRoutes, sharedTableIds, toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import {
  DataGridTable,
  ColumnVisibilityPanel,
  TableNavActionsConfig,
  useTableActions,
  useDataTableFunctions,
  TableButtonConfig,
  useTableUI,
  useErrorHandler,
  DialogContainer,
  TableHeader,
} from '../../components';
import { useNavigate } from 'react-router-dom';

export function VendorTable() {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile, theme } = useTableUI();
  const vendorColumns = useVendorColumns(theme, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: sharedTableIds.VENDOR_TABLE_ID,
    createPath: sharedRoutes.CREATE_VENDOR,
    editPath: sharedRoutes.UPDATE_VENDOR,
    viewPath: sharedRoutes.VIEW_A_VENDOR,
  };

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: vendorColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.VENDOR_TABLE_ID,
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

  const { data, isError, isLoading, error } = useGetAllVendors(tableConfig.queryParams, debouncedSearch);
  const allVendors = data ? data : null;

  const rowCountRef = useRef(allVendors?.totalPages || 0);
  const rowCount = useMemo(() => {
    if (allVendors?.totalPages !== undefined) {
      rowCountRef.current = allVendors.totalPages;
    }
    return rowCountRef.current;
  }, [allVendors]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={sharedTableIds.VENDOR_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Registered Vendors"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="vendors-col-def"
        columns={vendorColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable
        apiRef={apiRef}
        loading={isLoading}
        rows={allVendors?.data || []}
        columns={vendorColumns}
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
        dialogKey={sharedTableIds.VENDOR_TABLE_ID}
        dialogTitle="Delete Vendor Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
}
