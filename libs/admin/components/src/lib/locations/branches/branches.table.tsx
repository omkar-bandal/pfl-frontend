import { useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBranchColumns } from './branch.columns';
import { useGridApiRef } from '@mui/x-data-grid';
import { Box, DialogContentText } from '@mui/material';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { Add, Delete, DoneAll, Edit, Settings, Visibility } from '@mui/icons-material';
import { adminRoutes, adminTableIds, useGetAllBranches } from '@prime-fresh/admin/modules';
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

export const BranchTable = () => {
  const navigate = useNavigate();
  const { branchType } = useParams<{ branchType: string }>();
  const type = branchType ? branchType : '';
  const BranchTypeLabel = useMemo(
    () =>
      type
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [type]
  );
  const apiRef = useGridApiRef();
  const { isMobile } = useTableUI();
  const branchColumns = useBranchColumns(navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: adminTableIds.BRANCH_TABLE_ID,
    createPath: `${adminRoutes.CREATE_BRANCHES}/${type}`,
    editPath: adminRoutes.UPDATE_BRANCHES,
    viewPath: adminRoutes.VIEW_A_BRANCHES,
  };

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);

  const tableConfig = useDataTableFunctions({
    columnDef: branchColumns,
    initialPageSize: 10,
    tableId: adminTableIds.BRANCH_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllBranches(type, tableConfig.queryParams, debouncedSearch);
  const branches = data ? data : null;

  const rowCountRef = useRef(branches?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (branches?.allRecords !== undefined) {
      rowCountRef.current = branches.allRecords;
    }
    return rowCountRef.current;
  }, [branches]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={adminTableIds.BRANCH_TABLE_ID}
        isMobile={isMobile}
        pageTitle={BranchTypeLabel}
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="branch-col-def"
        columns={branchColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable
        apiRef={apiRef}
        loading={isLoading}
        rows={branches?.data || []}
        columns={branchColumns}
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
        dialogKey={adminTableIds.BRANCH_TABLE_ID}
        dialogTitle="Delete Branch Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
