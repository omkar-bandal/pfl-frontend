import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { GetProductClassification } from '@prime-fresh/services';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useProductCategoryColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Category',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'productClassification',
        headerName: 'Related Classification',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value: GetProductClassification) => (value?.name ? convertInTitleCase(value.name || '') : '-'),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 50,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_PRODUCT_CAT}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
