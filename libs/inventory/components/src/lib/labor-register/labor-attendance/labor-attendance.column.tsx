import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const LaborAttendanceColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    return([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "date",
            headerName: "Date",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-', 
        },
        {
            field: "companyName",
            headerName: "Company",
            width: 250,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-', 
        },
        {
            field: "location",
            headerName: "Location",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-', 
        },
        {
            field: "remarks",
            headerName: "Remarks",
            width: 400,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-', 
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${inventoryRouteConstants.UPDATE_LABOUR_ATTENDANCE}/${params.row.id}`)}>
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