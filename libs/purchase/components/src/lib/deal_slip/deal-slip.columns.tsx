import { Edit, Preview } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { useNavigate } from "react-router-dom";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useDealSlipColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();

    return useMemo(() => [
        {
            field: "dealSlipNo",
            headerName: "Deal Slip No",
            width: 150,
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
            field: "loadingLocation",
            headerName: "Loading Location",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "lotNo",
            headerName: "Lot Number",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "remark",
            headerName: "Remarks",
            width: 200,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "specialRequest",
            headerName: "Special Request",
            width: 200,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            width: 100,
            isMobileVisible: true,
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_DEAL_SLIP}/${params.row.id}`)}>
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_DEAL_SLIP}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ], [navigate])
}