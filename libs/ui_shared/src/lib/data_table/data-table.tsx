import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
    DataGrid,
    GridApi,
    GridPaginationModel,
    GridSortModel,
} from "@mui/x-data-grid";
import { CustomGridColDef } from "./models/columntype.interface";
import { CustomNoRowsOverlay } from "./components";

export interface DataGridProps<T> {
    columns: CustomGridColDef[];
    columnVisibilityModel?: { [field: string]: boolean };
    rows: T[] | undefined;
    mode: 'server' | 'client';
    initialPageSize?: number;
    totalRows?: number;
    paginationModel?: GridPaginationModel;
    onPaginationModelChange?: (newPaginationModel: GridPaginationModel) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (newSortModel: GridSortModel) => void;
    loading: boolean;
    apiRef?: React.MutableRefObject<GridApi>;
}

export const DataGridTable = <T extends { id: string | number }>(props: DataGridProps<T>) => {
    const {
        rows,
        columns,
        columnVisibilityModel,
        mode,
        apiRef,
        loading,
        totalRows,
        paginationModel,
        onPaginationModelChange,
        sortModel,
        onSortModelChange,
        initialPageSize,
    } = props;

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Optionally filter columns for mobile view.
    const mobileColumns = isMobile
        ? columns.filter((col) => col.isMobileVisible)
        : columns;

    return (
        <Box sx={{ height: isMobile ? '100%' : 500, width: '100%' }}>
            <DataGrid
                pagination
                loading={loading}
                rowHeight={35}
                columnHeaderHeight={40}
                disableColumnMenu={true}
                disableColumnFilter={true}
                disableColumnSelector={true}
                disableMultipleRowSelection={true}
                disableRowSelectionOnClick={true}
                checkboxSelection={false}
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                columns={mobileColumns}
                columnVisibilityModel={columnVisibilityModel}
                rows={rows || []}
                getRowId={(row) => row.id}
                paginationMode={mode} 
                rowCount={mode === 'server' ? totalRows : (rows ? rows.length : 0)}
                paginationModel={paginationModel || { pageSize: initialPageSize || 5, page: 0 }}
                onPaginationModelChange={onPaginationModelChange}
                pageSizeOptions={[5, 7, 10]}
                sortModel={sortModel}
                onSortModelChange={onSortModelChange}
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#00cc66',
                        height: 10,
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                    },
                    '& .MuiDataGrid-cell': {
                        color: '#595959',
                        fontSize: 14,
                        fontWeight: 500,
                    },
                    '--DataGrid-overlayHeight': '300px',
                }}
                apiRef={apiRef}
            />
        </Box>
    );
};