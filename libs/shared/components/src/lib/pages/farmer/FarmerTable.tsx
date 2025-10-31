import { useMemo, useRef } from 'react';
import { IFarmer } from '@prime-fresh/services';
import { useGridApiRef } from '@mui/x-data-grid';
import { Box, DialogContentText } from '@mui/material';
import { useFarmerColumns } from './farmer-columns';
import { Add, Delete, Edit, Settings, Visibility } from '@mui/icons-material';
import { sharedRoutes, sharedTableIds, toolTipText, useDebounce, useGetAllFarmers } from '@prime-fresh/shared/modules';
import {
  DataGridTable,
  ColumnVisibilityPanel,
  useTableUI,
  TableNavActionsConfig,
  useDataTableFunctions,
  TableButtonConfig,
  useTableActions,
  useErrorHandler,
  DialogContainer,
  TableHeader,
} from '../../components';
import { useNavigate } from 'react-router-dom';

export const FarmerTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { isMobile, theme } = useTableUI();
  const farmerColumns = useFarmerColumns(theme, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: sharedTableIds.FARMER_TABLE_ID,
    createPath: sharedRoutes.CREATE_FARMER,
    editPath: sharedRoutes.UPDATE_FARMER,
    viewPath: sharedRoutes.VIEW_A_FARMER,
  };

  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);
  const tableConfig = useDataTableFunctions({
    columnDef: farmerColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.FARMER_TABLE_ID,
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

  const { data, isLoading, isError, error } = useGetAllFarmers(tableConfig.queryParams, debouncedSearch);
  const allFarmers = data ? data : null;

  const rowCountRef = useRef(allFarmers?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (allFarmers?.allRecords !== undefined) {
      rowCountRef.current = allFarmers.allRecords;
    }
    return rowCountRef.current;
  }, [allFarmers]);

  useErrorHandler(isError, error);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={sharedTableIds.FARMER_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Registered Farmers"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="farmers-col-def"
        columns={farmerColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IFarmer>
        apiRef={apiRef}
        loading={isLoading}
        rows={allFarmers?.data || []}
        columns={farmerColumns}
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
        dialogKey={sharedTableIds.FARMER_TABLE_ID}
        dialogTitle="Delete Farmer Data"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
