import React from 'react'
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import {SALES_ROUTES} from "@prime-fresh/sales/modules";

export const SalesOrderColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();

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
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${SALES_ROUTES.UPDATE_SALES_ORDER}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
    ])
}