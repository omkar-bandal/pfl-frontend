import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { PURCHASE_ROUTES } from "@prime-fresh/purchase/modules";
import { convertInTitleCase, getDocStatusColor } from "@prime-fresh/shared/modules";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";

export const useDCTypeStockTransferColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
  const navigate = useNavigate();
  return [
    {
      field: "challanNo",
      headerName: "Challan Number",
      width: 130,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value: string) => value ? value.toUpperCase() : '-',
    },
    {
      field: 'createdBy',
      headerName: 'Created By',
      flex: 1,
      minWidth: 120,
      align: 'center',
      headerAlign: 'center',
      hide: false,
      valueGetter: (value: string) => (value ? convertInTitleCase(value) : ''),
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: false,
    },
    {
      field: "createdTime",
      headerName: "Created Time",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: false,
    },
    {
      field: "stockTransferType",
      headerName: "Transfer Type",
      width: 150,
      align: "center",
      headerAlign: "center",
      hide: false,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 200,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: string) => value ? value : '-',
    },
    {
      field: "fromLocation",
      headerName: "From Location",
      width: 200,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: string) => value ? value : '-',
    },
    {
      field: "toLocation",
      headerName: "To Location",
      width: 200,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: string) => value ? value : '-',
    },
    {
      field: "netProductWeight",
      headerName: "Net Weight",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: number) => value ? `${value} Kg` : '-',
    },
    {
      field: "totalProductAmount",
      headerName: "Total Amount",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: number) => value ? `${value} Rs` : '-',
    },
    {
      field: "totalAmtInWords",
      headerName: "Amount In Words",
      width: 220,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: number) => value ? `${value} Rs` : '-',
    },
    {
      field: "netPackagingMaterialWeight",
      headerName: "Packing Material Weight",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: number) => value ? `${value} Kg` : '-',
    },
    {
      field: "totalPackagingMaterialAmount",
      headerName: "Packing Material Amount",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: number) => value ? `${value} Rs` : '-',
    },
    {
      field: "driverName",
      headerName: "Driver Name",
      width: 130,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
    },
    {
      field: "licenseNo",
      headerName: "License No",
      width: 130,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? value.toUpperCase() : '-',
    },
    {
      field: "contactNo",
      headerName: "Contact No",
      width: 130,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? value : '-',
    },
    {
      field: "vehicleNo",
      headerName: "Vehicle No",
      width: 130,
      align: "center",
      headerAlign: "center",
      hide: false,
      valueGetter: (value: string) => value !== null ? value.toUpperCase() : '-',
    },
    {
      field: "receiverName",
      headerName: "Receiver Name",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
    },
    {
      field: "rmn",
      headerName: "RM Name",
      width: 120,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
    },
    {
      field: "remark",
      headerName: "Remark",
      width: 200,
      align: "center",
      headerAlign: "center",
      hide: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : '-',
    },
    {
      field: "overAllStatus",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      width: 130,
      renderCell: (params: GridRenderCellParams) => {
        const status = convertInTitleCase(params.row.overAllStatus);
        return <Chip label={status} size="small" sx={{ flex: 1, minWidth: 80, color: '#FFF', backgroundColor: getDocStatusColor(params.row.overAllStatus) }} />
      },
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
                navigate(`${PURCHASE_ROUTES.UPDATE_DC_TYPE_STOCK_TRANSFER}/${params.row.id}`)
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
                navigate(`${PURCHASE_ROUTES.VIEW_DC_TYPE_STOCK_TRANSFER}/${params.row.documentId}`)
              }
            />
          ),
        },
      ]
      : []),
  ];
}