import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";

export const useAQRColumns = (): CustomGridColDef[] => {
    return useMemo(()=>[
        {
            field: "supplierName",
            headerName: "Supplier Name",
            width: 200,
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "supplierLocation",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "arrivalDate",
            headerName: "Arrival Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "arrivedQty",
            headerName: "Arrived Quantity",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: number) => value ? value : 0,
        },
        {
            field: "samplingQty",
            headerName: "Sampling Quantity",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: number) => value ? value : 0,
        },
        {
            field: "qcCheckBy",
            headerName: "QC Checked By",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : "-",
        },
        {
            field: "remark",
            headerName: "Remark",
            width: 300,
            valueGetter: (value: string) => value ? value : "-",
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
    ],[])
}