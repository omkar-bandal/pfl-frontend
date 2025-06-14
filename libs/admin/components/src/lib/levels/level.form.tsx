/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import {
  ADMIN_ROUTES,
  useCreateLevel,
  useGetAllDepartments,
  useGetDocumentAccessConfig,
} from '@prime-fresh/admin/modules';
import { Level } from '@prime-fresh/common_api';
import {
  convertInTitleCase,
  mapToValueLabelArray,
} from '@prime-fresh/shared/modules';
import {
  CheckboxInput,
  FormButtonGroup,
  PageTitle,
  SelectInput,
  TextInput,
  toast,
} from '@prime-fresh/ui_shared';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
const LevelInitialValue: Level = {
  name: null,
  department: null,
  hierarchy: null,
  permissions: [
    {
      documentDefinition: null,
      canCreate: false,
      canEdit: false,
      canView: false,
      canDownload: false,
      canDelete: false,
    },
  ],
};
export const LevelForm = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const levelId = id ? id : '';
  const { data, isError } = useGetDocumentAccessConfig();
  console.log(isError);
  const documentDetails = data?.data ? data.data : [];
  console.log('documentDetails:', documentDetails);
  const { data: dept } = useGetAllDepartments();
  const deparments = dept?.data
    ? mapToValueLabelArray(dept.data, 'id', 'name')
    : [];
  const levelInitialValue = {
    ...LevelInitialValue,
    permissions: documentDetails.map((permissions) => ({
      documentDefinition: permissions.id,
      canCreate: false,
      canEdit: false,
      canView: false,
      canDownload: false,
      canDelete: false,
    })),
  };

  const {
    mutateAsync: postMutate,
    error: postError,
    data: postData,
  } = useCreateLevel();
  const handleSubmit = (values: any) => {
    postMutate(values)
      .then(() => {
        toast.success(postData ? postData.message : 'New level created.');
        setTimeout(() => {
          navigate(ADMIN_ROUTES.GET_ALL_EMPLOYEES);
        }, 2000);
      })
      .catch(() => {
        toast.error(
          postError ? postError.message : 'Error while creating new level .'
        );
      });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: levelInitialValue,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <Grid2 container rowSpacing={1} columnSpacing={1} padding={1}>
          <Grid2 size={{ xs: 12 }} marginBottom={2}>
            <PageTitle pagetitle="Level" />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={true}
              name="name"
              label="Level Name"
              value={formik.values.name}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <SelectInput
              isRequired={true}
              name="department"
              label="Department"
              options={deparments}
              value={formik.values.department}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <TextInput
              isRequired={true}
              type="number"
              name="hierarchy"
              label="Hierarchy"
              value={formik.values.hierarchy}
              handleChange={formik.handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <FieldArray name="permissions">
              {() => (
                <TableContainer component={Box}>
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            Name Of Document
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ border: `1px solid red` }}
                        >
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            Create
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            View
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            Edit
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            Download
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            component="span"
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            Delete
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {formik.values.permissions.map((_, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell align="left">
                            <input
                              hidden={true}
                              name={`permissions.${index}.documentDefinition`}
                              value={
                                formik.values.permissions[index]
                                  .documentDefinition || ''
                              }
                              readOnly={true}
                            />
                            <Typography
                              component="div"
                              variant="body2"
                              sx={{ fontWeight: 500 }}
                            >
                              {documentDetails
                                ? convertInTitleCase(
                                    documentDetails[index]?.name || ''
                                  )
                                : ''}
                            </Typography>
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{ border: `1px solid blue` }}
                          >
                            <CheckboxInput
                              isRequired={true}
                              name={`permissions.${index}.canCreate`}
                              checked={Boolean(
                                formik.values.permissions[index].canCreate
                              )}
                              onChange={formik.handleChange}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <CheckboxInput
                              isRequired={true}
                              name={`permissions.${index}.canView`}
                              checked={formik.values.permissions[index].canView}
                              onChange={formik.handleChange}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <CheckboxInput
                              isRequired={true}
                              name={`permissions.${index}.canEdit`}
                              checked={formik.values.permissions[index].canEdit}
                              onChange={formik.handleChange}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <CheckboxInput
                              isRequired={true}
                              name={`permissions.${index}.canDownload`}
                              checked={
                                formik.values.permissions[index].canDownload
                              }
                              onChange={formik.handleChange}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <CheckboxInput
                              isRequired={true}
                              name={`permissions.${index}.canDelete`}
                              checked={
                                formik.values.permissions[index].canDelete
                              }
                              onChange={formik.handleChange}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </FieldArray>
          </Grid2>
          <Grid2
            size={{ xs: 12 }}
            marginY={2}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <FormButtonGroup
              submitLabel={levelId === '' ? 'Create' : 'Update'}
              isSubmitting={formik.isSubmitting}
              // isSubmitError={levelId === '' ? PostError : PatchError}
              isSubmitError={postError}
              resetLabel="Reset"
              onReset={formik.handleReset}
            />
          </Grid2>
        </Grid2>
      </form>
    </FormikProvider>
  );
};
