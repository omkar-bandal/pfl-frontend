import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { laborRegisterColumns } from './labor-register.column';
import { ILaborRegistration } from '@prime-fresh/inventory_api';
import { inventoryRouteConstants, useGetAllLaborRegistration } from '@prime-fresh/inventory/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { usePermission } from '@prime-fresh/modules';
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

export const LaborRegisterTable = () => {
  const TABLE_ID = 'labor-register-table';
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('labor-register');

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: inventoryRouteConstants.CREATE_LABOUR_REGISTER,
    editPath: inventoryRouteConstants.UPDATE_LABOUR_REGISTER,
    viewPath: inventoryRouteConstants.VIEW_LABOUR_REGISTER,
  };

  const tableConfig = useDataTableFunctions({
    columnDef: laborRegisterColumns,
    initialPageSize: 10,
    tableId: TABLE_ID,
  });

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const debouncedSearch = useDebounce(tableConfig.search, 1000);
  const { data, isLoading, isError, error } = useGetAllLaborRegistration(tableConfig.queryParams, debouncedSearch);
  const registredLabors = data ? data : null;

  const rowCountRef = React.useRef(registredLabors?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (registredLabors?.allRecords !== undefined) {
      rowCountRef.current = registredLabors.allRecords;
    }
    return rowCountRef.current;
  }, [registredLabors]);

  useErrorHandler(isError, error);

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a labor register data to edit.');
    } else if (selectedRows.length > 0) {
      // mutateAsync(selectedRows as Array<string>)
      //   .then(() => {
      //     toast.success(deleteRes ? deleteRes.message : 'Inward register deleted');
      //     setTimeout(() => {
      //       navigate(inventoryRouteConstants.GET_ALL_INWARD_REGISTERS);
      //     }, 2000);
      //   })
      //   .catch(() => {
      //     toast.error(deleteError ? deleteError.message : 'Error while deleting Ineard Register');
      //   });
    } else {
      toast.info('Please select labor register data to delete.');
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
        onClick: handleEdit,
        toolTipText: toolTipText.EDIT_BTN,
        visible: canEdit,
      },
      {
        icon: <Visibility />,
        label: 'View',
        color: 'warning',
        onClick: handleView,
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

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Registered Labors"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="labor-registration-col-def"
        columns={laborRegisterColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<ILaborRegistration>
        apiRef={apiRef}
        loading={isLoading}
        rows={registredLabors?.data || []}
        columns={laborRegisterColumns}
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
        dialogTitle="Delete Inward Register"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
