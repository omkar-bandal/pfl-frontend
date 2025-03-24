import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
// import { RequestedBy } from "@prime-fresh/purchase_api";

export const useTPVoucherColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    return useMemo(() => [
        {
            field: "voucherNo",
            headerName: "Voucher Number",
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
            field: "driverName",
            headerName: "Driver",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "vehicleNo",
            headerName: "Vehicle No",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "dispatchLocation",
            headerName: "Dispatch Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "destinationLocation",
            headerName: "Destination Location",
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
        {
            field: "grnNo",
            headerName: "Reference GRN",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "createdDate",
            headerName: "Created Date",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "createdTime",
            headerName: "Created Time",
            width: 120,
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.UPDATE_TRANSPORT_CASH_VOUCHER}/${params.row.id}`)}>
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
                <IconButton aria-label="edit" onClick={() => navigate(`${PURCHASE_ROUTES.VIEW_TRANSPORT_CASH_VOUCHER}/${params.row.id}`)}>
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ], [navigate])
}