import { GridColDef } from "@mui/x-data-grid";
import { GetVendorCategory, GetVendorSubcategory } from "@prime-fresh/admin_api";

export const VendorSubcategoryListCols: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "name",
        headerName: "Subcategory",
        width: 200,
        valueFormatter: (params: GetVendorSubcategory) => {
            if (params.name === null) {
                return "";
            } else {
                return params.name;
            }
        },
    },
    {
        field: "category",
        headerName: "Related Category",
        width: 200,
        valueFormatter: (params: GetVendorCategory) => {
            if(params ===  null)
                return "-";
            else
            return params.name;
        }
    },
];
