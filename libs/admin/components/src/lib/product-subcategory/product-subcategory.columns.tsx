import { GetProductCategory } from "@prime-fresh/admin_api";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useProductSubcategoryColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(() => [
    {
      field: "name",
      headerName: "Subcategory",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: string) => value ? value : "-",
    },
    {
      field: "category",
      headerName: "Related Category",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: GetProductCategory) => value ? value.name : "-",
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 70,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_SUBCAT}/${params.row.id}`)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ], [navigate]);
}