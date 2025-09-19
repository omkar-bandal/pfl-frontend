import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useCustomerTypeColumns = (): CustomGridColDef[] => {

    return useMemo(() => [
        {
            field: "name",
            headerName: "Customer Type",
            flex: 1,
            minWidth: 200,
            hide: false,
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value || '') : '-',
        },
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 100,
        //     align: 'center',
        //     headerAlign: 'center',
        //     sortable: false,
        //     filterable: false,
        //     isMobileVisible: true,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_CUSTOMER_TYPE}/${params.row.id}`)}>
        //             <Edit color="secondary" />
        //         </IconButton>
        //     ),
        // },
    ], []);
}