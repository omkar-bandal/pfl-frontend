import { GridRenderCellParams } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, setOpenFor } from "@prime-fresh/admin/modules";
import { Address } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";


export const OfficeColumns = (): CustomGridColDef[] => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (officeId: string, officeType: string) => {
        dispatch(setOpenFor('update'));
        navigate(`${ADMIN_ROUTES.EDIT_OFFICE}/${officeType}/${officeId}`)
    }

    const handleView = (officeId: string, officeType: string) => {
        navigate(`${ADMIN_ROUTES.VIEW_OFFICE}/${officeType}/${officeId}`)
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
                return `${params.address1}, ${params.address2}, ${params.location}, ${params.city}, ${params.state}, ${params.pincode}`;
            }
        },
        {
            field: "pincode",
            headerName: "Pincode",
            width: 100,
            isMobileVisible: true,
            valueGetter: (value, row) => {
                console.log(value);
                return `${row.address.pincode}`;
            }
        },
        {
            field: 'fullName',
            headerName: "Contact Person",
            width: 170,
            valueGetter: (value, row) => {
                console.log(value);
                return `${row.cFirstName || ''} ${row.cMiddleName || ''} ${row.cLastName || ''}`;
            },
        },
        {
            field: "contactNumber",
            headerName: "Contact",
            width: 100,
        },
        {
            field: "officeEmail",
            headerName: "Email",
            width: 150,
        },
        {
            field: "notes",
            headerName: "Remark",
            width: 250,
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
};