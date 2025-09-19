import { Add, Close } from '@mui/icons-material';
import { Grid2, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { IProduct } from '@prime-fresh/admin_api';
import { AddFieldButton, RadioGroupInput, TextInput } from '@prime-fresh/ui_shared';
import { FieldArray, useFormikContext } from 'formik';
import React from 'react';

export const QCParameters = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { values, handleChange } = useFormikContext<IProduct>();
  const qcParamsType = ['good', 'bad', 'average'].map((type) => {
    return { value: type, label: type };
  });
  return (
    <>
      <Grid2 size={{ xs: 12 }}>
        <FieldArray name="qualityParameters">
          {({ push, remove }) => (
            <>
              {values.qualityParameters.map((_, index) => (
                <Grid2
                  container
                  spacing={1}
                  marginY={2}
                  padding={isMobile ? 1 : 0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    border: isMobile ? `1px solid #BDBDBD` : `none`,
                    borderRadius: 2,
                  }}
                >
                  <Grid2 size={{ xs: 12, md: 0.5 }} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                    {values.qualityParameters.length > 1 && (
                      <IconButton color="error" size="small" onClick={() => remove(index)}>
                        <Close fontSize="small" />
                      </IconButton>
                    )}
                  </Grid2>
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
                  <Grid2 size={{ xs: 12, md: 7.5 }}>
                    <TextInput
                      isRequired={true}
                      name={`qualityParameters.${index}.name`}
                      label="Parameter Name"
                      value={values.qualityParameters[index].name}
                      handleChange={handleChange}
                    />
                  </Grid2>
                </Grid2>
              ))}
              <Grid2
                size={{ xs: 12 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'end',
                }}
              >
                <AddFieldButton label="Add More" onClickFn={() => push({ name: '', type: '' })} />
              </Grid2>
            </>
          )}
        </FieldArray>
      </Grid2>
    </>
  );
};
