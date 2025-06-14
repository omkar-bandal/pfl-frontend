import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip, IconButton } from "@mui/material";
import { AddCard } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { convertInTitleCase } from "@prime-fresh/shared/modules";

export const useGRNColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();
    return [
        {
            field: "grnNo",
            headerName: "GRN Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value.toUpperCase() : "",
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
            field: "grnType",
            headerName: "GRN Type",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value) : "",
        },
        {
            field: "billNo",
            headerName: "Bill Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value.toUpperCase() : "",
        },
        // {
        //     field: "requestedBy",
        //     headerName: "Requested By",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: RequestedBy) => value !== null ? convertInTitleCase(`${value.firstName || ''} ${value.lastName || ''}`) : "-",
        // },
        // {
        //     field: "requestingDepartment",
        //     headerName: "Department",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        // },
        // {
        //     field: "baseLocation",
        //     headerName: "Base Location",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        // },
        {
            field: "companyName",
            headerName: "Company",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "purchaseLocation",
            headerName: "Location",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "purchaseForSalesLocation",
            headerName: "Destination",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "source",
            headerName: "Source",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ width: 80 }} />;
                    case "approved": return <Chip label={params.row.approvalStatus} color="info" size="small" sx={{ width: 80 }} />;
                    case "notApproved": return <Chip label={params.row.approvalStatus} color="error" size="small" sx={{ width: 80 }} />;
                    default: return <Chip label="-" color="error" size="small" />
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
            field: 'payment_req',
            headerName: 'Payment Request',
            width: 50,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="payment_req" onClick={() => navigate(`${PURCHASE_ROUTES.CREATE_PAYMENT_REQ}/${params.row.id}`)}>
                    <AddCard color="info" />
                </IconButton>
            ),
        },
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
                        navigate(`${PURCHASE_ROUTES.UPDATE_GRN}/${params.row.id}`)
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
                        navigate(`${PURCHASE_ROUTES.VIEW_GRN}/${params.row.id}`)
                      }
                    />
                  ),
                },
              ]
            : []),
    ];
}