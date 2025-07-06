import { useEffect, useMemo, useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { useUOMMatrixColumns } from './uom-conversion-matrix.columns';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES, useGetAllUOMConversionMatrix } from '@prime-fresh/admin/modules';

export function UOMConvMatrixTable() {
  const navigate = useNavigate();
  const uomMatrixColumns = useUOMMatrixColumns();
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
  } = useDataTable({ columnDef: uomMatrixColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllUOMConversionMatrix(queryParams);
  const uomConvMat = data ? data : null;
  const rowCountRef = useRef(uomConvMat?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (uomConvMat?.allRecords !== undefined) {
      rowCountRef.current = uomConvMat.allRecords;
    }
    return rowCountRef.current;
  }, [uomConvMat]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(ADMIN_ROUTES.CREATE_UOMs_CONV_MATRIX);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="UoM Conversion Matrix" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="uom-conv-mat-col-def"
            columns={uomMatrixColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={uomConvMat?.data || []}
        columns={uomMatrixColumns}
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
