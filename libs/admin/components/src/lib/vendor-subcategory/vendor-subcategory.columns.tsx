import { useMemo } from "react";
import { IVendorCategory } from "@prime-fresh/admin_api";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const useVendorSubcategoryColumns = (): CustomGridColDef[] => {

    return useMemo(() => [
        {
            field: "name",
            headerName: "Subcategory",
            flex: 1,
            minWidth: 200,
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value || '') : '',
        },
        {
            field: "category",
            headerName: "Related Category",
            flex: 1,
            minWidth: 200,
            valueGetter: (value: IVendorCategory) => value?.name ? convertInTitleCase(value.name || '') : '',
        },
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 70,
        //     sortable: false,
        //     filterable: false,
        //     isMobileVisible: true,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_VENDORS_SUBCAT}/${params.row.id}`)}>
        //             <Edit color="secondary" />
        //         </IconButton>
        //     ),
        // },
    ], []);
}