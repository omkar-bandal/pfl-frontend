import { DataGrid, GridApi } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "./components";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { CustomGridColDef } from "./models/columntype.interface";
interface DataGridProps<T> {
  columns: CustomGridColDef[];
  rows: T[] | undefined;
  loading: boolean
  apiRef: React.MutableRefObject<GridApi>
}
export const DataTable = <T extends { id: string | number }>({ columns, rows, apiRef, loading, ...rest }: DataGridProps<T>) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Filter columns for mobile view
  const mobileColumns = isMobile ? columns.filter((col) => col.isMobileVisible) : columns;

  return (
    <Box sx={{ 
      height: isMobile ? '100%' : 440, 
      width: '100%'}} >
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
        disableColumnSorting={true}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: isMobile ? 10 : 5,
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
          "& .MuiDataGrid-columnHeaders": {
            fontSize: 15,
            background: "#81C784",
          },
          "& .MuiDataGrid-cell": {
            color: "#555",
            fontSize: 14,
            // padding: isMobile ? '8px' : '16px',
          },
          "--DataGrid-overlayHeight": "300px",
        }}
        {...rest}
      />
    </Box>
  );
};

export default DataTable;