/* eslint-disable @typescript-eslint/no-explicit-any */
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useCustomerCategoryColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();

    return useMemo(() => [
        {
            field: "name",
            headerName: "Customer Category",
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            minWidth: 200,
            isMobileVisible: true,
            hide: false,
            valueGetter:(value: string) => value ? value : '-',
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            align: 'center',
            headerAlign: 'center',
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_CUSTOMER_CAT}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
    ], [navigate]);
}