import { GridColDef } from "@mui/x-data-grid";

import { GetProductCategory } from "@prime-fresh/admin_api";

export const ProductSubcategoryListCols: GridColDef[] = [
  { 
    field: "id", 
    headerName: "ID", 
    width: 90 
  },
  {
    field: "name",
    headerName: "Subcategory",
    width: 200,
  },
  {
    field: "category",
    headerName: "Related Category",
    width: 200,
    valueGetter: (value: GetProductCategory) => value? value.name : "-",
  }
];
