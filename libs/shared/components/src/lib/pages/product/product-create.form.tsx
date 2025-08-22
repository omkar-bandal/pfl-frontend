/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';
import { FieldArray, Formik, useFormik } from 'formik';
import { Box, Grid2, IconButton, InputAdornment, Typography } from '@mui/material';
import {
  FormButtonGroup,
  ImageUpload,
  MultipleTextInput,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { IProduct } from '@prime-fresh/admin_api';
import { useNavigate } from 'react-router-dom';
import {
  ADMIN_ROUTES,
  useCreateProduct,
  useGetAllProductCategories,
  useGetAllProductClassifications,
  useGetAllProductSubcategories,
} from '@prime-fresh/admin/modules';
import { Add, Close } from '@mui/icons-material';
import {
  appendFormData,
  initValProduct,
  mapToValueLabelArray,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';

export const ProductCreateForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initValProduct,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
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

  const qcParamsType = ['good', 'bad', 'average'].map((type) => {
    return { value: type, label: type };
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGetCategoryAndClassification = useCallback(
    (values: Omit<IProduct, 'id'>, setFieldValue: (field: string, value: any) => void) => {
      const subcategory = productsubcategories?.data?.find((subcategory) => subcategory.id === values.subcategory);
      setFieldValue('category', subcategory?.category.id);
      setFieldValue('classification', subcategory?.classification.id);
    },
    [productsubcategories?.data]
  );

  const { mutateAsync: mutatePost, error: postError, data: postRes } = useCreateProduct();

  const handleSubmit = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData)
      .then(() => {
        toast.success(postRes ? postRes.message : 'Product data created successfully.');
        setTimeout(() => {
          navigate(ADMIN_ROUTES.GET_ALL_PRODUCTS);
        }, 2000);
      })
      .catch(() => {
        console.log(postError);
        toast.error(postError ? postError.message : 'Error while creating product data.');
      });
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initValProduct}
      validateOnBlur={true}
      validateOnChange={true}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }}>
              <PageTitle pagetitle="Create Product" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
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
                // infoTipText={`Enter prefix to generate product code. For example, if product name is Royal Gala Apple enter prefix as RGA`}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                type="text"
                isRequired={false}
                name="brand"
                label="Brand Name of Product"
                value={values.brand}
                handleChange={handleChange}
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
              <MultipleTextInput
                isRequired={false}
                name="productOrigin"
                label="Product Origins"
                values={values.productOrigin}
                setFieldValue={setFieldValue}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <MultipleTextInput
                isRequired={false}
                name="count"
                label="Counts of product"
                values={values.count}
                setFieldValue={setFieldValue}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <MultipleTextInput
                isRequired={false}
                name="size"
                label="Sizes of product"
                values={values.size}
                setFieldValue={setFieldValue}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <MultipleTextInput
                isRequired={false}
                name="variety"
                label="Varieties of product"
                values={values.variety}
                setFieldValue={setFieldValue}
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
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Quality Check Parameters
                </Typography>
              </Box>
              <Typography variant="caption" color="error">
                These quality check parameters will be use for arrival quality report (AQR)
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="qualityParameters">
                {({ push, remove }) => (
                  <>
                    {values.qualityParameters.map((_, index) => (
                      <Grid2 container spacing={1}>
                        <Grid2 size={{ xs: 12, md: 4 }}>
                          <RadioGroupInput
                            isRequired={true}
                            alignment="vertical"
                            name={`qualityParameters.${index}.type`}
                            label="Parameter Type"
                            value={values.qualityParameters[index].type}
                            options={qcParamsType}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 7 }}>
                          <TextInput
                            isRequired={true}
                            name={`qualityParameters.${index}.name`}
                            label="Parameter Name"
                            value={values.qualityParameters[index].name}
                            handleChange={handleChange}
                          />
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 1 }}>
                          <IconButton
                            color="success"
                            size="small"
                            sx={{ marginTop: 3 }}
                            onClick={() => push({ name: '', type: '' })}
                          >
                            <Add />
                          </IconButton>
                          {values.qualityParameters.length > 1 && (
                            <IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                              <Close />
                            </IconButton>
                          )}
                        </Grid2>
                      </Grid2>
                    ))}
                  </>
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <ImageUpload isRequired={false} name="image" label="Product Image" />
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <FormButtonGroup
                submitLabel="Create"
                isSubmitting={isSubmitting}
                isSubmitError={postError}
                resetLabel="Reset"
                onReset={handleReset}
              />
            </Grid2>
          </Grid2>
        </form>
      )}
    </Formik>
  );
};
