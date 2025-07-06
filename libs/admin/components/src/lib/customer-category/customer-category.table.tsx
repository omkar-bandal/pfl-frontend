import { useEffect, useMemo, useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { useCustomerCategoryColumns } from './customer-category.columns';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllCustomerCategories } from '@prime-fresh/admin/modules';
import { Add, Settings } from '@mui/icons-material';

export function CustomerCategoryTable() {
  const navigate = useNavigate();
  const customerCategoryColumns = useCustomerCategoryColumns();
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
  } = useDataTable({ columnDef: customerCategoryColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllCustomerCategories(queryParams);
  const customerCat = data ? data : null;
  const rowCountRef = useRef(customerCat?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (customerCat?.allRecords !== undefined) {
      rowCountRef.current = customerCat.allRecords;
    }
    return rowCountRef.current;
  }, [customerCat]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(ADMIN_ROUTES.CREATE_CUSTOMER_CAT);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Customer Categories" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="customer-cat-col-def"
            columns={customerCategoryColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        mode="server"
        loading={isLoading}
        rows={customerCat?.data || []}
        columns={customerCategoryColumns}
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
}
