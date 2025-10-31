import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGRNColumns } from './grn.columns';
import { IGRN } from '@prime-fresh/services';
import { useActions, usePermission } from '@prime-fresh/modules';
import { FormikProvider, useFormik } from 'formik';
import { GRNFilterPanel } from './grn.filter-panel';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import {
  grnInitValForFilter,
  operationsRoutes,
  useDeleteMultipleGRNs,
  useGetAllGRNs,
  dataTableIds,
} from '@prime-fresh/operations/modules';
import {
  ColumnVisibilityPanel,
  DataGridTable,
  DialogBox,
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
import { Add, Delete, DoneAll, Edit, Filter, FilterAlt, Settings, Visibility } from '@mui/icons-material';

export const GRNTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { openDialogBox } = useActions();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('grn');
  const grnColumns = useGRNColumns(canEdit, canView, navigate);

  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: dataTableIds.GRN_TABLE_ID,
    createPath: operationsRoutes.CREATE_GRN,
    editPath: operationsRoutes.UPDATE_GRN,
    viewPath: operationsRoutes.VIEW_A_GRN,
  };

  const { handleCreate, handleEdit, handleViewByDocumentId, handleDelete } = useTableActions(
    apiRef,
    tableNavActionConfig
  );

  const tableConfig = useDataTableFunctions({
    columnDef: grnColumns,
    initialPageSize: 10,
    tableId: dataTableIds.GRN_TABLE_ID,
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
      // {
      //   icon: <Delete />,
      //   label: 'Delete',
      //   color: 'error',
      //   onClick: handleDelete,
      //   toolTipText: toolTipText.DELETE_BTN,
      //   visible: canDelete,
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
      //   label: 'Filter',
      //   icon: <FilterAlt />,
      //   color: 'info',
      //   onClick: () => openDialogBox(),
      //   visible: true,
      // },
    ],
    []
  );

  const debouncedSearch = useDebounce(tableConfig.search, 1000);

  const { data, isLoading, isError, error } = useGetAllGRNs(tableConfig.queryParams, debouncedSearch);
  const allGRN = data ? data : null;

  const rowCountRef = React.useRef(allGRN?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allGRN?.allRecords !== undefined) {
      rowCountRef.current = allGRN.allRecords;
    }
    return rowCountRef.current;
  }, [allGRN]);

  useErrorHandler(isError, error);

  const formik = useFormik({
    initialValues: grnInitValForFilter,
    onSubmit: async (values) => tableConfig.handleFilterParamsChange(values),
  });

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleGRNs();

  const handleSelectedDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a GRN to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'GRN deleted');
          setTimeout(() => {
            navigate(operationsRoutes.VIEW_ALL_GRN);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting GRN');
        });
    } else {
      toast.info('Please select GRN to delete.');
    }
  }, [apiRef, mutateAsync, navigate, toast]);

  return (
    <Box sx={{ flex: 1 }}>
      <TableHeader
        key={dataTableIds.GRN_TABLE_ID}
        isMobile={isMobile}
        pageTitle="Goods Received Note"
        searchText={tableConfig.search}
        setSearchText={tableConfig.setSearchValue}
        buttonConfig={buttonConfig}
        actionMenu={tableConfig.actionMenu}
        openActionMenu={tableConfig.openActionMenu}
        onOpenActionMenu={tableConfig.handleOpenActionMenu}
        onCloseActionMenu={tableConfig.handleCloseActionMenu}
      />
      <ColumnVisibilityPanel
        popoverId="grns-col-def"
        columns={grnColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DialogBox title="Filter Panel" handleSubmit={formik.handleSubmit} handleReset={formik.handleReset}>
        <FormikProvider value={formik}>
          <GRNFilterPanel formikInstance={formik} />
        </FormikProvider>
      </DialogBox>
      <DataGridTable<IGRN>
        apiRef={apiRef}
        loading={isLoading}
        rows={allGRN?.data || []}
        columns={grnColumns}
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
        dialogKey={dataTableIds.GRN_TABLE_ID}
        dialogTitle="Delete GRN"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
