import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Address} from "@prime-fresh/admin_api";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const LaborRegisterColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    return([
        { field: "id", headerName: "ID", width: 30 },
        // {
        //     field: "siteName",
        //     headerName: "Site Name",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: GetFilteredBranchData) => value ? value.name : '-'
        // },
        {
            field: "laborType",
            headerName: "Labor Type",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "laborName",
            headerName: "Labor Name",
            width: 250,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "mobileNumber",
            headerName: "Contact No",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "presentAddress",
            headerName: "Present Address",
            width: 300,
            headerAlign: "center",
            valueGetter: (value: Address) => value ? displayAddress(value) : '-'
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${inventoryRouteConstants.CREATE_LABOUR_ATTENDANCE}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        {
            field: 'view',
            headerName: 'View',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: () => (
                <IconButton aria-label="edit">
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}