import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { convertInTitleCase } from "@prime-fresh/shared/modules";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const useDCTypeCustomerColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();
    return [
        {
            field: "challanNo",
            headerName: "Challan Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value? value.toUpperCase() : '-',
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
            valueGetter: (value: RequestedBy) => value ? convertInTitleCase(`${value.firstName || ''} ${value.lastName || ''}`) : '-',
        },
        {
            field: "companyName",
            headerName: "Company Name",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        // {
        //     field: "fromLocation",
        //     headerName: "From Location",
        //     width: 200,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        // {
        //     field: "toLocation",
        //     headerName: "To Location",
        //     width: 200,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => value ? value : '-',
        // },
        {
            field: "driverName",
            headerName: "Driver Name",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "vehicleNo",
            headerName: "Vehicle No",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value !== null ? value.toUpperCase() : '-',
        },
        // {
        //     field: "totAmt",
        //     headerName: "Total Amount",
        //     width: 120,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: number) => value ? value : '-',
        // },
        {
            field: "receiverName",
            headerName: "Receiver Name",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            headerAlign: "center",
            align: "center",
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
        // {
        //     field: "approvalNote",
        //     headerName: "Reason",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => {
        //         if (value === null)
        //             return '';
        //         else
        //             return value;
        //     }
        // },
        ...(canEdit
            ? [
                {
                  field: 'edit',
                  headerName: 'Edit',
                  width: 70,
                  sortable: false,
                  filterable: false,
                  isMobileVisible: true,
                  renderCell: (params: GridRenderCellParams) => (
                    <EditIconBtn
                      onClick={() =>
                        navigate(`${PURCHASE_ROUTES.UPDATE_DC_TYPE_CUSTOMER}/${params.row.id}`)
                      }
                    />
                  ),
                },
              ]
            : []),
          ...(canView
            ? [
                {
                  field: 'view',
                  headerName: 'View',
                  width: 70,
                  sortable: false,
                  filterable: false,
                  isMobileVisible: true,
                  renderCell: (params: GridRenderCellParams) => (
                    <ViewIconBtn
                      onClick={() =>
                        navigate(`${PURCHASE_ROUTES.VIEW_DC_TYPE_CUSTOMER}/${params.row.documentId}`)
                      }
                    />
                  ),
                },
              ]
            : []),
    ];
}