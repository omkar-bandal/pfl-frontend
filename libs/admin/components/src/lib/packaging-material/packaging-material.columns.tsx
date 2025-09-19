import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { convertInTitleCase } from "@prime-fresh/shared/modules";

export const usePackagingMaterialColumns = (): CustomGridColDef[] => {
  return useMemo(() => [
    {
      field: "packagingMaterialName",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      isMobileVisible: true,
      valueGetter: (value) => value ? convertInTitleCase(value) : "-"
    },
    {
      field: "packagingMaterialWeight",
      headerName: "Weight (Kg)",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      isMobileVisible: true,
      valueGetter: (value) => value ? value : 0,
    },
    {
      field: "containsQuantity",
      headerName: "Contains Quantity",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      isMobileVisible: false,
      valueGetter: (value: string) => value ? value : 0,
    },
    {
      field: "uom",
      headerName: "Reference UoM",
      flex: 1,
      minWidth: 100,
      align: "center",
      headerAlign: "center",
      isMobileVisible: false,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : "-",
    },
    {
      field: "packagingMaterialDescription",
      headerName: "Description",
      flex: 1,
      minWidth: 200,
      headerAlign: "center",
      isMobileVisible: false,
      valueGetter: (value: string) => value ? convertInTitleCase(value) : "-"
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   align: 'center',
    //   headerAlign: 'center',
    //   width: 70,
    //   sortable: false,
    //   filterable: false,
    //   isMobileVisible: true,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_PACKAGING_MATERIAL}/${params.row.id}`)}>
    //       <Edit color="secondary" />
    //     </IconButton>
    //   ),
    // },
  ], []);
}