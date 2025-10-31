import { useMemo, useRef } from 'react';
import { useUOMColumns } from './uom.columns';
import { GetUOM } from '@prime-fresh/services';
import { useGetAllUOMs } from '@prime-fresh/admin/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { Box, DialogContentText } from '@mui/material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Add, Delete, DoneAll, Edit, Settings } from '@mui/icons-material';
import { adminRoutes, adminTableIds } from '@prime-fresh/admin/modules';
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

export const UOMTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const uomColumns = useUOMColumns(navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: adminTableIds.UOM_TABLE_ID,
    createPath: adminRoutes.CREATE_UOM,
    editPath: adminRoutes.UPDATE_UOM,
  };

  const { handleCreate, handleEdit, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: uomColumns,
    initialPageSize: 10,
    tableId: adminTableIds.UOM_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllUOMs(tableConfig.queryParams, debouncedSearch);
  const UOMs = data ? data : null;

  const rowCountRef = useRef(UOMs?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (UOMs?.allRecords !== undefined) {
      rowCountRef.current = UOMs.allRecords;
    }
    return rowCountRef.current;
  }, [UOMs]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={adminTableIds.UOM_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Unit of Measures"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="uom-col-def"
        columns={uomColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<GetUOM>
        apiRef={apiRef}
        loading={isLoading}
        rows={UOMs?.data || []}
        columns={uomColumns}
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
        dialogKey={adminTableIds.UOM_TABLE_ID}
        dialogTitle="Delete UoM"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
