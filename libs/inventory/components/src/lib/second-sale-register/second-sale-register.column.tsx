import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
// import { useNavigate } from "react-router-dom";

export const SecondSaleRegisterColumns = (): CustomGridColDef[] => {
    // const navigate = useNavigate();
    // const handlePaymentReq = (status: string, id: string) => {
    //     if(status === "approved")
    //         navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${id}`)
    // }
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "location",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        {
            field: "saleDate",
            headerName: "Sale Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "buyerName",
            headerName: "Buyer Name",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "buyerMobNo",
            headerName: "Buyer Mob No",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "reasonForSale",
            headerName: "Reason For Sale",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "approvedBy",
            headerName: "Approved By",
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