/* eslint-disable @nx/enforce-module-boundaries */
import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useInwardRegisterColumns } from './inward-register.column';
import { IInwardRegister } from '@prime-fresh/services';
import { operationsRoutes, useGetAllInwardRegisters } from '@prime-fresh/operations/modules';
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
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const InwardRegisterTable = () => {
  const TABLE_ID = 'inward-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('inward-register');
  const inwardRegisterColumns = useInwardRegisterColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_INWARD_REGISTER,
    editPath: operationsRoutes.UPDATE_INWARD_REGISTER,
    viewPath: operationsRoutes.VIEW_AN_INWARD_REGISTER,
  };

  const tableConfig = useDataTableFunctions({
    columnDef: inwardRegisterColumns,
    initialPageSize: 10,
    tableId: TABLE_ID,
  });

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllInwardRegisters(tableConfig.queryParams, debouncedSearch);
  const inwards = data ? data : null;

  const rowCountRef = React.useRef(inwards?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (inwards?.allRecords !== undefined) {
      rowCountRef.current = inwards.allRecords;
    }
    return rowCountRef.current;
  }, [inwards]);

  useErrorHandler(isError, error);

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a inward register to edit.');
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
      toast.info('Please select inward register to delete.');
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
        pageTitle="Inward Register"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />

      <ColumnVisibilityPanel
        popoverId="inwards-col-def"
        columns={inwardRegisterColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IInwardRegister>
        apiRef={apiRef}
        loading={isLoading}
        rows={inwards?.data || []}
        columns={inwardRegisterColumns}
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
