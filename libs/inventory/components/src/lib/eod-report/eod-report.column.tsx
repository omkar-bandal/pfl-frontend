import { Edit, Preview } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const EODReportColumns = (): CustomGridColDef[] => {
    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "location",
            headerName: "Location",
            width: 200,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "date",
            headerName: "Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "submission",
            headerName: "Submission",
            width: 150,
            align: "center",
            headerAlign: "center",
            isMobileVisible: false,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: "comments",
            headerName: "Comments",
            width: 300,
            align: "center",
            headerAlign: "center",
            isMobileVisible: false,
            valueGetter: (value: string) => value ? value : '-',
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: () => (
                <IconButton aria-label="edit">
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        {
            field: 'view',
            headerName: 'View',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: () => (
                <IconButton aria-label="edit">
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ])
}