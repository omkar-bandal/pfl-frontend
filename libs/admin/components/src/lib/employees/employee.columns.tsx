import { IconButton, Chip, Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_ROUTES, setDataId } from "@prime-fresh/admin/modules";
import { GetRole } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const EmployeeListCols = (): CustomGridColDef[] => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`${ADMIN_ROUTES.EDIT_EMPLOYEE}/${id}`);
  }

  const handleEmployeeStatus = (id: string) => {
    dispatch(setDataId(id));
  }
  return ([
    // {
    //   field: "employeeStatus",
    //   headerName: "Employee Status",
    //   width: 100,
    //   renderCell: (params: GridRenderCellParams) => {
    //     switch (params.row.employeeStatus) {
    //       case "active": return <Chip label={params.row.employeeStatus} color="primary" size="small" sx={{ width: 80 }} />;
    //       case "inactive": return <Chip label={params.row.employeeStatus} color="error" size="small" sx={{ width: 80 }} />;
    //       default: return <Chip label={params.row.employeeStatus} color="error" size="small" sx={{ width: 80 }} />;
    //     }
    //   }
    // },
    {
      field: "role",
      headerName: "Role",
      width: 80,
      valueFormatter: (params: GetRole) => {
        if (params) {
          return (params.name).charAt(0).toUpperCase() + (params.name).slice(1).toLowerCase();
        }
        else {
          return "";
        }
      }
    },
    // {
    //   field: "firstName",
    //   headerName: "First Name",
    //   width: 100,
    // },
    // {
    //   field: "lastName",
    //   headerName: "Last Name",
    //   width: 100,
    // },
    {
      field: 'fullName',
      headerName: "Name",
      width: 170,
      isMobileVisible: true,
      valueGetter: (value, row) => {
        console.log(value);
        return `${row.firstName || ''} ${row.middleName || ''} ${row.lastName || ''}`;
      },
    },
    {
      field: "username",
      headerName: "Username",
      width: 100,
    },
    {
      field: "phoneNumber",
      headerName: "Contact No",
      width: 100,
    },
    {
      field: "cugNo",
      headerName: "CUG No",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "companyEmail",
      headerName: "Compamy Email",
      width: 150,
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      width: 100,
    },
    {
      field: "relocationDate",
      headerName: "Relocation Date",
      width: 100,
    },
    // {
    //   field: "recommendedBy",
    //   headerName: "Recommended By",
    //   width: 100,
    // },
    // {
    //   field: "reportingAuthorityFunctional",
    //   headerName: "Reporting Authority (Functional)",
    //   width: 100,
    // },
    // {
    //   field: "reportingAuthorityAdministrative",
    //   headerName: "Reporting Authority (Administrative)",
    //   width: 100,
    // },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.status) {
          case "pending": return <Chip label={params.row.status} color="default" size="small" sx={{ width: 80 }} />;
          case "approved": return <Chip label={params.row.status} color="info" size="small" sx={{ width: 80 }} />;
          default: return <Chip label="pending" color="error" size="small" />
        }
      }
    },
    {
      field: 'create',
      headerName: 'Create',
      headerAlign: 'center',
      align: 'center',
      width: 85,
      hideable: false,
      sortable: false,
      filterable: false,
      disableExport: true,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => {
        if (params.row.employeeStatus === 'inactive') {
          return <Button
            sx={{ fontSize: 14, textTransform: 'none' }}
            color="primary" variant="text"
            onClick={() => handleEmployeeStatus(params.row.id)}>
            Active
          </Button>
        } else {
          return <Button
            sx={{ fontSize: 12, textTransform: 'none' }}
            color="error" variant="text"
            onClick={() => handleEmployeeStatus(params.row.id)}>
            Inactive
          </Button>
        }
      },
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
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
          <Edit color="info" />
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
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_EMPLOYEE}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ])
};