import { GridColDef } from "@mui/x-data-grid";
import { GetUOM } from "@prime-fresh/admin_api";

export const UOMMatrixListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "conversionFactor",
    headerName: "Conversion Factor",
    width: 250,
    align: "center",
    headerAlign: "center"
  },
  {
    field: "fromUOM",
    headerName: "From UOM",
    width: 250,
    align: "center",
    headerAlign: "center",
    valueGetter: (value: GetUOM) => value ? value.unit : '-',
  },
  {
    field: "toUOM",
    headerName: "To UOM",
    width: 250,
    align: "center",
    headerAlign: "center",
    valueGetter: (value: GetUOM) => value ? value.unit : '-',
  },
];
