import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useUOMColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(() => [
    {
      field: "unit",
      headerName: "UoM Name",
      flex: 1,
      minWidth: 150,
      isMobileVisible: true,
    },
    {
      field: "abbreviation",
      headerName: "Abbreviation",
      flex: 1,
      minWidth: 150,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 500,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 70,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_UOM}/${params.row.id}`)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ], [navigate]);
}
