import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IDealSlip } from '@prime-fresh/services';
import { operationsRoutes, useDeleteMultipleDealSlips, useGetAllDealSlips } from '@prime-fresh/operations/modules';
import {
  ColumnVisibilityPanel,
  DataGridTable,
  DialogContainer,
  TableButtonConfig,
  TableHeader,
  TableNavActionsConfig,
  toast,
  useDataTableFunctions,
  useTableActions,
  useTableUI,
} from '@prime-fresh/shared/components';
import { usePermission } from '@prime-fresh/modules';
import { Add, Delete, Edit, Settings, Visibility } from '@mui/icons-material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useDealSlipColumns } from './deal-slip.columns';
import { useGridApiRef } from '@mui/x-data-grid';

export const DealSlipTable = () => {
  const TABLE_ID = 'deal-slip-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('deal-slip');
  const dealSlipColumns = useDealSlipColumns(canEdit, canView, navigate);
  console.log('can Edit:', canEdit);
  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: operationsRoutes.CREATE_DEAL_SLIP,
    editPath: operationsRoutes.UPDATE_DEAL_SLIP,
    viewPath: operationsRoutes.VIEW_A_DEAL_SLIP,
  };
  const { handleCreate, handleEditByDocumentId, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );
  const tableConfig = useDataTableFunctions({ columnDef: dealSlipColumns, initialPageSize: 10, tableId: TABLE_ID });

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
  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllDealSlips(tableConfig.queryParams, debouncedSearch);
  const allDealSlip = data ? data : null;
  console.log('All Dealslip Data: ', allDealSlip);

  const rowCountRef = React.useRef(allDealSlip?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDealSlip?.allRecords !== undefined) {
      rowCountRef.current = allDealSlip.allRecords;
    }
    return rowCountRef.current;
  }, [allDealSlip]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleDealSlips();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a deal slip to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Deal slip deleted');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_DEAL_SLIP);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting deal slip');
        });
    } else {
      toast.info('Please select deal slip to delete.');
    }
  }, [apiRef, mutateAsync, navigate, toast]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={TABLE_ID}
        isMobile={isMobile}
        pageTitle="Deal Slip"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="deal-slips-col-def"
        columns={dealSlipColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IDealSlip>
        apiRef={apiRef}
        loading={isLoading}
        rows={allDealSlip?.data || []}
        columns={dealSlipColumns}
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
        dialogTitle="Delete Deal Slip"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
