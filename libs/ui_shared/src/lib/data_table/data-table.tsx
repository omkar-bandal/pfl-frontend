import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridApi, GridCallbackDetails, GridFilterModel, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { useMemo, useRef, useState } from "react";
import { CustomGridColDef } from "./models/columntype.interface";
import { CustomNoRowsOverlay } from "./components";

interface DataGridProps<T> {
    columns: CustomGridColDef[];
    rows: T[] | undefined;
    mode: "server" | "client";
    initialPageSize: number;
    totalRows: number;
    paginationModel: GridPaginationModel;
    onPaginationModelChange: (newPaginationModel: GridPaginationModel) => void;
    sortModel?: GridSortModel;
    onSortModelChange?: (newSortModel: GridSortModel) => void;
    filterModel?: GridFilterModel;
    onFilterModelChange: (newFilterModel: GridFilterModel) => void;
    loading: boolean;
    apiRef: React.MutableRefObject<GridApi>
}
export const DataGridTable = <T extends { id: string | number }>(props: DataGridProps<T>) => {
    const { rows, columns, mode, apiRef, loading, totalRows,
        paginationModel, onPaginationModelChange,
        sortModel, onSortModelChange,
        filterModel, onFilterModelChange } = props;

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Filter columns for mobile view
    const mobileColumns = isMobile ? columns.filter((col) => col.isMobileVisible) : columns;


    return (
        <Box sx={{
            height: isMobile ? '100%' : 440,
            width: '100%'
        }} >
            <DataGrid
                loading={loading}
                columns={mobileColumns}
                rows={rows}
                rowCount={totalRows}
                apiRef={apiRef}
                checkboxSelection={false}
                getRowId={(row) => row.id}
                pagination
                paginationMode={mode}
                sortingMode={mode}
                filterMode={mode}
                paginationModel={paginationModel}
                onPaginationModelChange={onPaginationModelChange}
                pageSizeOptions={[5, 7, 10]}
                sortModel={sortModel}
                onSortModelChange={onSortModelChange}
                filterModel={filterModel}
                onFilterModelChange={onFilterModelChange}
                // disableColumnSorting={true}
                rowHeight={50}
                autoHeight
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                sx={{
                    "& .MuiDataGrid-columnHeaders": {
                        fontSize: 15,
                        background: "#F6FFF7",
                    },
                    "& .MuiDataGrid-cell": {
                        color: "#555",
                        fontSize: 14,
                        // padding: isMobile ? '8px' : '16px',
                    },
                    "--DataGrid-overlayHeight": "300px",
                }}
            />
        </Box>
    );
};
