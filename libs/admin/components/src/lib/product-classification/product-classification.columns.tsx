import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { useMemo } from "react";
import { convertInTitleCase } from "@prime-fresh/shared/modules";

export const useProductClassificationColumns = (): CustomGridColDef[] => {

  return useMemo(() => [
    {
      field: "name",
      headerName: "Classification",
      flex: 1,
      minWidth: 200,
      isMobileVisible: true,
      valueGetter: (value: string) => value ? convertInTitleCase(value || '') : '-',
    },
    // {
    //   field: 'edit',
    //   headerName: 'Edit',
    //   width: 50,
    //   sortable: false,
    //   filterable: false,
    //   isMobileVisible: true,
    //   renderCell: (params: GridRenderCellParams) => (
    //     <IconButton aria-label="edit" onClick={() => navigate(`${ADMIN_ROUTES.UPDATE_PRODUCT_CLASS}/${params.row.id}`)}>
    //       <Edit color="secondary" />
    //     </IconButton>
    //   ),
    // },
  ], []);
}
