import { GridRenderCellParams } from "@mui/x-data-grid";
import { Preview } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { Address, CustomerCategory, CustomerTypes } from '@prime-fresh/admin_api';
import { CustomGridColDef } from "@prime-fresh/ui_shared";

export const CustomerListCols = (): CustomGridColDef[] => {
  const navigate = useNavigate();

  return ([
    { field: "id", type: "string", headerName: "ID", width: 30 },
    {
      field: 'organisationName',
      headerName: "Name",
      width: 170,
      isMobileVisible: true,
    },
    {
      field: 'customerCode',
      headerName: "Code",
      width: 170,
      isMobileVisible: true,
    },
    {
      field: 'organisationType',
      headerName: "Organisation Type",
      width: 170,
      valueGetter: (value: string) => value? value : "-",
    },
    {
      field: "customerType",
      headerName: "Type",
      width: 100,
      valueGetter: (value: CustomerTypes) => value? value.name : '-',
    },
    {
      field: "customerCategory",
      headerName: "Category",
      width: 100,
      valueGetter: (value: CustomerCategory) => value? value.name : '-',
      
    },
    {
      field: "primaryContactNo",
      headerName: "Contact No",
      width: 150,
      valueGetter: (value: string) => value? value : '-',
    },
    {
      field: "emailPrimary",
      headerName: "Email",
      width: 150,
    },
    {
      field: "customerAddress",
      headerName: "Address",
      width: 300,
      valueGetter: (value: Address) => {
        return value? `${value.address1 || ''}, ${value.address2 || ''}, ${value.location || ''}, ${value.city || ''}, ${value.state || ''}, ${value.pincode || ''}` : '-';
      }
    },
    {
      field: "ledgerReconciledDate",
      headerName: "Ledger Reconcil Date",
      width: 150,
    },
    {
      field: "employeeCode",
      headerName: "SalesPerson",
      width: 150,
    },
    {
      field: "manager",
      headerName: "Manager",
      width: 150,
    },
    {
      field: "referredBy",
      headerName: "Referred By",
      width: 150,
    },
    {
      field: "contact_person",
      headerName: "Contact Person",
      width: 150,
    },
    {
      field: "notes",
      headerName: "Remark",
      width: 100,
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 50,
    //   sortable: false,
    //   filterable: false,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
    //       <Edit color="secondary" />
    //     </IconButton>
    //   ),
    // },
    {
      field: 'view',
      headerName: 'View',
      width: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_CUSTOMER}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ])
};