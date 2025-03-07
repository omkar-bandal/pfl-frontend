import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const UOMListCols = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  const handleEdit = (rowId: string) => {
    navigate(`${ADMIN_ROUTES.UPDATE_UOM}/${rowId}`);
  }
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "unit",
      headerName: "UOM Name",
      width: 150,
      isMobileVisible: true,
    },
    {
      field: "abbreviation",
      headerName: "Abbreviation",
      width: 150,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 470,
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
