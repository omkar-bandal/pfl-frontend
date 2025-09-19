import { useMemo } from 'react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { KeyboardArrowRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GetProductCategory, GetProductClassification, GetProductSubcategory, GetUOM } from '@prime-fresh/admin_api';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTES } from '@prime-fresh/admin/modules';
import { CustomGridColDef } from '@prime-fresh/ui_shared';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const useProductColumns = (): CustomGridColDef[] => {
  const navigate = useNavigate();
  return useMemo(
    () => [
      {
        field: 'productCode',
        headerName: 'Product Code',
        flex: 1,
        minWidth: 150,
        isMobileVisible: true,
        hide: false,
        valueGetter: (value: string) => (value ? value : '-'),
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
            onClick={() => navigate(`${ADMIN_ROUTES.GET_ALL_PRODUCT_VARIANTS}/${params.row.id}`)}
          >
            <KeyboardArrowRight color="secondary" />
          </IconButton>
        ),
      },
      // {
      //   field: 'view',
      //   headerName: 'View',
      //   flex: 1, minWidth: 50,
      //   sortable: false,
      //   filterable: false,
      //   isMobileVisible: true,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <IconButton aria-label="view" onClick={() => navigate(`${ADMIN_ROUTES.GET_A_PRODUCT}/${params.row.id}`)}>
      //       <Preview color="primary" />
      //     </IconButton>
      //   ),
      // },
    ],
    [navigate]
  );
};
