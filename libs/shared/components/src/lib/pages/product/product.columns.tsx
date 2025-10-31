import { useMemo } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { Edit, KeyboardArrowRight, Preview } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { sharedRoutes } from '@prime-fresh/shared/modules';
import { CustomGridColDef } from '../../components';
import { convertInTitleCase } from '@prime-fresh/shared/modules';
import { GetProductCategory, GetProductClassification, GetProductSubcategory, GetUOM } from '@prime-fresh/services';

export const useProductColumns = (navigate: NavigateFunction): CustomGridColDef[] => {
  return useMemo(
    () => [
      {
        field: 'productCode',
        headerName: 'Product Code',
        flex: 1,
        minWidth: 150,
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value.toUpperCase() : '-'),
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: string) => (value ? convertInTitleCase(value) : '-'),
        isMobileVisible: true,
      },
      {
        field: 'classification',
        headerName: 'Classification',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: GetProductClassification) => (value ? convertInTitleCase(value.name) : '-'),
      },
      {
        field: 'category',
        headerName: 'Category',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: GetProductCategory) => (value ? convertInTitleCase(value.name) : '-'),
      },
      {
        field: 'subcategory',
        headerName: 'Subcategory',
        flex: 1,
        minWidth: 150,
        align: 'center',
        headerAlign: 'center',
        hide: false,
        valueGetter: (value: GetProductSubcategory) => (value ? convertInTitleCase(value.name) : '-'),
      },
      {
        field: 'uom',
        headerName: 'UOM',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'shelfLife',
        headerName: 'Shelf Life',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'storageTemp',
        headerName: 'Storage Temperature',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'packingType',
        headerName: 'Packing Type',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'storageTemp',
        headerName: 'Storage Temperature',
        flex: 1,
        minWidth: 100,
        align: 'center',
        headerAlign: 'center',
        hide: true,
        valueGetter: (value: GetUOM) => (value ? value.unit : '-'),
      },
      {
        field: 'navigate',
        headerName: 'See Variants',
        flex: 1,
        minWidth: 50,
        sortable: false,
        filterable: false,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params: GridRenderCellParams) => (
          <IconButton
            aria-label="edit"
            onClick={() => navigate(`${sharedRoutes.VIEW_ALL_PRODUCT_VARIANTS}/${params.row.id}`)}
          >
            <KeyboardArrowRight color="secondary" />
          </IconButton>
        ),
      },
      {
        field: 'edit',
        headerName: 'Edit',
        headerAlign: 'center',
        flex: 1,
        minWidth: 50,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="edit" onClick={() => navigate(`${sharedRoutes.UPDATE_PRODUCT}/${params.row.id}`)}>
            <Edit color="secondary" />
          </IconButton>
        ),
      },
      {
        field: 'view',
        headerName: 'View',
        flex: 1,
        minWidth: 50,
        sortable: false,
        filterable: false,
        isMobileVisible: true,
        renderCell: (params: GridRenderCellParams) => (
          <IconButton aria-label="view" onClick={() => navigate(`${sharedRoutes.VIEW_A_PRODUCT}/${params.row.id}`)}>
            <Preview color="primary" />
          </IconButton>
        ),
      },
    ],
    [navigate]
  );
};
