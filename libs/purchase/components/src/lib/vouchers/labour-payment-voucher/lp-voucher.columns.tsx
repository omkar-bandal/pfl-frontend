import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { RequestedBy } from "@prime-fresh/purchase_api";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { convertInTitleCase } from "@prime-fresh/shared/modules";


export const useLPVoucherColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();
    return [
        {
            field: "voucherNo",
            headerName: "Voucher Number",
            flex: 1, 
            minWidth: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "createdDate",
            headerName: "Created Date",
            flex: 1, 
            minWidth: 120,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "createdTime",
            headerName: "Created Time",
            flex: 1, 
            minWidth: 120,
            align: "center",
            headerAlign: "center"
        },
        {
            field: "requestedBy",
            headerName: "Created By",
            flex: 1, 
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: RequestedBy) => value ? convertInTitleCase(`${value.firstName || ''} ${value.lastName || ''}`) : '',
        },
        {
            field: "requestingDepartment",
            headerName: "Department",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '',
        },
        {
            field: "grnNo",
            headerName: "GRN Number",
            flex: 1, 
            minWidth: 130,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value.toUpperCase() : '',
        },
        {
            field: "companyName",
            headerName: "Company Name",
            flex: 1, 
            minWidth: 200,
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "debitCreditTo",
            headerName: "Debit From / Credit To",
            flex: 1, 
            minWidth: 150,
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "payReceivedFrom",
            headerName: "Received From / Pay To",
            flex: 1, 
            minWidth: 150,
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "location",
            headerName: "Location",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "noOfLabours",
            type: 'number',
            headerName: "No Of Labours",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: number) => value ? Number(value) : '',
        },
        {
            field: "ratePerLabour",
            headerName: "Rate Per Labours",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: number) =>  value ? `${Number(value)} Rs` : '',
        },
        {
            field: "loadingDate",
            headerName: "Loading Date",
            flex: 1, minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '',
        },
        {
            field: "totalAmt",
            headerName: "Total Amount",
            flex: 1, minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: number) =>  value ? `${Number(value)} Rs` : '',
        },
        {
            field: "amtWords",
            headerName: "Amount in Words",
            flex: 1, 
            minWidth: 200,
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "paymentMode",
            headerName: "Payment Mode",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "contactNo",
            headerName: "Contact No",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '',
        },
        {
            field: "altContactNo",
            headerName: "Alt. Contact No",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '',
        },
        {
            field: "receiverName",
            headerName: "Receiver Name",
            flex: 1, 
            minWidth: 150,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "kyc",
            headerName: "KYC",
            flex: 1, 
            minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: boolean) => value === true ? 'Yes' : 'No',
        },
        {
            field: "remark",
            headerName: "Remark",
            flex: 1, 
            minWidth: 200,
            headerAlign: "center",
            valueGetter: (value: string) => value ? convertInTitleCase(value) : '',
        },
        {
            field: "approvalStatus",
            headerName: "Status",
            flex: 1, 
            minWidth: 130,
            align: "center",
            headerAlign: "center",
            renderCell: (params: GridRenderCellParams) => {
                switch (params.row.approvalStatus) {
                    case "pending": return <Chip label={params.row.approvalStatus} color="default" size="small" sx={{ flex: 1, minWidth: 80 }} />;
                    case "approved": return <Chip label="Approved" color="info" size="small" sx={{ flex: 1, minWidth: 80 }} />;
                    case "rejected": return <Chip label="Not Approved" color="error" size="small" sx={{ flex: 1, minWidth: 80 }} />;
                    default: return <Chip label="pending" color="error" size="small" />
                }
            }
        },
        {
            field: "approvalNote",
            headerName: "Reason",
            flex: 1, minWidth: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => {
                return value ? value : '-';
            }
        },
        ...(canEdit
            ? [
                {
                  field: 'edit',
                  headerName: 'Edit',
                  flex: 1, minWidth: 70,
                  sortable: false,
                  filterable: false,
                  isMobileVisible: true,
                  renderCell: (params: GridRenderCellParams) => (
                    <EditIconBtn
                      onClick={() =>
                        navigate(`${PURCHASE_ROUTES.UPDATE_LABOUR_CASH_VOUCHER}/${params.row.id}`)
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
                  flex: 1, minWidth: 70,
                  sortable: false,
                  filterable: false,
                  isMobileVisible: true,
                  renderCell: (params: GridRenderCellParams) => (
                    <ViewIconBtn
                      onClick={() =>
                        navigate(`${PURCHASE_ROUTES.VIEW_LABOUR_CASH_VOUCHER}/${params.row.id}`)
                      }
                    />
                  ),
                },
              ]
            : []),
    ];
}