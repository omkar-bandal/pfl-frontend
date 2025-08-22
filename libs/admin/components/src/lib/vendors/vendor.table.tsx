import React, { useMemo } from 'react';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { useVendorColumns } from './vendor.columns';
import { useNavigate } from 'react-router-dom';
import { useGetAllVendors } from '@prime-fresh/admin/modules';
import { toast, BtnSmall, DataGridTable, ColumnVisibilityPanel, PageTitle, useDataTable } from '@prime-fresh/ui_shared';
import { sharedRoutes } from '@prime-fresh/shared/modules';

export function VendorTable() {
  const navigate = useNavigate();
  const vendorColumns = useVendorColumns();
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
  } = useDataTable({ columnDef: vendorColumns, initialPageSize: 10 });

  const { data, isError, isLoading, error } = useGetAllVendors(queryParams);
  const allVendors = data ? data : null;
  console.log('All Vendors: ', allVendors);
  const rowCountRef = React.useRef(allVendors?.totalPages || 0);
  const rowCount = useMemo(() => {
    if (allVendors?.totalPages !== undefined) {
      rowCountRef.current = allVendors.totalPages;
    }
    return rowCountRef.current;
  }, [allVendors]);

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(sharedRoutes.CREATE_VENDOR);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Vendors" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="vendors-col-def"
            columns={vendorColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={allVendors?.data || []}
        columns={vendorColumns}
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
