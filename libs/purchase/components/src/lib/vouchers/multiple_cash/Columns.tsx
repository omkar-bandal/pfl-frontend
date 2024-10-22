import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { DownloadOutlined, Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";

export const MCVoucherListCols = (): GridColDef[] => {
    const navigate = useNavigate();
    const handleDownload = (imageUrl: string) => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'image.jpg'; // Set the desired filename

        // Trigger the download
        link.click();
    };
    return ([
        { field: "id", headerName: "ID", width: 30 },
        // {
        //     field: "grnNo",
        //     headerName: "GRN Number",
        //     width: 130,
        //     align: "center",
        //     headerAlign: "center"
        // },
        // {
        //     field: "createdAt",
        //     headerName: "Created Date",
        //     width: 120,
        //     align: "center",
        //     headerAlign: "center"
        // },
        // {
        //     field: "requestedBy",
        //     headerName: "Requested By",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: RequestedBy) => {
        //         if (value === null)
        //             return '-';
        //         else
        //             return `${value.firstName || ''} ${value.lastName || ''}`
        //     }
        // },
        // {
        //     field: "requestingDepartment",
        //     headerName: "Department",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        // },
        // {
        //     field: "baseLocation",
        //     headerName: "Base Location",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        // },
        {
            field: "debitCreditTo",
            headerName: "Debit From / Credit To",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "payReceivedFrom",
            headerName: "Received From / Pay To",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "location",
            headerName: "Location",
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
            field: "totalAmt",
            headerName: "Total Amount",
            width: 120,
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
            field: "receivedBy",
            headerName: "Received By",
            width: 120,
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
            field: "paymentMode",
            headerName: "Payment Mode",
            width: 150,
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
            field: "anyAttachment",
            headerName: "Attachment",
            width: 100,
            align: "center",
            headerAlign: "center",
            renderCell: (params: GridRenderCellParams) => (
                <IconButton color="primary" onClick={() => handleDownload(params.row.billImage.path)}>
                    <DownloadOutlined />
                </IconButton>
            ),
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            width: 130,
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ width: 80 }} />;
                    case "approved": return <Chip label="Approved" color="info" size="small" sx={{ width: 80 }} />;
                    case "rejected": return <Chip label="Not Approved" color="error" size="small" sx={{ width: 80 }} />;
                    default: return <Chip label="pending" color="error" size="small" />
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
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 50,
        //     sortable: false,
        //     filterable: false,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.CREATE_RFPA}/${params.row.id}`)}>
        //             <Edit color="secondary" />
        //         </IconButton>
        //     ),
        // },
        {
            field: 'view',
            headerName: 'View',
            width: 50,
            sortable: false,
            filterable: false,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_GRN}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}