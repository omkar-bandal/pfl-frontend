import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Preview, Edit } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { Address } from "@prime-fresh/admin_api";
// import { VendorCategory, VendorSubcategory } from "../../api/admin/models";

export const VendorListCols = (): GridColDef[] => {
  const navigate = useNavigate();
  return [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "companyName",
      headerName: "Business",
      width: 150,
    },
    {
      field: "vendorCode",
      headerName: "Code",
      width: 100,
    },
    {
      field: "vendorGrade",
      headerName: "Grade",
      width: 100,
    },
    {
      field: "officeAddress",
      headerName: "Address",
      width: 300,
      valueGetter: (params: Address) => {
        return `${params.address1 || ''}, ${params.address2 || ''}, ${params.location || ''}, ${params.city || ''}, ${params.state || ''}, ${params.pincode || ''}`;
      }
    },
    {
      field: "officeContactNo",
      headerName: "Office Contact",
      width: 150,
    },
    {
      field: "mainProduct",
      headerName: "Main Product",
      width: 100,
    },
    {
      field: "listOfAllProducts",
      headerName: "Other Product",
      width: 150,
    },
    {
      field: "dispatchCenter",
      headerName: "Dispatch Center",
      width: 100,
    },
    {
      field: "warehouseLocations",
      headerName: "Warehouse",
      width: 100,
    },
    {
      field: "packingCenterLocation",
      headerName: "Packing Center",
      width: 100,
    },
    {
      field: "submittedBy",
      headerName: "Submitted By",
      width: 150,
    },
    {
      field: "registeredBy",
      headerName: "Registered By",
      width: 150,
    },
    {
      field: "registeredDate",
      headerName: "Regd Date",
      width: 150,
    },
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
      renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_VENDOR}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
      ),
    },
  ];
};
// {
//   field: "categoryId",
//   headerName: "Type",
//   width: 100,
//   valueFormatter: (params: VendorCategory) => {
//     return params.name
//   }
// },
// {
//   field: "subcategoryId",
//   headerName: "Category",
//   width: 100,
//   valueFormatter: (params: VendorSubcategory) => {
//     return params.name
//   }
// },