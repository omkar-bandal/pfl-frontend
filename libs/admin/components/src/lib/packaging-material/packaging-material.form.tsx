/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid2, InputAdornment, LinearProgress } from '@mui/material';
import {
  adminRoutes,
  PackagingMaterialInitialValues,
  packingMaterailValidationSchema,
  useCreatePackagingMaterial,
  useGetPackagingMaterialById,
  useUpdatePackagingMaterialById,
} from '@prime-fresh/admin/modules';
import { PostPackagingMaterial } from '@prime-fresh/services';
import {
  handleFormKeyDown,
  mapToValueLabelArray,
  useGetUOMPartialData,
} from '@prime-fresh/shared/modules';
import {
  FormButtonGroup,
  PageTitle,
  RadioGroupInput,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/shared/components';
import { FormikProvider, useFormik } from 'formik';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PackagingMaterialForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const packMatId = id ? id : '';
  const { data, isLoading } = useGetPackagingMaterialById(packMatId);
  const packagingData = data?.data ? data.data : PackagingMaterialInitialValues;
  const InitValPackagingMaterial = useMemo(
    () => (packMatId === '' ? PackagingMaterialInitialValues : packagingData),
    [packMatId, packagingData]
  );
  const { data: uoms } = useGetUOMPartialData();
  const uomData = useMemo(
    () => (uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : []),
    [uoms]
  );
  const formik = useFormik<PostPackagingMaterial>({
    enableReinitialize: true,
    initialValues: InitValPackagingMaterial,
    validationSchema: packingMaterailValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });
  const {
    mutateAsync: mutateAsyncPost,
    error: postError,
    data: postData,
  } = useCreatePackagingMaterial();
  const {
    mutateAsync: mutateAsyncPatch,
    error: patchError,
    data: patchData,
  } = useUpdatePackagingMaterialById(packMatId);

  const handleSubmit = (values: any) => {
    packMatId === ''
      ? mutateAsyncPost(values)
          .then(() => {
            toast.success(
              postData
                ? postData.message
                : 'Packaging material created sucessfully.'
            );
            setTimeout(() => {
              navigate(adminRoutes.VIEW_ALL_PACKAGING_MATERIAL);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              postError
                ? postError.message
                : 'Error while creating packaging material.'
            );
          })
      : mutateAsyncPatch(values)
          .then(() => {
            toast.success(
              patchData
                ? patchData.message
                : 'Packaging material updated sucessfully.'
            );
            setTimeout(() => {
              navigate(adminRoutes.VIEW_ALL_PACKAGING_MATERIAL);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              patchError
                ? patchError.message
                : 'Error while updating packaging material.'
            );
          });
  };
  return isLoading ? (
    <Box flex={1}>
      <LinearProgress />
    </Box>
  ) : (
      <FormikProvider
        key={
          packMatId === ''
            ? 'create-packaging-material'
            : 'update-packaging-material'
        }
        value={formik}
      >
        <form
          key={packMatId === '' ? 'create-form' : 'update-form'}
          onKeyDown={handleFormKeyDown}
          onSubmit={formik.handleSubmit}
        >
          <Grid2 container rowSpacing={1} columnSpacing={2} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <PageTitle pagetitle="Packaging Material" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <TextInput
                isRequired
                name="packagingMaterialName"
                label="Packaging Material Name"
                value={formik.values.packagingMaterialName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <RadioGroupInput
                isRequired={false}
                alignment="vertical"
                name="useFor"
                label="Packaging Material Used For"
                options={[
                  { value: 'for sale', label: 'For Sale' },
                  { value: 'for purchase', label: 'For Purchase' },
                ]}
                value={formik.values.useFor}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={false}
                type="number"
                name="packagingMaterialWeight"
                label="Packaging Material Weight"
                value={formik.values.packagingMaterialWeight}
                handleChange={formik.handleChange}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">grams</InputAdornment>
                    ),
                  },
                }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={false}
                type="number"
                name="containsQuantity"
                label="Quantity Per Package"
                value={formik.values.containsQuantity}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <SelectInput
                isRequired={false}
                name="uom"
                label="Reference UoM"
                value={formik.values.uom}
                options={uomData}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                multiline
                maxRows={2}
                name="packagingMaterialDescription"
                label="Description"
                value={formik.values.packagingMaterialDescription}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              marginY={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FormButtonGroup
                submitLabel={packMatId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={packMatId === '' ? postError : patchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
  );
};
