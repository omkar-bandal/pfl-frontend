import { useMemo } from 'react';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { NavigateFunction } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useUOMColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'unit',
        headerName: 'UoM Name',
        flex: 1,
        minWidth: 100,
        isMobileVisible: true,
      },
      {
        field: 'abbreviation',
        headerName: 'Abbreviation',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 1,
        minWidth: 500,
      },
      {
        field: 'edit',
        headerName: 'Edit',
        width: 70,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${adminRoutes.UPDATE_UOM}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
