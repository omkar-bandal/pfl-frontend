import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { GetVendorCategory } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useVendorCategoryColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
   
    return useMemo(() => [
        {
            field: "name",
            headerName: "Category",
            flex:1,
            minWidth: 200,
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
                <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_VENDORS_CAT}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
    ],[navigate]);
}