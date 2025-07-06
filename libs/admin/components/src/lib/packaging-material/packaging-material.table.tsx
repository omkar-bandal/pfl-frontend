import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { useGridApiRef } from '@mui/x-data-grid';
import { adminRoutes, useGetAllPackagingMaterials } from '@prime-fresh/admin/modules';
import { usePackagingMaterialColumns } from './packaging-material.columns';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';

export const PackagingMaterialTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const packagingMaterialColumns = usePackagingMaterialColumns();
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
  } = useDataTable({ columnDef: packagingMaterialColumns, initialPageSize: 10 });

  const { data, isLoading, error, isError } =
    useGetAllPackagingMaterials(queryParams);
  const productCategories = data ? data : null;
  const rowCountRef = useRef(productCategories?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (productCategories?.allRecords !== undefined) {
      rowCountRef.current = productCategories.allRecords;
    }
    return rowCountRef.current;
  }, [productCategories]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(adminRoutes.CREATE_PACKAGING_MATERIAL);
  
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Packaging Materials" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
           <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
           <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="packaging-material-col-def"
            columns={packagingMaterialColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        apiRef={apiRef}
        loading={isLoading}
        rows={productCategories?.data || []}
        columns={packagingMaterialColumns}
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
