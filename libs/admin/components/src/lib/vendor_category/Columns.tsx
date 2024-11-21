import { GridColDef } from "@mui/x-data-grid";
import { GetVendorCategory } from "@prime-fresh/admin_api";

export const VendorCategoryListCols: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "name",
        headerName: "Category",
        width: 750,
        valueFormatter: (params: GetVendorCategory) => {
            if (params.name === null) {
                return "";
            } else {
                return params.name;
            }
        },
    },
];
