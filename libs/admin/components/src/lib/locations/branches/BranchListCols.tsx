import { IconButton } from "@mui/material";
import {GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { Address, BranchType } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";


export const BranchListCols = (): CustomGridColDef[] => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (branchId: string, branchType: BranchType) => {
        dispatch(setOpenFor('update'));
        navigate(`${ADMIN_ROUTES.EDIT_BRANCHES}/${branchType}/${branchId}`);
    }

    const handleView = (branchId: string, branchType: BranchType) => {
        navigate(`${ADMIN_ROUTES.VIEW_BRANCHES}/${branchType}/${branchId}`);
    }

    return ([
        { field: "id", headerName: "ID", width: 30 },
        {
            field: "name",
            headerName: "Name",
            width: 150,
            isMobileVisible: true,
        },
        {
            field: "address",
            headerName: "Address",
            width: 300,
            valueFormatter: (params: Address) => {
                if (params !== null)
                    return `${params.address1}, ${params.address2}, ${params.location}, ${params.city}, ${params.state}, ${params.pincode}`;
                else
                    return '';
            }
        },
        {
            field: "pincode",
            headerName: "Pincode",
            width: 100,
            isMobileVisible: true,
            valueGetter: (value, row) => {
                console.log(value);
                if (row.address !== null)
                    return `${row.address.pincode}`;
                else
                    return '';
            },
        },
        {
            field: 'fullName',
            headerName: "Contact Person",
            width: 170,
            valueGetter: (value, row) => {
                console.log(value);
                if (row.cFirstName !== null && row.cLastName !== null)
                    return `${row.cFirstName || ''} ${row.cMiddleName || ''} ${row.cLastName || ''}`;
                else return '';
            },
        },
        {
            field: "contactNumber",
            headerName: "Contact",
            width: 100,
        },
        {
            field: "totalCapacity",
            headerName: "Total Capacity",
            width: 100,
        },
        {
            field: "currentCapacity",
            headerName: "Current Capacity",
            width: 100,
        },
        {
            field: "balanceCapacity",
            headerName: "Balance Capacity",
            width: 100,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            width: 80,
            hideable: false,
            sortable: false,
            filterable: false,
            disableExport: true,
            disableColumnMenu: true,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id, params.row.type)}>
                    <Edit color="secondary" />
                </IconButton>
            ),
        },
        {
            field: 'view',
            headerName: 'View',
            headerAlign: 'center',
            align: 'center',
            width: 80,
            hideable: false,
            sortable: false,
            filterable: false,
            disableExport: true,
            disableColumnMenu: true,
            isMobileVisible: true,
            renderCell: (params: GridRenderCellParams) => (
                    <IconButton aria-label="edit" onClick={() => handleView(params.row.id, params.row.type)}>
                        <Preview color="primary" />
                    </IconButton>
            ),
        },
    ])
}