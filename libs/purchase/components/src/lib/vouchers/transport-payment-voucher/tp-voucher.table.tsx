import React, { useCallback, useMemo } from 'react';
import { Box, DialogContentText, Grid2, useMediaQuery, useTheme } from '@mui/material';
import { ITranportPaymentVoucher } from '@prime-fresh/purchase_api';
import {
  PURCHASE_ROUTES,
  useDeleteMultipleTransportPaymentVoucher,
  useGetAllTransportPaymentVouchers,
} from '@prime-fresh/purchase/modules';
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
import { useTPVoucherColumns } from './tp-voucher.columns';
import { useActions, usePermission } from '@prime-fresh/modules';
import { Add, Delete, DoneAll, Edit, KeyboardArrowDown, Settings } from '@mui/icons-material';
import { useDebounce } from '@prime-fresh/shared/modules';
import { useGridApiRef } from '@mui/x-data-grid';
import { ButtonConfigType } from '@prime-fresh/common_api';

export const TransportPaymentVoucherTable = () => {
  const apiRef = useGridApiRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { openDialog } = useActions();
  const { canEdit, canView } = usePermission('transport-payment-voucher');
  const tpVoucherColumns = useTPVoucherColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: tpVoucherColumns, initialPageSize: 10 });

  const debouncedSearch = useDebounce(search, 1000);

  const { data, isLoading, isError, error } = useGetAllTransportPaymentVouchers(queryParams, debouncedSearch);
  const allTPVouchers = data ? data : null;
  console.log('All TP vouchers', allTPVouchers);

  const rowCountRef = React.useRef(allTPVouchers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allTPVouchers?.allRecords !== undefined) {
      rowCountRef.current = allTPVouchers.allRecords;
    }
    return rowCountRef.current;
  }, [allTPVouchers]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_TRANSPORT_CASH_VOUCHER);

  const handleEdit = useCallback(() => {
    console.log('selected rows', apiRef.current.getSelectedRows());
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a voucher to edit.');
    } else if (selectedRows.length > 1) {
      toast.info('Please select only one voucher to edit.');
    } else {
      const selectedId = selectedRows[0];
      navigate(`${PURCHASE_ROUTES.UPDATE_RFPA}/${selectedId}`);
    }
  }, [navigate, apiRef]);

  const { mutateAsync, error: deleteError, data: deleteRes } = useDeleteMultipleTransportPaymentVoucher();

  const onDelete = () => {
    openDialog();
  };
  const handleDelete = useCallback(() => {
    const selectedRows = Array.from(apiRef.current.getSelectedRows().keys());
    if (selectedRows.length === 0) {
      toast.info('Please select a voucher to edit.');
    } else if (selectedRows.length > 0) {
      mutateAsync(selectedRows as Array<string>)
        .then(() => {
          toast.success(deleteRes ? deleteRes.message : 'Voucher deleted');
          setTimeout(() => {
            navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
          }, 2000);
        })
        .catch(() => {
          toast.error(deleteError ? deleteError.message : 'Error while deleting voucher');
        });
    } else {
      toast.info('Please select voucher to delete.');
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
        toolTipText: 'Edit selected voucher (select only one)',
      },
      {
        icon: <Delete />,
        label: 'Delete',
        color: 'error',
        onClick: () => onDelete(),
        toolTipText: 'Delete selected vouchers (select multiple)',
      },
      {
        icon: <Add />,
        label: 'Add New',
        color: 'success',
        onClick: () => handleCreate(),
        toolTipText: 'Create new voucher',
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
        <Grid2 size={{ xs: 12, md: 6 }}>
          <PageTitle pagetitle="Transport Payment Voucher" />
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
        popoverId="tp-vouchers-col-def"
        columns={tpVoucherColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable<ITranportPaymentVoucher>
        apiRef={apiRef}
        loading={isLoading}
        rows={allTPVouchers?.data || []}
        columns={tpVoucherColumns}
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
        dialogTitle="Delete Transport Payment Voucher"
        dialogContent={<DialogContentText>Are you sure you want to delete ?</DialogContentText>}
        dialogActionLabel="Delete"
        dialogActionBtnColor="error"
        dialogActionFn={handleDelete}
      />
    </Box>
  );
};
