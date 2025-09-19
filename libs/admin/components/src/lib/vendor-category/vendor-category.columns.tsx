import { useMemo } from "react";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const useVendorCategoryColumns = (): CustomGridColDef[] => {

    return useMemo(() => [
        {
            field: "name",
            headerName: "Category",
            flex: 1,
            minWidth: 200,
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value || '') : '',
        },
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 70,
        //     sortable: false,
        //     filterable: false,
        //     isMobileVisible: true,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_VENDORS_CAT}/${params.row.id}`)}>
        //             <Edit color="secondary" />
        //         </IconButton>
        //     ),
        // },
    ], []);
}