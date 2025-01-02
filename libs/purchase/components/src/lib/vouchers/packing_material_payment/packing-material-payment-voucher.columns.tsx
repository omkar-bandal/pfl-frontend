import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const PMPVoucherListCols = (): CustomGridColDef[] => {
    const navigate = useNavigate();

    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "voucherNo",
            headerName: "Voucher Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        // {
        //     field: "createdAt",
        //     headerName: "Created Date",
        //     width: 120,
        //     align: "center",
        //     headerAlign: "center"
        // },
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
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "grnNo",
            headerName: "GRN Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "companyName",
            headerName: "Company Name",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "debitCreditTo",
            headerName: "Debit From / Credit To",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "payReceivedFrom",
            headerName: "Received From / Pay To",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "location",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "sellerName",
            headerName: "Seller Name",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "contactNo",
            headerName: "Contact No",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "purpose",
            headerName: "Purpose",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "totalAmt",
            headerName: "Total Amount",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "amtWords",
            headerName: "Amount in Words",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "paymentMode",
            headerName: "Payment Mode",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        // {
        //     field: "anyAttachment",
        //     headerName: "Attachment",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton color="primary" onClick={() => handleDownload(params.row.billImage.path)}>
        //             <DownloadOutlined />
        //         </IconButton>
        //     ),
        // },
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
        {
            field: 'edit',
            headerName: 'Edit',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_PACKING_MATERIAL_VOUCHER}/${params.row.id}`)}>
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_PACKING_MATERIAL_VOUCHER}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}