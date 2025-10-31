import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { DataGrid, DataGridProps as MuiDataGridProps } from '@mui/x-data-grid';
import { CustomGridColDef } from './models/columntype.interface';
import { NoResultsOverlay, NoRowsOverlay } from './components';

export type DataGridProps<T> = Omit<MuiDataGridProps, 'columns' | 'rows' | 'mode' | 'initialPageSize' | 'totalRows'> & {
  columns: CustomGridColDef[];
  rows: T[] | undefined;
  mode: 'server' | 'client';
  initialPageSize?: number;
  totalRows?: number;
};

export const DataGridTable = <T extends { id?: string | number }>({
  rows,
  columns,
  mode,
  totalRows,
  initialPageSize = 10,
  ...rest
}: DataGridProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Optionally filter columns for mobile view.
  const mobileColumns = isMobile ? columns.filter((col) => col.isMobileVisible) : columns;
  return (
    <Box sx={{ height: isMobile ? '80vh' : 500, width: '100%' }}>
      <DataGrid
        pagination
        rowHeight={35}
        columnHeaderHeight={40}
        disableColumnMenu={true}
        disableColumnFilter={true}
        disableColumnSelector={true}
        disableRowSelectionOnClick={true}
        slots={{
          noRowsOverlay: NoRowsOverlay,
          noResultsOverlay: NoResultsOverlay,
        }}
        slotProps={{
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
        }}
        columns={mobileColumns}
        rows={rows || []}
        getRowId={(row) => (row.id ? row.id : row.serialNumber)}
        paginationMode={mode}
        rowCount={mode === 'server' ? totalRows : rows ? rows.length : 0}
        pageSizeOptions={[5, 7, 10]}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: theme.palette.primary.main,
            height: 15,
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '15px',
            fontWeight: 'bold',
            color: theme.palette.primary.contrastText,
          },
          '& .MuiDataGrid-cell': {
            color: '#595959',
            fontSize: 14,
            fontWeight: 500,
          },
          '& .MuiDataGrid-columnHeaderCheckbox': {
            backgroundColor: theme.palette.primary.main,
            borderBottom: '2px solid #ddd',
          },
          '& .MuiDataGrid-columnHeaderCheckbox .MuiCheckbox-root': {
            color: 'white',
            '&.Mui-checked': {
              color: 'white',
            },
          },
          '--DataGrid-overlayHeight': '300px',
        }}
        {...rest}
      />
    </Box>
  );
};
