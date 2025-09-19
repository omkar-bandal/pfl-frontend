import { useMemo } from "react";
import { GetProductCategory } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { convertInTitleCase } from "@prime-fresh/shared/modules";

export const useProductSubcategoryColumns = (): CustomGridColDef[] => {

  return useMemo(() => [
    {
      field: "name",
      headerName: "Subcategory",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value || '') : "-",
    },
    {
      field: "category",
      headerName: "Related Category",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: GetProductCategory) => value?.name ? convertInTitleCase(value.name || '') : "-",
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 70,
    //   sortable: false,
    //   filterable: false,
    //   isMobileVisible: true,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_SUBCAT}/${params.row.id}`)}>
    //       <Edit color="secondary" />
    //     </IconButton>
    //   ),
    // },
  ], []);
}