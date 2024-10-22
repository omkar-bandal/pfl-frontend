import { Edit, Preview } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { useNavigate } from "react-router-dom";

export const DealSlipListCols = (): GridColDef[] => {
    const navigate = useNavigate();

    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "createdAt",
            headerName: "Created Date",
            width: 120,
            align: "center",
            headerAlign: "center"
        },
        // {
        //     field: "createdTime",
        //     headerName: "Time",
        //     width: 90,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => {
        //         if (value)
        //             return value.split('.', 1);
        //         else
        //             return '';
        //     }
        // },
        {
            field: "requestedBy",
            headerName: "Requested By",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: RequestedBy) => {
                return `${value.firstName || ''} ${value.lastName || ''}`
            }
        },
        {
            field: "requestingDepartment",
            headerName: "Department",
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
            valueGetter: (value: string) => {
                return value ? value : 'Prime Fresh Ltd.';
            }
        },
        {
            field: "loadingLocation",
            headerName: "Loading Location",
            width: 150,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "lotNo",
            headerName: "Lot Number",
            width: 100,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "remarks",
            headerName: "Remarks",
            width: 200,
        },
        {
            field: "specialRequest",
            headerName: "Special Request",
            width: 200,
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
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.CREATE_DEAL_SLIP}/${params.row.id}`)}>
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
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_DEAL_SLIP}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}