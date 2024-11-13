import { GridColDef } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
// import { ProductCategory, ProductClassification, ProductSubcategory, UOM } from "../../api/admin/models";

export const ProductListCols: GridColDef[] = [
  { field: "id", headerName: "ID", width: 30 },
  // {
  //   field: "product_code",
  //   headerName: "Product Code",
  //   width: 120,
  //   align: "center",
  // },
  {
    field: "name",
    headerName: "Name",
    width: 80,
  },
  // {
  //   field: "category",
  //   headerName: "Category",
  //   width: 120,
  //   valueFormatter: (params: ProductCategory) => {
  //     if(params.name === null)
  //     {
  //       return "";
  //     }else{
  //       return params.name;
  //     }
  //   }
  // },
  // {
  //   field: "subcategory",
  //   headerName: "Subcategory",
  //   width: 120,
  //   valueFormatter: (params: ProductSubcategory) => {
  //     if(params.name === null)
  //       {
  //         return "";
  //       }else{
  //         return params.name;
  //       }
  //   }
  // },
  // {
  //   field: "classification",
  //   headerName: "Classification",
  //   width: 120,
  //   valueFormatter: (params: ProductClassification) => {
  //     if(params.name === null)
  //       {
  //         return "";
  //       }else{
  //         return params.name;
  //       }
  //   }
  // },
  // {
  //   field: "uom.unit",
  //   headerName: "UOM",
  //   width: 100,
  //   valueFormatter: (params: UOM) => {
  //     if(params.unit === null)
  //       {
  //         return "";
  //       }else{
  //         return params.unit;
  //       }
  //   }
  // },
  // {
  //   field: "description",
  //   headerName: "Description",
  //   width: 200,
  // },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
      <>
        <IconButton aria-label="edit">
          <Edit color="secondary" />
        </IconButton>
      </>
    ),
  },
  {
    field: 'view',
    headerName: 'View',
    width: 50,
    sortable: false,
    filterable: false,
    renderCell: () => (
      <>
        <IconButton aria-label="edit">
          <Preview color="primary" />
        </IconButton>
      </>
    ),
  },
];