import { GridRenderCellParams } from "@mui/x-data-grid";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useAQRColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();
    return useMemo(() => [
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
                        navigate(`${inventoryRouteConstants.UPDATE_AQR}/${params.row.id}`)
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
                        navigate(`${inventoryRouteConstants.VIEW_AQR}/${params.row.id}`)
                      }
                    />
                  ),
                },
              ]
            : []),
    ], [canEdit, canView, navigate])
}