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
            headerName: "Voucher No",
            minWidth: 120,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
          },
          {
            field: "createdDate",
            headerName: "Created Date",
            minWidth: 120,
            flex: 1,
            align: "center",
            headerAlign: "center"
          },
          {
            field: "createdTime",
            headerName: "Created Time",
            minWidth: 120,
            flex: 1,
            align: "center",
            headerAlign: "center"
          },
          {
            field: "requestedBy",
            headerName: "Requested By",
            minWidth: 150,
            flex: 1,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: RequestedBy) => value ? `${value.firstName || ''} ${value.lastName || ''}` : '',
        },
        // {
        //     field: "requestingDepartment",
        //     headerName: "Department",
        //     minWidth: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
        // },
        {
          field: "companyName",
          headerName: "Company Name",
          minWidth: 200,
          flex: 1,
          headerAlign: "center",
          valueGetter: (value: string) => value ? value : '',
        },
        {
          field: "debitCreditTo",
          headerName: "Debit From / Credit To",
          minWidth: 200,
          flex: 1,
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "payReceivedFrom",
          headerName: "Received From / Pay To",
          minWidth: 200,
          flex: 1,
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "location",
          headerName: "Location",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "totalAmt",
          headerName: "Total Amount",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: number) => value ? `${Number(value)} Rs.` : 0,
        },
        {
          field: "amtWords",
          headerName: "Amount in Words",
          minWidth: 200,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "paymentMode",
          headerName: "Payment Mode",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "receiverName",
          headerName: "Receiver Name",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
          field: "grnNo",
          headerName: "Refered GRN",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? value.toUpperCase() : "-",
        },
        {
          field: "challanNo",
          headerName: "Refered Challan",
          minWidth: 120,
          flex: 1,
          align: "center",
          headerAlign: "center",
          valueGetter: (value: string) => value ? value.toUpperCase() : "-",
        },
        {
          field: "remark",
          headerName: "Remark",
          minWidth: 200,
          flex: 1,
          headerAlign: "center",
          valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            minWidth: 120,
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ minWidth: 80 }} />;
                    case "approved": return <Chip label="Approved" color="info" size="small" sx={{ minWidth: 80 }} />;
                    case "rejected": return <Chip label="Not Approved" color="error" size="small" sx={{ minWidth: 80 }} />;
                    default: return <Chip label="pending" color="error" size="small" />
                }
            }
        },
        {
            field: "approvalNote",
            headerName: "Reason",
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        ...(canEdit
            ? [
                {
                  field: 'edit',
                  headerName: 'Edit',
                  minWidth: 70,
                  flex: 1,
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
                  minWidth: 70,
                  flex: 1,
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

// {
        //     field: "receivedBy",
        //     headerName: "Received By",
        //     minWidth: 120,
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
        //     minWidth: 100,
        //     align: "center",
        //     headerAlign: "center",
        //     renderCell: (params: GridRenderCellParams) => (
        //         <IconButton color="primary" onClick={() => handleDownload(params.row.billImage.path)}>
        //             <DownloadOutlined />
        //         </IconButton>
        //     ),
        // },