import React, { useEffect, useMemo, useRef } from 'react';
import { Box, Grid2 } from '@mui/material';
import { Add, Settings } from '@mui/icons-material';
import { ADMIN_ROUTES, useGetAllOffices } from '@prime-fresh/admin/modules';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useNavigate, useParams } from 'react-router-dom';
import { useOfficeColumns } from './office.columns';

export function OfficeTable() {
  const navigate = useNavigate();

  const { officeType } = useParams<{ officeType: string }>();
  const type = officeType ? officeType : '';
  const OfficeTypeLabel = React.useMemo(
    () =>
      type
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [type]
  );
  const officeColumns = useOfficeColumns();
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
  } = useDataTable({ columnDef: officeColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllOffices(type, queryParams);
  const offices = data ? data : null;
  console.log(offices);
  const rowCountRef = useRef(offices?.allRecords || 0);
  const rowCount = useMemo(() => {
    if (offices?.allRecords !== undefined) {
      rowCountRef.current = offices.allRecords;
    }
    return rowCountRef.current;
  }, [offices]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(`${ADMIN_ROUTES.CREATE_OFFICE}/${type}`);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle={OfficeTypeLabel} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="office-col-def"
            columns={officeColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable
        loading={isLoading}
        rows={offices?.data || []}
        columns={officeColumns}
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
