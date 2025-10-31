import { useMemo } from 'react';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useCustomerTypeColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Customer Type',
        flex: 1,
        minWidth: 200,
        hide: false,
        isMobileVisible: true,
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
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`${adminRoutes.UPDATE_CUSTOMER_TYPE}/${params.row.id}`)}
          >
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
