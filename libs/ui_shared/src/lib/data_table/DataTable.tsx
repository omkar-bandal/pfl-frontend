/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGrid, GridApi } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "./components";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CustomGridColDef } from "./models/columntype.interface";

interface DataGridProps<T> {
  columns: CustomGridColDef[];
  rows: T[] | undefined;
  loading: boolean;
  apiRef?: React.MutableRefObject<GridApi>;
  visibilityModel?: any;
  onVisibilityModelChange?: any
}

export const DataTable = <T extends { id: string | number }>({ columns, rows, apiRef, loading,visibilityModel, onVisibilityModelChange,   ...rest }: DataGridProps<T>) => {
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
        apiRef={apiRef}
        checkboxSelection={false}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        pageSizeOptions={[5, 7, 10]}
        disableColumnMenu={true}
        columnHeaderHeight={40}
        rowHeight={35}
        columnVisibilityModel={visibilityModel}
        onColumnVisibilityModelChange={(newModel) => onVisibilityModelChange(newModel)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: isMobile ? 10 : 10,
            },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        slots={{
          //   toolbar: TableToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          '& .MuiDataGrid-columnHeader': { 
            backgroundColor: " #00cc66",
            height: 10,
          },
          '& .MuiDataGrid-columnHeaderTitle': { 
            fontSize: '15px',
            fontWeight: 'bold',
            color: "#FFFFFF"        
          },
          "& .MuiDataGrid-cell": {
            color: "#595959",
            fontSize: 14,
            fontWeight: 500
          },
          "--DataGrid-overlayHeight": "300px",
        }}
        {...rest}
      />
    </Box>
  );
};

export default DataTable;