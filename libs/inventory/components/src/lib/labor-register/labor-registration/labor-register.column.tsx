import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Address} from "@prime-fresh/admin_api";
import { inventoryRouteConstants } from "@prime-fresh/inventory/modules";
import { formatAddress } from "@prime-fresh/shared/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const LaborRegisterColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    return useMemo(() => [
        // {
        //     field: "siteName",
        //     headerName: "Site Name",
        //     width: 150,
        //     align: "center",
        //     headerAlign: "center",
        //     valueGetter: (value: GetFilteredBranchData) => value ? value.name : '-'
        // },
        {
            field: "laborType",
            headerName: "Labor Type",
            width: 130,
            align: "center",
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "laborName",
            headerName: "Labor Name",
            width: 250,
            headerAlign: "center",
            isMobileVisible: true,
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "mobileNumber",
            headerName: "Contact No",
            width: 120,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "email",
            headerName: "Email",
            width: 200,
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "gender",
            headerName: "Gender",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "birthDate",
            headerName: "Birth Date",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "maritalStatus",
            headerName: "Marital Status",
            width: 100,
            align: "center",
            headerAlign: "center",
            valueGetter: (value: string) => value ? value : '-'
        },
        {
            field: "presentAddress",
            headerName: "Present Address",
            width: 300,
            headerAlign: "center",
            valueGetter: (value: Address) => value ? formatAddress(value) : '-'
        },
        {
            field: "permanentAddress",
            headerName: "Permanent Address",
            width: 300,
            headerAlign: "center",
            valueGetter: (value: Address) => value ? formatAddress(value) : '-'
        },
        {
            field: 'edit',
            headerName: 'Edit',
            align: 'center',
            headerAlign: 'center',
            width: 80,
            sortable: false,
            filterable: false,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => navigate(`${inventoryRouteConstants.UPDATE_LABOUR_REGISTER}/${params.row.id}`)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        // {
        //     field: 'view',
        //     headerName: 'View',
        //     width: 80,
        //     sortable: false,
        //     filterable: false,
        //     isMobileVisible: true,
        //     renderCell: () => (
        //         <IconButton aria-label="edit">
        //             <Preview color="primary" />
        //         </IconButton>
        //     ),
        // },
    ],[navigate])
}