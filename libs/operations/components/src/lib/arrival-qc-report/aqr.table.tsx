import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { operationsRoutes, useGetAllAQRs } from '@prime-fresh/operations/modules';
import { IAQR } from '@prime-fresh/services';
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
import { useAQRColumns } from './aqr.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

export const AQRTable = () => {
  const TABLE_ID = 'aqr-table';
  const apiRef = useGridApiRef();
  const navigate = useNavigate();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('aqr');
  const aqrColumns = useAQRColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_AQR,
    editPath: operationsRoutes.UPDATE_AQR,
    viewPath: operationsRoutes.VIEW_AN_AQR,
  };

  const tableConfig = useDataTableFunctions({
    columnDef: aqrColumns,
    initialPageSize: 10,
    tableId: TABLE_ID,
  });

  const { handleCreate, handleEdit, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllAQRs(tableConfig.queryParams, debouncedSearch);
  const aqrs = data ? data : null;

  const rowCountRef = React.useRef(aqrs?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (aqrs?.allRecords !== undefined) {
      rowCountRef.current = aqrs.allRecords;
    }
    return rowCountRef.current;
  }, [aqrs]);

  useErrorHandler(isError, error);

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a AQR to edit.');
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
      toast.info('Please select AQR to delete.');
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
      //   visible: canDelete,
      // },
    ],
    []
  );

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Arrival Quality Reports"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="aqrs-col-def"
        columns={aqrColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IAQR>
        apiRef={apiRef}
        loading={isLoading}
        rows={aqrs?.data || []}
        columns={aqrColumns}
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
        dialogTitle="Delete AQR"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
