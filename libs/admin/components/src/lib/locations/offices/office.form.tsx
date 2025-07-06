import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ADMIN_ROUTES,
  OfficeInitialValues,
  officeValidationSchema,
  setOfficeFormPreview,
  useCreateOffice,
  useGetOfficeById,
  useUpdateOfficeById,
} from '@prime-fresh/admin/modules';
import {
  FormButtonGroup,
  PageTitle,
  SectionHeader,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { Box, Grid2, LinearProgress } from '@mui/material';
import { PostOffices } from '@prime-fresh/admin_api';
import { OfficeFormPreview } from './office.preview';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { handleFormKeyDown } from '@prime-fresh/shared/modules';

export const OfficeForm = () => {
  const dispatch = useAppDispatch();
  const { id, officeType } = useParams<{ id: string; officeType: string }>();
  const officeId = id ? id : '';
  const OfficeType = officeType ? officeType : '';
  // console.log('Office Type:', OfficeType);
  const navigate = useNavigate();
  const OfficeTypeLabel = React.useMemo(
    () =>
      OfficeType.split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [OfficeType]
  );

  const { data, isLoading } = useGetOfficeById(officeId, OfficeType);
  const officeData = data?.data ? data.data : OfficeInitialValues;
  const officeInitialValue = officeId ? officeData : OfficeInitialValues;

  const formik = useFormik<PostOffices>({
    enableReinitialize: true,
    initialValues: officeInitialValue,
    validationSchema: officeValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      // console.log(values);
      handleSubmit(values);
    },
  });

  //To create new office Data
  const {
    mutateAsync: mutatePost,
    data: postRes,
    error: postError,
  } = useCreateOffice(OfficeType);

  //To update existing office Data
  const {
    mutateAsync: mutatePatch,
    data: patchRes,
    error: patchError,
  } = useUpdateOfficeById(officeId, OfficeType);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    console.log("Office form Values:", values);
    officeId === ''
      ? mutatePost(values)
      .then(() => {
        toast.success(
          postRes
            ? postRes.message
            : 'Office location created successfully.'
        );
        setTimeout(() => {
          navigate(`${ADMIN_ROUTES.GET_ALL_OFFICES}/${officeType}`);
        }, 2000);
      })
      .catch(() => {
        toast.error(
          patchError
            ? patchError.message
            : 'Error while updating new office.'
        );
      })
      : mutatePatch(values)
          .then(() => {
            toast.success(
              patchRes
                ? patchRes.message
                : 'Office location updated successfully.'
            );
            setTimeout(() => {
              navigate(`${ADMIN_ROUTES.GET_ALL_OFFICES}/${officeType}`);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              patchError
                ? patchError.message
                : 'Error while creating new office.'
            );
          })
  };
  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider
        key={officeId ? 'create-office' : 'update-office'}
        value={formik}
      >
        <form
          key={officeId ? 'create-form' : 'update-form'}
          onKeyDown={handleFormKeyDown}
          onSubmit={formik.handleSubmit}
        >
          <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <PageTitle pagetitle={OfficeTypeLabel} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={true}
                label="Office Name"
                name="name"
                value={formik.values.name}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Office Address" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={true}
                label="Address Line 1"
                name="address.address1"
                value={formik.values.address.address1 || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={false}
                label="Address Line 2"
                name="address.address2"
                value={formik.values.address.address2 || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="Location"
                name="address.location"
                value={formik.values.address.location || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="City"
                name="address.city"
                value={formik.values.address.city || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="State"
                name="address.state"
                value={formik.values.address.state || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="Pincode"
                name="address.pincode"
                value={formik.values.address.pincode || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Contact Person Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={false}
                label="First Name"
                name="cFirstName"
                value={formik.values.cFirstName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={false}
                label="Middle Name"
                name="cMiddleName"
                value={formik.values.cMiddleName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={false}
                label="Last Name"
                name="cLastName"
                value={formik.values.cLastName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 5 }}>
              <TextInput
                isRequired={false}
                label="Contact Number"
                name="contactNumber"
                value={formik.values.contactNumber}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 7 }}>
              <TextInput
                isRequired={false}
                label="Email"
                name="officeEmail"
                value={formik.values.officeEmail}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                multiline
                maxRows={4}
                isRequired={false}
                label="Notes"
                name="notes"
                value={formik.values.notes}
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
                submitLabel={officeId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={officeId === '' ? postError : patchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                previewLabel="Preview"
                onPreview={() => {
                  // console.log(formik.values)
                  dispatch(setPreview(true));
                  dispatch(setOfficeFormPreview(formik.values))}}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <OfficeFormPreview />
    </>
  );
};
