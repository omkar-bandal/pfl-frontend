import { KeyboardArrowDown, Settings } from '@mui/icons-material';
import { Box, Grid2 } from '@mui/material';
import {
  ActionMenu,
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useProductVariantsColumns } from './product-variants.columns';
import { IProductVariants } from '@prime-fresh/admin_api';
import { useGetAllProductVariants } from '@prime-fresh/admin/modules';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const ProductVariantTable = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? id : null;
  const productVariantColumns = useProductVariantsColumns();
  const { data, isLoading, isError, error } = useGetAllProductVariants(productId);
  const productName = data?.data ? data.data.name : null;
  const variants = data?.data ? data.data.variant : [];
  console.log('Data: ', data);
  console.log('product name: ', productName);
  console.log('variants: ', variants);

  const {
    enableCheckboxSelection,
    columnVisibilityModel,
    handleColumnVisibilityModelChange,
    displayColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
  } = useDataTable({ columnDef: productVariantColumns });

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container spacing={2} marginY={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid2 size={{ xs: 8, md: 10 }}>
          <PageTitle pagetitle={`${productName} Variants`} />
        </Grid2>
        <Grid2 size={{ xs: 4, md: 2 }}>
          <BtnSmall label="Columns" icon={<Settings />} color="primary" onClick={handleOpenColumnVisibilityPanel} />
        </Grid2>
      </Grid2>
      <ColumnVisibilityPanel
        popoverId="products-col-def"
        columns={productVariantColumns}
        columnVisibilityModel={columnVisibilityModel}
        displayColumnVisibilityModel={displayColumnVisibilityPanel}
        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
      />
      <DataGridTable<IProductVariants>
        loading={isLoading}
        rows={variants}
        columns={productVariantColumns}
        mode="client"
        columnVisibilityModel={columnVisibilityModel}
        checkboxSelection={enableCheckboxSelection}
      />
    </Box>
  );
};
