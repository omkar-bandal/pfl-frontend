import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { GetVendorCategory } from "@prime-fresh/admin_api";
import { hideNotification } from "@prime-fresh/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const VendorCategoryListCols = (): CustomGridColDef[] => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEdit = (rowId: string) => {
        dispatch(hideNotification());
        dispatch(setOpenFor('update'));
        navigate(`${ADMIN_ROUTES.UPDATE_VENDORS_CAT}/${rowId}`);
    }
    return [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "name",
            headerName: "Category",
            width: 900,
            isMobileVisible: true,
            valueFormatter: (params: GetVendorCategory) => {
                if (params.name === null) {
                    return "";
                } else {
                    return params.name;
                }
            },
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 70,
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