import { useMemo } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview} from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { GetProductCategory, GetProductClassification, GetProductSubcategory, GetUOM } from "@prime-fresh/admin_api";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const useProductColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(() => [
    {
      field: "productCode",
      headerName: "Product Code",
      width: 150,
      isMobileVisible: true,
      valueGetter: (value: string) => value ? value : "-",
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
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
      field: 'edit',
      headerName: 'Edit',
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT}/${params.row.id}`)}>
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
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="view" onClick={() => navigate(`${ADMIN_ROUTES.GET_A_PRODUCT}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ],[navigate]);
}