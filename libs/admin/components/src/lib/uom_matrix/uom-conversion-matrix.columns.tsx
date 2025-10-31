import { useMemo } from 'react';
import { GetUOM } from '@prime-fresh/services';
import { CustomGridColDef } from '@prime-fresh/shared/components';
import { NavigateFunction } from 'react-router-dom';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { adminRoutes } from '@prime-fresh/admin/modules';

export const useUOMMatrixColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'conversionFactor',
        headerName: 'Conversion Factor',
        flex: 1,
        minWidth: 250,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
      },
      {
        field: 'fromUOM',
        headerName: 'From UoM',
        flex: 1,
        minWidth: 250,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'toUOM',
        headerName: 'To UoM',
        flex: 1,
        minWidth: 250,
        align: 'center',
        headerAlign: 'center',
        isMobileVisible: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        minWidth: 70,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`${adminRoutes.UPDATE_UOMs_CONV_MATRIX}/${params.row.id}`)}
          >
            <Edit color="secondary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
