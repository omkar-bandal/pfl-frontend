import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { GetUOM } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useUOMMatrixColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(() => [
    {
      field: "conversionFactor",
      headerName: "Conversion Factor",
      flex: 1,
      minWidth: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
    },
    {
      field: "fromUOM",
      headerName: "From UoM",
      flex: 1,
      minWidth: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value: GetUOM) => value ? value.unit : '-',
    },
    {
      field: "toUOM",
      headerName: "To UoM",
      flex: 1,
      minWidth: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value: GetUOM) => value ? value.unit : '-',
    },
    {
      field: 'edit',
      headerName: 'Edit',
      minWidth: 70,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_UOMs_CONV_MATRIX}/${params.row.id}`)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ], [navigate]);
}