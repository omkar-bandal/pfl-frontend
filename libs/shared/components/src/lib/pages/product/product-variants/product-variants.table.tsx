import { useParams } from 'react-router-dom';
import { useProductVariantsColumns } from './product-variants.columns';
import { IProductVariants } from '@prime-fresh/services';
import { Settings } from '@mui/icons-material';
import { Box, Grid2 } from '@mui/material';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  useDataTableFunctions,
  useErrorHandler,
} from '../../../components';
import { convertInTitleCase, sharedTableIds, useGetAllProductVariants } from '@prime-fresh/shared/modules';
import { useMemo } from 'react';

export const ProductVariantTable = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? id : null;
  const productVariantColumns = useProductVariantsColumns();
  const { data, isLoading, isError, error } = useGetAllProductVariants(productId);
  const productName = data?.data ? data.data.name : null;
  const variants = data?.data ? data.data.variant : [];
  const tableConfig = useDataTableFunctions({
    columnDef: productVariantColumns,
    initialPageSize: 10,
    tableId: sharedTableIds.PRODUCT_VARIANT_TABLE_ID,
  });
  useErrorHandler(isError, error);
  const pageTitle = useMemo(() => productName !== null ? convertInTitleCase(`${productName} Variants`) : `Variants`, [productName]);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container spacing={2} marginY={1} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid2 size={{ xs: 8, md: 10 }}>
          <PageTitle pagetitle={pageTitle} />
        </Grid2>
        <Grid2 size={{ xs: 4, md: 2 }}>
          <BtnSmall
            label="Columns"
            icon={<Settings />}
            color="primary"
            onClick={tableConfig.openColumnVisibilityPanel}
          />
        </Grid2>
      </Grid2>
      <ColumnVisibilityPanel
        popoverId="products-col-def"
        columns={productVariantColumns}
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        displayColumnVisibilityModel={tableConfig.columnVisibilityPanel}
        closeColumnVisibilityModel={tableConfig.closeColumnVisibilityPanel}
        onColumnVisibilityModelChange={tableConfig.handleToggleColumnVisibility}
      />
      <DataGridTable<IProductVariants>
        loading={isLoading}
        rows={variants}
        columns={productVariantColumns}
        mode="client"
        columnVisibilityModel={tableConfig.columnVisibilityModel}
        checkboxSelection={tableConfig.enableCheckboxSelection}
      />
    </Box>
  );
};
