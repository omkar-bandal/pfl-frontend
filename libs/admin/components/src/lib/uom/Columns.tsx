import { GridColDef } from "@mui/x-data-grid";
export const UOMListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "unit",
    headerName: "UOM Name",
    width: 150,
  },
  {
    field: "abbreviation",
    headerName: "Abbreviation",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 470,
  },
];
