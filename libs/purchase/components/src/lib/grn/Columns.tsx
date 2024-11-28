import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { AddCard, Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const GRNListCols = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    const handlePaymentReq = (status: string, id: string) => {
        if(status === "approved")
            navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${id}`)
    }
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "grnNo",
            headerName: "GRN Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "billNo",
            headerName: "Bill Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                if (value === null)
                    return '-';
                else
                    return value;
            }
        },
        {
            field: "requestedBy",
            headerName: "Requested By",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: RequestedBy) => {
                if (value === null)
                    return '-';
                else
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
            valueGetter: (value: string) => {
                return value ? value : 'Prime Fresh Ltd.';
            }
        },
        {
            field: "purchaseLocation",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "purchaseForWhich",
            headerName: "Destination",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "source",
            headerName: "Source",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ width: 80 }} />;
                    case "approved": return <Chip label={params.row.approvalStatus} color="info" size="small" sx={{ width: 80 }} />;
                    case "notApproved": return <Chip label={params.row.approvalStatus} color="error" size="small" sx={{ width: 80 }} />;
                    default: return <Chip label="-" color="error" size="small" />
                }
            }
        },
        {
            field: "approvalNote",
            headerName: "Reason",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                if (value === null)
                    return '';
                else
                    return value;
            }
        },
        {
            field: 'payment_req',
            headerName: 'Payment Request',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="payment_req" onClick={() => handlePaymentReq(params.row.approvalStatus, params.row.id)}>
                    <AddCard color="info" />
                </IconButton>
            ),
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_GRN}/${params.row.id}`)}>
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_GRN}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}