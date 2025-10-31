import { useMemo } from 'react';
import { GetProductCategory } from '@prime-fresh/services';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { NavigateFunction } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useProductSubcategoryColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Subcategory',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'category',
        headerName: 'Related Category',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value: GetProductCategory) => (value?.name ? convertInTitleCase(value.name || '') : '-'),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 70,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`${adminRoutes.UPDATE_PRODUCT_SUBCAT}/${params.row.id}`)}
          >
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
