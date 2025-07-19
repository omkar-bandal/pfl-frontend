import { IconButton, Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";
import { useMemo } from "react";
import { IEmployee } from "@prime-fresh/admin_api";

export const useEmployeeColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(() => [
    {
      field: "employeeId",
      headerName: "Employee ID",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 120,
      hide: false,
    },
    {
      field: 'fullName',
      headerName: "Name",
      flex: 1,
      minWidth: 200,
      headerAlign: 'center',
      isMobileVisible: true,
      hide: false,
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
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: false
    },
    {
      field: "password",
      headerName: "Password",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: false
    },
    {
      field: "cugNo",
      headerName: "CUG No",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: false
    },
    {
      field: "workEmail",
      headerName: "Email",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: false
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true
    },
    {
      field: "joiningLocation",
      headerName: "Joining Location",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true
    },
    {
      field: "currentWorkLocation",
      headerName: "Work Location",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true
    },
    {
      field: "accessLocation",
      headerName: "Access To Locations",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 180,
      hide: true,
      renderCell: (params: GridRenderCellParams<IEmployee>) =>
        (params.row.accessLocation || []).join(', '),
    },
    {
      field: "residentialAddress",
      headerName: "Residential Address",
      headerAlign: 'center',
      flex: 1,
      minWidth: 300,
      hide: true,
      valueGetter: (value) => value ? formatAddress(value) : '-',
    },
    {
      field: "permanentAddress",
      headerName: "Permanent Address",
      headerAlign: 'center',
      flex: 1,
      minWidth: 300,
      hide: true,
      valueGetter: (value) => value ? formatAddress(value) : '-',
    },
    {
      field: "primaryMobNo",
      headerName: "Primary Mobile No",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "primaryEmail",
      headerName: "Primary Email",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "secondaryMobNo",
      headerName: "Secondary Mobile No",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "secondaryEmail",
      headerName: "Secondary Email",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: 'center',
      align: 'center',
      hide: false,
      flex: 1,
      minWidth: 100,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.status) {
          case "ACTIVE": return <Chip label={convertInTitleCase(params.row.status)} color="success" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          case "INACTIVE": return <Chip label={convertInTitleCase(params.row.status)} color="default" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          case "SUSPENDED": return <Chip label={convertInTitleCase(params.row.status)} color="error" size="small" sx={{ flex: 1, minWidth: 80 }} />;
          default: return <Chip label="INACTIVE" color="default" size="small" />
        }
      }
    },
    {
      field: 'edit',
      headerName: 'Edit',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 70,
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
      flex: 1,
      minWidth: 70,
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
  ],[navigate])
};