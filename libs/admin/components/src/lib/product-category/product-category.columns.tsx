import { GetProductClassification } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { convertInTitleCase } from "@prime-fresh/shared/modules";

export const useProductCategoryColumns = (): CustomGridColDef[] => {
  return useMemo(() => [
    {
      field: "name",
      headerName: "Category",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value) => value ? convertInTitleCase(value || '') : "-",
    },
    {
      field: "productClassification",
      headerName: "Related Classification",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: GetProductClassification) => value?.name ? convertInTitleCase(value.name || '') : "-"
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 50,
    //   sortable: false,
    //   filterable: false,
    //   isMobileVisible: true,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_CAT}/${params.row.id}`)}>
    //       <Edit color="secondary" />
    //     </IconButton>
    //   ),
    // },
  ], []);
}