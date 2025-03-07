import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const VehicleDispatchRegisterColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();

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
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${inventoryRouteConstants.UPDATE_VEHILCE_DISPATCH_REGISTER}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
    ])
}