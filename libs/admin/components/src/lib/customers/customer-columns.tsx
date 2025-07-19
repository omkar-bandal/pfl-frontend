import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { Address, GetCustomerCategory, GetCustomerType } from '@prime-fresh/admin_api';
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { formatAddress } from "@prime-fresh/shared/modules";

export const useCustomerColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return useMemo(() => [
    {
      field: 'organisationName',
      headerName: "Name",
      headerAlign: 'center',
      flex: 1,
      minWidth: 170,
      hide: false,
      isMobileVisible: true,
    },
    {
      field: 'customerCode',
      headerName: "Code",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 170,
      hide: false,
      isMobileVisible: true,
    },
    {
      field: 'organisationType',
      headerName: "Organisation Type",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 170,
      hide: true,
      valueGetter: (value: string) => value ? value : "-",
    },
    {
      field: "customerType",
      headerName: "Type",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
      valueGetter: (value: GetCustomerType) => value ? value.name : '-',
    },
    {
      field: "customerCategory",
      headerName: "Category",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
      valueGetter: (value: GetCustomerCategory) => value ? value.name : '-',

    },
    {
      field: "primaryContactNo",
      headerName: "Contact No",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: false,
      valueGetter: (value: string) => value ? value : '-',
    },
    {
      field: "emailPrimary",
      headerName: "Email",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: false,
    },
    {
      field: "customerAddress",
      headerName: "Address",
      headerAlign: 'center',
      flex: 1,
      minWidth: 300,
      hide: false,
      valueGetter: (value: Address) => value ? formatAddress(value) : '-',
    },
    {
      field: "ledgerReconciledDate",
      headerName: "Ledger Reconcil Date",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    // {
    //   field: "employeeCode",
    //   headerName: "SalesPerson",
    //   headerAlign: 'center',
    //   flex: 1,
    //   minWidth: 150,
    // },
    {
      field: "manager",
      headerName: "Manager",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "referredBy",
      headerName: "Referred By",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "contact_person",
      headerName: "Contact Person",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "notes",
      headerName: "Remark",
      headerAlign: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      headerAlign: 'center',
      flex: 1,
      minWidth: 80,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_CUSTOMER}/${params.row.id}`)}>
          <Edit color="secondary" />
        </IconButton>
      ),
    },
    {
      field: 'view',
      headerName: 'View',
      headerAlign: 'center',
      flex: 1,
      minWidth: 80,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_CUSTOMER}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ], [navigate])
};