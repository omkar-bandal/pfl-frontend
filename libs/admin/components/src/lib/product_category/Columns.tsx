import { GridColDef } from "@mui/x-data-grid";
import { GetProductClassification } from "@prime-fresh/admin_api";

export const ProductCategoryListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Category",
    width: 200,
    valueGetter: (value) => value? value : "-"
  },
  {
    field: "productClassification",
    headerName: "Related Classification",
    width: 200,
    valueGetter: (value: GetProductClassification) => value? value.name : "-"
  },
];
