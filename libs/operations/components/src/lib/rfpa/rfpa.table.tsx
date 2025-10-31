/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo } from 'react';
import { IRFPA } from '@prime-fresh/services';
import { Box, DialogContentText } from '@mui/material';
import { usePermission } from '@prime-fresh/modules';
import { useRfpaColumns } from './rfpa.columns';
import { useGridApiRef } from '@mui/x-data-grid';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { operationsRoutes, useDeleteMultipleRFPA, useGetAllRFPAs } from '@prime-fresh/operations/modules';
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
import { useNavigate } from 'react-router-dom';

export const RFPATable = () => {
  const TABLE_ID = 'rfpa-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('rfpa');
  const rfpaColumns = useRfpaColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_RFPA,
    editPath: operationsRoutes.UPDATE_RFPA,
    viewPath: operationsRoutes.VIEW_A_RFPA,
  };

  const { handleCreate, handleEdit, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({ columnDef: rfpaColumns, initialPageSize: 10, tableId: TABLE_ID });

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
        onClick: handleViewByDocumentId,
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
    [
      canDelete,
      canEdit,
      canView,
      handleCreate,
      handleDelete,
      handleEdit,
      handleViewByDocumentId,
      tableConfig.handleToggleCheckboxSelection,
      tableConfig.openColumnVisibilityPanel,
    ]
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, error, isError, refetch } = useGetAllRFPAs(tableConfig.queryParams, debouncedSearch);
  const allRFPAs = data ? data : null;
  useErrorHandler(isError, error);

  const rowCountRef = React.useRef(allRFPAs?.allRecords || 0);

  const rowCount = React.useMemo(() => {
    if (allRFPAs?.allRecords !== undefined) {
      rowCountRef.current = allRFPAs.allRecords;
    }
    return rowCountRef.current;
  }, [allRFPAs]);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleRFPA();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    mutateAsync(selectedRows as Array<string>)
      .then(() => {
        toast.success(deleteRes ? deleteRes.message : 'RFPA deleted');
        refetch();
      })
      .catch(() => {
        toast.error(deleteError ? deleteError.message : 'Error while deleting RFPA');
      });
  }, [apiRef, mutateAsync]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Request For Purchase Approval"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="rfpas-col-def"
        columns={rfpaColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IRFPA>
        apiRef={apiRef}
        loading={isLoading}
        rows={allRFPAs?.data || []}
        columns={rfpaColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={tableConfig.paginationModel}
        onPaginationModelChange={tableConfig.handlePaginationChange}
        sortModel={tableConfig.sortModel}
        onSortModelChange={tableConfig.handleSortingChange}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        checkboxSelection={isMobile ? true : false}
      />
      <DialogContainer
        dialogKey={TABLE_ID}
        dialogTitle="Delete RFPA"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
