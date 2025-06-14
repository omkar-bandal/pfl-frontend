/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FormikProvider, useFormik } from 'formik';
import { Box, Grid2, LinearProgress, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ADMIN_ROUTES,
  BranchesInitialValues,
  branchValidationSchema,
  setBranchFormPreview,
  useCreateBranch,
  useGetBranchById,
  useUpdateBranchById,
} from '@prime-fresh/admin/modules';
import {
  FormButtonGroup,
  PageTitle,
  SectionHeader,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { setPreview, useAppDispatch } from '@prime-fresh/modules';
import { PostBranches } from '@prime-fresh/admin_api';
import { BranchFormPreview } from './branch.preview';

export const BranchForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, branchType } = useParams<{ id: string; branchType: string }>();
  const branchId = id ? id : '';
  const branchtype = branchType ? branchType : '';
  const BranchTypeLabel = React.useMemo(
    () =>
      branchtype
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    [branchtype]
  );
  const { data, isLoading } = useGetBranchById(branchId);
  const branch = data?.data ? data.data : BranchesInitialValues;
  console.log("Branch Data: ", branch);
  //Initial value for office form
  const branchesInitValue = branchId ? branch : BranchesInitialValues;

  const formik = useFormik<PostBranches>({
    enableReinitialize: true,
    initialValues: branchesInitValue,
    validationSchema: branchValidationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  //To create new office Data
  const {
    mutateAsync: mutatePost,
    data: postRes,
    error: postError,
  } = useCreateBranch(branchtype);
  //To update existing office Data
  const {
    mutateAsync: mutatePatch,
    data: patchRes,
    error: patchError,
  } = useUpdateBranchById(branchId, branchtype);

  const handleSubmit = (values: any) => {
    branchId
      ? mutatePatch(values)
          .then(() => {
            toast.success(
              patchRes
                ? patchRes.message
                : 'Branch location updated successfully.'
            );
            setTimeout(() => {
              navigate(`${ADMIN_ROUTES.GET_ALL_BRANCHES}/${branchtype}`);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              patchError
                ? patchError.message
                : 'Error while creating new branch.'
            );
          })
      : mutatePost(values)
          .then(() => {
            toast.success(
              postRes
                ? postRes.message
                : 'Branch location created successfully.'
            );
            setTimeout(() => {
              navigate(`${ADMIN_ROUTES.GET_ALL_BRANCHES}/${branchtype}`);
            }, 2000);
          })
          .catch(() => {
            toast.error(
              patchError
                ? patchError.message
                : 'Error while updating new branch.'
            );
          });
  };

  return isLoading ? (
    <Box sx={{ flex: 1 }}>
      <LinearProgress />
    </Box>
  ) : (
    <>
      <FormikProvider
        key={branchId === '' ? 'create-branch' : 'update-branch'}
        value={formik}
      >
        <form
          key={branchId === '' ? 'create-form' : 'update-form'}
          onSubmit={formik.handleSubmit}
        >
          <Grid2 container spacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <PageTitle pagetitle={BranchTypeLabel} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <TextInput
                isRequired={true}
                label="Branch Name"
                name="name"
                value={formik.values.name}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                isRequired={true}
                label="Prefix"
                name="prefix"
                value={formik.values.prefix}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Branch Address" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={true}
                label="Address Line 1"
                name="address.address1"
                value={formik.values.address?.address1 || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={false}
                label="Address Line 2"
                name="address.address2"
                value={formik.values.address?.address2 || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="Location"
                name="address.location"
                value={formik.values.address?.location || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="City"
                name="address.city"
                value={formik.values.address?.city || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="State"
                name="address.state"
                value={formik.values.address?.state || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={true}
                label="Pincode"
                name="address.pincode"
                value={formik.values.address?.pincode || ''}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <SectionHeader sectionHeader="Contact Person Details" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                label="First Name"
                name="cFirstName"
                value={formik.values.cFirstName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                label="Middle Name"
                name="cMiddleName"
                value={formik.values.cMiddleName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                label="Last Name"
                name="cLastName"
                value={formik.values.cLastName}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                label="Contact Number"
                name="contactNumber"
                value={formik.values.contactNumber}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2}>
              <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Other Details
                </Typography>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="number"
                isRequired={false}
                label="Total Capacity"
                name="totalCapacity"
                value={formik.values.totalCapacity}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="number"
                isRequired={false}
                label="Current Capacity"
                name="currentCapacity"
                value={formik.values.currentCapacity}
                handleChange={formik.handleChange}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <TextInput
                type="number"
                isRequired={false}
                label="Balance Capacity"
                name="balanceCapacity"
                value={formik.values.balanceCapacity}
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
                submitLabel={branchId === '' ? 'Create' : 'Update'}
                isSubmitting={formik.isSubmitting}
                isSubmitError={branchId === '' ? postError : patchError}
                resetLabel="Reset"
                onReset={formik.handleReset}
                previewLabel="Preview"
                onPreview={() => {
                  dispatch(setPreview(true));
                  dispatch(setBranchFormPreview(formik.values))}}
              />
            </Grid2>
          </Grid2>
        </form>
      </FormikProvider>
      <BranchFormPreview />
    </>
  );
};
