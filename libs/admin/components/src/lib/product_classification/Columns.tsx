import { GridColDef } from "@mui/x-data-grid";

export const ProductClassificationListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Classification",
    width: 750,
    valueGetter: (value: string) => value? value : '-',
  },
];
