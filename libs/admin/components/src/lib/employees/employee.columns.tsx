import { IconButton, Chip, Button } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_ROUTES, setDataId } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";
import { useCallback, useMemo } from "react";

export const useEmployeeColumns = (): CustomGridColDef[] => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmployeeStatus = useCallback((id: string) => {
    dispatch(setDataId(id));
  },[dispatch]);
  return useMemo(() => [
    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 150,
    },
    {
      field: 'fullName',
      headerName: "Name",
      width: 170,
      isMobileVisible: true,
      valueGetter: (value, row) => {
        if (row) {
          const name = `${row.firstName || ''} ${row.middleName || ''} ${row.lastName || ''}`;
          return convertInTitleCase(name);
        } else {
          return '-';
        }
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
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
      valueGetter: (value) => value ? formatAddress(value) : '-',
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      width: 100,
    },
    // {
    //   field: "reportingManager",
    //   headerName: "Reporting Manager",
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
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.EDIT_EMPLOYEE}/${params.row.id}`)}>
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
        <IconButton aria-label="view" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_EMPLOYEE}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ],[navigate, handleEmployeeStatus])
};