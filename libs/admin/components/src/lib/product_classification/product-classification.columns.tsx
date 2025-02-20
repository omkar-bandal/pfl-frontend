import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES} from "@prime-fresh/admin/modules";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const ProductClassificationListCols = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  const handleEdit = (rowId: string) => {
    navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_CLASS}/${rowId}`);
  }
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Classification",
      width: 750,
      isMobileVisible: true,
      valueGetter: (value: string) => value ? value : '-',
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
