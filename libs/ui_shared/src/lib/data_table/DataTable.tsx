import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { CustomNoRowsOverlay } from "./components";
import { useMediaQuery, useTheme } from "@mui/material";
interface DataGridProps<T> {
  columns: GridColDef[];
  rows: T[] | undefined;
  loading: boolean
  apiRef: React.MutableRefObject<GridApi>
}
export const DataTable = <T extends { id: string | number }>({ columns, rows, apiRef, loading, ...rest }: DataGridProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div style={{ height: isMobile ? '100%' : 440, width: '100%' }}>
      <DataGrid
        loading={loading}
        columns={isMobile ? columns.slice(0, 3) : columns}
        rows={rows}
        apiRef={apiRef}
        checkboxSelection = {false}
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
    </div>
  );
};

export default DataTable;