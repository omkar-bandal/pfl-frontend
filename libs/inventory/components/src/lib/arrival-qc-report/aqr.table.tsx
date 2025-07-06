import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { inventoryRouteConstants, useGetAllAQRs } from '@prime-fresh/inventory/modules';
import { GetAQR } from '@prime-fresh/inventory_api';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { useAQRColumns } from './aqr.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const AQRTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('aqr');
  const aqrColumns = useAQRColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: aqrColumns });
  const { data, isLoading, isError, error } = useGetAllAQRs(queryParams);
  const aqrs = data ? data : null;
  const rowCountRef = React.useRef(aqrs?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (aqrs?.allRecords !== undefined) {
      rowCountRef.current = aqrs.allRecords;
    }
    return rowCountRef.current;
  }, [aqrs]);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_AQR);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Arrival Quality Reports" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="aqrs-col-def"
            columns={aqrColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetAQR>
        loading={isLoading}
        rows={aqrs?.data || []}
        columns={aqrColumns}
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
