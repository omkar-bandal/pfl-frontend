import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
// import { useNavigate } from "react-router-dom";

export const VehicleDispatchRegisterColumns = (): CustomGridColDef[] => {
    // const navigate = useNavigate();
    // const handlePaymentReq = (status: string, id: string) => {
    //     if(status === "approved")
    //         navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${id}`)
    // }
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "date",
            headerName: "Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "vehicleNo",
            headerName: "Vehicle No",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "driverName",
            headerName: "Driver Name",
            width: 100,
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "driverMobNo",
            headerName: "Driver Mob No",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "paymentDiscussed",
            headerName: "Payment Discussed",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "transportationBillAmt",
            headerName: "Transportation Bill Amount",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "advancePaid",
            headerName: "Advance Paid Amount",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "clientName",
            headerName: "Client Name",
            width: 100,
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
            renderCell: () => (
                <IconButton aria-label="edit">
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