import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { GetDeliveryChallan } from "@prime-fresh/purchase_api";
import { CustomGridColDef, toast } from "@prime-fresh/ui_shared";
import { useCallback, useMemo } from "react";

export const useFinalInvoiceColumns = (): CustomGridColDef[] => {
    const downloadProformaInvoice = useCallback((pdfUrl: string) => {
        if (pdfUrl) {
            // window.open(pdfUrl, '_blank');
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'document.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            toast.error('No PDF URL found in the response');
        }
    }, [])
    return useMemo(() => [
        // {
        //     field: "deliveryChallan",
        //     headerName: "Delivery Challan",
        //     flex:1,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: GetDeliveryChallan) => value ? value.challanNo : '-'
        // },
        {
            field: "invoiceNo",
            headerName: "Invoice Number",
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value.toUpperCase() : '-',
        },
        {
            field: "invoiceDate",
            headerName: "Date",
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        // {
        //     field: "location",
        //     headerName: "Location",
        //     width: 200,
        //     align: "center",
        //     headerAlign: "center",
        //     isMobileVisible: true,
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        {
            field: 'download',
            headerName: 'Download',
            align: "center",
            headerAlign: "center",
            flex: 1,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => downloadProformaInvoice(params.row.pdfData)}>
                    <Download color="secondary" />
                </IconButton>
            ),
        },
    ], [downloadProformaInvoice])
}