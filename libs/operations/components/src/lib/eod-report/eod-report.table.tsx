import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, DialogContentText } from '@mui/material';
import { useEODReportColumns } from './eod-report.column';
import { usePermission } from '@prime-fresh/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { IEODReport } from '@prime-fresh/services';
import { Add, Delete, Edit, Settings, Visibility } from '@mui/icons-material';
import { operationsRoutes, useGetAllEODReports } from '@prime-fresh/operations/modules';
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

export const EODReportTable = () => {
  const TABLE_ID = 'eod-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('eod-report');
  const eodReportColumns = useEODReportColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_EOD_REPORT,
    editPath: operationsRoutes.UPDATE_EOD_REPORT,
    viewPath: operationsRoutes.VIEW_AN_EOD_REPORT,
  };

  const tableConfig = useDataTableFunctions({
    columnDef: eodReportColumns,
    initialPageSize: 10,
    tableId: TABLE_ID,
  });

  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, error, isError } = useGetAllEODReports(tableConfig.queryParams, debouncedSearch);
  const eods = data ? data : null;

  const rowCountRef = React.useRef(eods?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (eods?.allRecords !== undefined) {
      rowCountRef.current = eods.allRecords;
    }
    return rowCountRef.current;
  }, [eods]);

  useErrorHandler(isError, error);

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a eod report to edit.');
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
      toast.info('Please select eod report to delete.');
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
        onClick: handleEditByDocumentId,
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
    []
  );

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="EOD Report"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="eods-col-def"
        columns={eodReportColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IEODReport>
        apiRef={apiRef}
        loading={isLoading}
        rows={eods?.data || []}
        columns={eodReportColumns}
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
        dialogTitle="Delete EOD Report"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
