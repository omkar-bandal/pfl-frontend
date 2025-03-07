import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const RFPAListCols = (): CustomGridColDef[] => {
    const navigate = useNavigate();

    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "rfpaId",
            headerName: "RFPA Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "createdDate",
            headerName: "Created Date",
            width: 120,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "createdTime",
            headerName: "Created Time",
            width: 120,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "requestedBy",
            headerName: "Requested By",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: RequestedBy) => value ? `${value.firstName || ''} ${value.lastName || ''}` : "",
        },
        {
            field: "requestingDepartment",
            headerName: "Department",
            width: 100,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "baseLocation",
            headerName: "Base Location",
            width: 100,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "companyName",
            headerName: "Company",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "purchaseLocation",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "purchaseForWhich",
            headerName: "Destination",
            width: 100,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "source",
            headerName: "Source",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value.charAt(0).toUpperCase() + value.slice(1) : '-',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            width: 100,
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ width: 80 }} />;
                    case "approved": return <Chip label={params.row.approvalStatus} color="info" size="small" sx={{ width: 80 }} />;
                    default: return <Chip label="pending" color="error" size="small" />
                }
            }
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_RFPA}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        {
            field: 'view',
            headerName: 'View',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_RFPA}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}