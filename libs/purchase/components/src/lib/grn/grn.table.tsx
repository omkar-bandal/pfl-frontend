import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGRNColumns } from './grn.columns';
import { IGRN } from '@prime-fresh/purchase_api';
import {
  grnInitValForFilter,
  PURCHASE_ROUTES,
  useDeleteMultipleGRNs,
  useGetAllGRNs,
} from '@prime-fresh/purchase/modules';
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
  useTableActions,
  useTableUI,
} from '@prime-fresh/ui_shared';
import { useActions, usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, Filter, KeyboardArrowDown, Settings, Visibility } from '@mui/icons-material';
import { FormikProvider, useFormik } from 'formik';
import { GRNFilterPanel } from './grn.filter-panel';
import { toolTipText, useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';

export const GRNTable = () => {
  const TABLE_ID = 'deal-slip-table';
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { openDialogBox } = useActions();
  const { isMobile } = useTableUI();
  const { canEdit, canView, canDelete } = usePermission('grn');
  const grnColumns = useGRNColumns();
  const tableNavActionConfig: TableNavActionsConfig = {
    tableId: TABLE_ID,
    createPath: PURCHASE_ROUTES.CREATE_GRN,
    editPath: PURCHASE_ROUTES.UPDATE_GRN,
    viewPath: PURCHASE_ROUTES.VIEW_GRN,
  };
  const { handleCreate, handleEdit, handleView, handleDelete } = useTableActions(apiRef, tableNavActionConfig);
  const tableConfig = useDataTableFunctions({ columnDef: grnColumns, initialPageSize: 10, tableId: TABLE_ID });

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
      {
        label: 'Filter',
        icon: <Filter />,
        color: 'secondary',
        onClick: () => openDialogBox(),
        visible: true,
      },
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

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

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
            navigate(PURCHASE_ROUTES.GET_ALL_GRN);
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
        key={TABLE_ID}
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
        checkboxSelection={tableConfig.enableCheckboxSelection}
      />
      <DialogContainer
        dialogKey={TABLE_ID}
        dialogTitle="Delete GRN"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleSelectedDelete}
      />
    </Box>
  );
};
