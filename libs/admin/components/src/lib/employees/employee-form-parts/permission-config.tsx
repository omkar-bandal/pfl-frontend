import { memo } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { IEmployee } from '@prime-fresh/admin_api';
import { GetDocumentDetails } from '@prime-fresh/common_api';
import { CheckboxInput } from '@prime-fresh/ui_shared';
import { FieldArray, useFormikContext } from 'formik';
import { convertInTitleCase } from '@prime-fresh/shared/modules';

export const PermissionConfiguration = memo(({ documentDetails }: { documentDetails: GetDocumentDetails[] }) => {
  const { values, handleChange, errors } = useFormikContext<IEmployee>();
  console.log('Doc Details: ', documentDetails);
  return (
    <Box flex={1}>
      {Boolean(errors.permissions) && <Typography variant='caption' color="error">Permission array is isRequired</Typography>}
      <FieldArray name="permissions">
        {() => (
          <TableContainer component={Box}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow>
                  <TableCell width="50%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Name Of Document
                    </Typography>
                  </TableCell>
                  <TableCell align="center" width="10%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Create
                    </Typography>
                  </TableCell>
                  <TableCell align="center" width="10%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      View
                    </Typography>
                  </TableCell>
                  <TableCell align="center" width="10%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Edit
                    </Typography>
                  </TableCell>
                  <TableCell align="center" width="10%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Download
                    </Typography>
                  </TableCell>
                  <TableCell align="center" width="10%">
                    <Typography component="span" variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {values.permissions.map((_, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell align="left">
                      <input
                        hidden={true}
                        name={`permissions.${index}.id`}
                        value={values.permissions[index].documentDefinition || ''}
                        readOnly={true}
                      />
                      <Typography component="div" variant="body2" sx={{ fontWeight: 500 }}>
                        {documentDetails
                          ? convertInTitleCase(
                              documentDetails.find(
                                (docDetails) => docDetails.id === values.permissions[index].documentDefinition
                              )?.name || ''
                            )
                          : ''}
                       
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <CheckboxInput
                        isRequired={true}
                        name={`permissions.${index}.canCreate`}
                        checked={Boolean(values.permissions[index].canCreate)}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <CheckboxInput
                        isRequired={true}
                        name={`permissions.${index}.canView`}
                        checked={values.permissions[index].canView}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <CheckboxInput
                        isRequired={true}
                        name={`permissions.${index}.canEdit`}
                        checked={values.permissions[index].canEdit}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <CheckboxInput
                        isRequired={true}
                        name={`permissions.${index}.canDownload`}
                        checked={values.permissions[index].canDownload}
                        onChange={handleChange}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <CheckboxInput
                        isRequired={true}
                        name={`permissions.${index}.canDelete`}
                        checked={values.permissions[index].canDelete}
                        onChange={handleChange}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </FieldArray>
    </Box>
  );
});
