import React from 'react';
import { IProduct } from '@prime-fresh/services';
import { FieldArray, useFormikContext } from 'formik';
import { Grid2, IconButton, InputAdornment, Typography } from '@mui/material';
import { AddFieldButton, TextInput } from '../../../components';
import { Close } from '@mui/icons-material';
import { initValProductVariant } from '@prime-fresh/shared/modules';

export const VariantDetails = () => {
  const { values, handleChange } = useFormikContext<IProduct>();
  return (
    <Grid2 container spacing={1}>
      <Grid2 size={12}>
        <FieldArray name="variant">
          {({ push, remove }) => (
            <>
              {values.variant.map((_, index) => (
                <Grid2
                  container
                  spacing={1}
                  padding={1}
                  marginY={1}
                  sx={{ border: `1px solid #BDBDBD`, borderRadius: 3 }}
                >
                  <Grid2 size={{ xs: 11.5 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Variant {index + 1}
                    </Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 0.5 }}>
                    {values.variant.length > 1 && (
                      <IconButton color="error" size="small" onClick={() => remove(index)}>
                        <Close fontSize="small" />
                      </IconButton>
                    )}
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="text"
                      isRequired={false}
                      name={`variant.${index}.count`}
                      label="Count"
                      value={values.variant[index].count}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="text"
                      isRequired={false}
                      name={`variant.${index}.size`}
                      label="Size"
                      value={values.variant[index].size}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="text"
                      isRequired={false}
                      name={`variant.${index}.origin`}
                      label="Origin"
                      value={values.variant[index].origin}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="text"
                      isRequired={false}
                      name={`variant.${index}.variety`}
                      label="Variety"
                      value={values.variant[index].variety}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="text"
                      isRequired={false}
                      name={`variant.${index}.brand`}
                      label="Brand"
                      value={values.variant[index].brand}
                      handleChange={handleChange}
                    />
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 2 }}>
                    <TextInput
                      type="number"
                      isRequired={true}
                      name={`variant.${index}.thresholdStock`}
                      label="Threshold Quantity"
                      value={values.variant[index].thresholdStock}
                      handleChange={handleChange}
                      slotProps={{
                        input: {
                          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                        },
                      }}
                      infoTipText="Minimum quantity of product in kg to be maintain in the stock."
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
                <AddFieldButton label="Add Variant" onClickFn={() => push(initValProductVariant)} />
              </Grid2>
            </>
          )}
        </FieldArray>
      </Grid2>
    </Grid2>
  );
};
