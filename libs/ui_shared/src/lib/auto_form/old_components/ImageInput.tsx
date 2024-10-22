import React from 'react'
import { ErrorMessage, Field, FieldProps, FormikProps } from 'formik';
import { Box, IconButton, Typography } from '@mui/material';
import { CloudUploadOutlined } from '@mui/icons-material';

type ImageInputProp = {
  name: string;
  label: string;
  type: string;
};
export const ImageInput: React.FC<ImageInputProp> = ({ name, label, type }) => {
    const [preview, setPreview] = React.useState<string | null>(null);
    const imgRef = React.useRef<HTMLInputElement>(null);
  
    const handleImageChange = <T extends object>(
        event: React.ChangeEvent<HTMLInputElement>,
        formikField: FieldProps['field'],
        setFieldValue: FormikProps<T>['setFieldValue'] 
      ) => {
        const file = event.target.files?.[0];
    
        // Set file to Formik field and trigger validation
        setFieldValue(formikField.name, file);
    
        // Preview the image
        if (file) {
          setPreview(URL.createObjectURL(file));
        }
      };
  
    return (
      <Field name={name}>
        {({ field: formikField, form, meta }: FieldProps) => (
          <>
            <Box
              sx={{
                width: "100%",
                border: '1px dashed #BDBDBD',
                height: 200,
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: 'relative',
              }}
            >
              <input
                type={type}
                name={name}
                ref={imgRef}
                hidden
                accept="image/jpeg, image/jpg, image/png"
                onChange={(event) => handleImageChange(event, formikField, form.setFieldValue)}
              />
              {preview ? (
                <Box
                  component="img"
                  src={preview}
                  alt="Image Preview"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 3,
                  }}
                />
              ) : (
                <>
                  <IconButton
                    aria-label="upload"
                    size="large"
                    onClick={() => {
                      imgRef.current?.click();
                    }}
                  >
                    <CloudUploadOutlined fontSize='large' />
                  </IconButton>
                  <Typography variant='caption' component="div">
                    {label}
                  </Typography>
                </>
              )}
            </Box>
            <ErrorMessage
              name="image"
              component="div"
            />
            {meta.touched && meta.error && (
              <Typography variant='caption' color="error">
                {meta.error}
              </Typography>
            )}
          </>
        )}
      </Field>
    );
  };