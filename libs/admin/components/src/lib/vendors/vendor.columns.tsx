import { GridRenderCellParams } from "@mui/x-data-grid";
import { Edit, Preview } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES } from "@prime-fresh/admin/modules";
import { Address, GetVendorCategory, GetVendorSubcategory } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { useMemo } from "react";

export const useVendorColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(() => [
    {
      field: "companyName",
      headerName: "Business",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      hide: false,
      isMobileVisible: true,
    },
    {
      field: "vendorCode",
      headerName: "Code",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: false,
      isMobileVisible: true,
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
      valueGetter: (value: GetVendorCategory) => value ? value.name : "",
    },
    {
      field: "subcategory",
      headerName: "Subcategory",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
      valueGetter: (value: GetVendorSubcategory) => value ? value.name : "",
    },
    {
      field: "officeAddress",
      headerName: "Address",
      headerAlign: 'center',
      flex: 1,
      minWidth: 300,
      hide: false,
      valueGetter: (value: Address) => value ? displayAddress(value) : "",
    },
    {
      field: "officeContactNo",
      headerName: "Office Contact",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: false,
    },
    {
      field: "mainProduct",
      headerName: "Main Product",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "listOfAllProducts",
      headerName: "Other Product",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "dispatchCenter",
      headerName: "Dispatch Center",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "warehouseLocations",
      headerName: "Warehouse",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "packingCenterLocation",
      headerName: "Packing Center",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 100,
      hide: true,
    },
    {
      field: "submittedBy",
      headerName: "Submitted By",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "registeredBy",
      headerName: "Registered By",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: "registeredDate",
      headerName: "Regd Date",
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 150,
      hide: true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      flex: 1,
      minWidth: 50,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.EDIT_VENDOR}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
      ),
    },
    {
      field: 'view',
      headerName: 'View',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      minWidth: 50,
      sortable: false,
      filterable: false,
      isMobileVisible: true,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.VIEW_VENDOR}/${params.row.id}`)}>
          <Preview color="primary" />
        </IconButton>
      ),
    },
  ], [navigate]);
};
