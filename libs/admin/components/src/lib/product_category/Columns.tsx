import { GridColDef } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { GetProductCategory } from "@prime-fresh/admin_api";

export const ProductCategoryListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Category",
    width: 750,
    valueFormatter: (params: GetProductCategory) =>{
      if(params.name === null)
        {
          return "";
        }else{
          return params.name;
        }
    },
  },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
        <IconButton aria-label="edit">
          <Edit color="secondary" />
        </IconButton>
    ),
  },
  {
    field: 'view',
    headerName: 'View',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
        <IconButton aria-label="edit">
          <Preview color="primary" />
        </IconButton>
    ),
  },
];
