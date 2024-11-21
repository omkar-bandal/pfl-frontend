import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Preview} from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { GetProductCategory, GetProductClassification, GetProductSubcategory, GetUOM } from "@prime-fresh/admin_api";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";

export const ProductListCols = (): GridColDef[] => {
  const navigate = useNavigate();
  return [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "productCode",
      headerName: "Product Code",
      width: 150,
      align: "center",
      valueGetter: (value: string) => value ? value : "-",
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "productOrigin",
      headerName: "Origin",
      width: 100,
      align: "center",
      headerAlign: "center",
      valueGetter: (value: string) => value ? value : "-",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      align: "center",
      headerAlign: "center",
      valueGetter: (value: GetProductCategory) => value ? value.name : "-",
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      width: 150,
      align: "center",
      headerAlign: "center",
      valueGetter: (value: GetProductSubcategory) => value ? value.name : "-",
    },
    {
      field: "classification",
      headerName: "Classification",
      width: 150,
      align: "center",
      headerAlign: "center",
      valueGetter: (value: GetProductClassification) => value ? value.name : "-",
    },
    {
      field: "uom",
      headerName: "UOM",
      width: 100,
      align: "center",
      headerAlign: "center",
      valueGetter: (value: GetUOM) => value ? value.unit : "-",
    },
    {
      field: "packingType",
      headerName: "UOM",
      width: 100,
      valueGetter: (value: string) => value ? value : "-",
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 50,
    //   sortable: false,
    //   filterable: false,
    //   renderCell: () => (
    //       <IconButton aria-label="edit">
    //         <Edit color="secondary" />
    //       </IconButton>
    //   ),
    // },
    {
      field: 'view',
      headerName: 'View',
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.GET_A_PRODUCT}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ];
}