import { convertInTitleCase, getDocStatusColor } from "@prime-fresh/shared/modules";
import { CustomGridColDef, EditIconBtn, ViewIconBtn } from "@prime-fresh/ui_shared";
import { useNavigate } from "react-router-dom";
import { salesRoutes } from "@prime-fresh/sales/modules";
import { useMemo } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Chip } from "@mui/material";

export const useReturnedByCustomerColumns = (canEdit: boolean, canView: boolean): CustomGridColDef[] => {
    const navigate = useNavigate();
    return useMemo(() => [
        {
            field: 'createdBy',
            headerName: 'Created By',
            flex: 1,
            minWidth: 120,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
        },
        {
            field: 'createdDate',
            headerName: 'Created Date',
            flex: 1,
            minWidth: 120,
            align: 'center',
            headerAlign: 'center',
            hide: false,
        },
        {
            field: 'createdTime',
            headerName: 'Created Time',
            flex: 1,
            minWidth: 120,
            align: 'center',
            headerAlign: 'center',
            hide: false,
        },
        {
            field: "deliveryChallanNo",
            headerName: "Challan No",
            minWidth: 150,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            hide: false,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "date",
            headerName: "Date",
            minWidth: 150,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            hide: false,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "companyName",
            headerName: "Company Name",
            minWidth: 250,
            flex: 1,
            headerAlign: "center",
            isMobileVisible: true,
            hide: false,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "remark",
            headerName: "Remark",
            minWidth: 400,
            flex: 1,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            hide: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: 'overAllStatus',
            headerName: 'Status',
            flex: 1,
            minWidth: 130,
            align: 'center',
            headerAlign: 'center',
            hide: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => {
                const status = convertInTitleCase(params.row.overAllStatus || '');
                return <Chip
                    label={status}
                    size="small"
                    sx={{
                        flex: 1,
                        minWidth: 80,
                        color: '#FFF',
                        backgroundColor: getDocStatusColor(params.row.overAllStatus || '')
                    }} />
            },
        },
        ...(canEdit
            ? [
                {
                    field: 'edit',
                    headerName: 'Edit',
                    flex: 1,
                    minWidth: 70,
                    sortable: false,
                    filterable: false,
                    isMobileVisible: true,
                    renderCell: (params: GridRenderCellParams) => (
                        <EditIconBtn
                            onClick={() => navigate(`${salesRoutes.UPDATE_RBC}/${params.row.id}`)}
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
                    flex: 1,
                    minWidth: 70,
                    sortable: false,
                    filterable: false,
                    isMobileVisible: true,
                    renderCell: (params: GridRenderCellParams) => (
                        <ViewIconBtn onClick={() => navigate(`${salesRoutes.VIEW_RBC}/${params.row.documentId}`)} />
                    ),
                },
            ]
            : []),
    ], [canEdit, canView, navigate])
}