import { useEffect, useMemo, useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { useVendorCategoryColumns } from './vendor-category.columns';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllVendorCategories } from '@prime-fresh/admin/modules';

export function VendorCatTable() {
  const navigate = useNavigate();
  const vendorCategoryColumns = useVendorCategoryColumns();
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
  } = useDataTable({ columnDef: vendorCategoryColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllVendorCategories(queryParams);
  const VendorCat = data ? data : null;
  const rowCountRef = useRef(VendorCat?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (VendorCat?.allRecords !== undefined) {
      rowCountRef.current = VendorCat.allRecords;
    }
    return rowCountRef.current;
  }, [VendorCat]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(ADMIN_ROUTES.CREATE_VENDORS_CAT);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Vendor Categories" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="vendor-cat-col-def"
            columns={vendorCategoryColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={VendorCat?.data || []}
        columns={vendorCategoryColumns}
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
}
