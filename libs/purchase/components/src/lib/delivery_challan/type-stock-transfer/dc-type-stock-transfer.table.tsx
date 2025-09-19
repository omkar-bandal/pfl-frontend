import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText, Grid2, useMediaQuery, useTheme } from '@mui/material';
import {
  PURCHASE_ROUTES,
  useDeleteMultipleDCTypeStockTransfer,
  useGetAllDCTypeStockTransfers,
} from '@prime-fresh/purchase/modules';
import { IDeliveryChallanTypeStockTransfer } from '@prime-fresh/purchase_api';
import {
  ActionMenu,
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  DialogContainer,
  PageTitle,
  SearchBox,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useDCTypeStockTransferColumns } from './dc-type-stock-transfer.column';
import { useActions, useAppDispatch, usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, KeyboardArrowDown, Settings } from '@mui/icons-material';
import { useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { ButtonConfigType } from '@prime-fresh/common_api';

export const DCTypeStockTransferTable = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { openDialog } = useActions();
  const { canEdit, canView } = usePermission('delivery-challan');
  const dcTypeStockTransferColumns = useDCTypeStockTransferColumns(canEdit, canView);

  const {
    actionMenu,
    openActionMenu,
    handleOpenActionMenu,
    handleCloseActionMenu,
    enableCheckboxSelection,
    handleEnableCheckboxSelection,
    queryParams,
    paginationModel,
    handlePaginationChange,
    sortModel,
    handleSortingChange,
    search,
    setSearch,
    columnVisibilityModel,
    handleColumnVisibilityModelChange,
    displayColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
  } = useDataTable({ columnDef: dcTypeStockTransferColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError, error } = useGetAllDCTypeStockTransfers(queryParams, debouncedSearch);
  const allDCTypeStockTransfer = data ? data : null;

  const rowCountRef = React.useRef(allDCTypeStockTransfer?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDCTypeStockTransfer?.allRecords !== undefined) {
      rowCountRef.current = allDCTypeStockTransfer.allRecords;
    }
    return rowCountRef.current;
  }, [allDCTypeStockTransfer]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_DC_TYPE_STOCK_TRANSFER);

  const handleEdit = useCallback(() => {
    console.log('selected rows', apiRef.current.getSelectedRows());
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a RFPA to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one RFPA to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${PURCHASE_ROUTES.UPDATE_RFPA}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleDCTypeStockTransfer();

  const onDelete = () => {
    openDialog();
  };
  const handleDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a delivery challan to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Delivery challan deleted');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_DC_TYPE_STOCK_TRANSFER);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting delivery challan');
        });
    } else {
      toast.info('Please select delivery challan to delete.');
    }
  }, [apiRef, mutateAsync, navigate, toast]);

  const buttonConfig: ButtonConfigType[] = useMemo(
    () => [
      {
        icon: <DoneAll />,
        label: 'Select',
        color: 'secondary',
        onClick: handleEnableCheckboxSelection,
        toolTipText: 'Enable or disable row selection',
      },
      {
        icon: <Edit />,
        label: 'Edit',
        color: 'info',
        onClick: () => handleEdit(),
        toolTipText: 'Edit selected delivery challan (select only one)',
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: () => onDelete(),
        toolTipText: 'Delete selected delivery challans (select multiple)',
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: () => handleCreate(),
        toolTipText: 'Create new delivery challan',
      },
      {
        icon: <Settings />,
        label: 'Column',
        color: 'primary',
        onClick: handleOpenColumnVisibilityPanel,
        disabled: false,
      },
    ],
    []
  );

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container spacing={2} marginY={2} paddingX={1}>
        <Grid2 size={{ xs: 8, md: 6 }}>
          <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery challan for stock transfer" />
        </Grid2>
        {isMobile && (
          <Grid2 size={{ xs: 4 }}>
            <BtnSmall label="Actions" color="info" icon={<KeyboardArrowDown />} onClick={handleOpenActionMenu} />
            <ActionMenu
              menuConfig={buttonConfig}
              anchorEl={actionMenu}
              open={openActionMenu}
              onClose={handleCloseActionMenu}
            />
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 6 }}>
          <SearchBox name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </Grid2>
        {!isMobile && (
          <Grid2
            size={{ xs: 12, md: 12 }}
            sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start', alignItems: 'center' }}
          >
            {buttonConfig.map((button, index) => (
              <BtnSmall
                key={index}
                label={button.label}
                icon={button.icon}
                color={button.color as any}
                onClick={button.onClick}
                toolTipText={button.toolTipText}
                sx={{ marginRight: 2 }}
              />
            ))}
          </Grid2>
        )}
      </Grid2>
      <ColumnVisibilityPanel
        popoverId="dc-type-stock-transfer-col-def"
        columns={dcTypeStockTransferColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable<IDeliveryChallanTypeStockTransfer>
        apiRef={apiRef}
        loading={isLoading}
        rows={allDCTypeStockTransfer?.data || []}
        columns={dcTypeStockTransferColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
        checkboxSelection={enableCheckboxSelection}
      />
      <DialogContainer
        dialogTitle="Delete Delivery Challan"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
