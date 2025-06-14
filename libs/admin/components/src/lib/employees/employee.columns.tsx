import { IconButton, Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { convertInTitleCase, formatAddress } from "@prime-fresh/shared/modules";
import { useMemo } from "react";

export const useEmployeeColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  // const handleEmployeeStatus = useCallback((id: string) => {
  //   dispatch(setDataId(id));
  // },[dispatch]);
  return useMemo(() => [
    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 120,
    },
    {
      field: "currentLevel",
      headerName: "Level",
      width: 100
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
      field: "password",
      headerName: "Password",
      width: 100,
    },
    {
      field: "cugNo",
      headerName: "CUG No",
      width: 100,
    },
    {
      field: "workEmail",
      headerName: "Email",
      width: 150,
    },
    {
      field: "joiningDate",
      headerName: "Joining Date",
      width: 100,
    },
    {
      field: "joiningLocation",
      headerName: "Joining Location",
      width: 100,
    },
    {
      field: "currentWorkLocation",
      headerName: "Work Location",
      width: 100,
    },
    {
      field: "residentialAddress",
      headerName: "Residential Address",
      width: 300,
      valueGetter: (value) => value ? formatAddress(value) : '-',
    },
    {
      field: "permanentAddress",
      headerName: "Permanent Address",
      width: 300,
      valueGetter: (value) => value ? formatAddress(value) : '-',
    },
    {
      field: "primaryMobNo",
      headerName: "Primary Mobile No",
      width: 100,
    },
    {
      field: "primaryEmail",
      headerName: "Primary Email",
      width: 150,
    },
    {
      field: "secondaryMobNo",
      headerName: "Secondary Mobile No",
      width: 100,
    },
    {
      field: "secondaryEmail",
      headerName: "Secondary Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => {
        switch (params.row.status) {
          case "ACTIVE": return <Chip label={convertInTitleCase(params.row.status)} color="success" size="small" sx={{ width: 80 }} />;
          case "INACTIVE": return <Chip label={convertInTitleCase(params.row.status)} color="default" size="small" sx={{ width: 80 }} />;
          case "SUSPENDED": return <Chip label={convertInTitleCase(params.row.status)} color="error" size="small" sx={{ width: 80 }} />;
          default: return <Chip label="INACTIVE" color="default" size="small" />
        }
      }
    },
    {
      field: 'edit',
      headerName: 'Edit',
      headerAlign: 'center',
      align: 'center',
      width: 70,
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
      width: 70,
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