/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useMemo, useState } from 'react';
import { Grid2 } from '@mui/material';
import { ProductPartialData, QueryParams } from '@prime-fresh/common_api';
import {
  AutoCompleteInput,
  ScrollableAutocomplete,
  SelectInput,
  TextInput,
  VirtualizedAutocomplete,
} from '@prime-fresh/ui_shared';
import {
  getSelectedProductData,
  mapToValueLabelArray,
  useDebounce,
  useGetProductsPartialData,
  useGetProductsPartialDataById,
  useGetVariantsByProductId,
} from '@prime-fresh/shared/modules';

interface ProductFormFieldsProps {
  fieldArrayName: string;
  index: number;
  formik: any;
}

export const ProductFormFields = memo((props: ProductFormFieldsProps) => {
  const { fieldArrayName, index, formik } = props;
  const [productQueryParams, setProductQueryParams] = useState<Partial<QueryParams>>({ page: 1, limit: 10 });
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const debouncedProductSearchQuery = useDebounce(productSearchQuery, 500);
  const {
    data: produces,
    isFetching,
    error,
  } = useGetProductsPartialData(productQueryParams, debouncedProductSearchQuery);
  const searchedProduct = produces ? produces : null;
  console.log('searched Product', searchedProduct);
  const { data: product, isLoading } = useGetProductsPartialDataById(
    formik.values[fieldArrayName][index].productName || ''
  );
  const selectedProduct = useMemo(() => (product?.data ? product.data : null), [product]);
  console.log('Selected Product', selectedProduct);
  const handleProductNextPage = useCallback(() => {
    setProductQueryParams((prev) => ({
      ...prev,
      page: prev.page ? prev.page + 1 : 2,
    }));
  }, []);

  const handleProductPrevPage = useCallback(() => {
    setProductQueryParams((prev) => ({
      ...prev,
      page: prev.page && prev.page > 1 ? prev.page - 1 : 1,
    }));
  }, []);

  const handleProductSearchChange = useCallback((_: any, newInput: string) => {
    setProductSearchQuery(newInput);
  }, []);

  const { data } = useGetVariantsByProductId(formik.values[fieldArrayName][index].productName);
  const variantNames = data?.data ? mapToValueLabelArray(data.data?.variants as any, 'id', 'variantName') : [];
  const variantCodes = data?.data ? mapToValueLabelArray(data.data?.variants as any, 'id', 'variantCode') : [];

  return (
    <>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <ScrollableAutocomplete<ProductPartialData>
          isRequired={true}
          name={`${fieldArrayName}.${index}.productName`}
          label="Product Code"
          optionValueKey="id"
          options={selectedProduct ? [selectedProduct] : searchedProduct?.data || []}
          isLoading={isLoading}
          isFetching={isFetching}
          page={productQueryParams.page || 1}
          totalPages={searchedProduct?.totalPages || 1}
          noOptionsText={error ? error.message : 'Enter product code'}
          getOptionLabel={(option) => option.productCode}
          handleInputChange={handleProductSearchChange}
          handleNextPage={handleProductNextPage}
          handlePrevPage={handleProductPrevPage}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <ScrollableAutocomplete<ProductPartialData>
          isRequired={true}
          name={`${fieldArrayName}.${index}.productName`}
          label="Product Name"
          optionValueKey="id"
          options={selectedProduct ? [selectedProduct] : searchedProduct?.data || []}
          isLoading={isLoading}
          isFetching={isFetching}
          page={productQueryParams.page || 1}
          totalPages={searchedProduct?.totalPages || 1}
          noOptionsText={error ? error.message : 'Enter product name'}
          getOptionLabel={(option) => option.name}
          handleInputChange={handleProductSearchChange}
          handleNextPage={handleProductNextPage}
          handlePrevPage={handleProductPrevPage}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AutoCompleteInput
          isRequired={true}
          name={`${fieldArrayName}.${index}.variant`}
          label="Variant Code"
          options={variantCodes}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <AutoCompleteInput
          isRequired={true}
          name={`${fieldArrayName}.${index}.variant`}
          label="Variant Name"
          options={variantNames}
        />
      </Grid2>
      {/* <Grid2 size={{ xs: 12, md: 8 }}>
        <TextInput
          isRequired={false}
          isReadOnly={true}
          name="productDescription"
          label="Description"
          value={
            getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct?.data)?.description || ''
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          label="Origin"
          name={`${fieldArrayName}.${index}.origin`}
          options={productOrigins || []}
          value={formik.values[fieldArrayName][index].origin}
          handleChange={formik.handleChange}
          disable={productOrigins !== null || productOrigins ? false : true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          label="Variety"
          name={`${fieldArrayName}.${index}.variety`}
          options={productVarities || []}
          value={formik.values[fieldArrayName][index].variety}
          handleChange={formik.handleChange}
          disable={productVarities !== null || productVarities ? false : true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          label="Count"
          name={`${fieldArrayName}.${index}.count`}
          options={productCounts || []}
          value={formik.values[fieldArrayName][index].count}
          handleChange={formik.handleChange}
          disable={productCounts !== null || productCounts ? false : true}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={false}
          label="Size"
          name={`${fieldArrayName}.${index}.size`}
          options={productSizes || []}
          value={formik.values[fieldArrayName][index].size}
          handleChange={formik.handleChange}
          disable={productSizes !== null || productSizes ? false : true}
        />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 3 }}>
        <TextInput
          isRequired={false}
          isReadOnly={true}
          name="productCode"
          label="Product Code"
          value={
            getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct?.data)?.productCode || ''
          }
        />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 3 }}>
        <TextInput
          isRequired={false}
          isReadOnly={true}
          name="productBrand"
          label="Brand"
          value={getSelectedProductData(formik.values[fieldArrayName][index].productName, searchedProduct?.data)?.brand || ''}
        />
      </Grid2> */}
    </>
  );
});
