import { useCallback, useMemo } from 'react';
import { useFormikContext } from 'formik';
import { Grid2, InputAdornment } from '@mui/material';
import { IProduct } from '@prime-fresh/services';
import { SelectInput, TextInput } from '../../../components';
import {
  mapToValueLabelArray,
  useGetUOMPartialData,
  useGetAllProductCategories,
  useGetAllProductClassifications,
  useGetAllProductSubcategories,
} from '@prime-fresh/shared/modules';

export const ProductDetails = () => {
  const { values, setFieldValue, handleChange } = useFormikContext<IProduct>();
  const { data: productclass } = useGetAllProductClassifications();
  const classifications = useMemo(() => {
    return productclass !== null && productclass?.data ? mapToValueLabelArray(productclass.data, 'id', 'name') : [];
  }, [productclass]);

  const { data: productcat } = useGetAllProductCategories();
  const categories = useMemo(() => {
    return productcat !== null && productcat?.data ? mapToValueLabelArray(productcat.data, 'id', 'name') : [];
  }, [productcat]);

  const { data: productsubcategories } = useGetAllProductSubcategories();
  const subcategories = useMemo(() => {
    return productsubcategories !== null && productsubcategories?.data
      ? mapToValueLabelArray(productsubcategories.data, 'id', 'name')
      : [];
  }, [productsubcategories]);

  const { data: units } = useGetUOMPartialData();
  const uoms = useMemo(() => {
    return units !== null && units?.data ? mapToValueLabelArray(units.data, 'id', 'unit') : [];
  }, [units]);

  const handleGetCategoryAndClassification = useCallback(
    (values: Omit<IProduct, 'id'>, setFieldValue: (field: string, value: any) => void) => {
      const subcategory = productsubcategories?.data?.find((subcategory) => subcategory.id === values.subcategory);
      setFieldValue('category', subcategory?.category.id);
      setFieldValue('classification', subcategory?.classification.id);
    },
    [productsubcategories?.data]
  );

  return (
    <Grid2 container spacing={1} padding={1}>
      <Grid2 size={{ xs: 12, md: 9 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="name"
          label="Product Name"
          value={values.name}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={true}
          name="prefix"
          label="Product Code Prefix"
          value={values.prefix ? values.prefix.toUpperCase() : values.prefix}
          handleChange={handleChange}
          infoTipText={`Enter prefix to generate product code. For example, if product name is Royal Gala Apple enter prefix as RGA`}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <SelectInput
          isRequired={true}
          label="UOM"
          name="uom"
          options={uoms}
          value={values.uom}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextInput
          type="text"
          isRequired={false}
          name="packingType"
          label="Packing Type"
          value={values.packingType}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          name="shelfLife"
          label="Shelf Life"
          value={values.shelfLife}
          handleChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">Days</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 6, md: 3 }}>
        <TextInput
          type="number"
          isRequired={false}
          name="storageTemp"
          label="Storage Temparature"
          value={values.storageTemp}
          handleChange={handleChange}
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end">℃</InputAdornment>,
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Subcategory"
          name="subcategory"
          options={subcategories}
          value={values.subcategory}
          handleChange={handleChange}
          onBlur={() => handleGetCategoryAndClassification(values, setFieldValue)}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Category"
          name="category"
          options={categories}
          value={values.category}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <SelectInput
          isRequired={true}
          label="Classification"
          name="classification"
          options={classifications}
          value={values.classification}
          handleChange={handleChange}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <TextInput
          type="text"
          multiline
          maxRows={4}
          isRequired={false}
          name="description"
          label="Description"
          value={values.description}
          handleChange={handleChange}
        />
      </Grid2>
    </Grid2>
  );
};
