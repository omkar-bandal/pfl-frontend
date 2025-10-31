/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useCustomerCategoryColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Customer Category',
        flex: 1,
        minWidth: 200,
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value || '') : '-'),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 100,
        align: 'center',
        headerAlign: 'center',
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_CUSTOMER_CAT}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
