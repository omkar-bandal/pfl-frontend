import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { hideNotification } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UOMListCols = (): GridColDef[] => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = (rowId: string) => {
    dispatch(hideNotification());
    dispatch(setOpenFor('update'));
    navigate(`${ADMIN_ROUTES.UPDATE_UOM}/${rowId}`);
  }
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "unit",
      headerName: "UOM Name",
      width: 150,
    },
    {
      field: "abbreviation",
      headerName: "Abbreviation",
      width: 150,
      align: "center",
      headerAlign: "center",
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
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
  ];
}
