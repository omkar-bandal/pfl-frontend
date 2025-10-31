import { useMemo } from 'react';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { NavigateFunction } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useVendorCategoryColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Category',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : ''),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 70,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_VENDORS_CAT}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
