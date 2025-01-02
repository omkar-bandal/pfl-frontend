import { GetProductCategory } from "@prime-fresh/admin_api";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { hideNotification } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const ProductSubcategoryListCols = (): CustomGridColDef[] => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEdit = (rowId: string) => {
    dispatch(hideNotification());
    dispatch(setOpenFor('update'));
    navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_SUBCAT}/${rowId}`);
  }
  return [
  { 
    field: "id", 
    headerName: "ID", 
    width: 90 
  },
  {
    field: "name",
    headerName: "Subcategory",
    width: 200,
    isMobileVisible: true,
    valueGetter: (value: string) => value? value : "-",
  },
  {
    field: "category",
    headerName: "Related Category",
    width: 200,
    isMobileVisible: true,
    valueGetter: (value: GetProductCategory) => value? value.name : "-",
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