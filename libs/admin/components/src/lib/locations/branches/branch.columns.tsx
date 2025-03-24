import { useCallback, useMemo } from 'react';
import { IconButton } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { Address, BranchType } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { formatAddress } from "@prime-fresh/shared/modules";


export const useBranchColumns = (): CustomGridColDef[] => {
    const navigate = useNavigate();

    const handleEdit = useCallback((branchId: string, branchType: BranchType) => {
        navigate(`${ADMIN_ROUTES.EDIT_BRANCHES}/${branchType}/${branchId}`);
    }, [navigate]);

    const handleView = useCallback((branchId: string, branchType: BranchType) => {
        navigate(`${ADMIN_ROUTES.VIEW_BRANCHES}/${branchType}/${branchId}`);
    }, [navigate]);

    return useMemo(() => [
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
            headerAlign: 'center',
            valueGetter: (value: Address) => value ? formatAddress(value) : '-',
        },
        {
            field: 'fullName',
            headerName: "Contact Person",
            width: 170,
            headerAlign: 'center',
            align: 'center',
            valueGetter: (value, row) => {
                return `${row.cFirstName || ''} ${row.cMiddleName || ''} ${row.cLastName || ''}`;
            },
        },
        {
            field: "contactNumber",
            headerName: "Contact",
            width: 100,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: "totalCapacity",
            headerName: "Total Capacity",
            width: 100,
            align: 'center',
        },
        {
            field: "currentCapacity",
            headerName: "Current Capacity",
            width: 100,
            align: 'center',
        },
        {
            field: "balanceCapacity",
            headerName: "Balance Capacity",
            width: 100,
            align: 'center',
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
                <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(params.row.id, params.row.type)}
                >
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
                <IconButton
                    aria-label="view"
                    onClick={() => handleView(params.row.id, params.row.type)}
                >
                    <Preview color="primary" />
                </IconButton>
            ),
        },
    ], [handleEdit, handleView]);
};
