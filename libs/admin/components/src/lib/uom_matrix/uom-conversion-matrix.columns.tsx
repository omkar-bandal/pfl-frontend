import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { GetUOM } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const UOMMatrixListCols = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  const handleEdit = (rowId: string) => {
    navigate(`${ADMIN_ROUTES.UPDATE_UOMs_CONV_MATRIX}/${rowId}`);
  }
  return [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "conversionFactor",
      headerName: "Conversion Factor",
      width: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
    },
    {
      field: "fromUOM",
      headerName: "From UOM",
      width: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value: GetUOM) => value ? value.unit : '-',
    },
    {
      field: "toUOM",
      headerName: "To UOM",
      width: 250,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value: GetUOM) => value ? value.unit : '-',
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ];
}