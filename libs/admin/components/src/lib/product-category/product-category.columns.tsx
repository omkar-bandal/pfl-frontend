import { GetProductClassification } from "@prime-fresh/admin_api";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useProductCategoryColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(() => [
    {
      field: "name",
      headerName: "Category",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value) => value ? value : "-"
    },
    {
      field: "productClassification",
      headerName: "Related Classification",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: GetProductClassification) => value ? value.name : "-"
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_CAT}/${params.row.id}`)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ], [navigate]);
}