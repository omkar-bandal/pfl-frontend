// import { Edit } from "@mui/icons-material";
// import { IconButton } from "@mui/material";
// import { GridRenderCellParams } from "@mui/x-data-grid";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
// import { useNavigate } from "react-router-dom";
// import {salesRoutes} from "@prime-fresh/sales/modules";
import { useMemo } from "react";

export const useReturnedByCustomerColumns = (): CustomGridColDef[] => {
    // const navigate = useNavigate();
    return useMemo(() => [
        {
            field: "companyName",
            headerName: "Company Name",
            minWidth: 250,
            flex: 1,
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "deliveryChallanNo",
            headerName: "Challan No",
            minWidth: 150,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "date",
            headerName: "Date",
            minWidth: 150,
            flex:1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        // {
        //     field: "totalQty",
        //     headerName: "Quantity",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     isMobileVisible: true,
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        // {
        //     field: "totalPrice",
        //     headerName: "Amount",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     isMobileVisible: true,
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        {
            field: "remark",
            headerName: "Remark",
            minWidth: 400,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        // {
        //     field: 'edit',
        //     headerName: 'Edit',
        //     width: 80,
        //     sortable: false,
        //     filterable: false,
        //     isMobileVisible: true,
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton aria-label="edit" onClick={() => navigate(`${salesRoutes.UPDATE_RBC}/${params.row.id}`)}>
        //             <Edit color="secondary" />
        //         </IconButton>
        //     ),
        // },
    ],[])
}