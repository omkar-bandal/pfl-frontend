/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetGRN } from "@prime-fresh/purchase_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { __values } from "tslib";

export const ReportTableCols = (): CustomGridColDef[] => {
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "grnNo",
            headerName: "GRN Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "requestedBy",
            headerName: "Requested By",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: any) => value !== null ? `${value.firstName || ''} ${value.lastName || ''}` : "-",
        },
        {
            field: "grnType",
            headerName: "GRN Type",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "locationType",
            headerName: "Location Type",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "purchaseType",
            headerName: "Purchase Type",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
        },
        {
            field: "companyName",
            headerName: "Company",
            width: 300,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: { id: string, name: string }) => value ? value.name : '-',
        },
        // {
        //     field: "purchaseForSalesLocation",
        //     headerName: "Destination",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        {
            field: "source",
            headerName: "Source",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
    ])
}