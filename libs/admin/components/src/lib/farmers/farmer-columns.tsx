import { useMemo } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { Preview } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { Address } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { formatAddress } from "@prime-fresh/shared/modules";

export const useFarmerColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(() => [
    {
      field: "farmerName",
      headerName: "Name",
      width: 250,
      isMobileVisible: true,
      valueGetter: (value, row) => {
        console.log(value);
        return `${row.farmerfName || ''} ${row.farmermName || ''} ${row.farmerlName || ''}`
      }
    },
    // {
    //   field: "residensialAddress",
    //   headerName: "Address",
    //   width: 300,
    //   valueFormatter: (params: Address) => {
    //     console.log(params);
    //     return `${params.address1 || ''}, ${params.address2 || ''}, ${params.location || ''}, ${params.city || ''}, ${params.state || ''}, ${params.pincode || ''}`;
    //   }
    // },
    {
      field: "farmAddress",
      headerName: "Farm Address",
      width: 500,
      valueGetter: (value: Address) => value ? formatAddress(value) : '-',
    },
    {
      field: "primaryMobileNo",
      headerName: "Contact No",
      width: 150,
    },
    {
      field: "farmerCode",
      headerName: "Code",
      width: 150,
    },
    // {
    //   field: "farmerGrading",
    //   headerName: "Grade",
    //   width: 100,
    // },
    // {
    //   field: "secondaryMobileNo",
    //   headerName: "Alternate",
    //   width: 150,
    // },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   width: 150,
    // },
    // {
    //   field: "dob",
    //   headerName: "DOB",
    //   width: 150,
    // },
    // {
    //   field: "farmAddress",
    //   headerName: "Farm Address",
    //   width: 300,
    //   valueFormatter: (params: Address) => {
    //     console.log(params);
    //     return `${params.address1 || ''}, ${params.address2 || ''}, ${params.location || ''}, ${params.city || ''}, ${params.state || ''}, ${params.pincode || ''}`;
    //   }
    // },
    {
      field: "totalLandArea",
      headerName: "Farm Area (Total)",
      width: 150,
      align: "center",
    },
    // {
    //   field: "cultivationArea",
    //   headerName: "Cultivation Area",
    //   width: 120,
    // },
    // {
    //   field: "dateOfVisit",
    //   headerName: "DOV",
    //   width: 100,
    // },
    // {
    //   field: "registerDate",
    //   headerName: "Register Date",
    //   width: 100,
    // },
    // {
    //   field: "registerBy",
    //   headerName: "Register By",
    //   width: 100,
    // },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 50,
    //   sortable: false,
    //   filterable: false,
    //   renderCell: () => (
    //       <IconButton aria-label="edit">
    //         <Edit color="secondary" />
    //       </IconButton>
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
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_FARMER}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ], [navigate]);
};