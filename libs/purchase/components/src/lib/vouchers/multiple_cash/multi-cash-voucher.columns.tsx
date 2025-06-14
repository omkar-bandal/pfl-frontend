import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { convertInTitleCase } from "@prime-fresh/shared/modules";


export const useMCVoucherColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();

    return [
        {
            field: "voucherNo",
            headerName: "Voucher Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
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
            valueGetter: (value: RequestedBy) => {
                return value ? `${value.firstName || ''} ${value.lastName || ''}` : '-';
            }
        },
        {
            field: "requestingDepartment",
            headerName: "Department",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
        },
        {
            field: "grnNo",
            headerName: "GRN Number",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
        },
        {
            field: "companyName",
            headerName: "Company Name",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "debitCreditTo",
            headerName: "Debit From / Credit To",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "payReceivedFrom",
            headerName: "Received From / Pay To",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "location",
            headerName: "Location",
            width: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "totalAmt",
            headerName: "Total Amount",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: number) => value ? value : 0,
        },
        {
            field: "amtWords",
            headerName: "Amount in Words",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "paymentMode",
            headerName: "Payment Mode",
            width: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        // {
        //     field: "receivedBy",
        //     headerName: "Received By",
        //     width: 120,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => {
        //         if (value === null)
        //             return '-';
        //         else
        //             return value;
        //     }
        // },
        // {
        //     field: "anyAttachment",
        //     headerName: "Attachment",
        //     width: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton color="primary" onClick={() => handleDownload(params.row.billImage.path)}>
        //             <DownloadOutlined />
        //         </IconButton>
        //     ),
        // },
        {
            field: "approvalStatus",
            headerName: "Status",
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
        {
            field: "approvalNote",
            headerName: "Reason",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
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
                        navigate(`${PURCHASE_ROUTES.UPDATE_MULT_CASH_VOUCHER}/${params.row.id}`)
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
                        navigate(`${PURCHASE_ROUTES.VIEW_MULT_CASH_VOUCHER}/${params.row.id}`)
                      }
                    />
                  ),
                },
              ]
            : []),
    ];
}