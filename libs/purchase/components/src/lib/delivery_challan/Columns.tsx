import { Edit, Preview } from "@mui/icons-material";
import { Chip, IconButton } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { useNavigate } from "react-router-dom";

export const DeliveryChallanListCols = (): GridColDef[] => {
    const navigate = useNavigate();
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "challanNo",
            headerName: "Challan Number",
            width: 130,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "deliveryCType",
            headerName: "Challan Type",
            width: 130,
            align: "center",
            headerAlign: "center",
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
            valueGetter: (value: RequestedBy) => {
                return value ? `${value.firstName || ''} ${value.lastName || ''}` : '-';
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
            field: "partyName",
            headerName: "Party Name",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "fromLocation",
            headerName: "From Location",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "toLocation",
            headerName: "To Location",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "driverName",
            headerName: "Driver Name",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "vehicleNo",
            headerName: "Vehicle No",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "totAmt",
            headerName: "Total Amount",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "receiverName",
            headerName: "Receiver Name",
            width: 120,
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
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_DELIVERY_CHALLAN}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        // {
        //     field: 'view',
        //     headerName: 'View',
        //     width: 50,
        //     sortable: false,
        //     filterable: false,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_DELIVERY_CHALLAN}/${params.row.id}`)}>
        //             <Preview color="primary" />
        //         </IconButton>
        //     ),
        // },
    ])
}