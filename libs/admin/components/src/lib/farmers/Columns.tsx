import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
// import { Address } from "../../api/admin/models";

export const FarmerListCols = (): GridColDef[] => {
  const navigate = useNavigate();
  return [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "farmerCode",
      headerName: "Code",
      width: 100,
    },
    {
      field: "farmerGrading",
      headerName: "Grade",
      width: 100,
    },
    {
      field: "farmerName",
      headerName: "Name",
      width: 100,
      valueGetter: (value, row)=>{
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
      field: "primaryMobileNo",
      headerName: "Contact No",
      width: 150,
    },
    {
      field: "secondaryMobileNo",
      headerName: "Alternate",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "dob",
      headerName: "DOB",
      width: 150,
    },
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
      width: 120,
    },
    {
      field: "cultivationArea",
      headerName: "Cultivation Area",
      width: 120,
    },
    {
      field: "dateOfVisit",
      headerName: "DOV",
      width: 100,
    },
    {
      field: "registerDate",
      headerName: "Register Date",
      width: 100,
    },
    {
      field: "registerBy",
      headerName: "Register By",
      width: 100,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: () => (
          <IconButton aria-label="edit">
            <Edit color="secondary" />
          </IconButton>
      ),
    },
    {
      field: 'view',
      headerName: 'View',
      width: 50,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_FARMER}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
      ),
    },
  ];
};