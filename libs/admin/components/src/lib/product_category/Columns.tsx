import { GetProductClassification } from "@prime-fresh/admin_api";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { hideNotification } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

export const ProductCategoryListCols = (): GridColDef[] => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = (rowId: string) => {
    dispatch(hideNotification());
    dispatch(setOpenFor('update'));
    navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_CAT}/${rowId}`);
  }
  return [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Category",
      width: 200,
      valueGetter: (value) => value ? value : "-"
    },
    {
      field: "productClassification",
      headerName: "Related Classification",
      width: 200,
      valueGetter: (value: GetProductClassification) => value ? value.name : "-"
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