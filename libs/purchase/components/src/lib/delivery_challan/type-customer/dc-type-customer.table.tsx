import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { PURCHASE_ROUTES, useGetAllDCTypeCustomers } from '@prime-fresh/purchase/modules';
import { IDeliveryChallanTypeCustomer } from '@prime-fresh/purchase_api';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useDCTypeCustomerColumns } from './dc-type-customer.column';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const DCTypeCustomerTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('delivery-challan');
  const dcTypeCustomerColumns = useDCTypeCustomerColumns(canEdit, canView);

  const {
    paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable({ columnDef: dcTypeCustomerColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllDCTypeCustomers(queryParams);
  const allDCTypeCustomers = data ? data : null;

  const rowCountRef = React.useRef(allDCTypeCustomers?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDCTypeCustomers?.allRecords !== undefined) {
      rowCountRef.current = allDCTypeCustomers.allRecords;
    }
    return rowCountRef.current;
  }, [allDCTypeCustomers]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(PURCHASE_ROUTES.CREATE_DC_TYPE_CUSTOMER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Delivery Challan" pageSubtitle="Delivery challan for the customers" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="dc-type-customer-col-def"
            columns={dcTypeCustomerColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<IDeliveryChallanTypeCustomer>
        loading={isLoading}
        rows={allDCTypeCustomers?.data || []}
        columns={dcTypeCustomerColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
