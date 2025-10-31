import React, { useEffect, useState } from 'react';
import { Close, Add } from '@mui/icons-material';
import { useField, useFormikContext } from 'formik';
import { Label } from './FormikLabel';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';

interface ImageUploadProps {
  isRequired: boolean;
  name: string;
  label: string;
}

export const ImageUploadMultiple: React.FC<ImageUploadProps> = ({ isRequired, name, label }) => {
  const { setFieldValue, values } = useFormikContext<Record<string, File[] | string[]>>();
  const [field, meta] = useField<File[] | string[]>(name);
  const [previews, setPreviews] = useState<string[]>([]);

  // Initialize previews on mount or when the form resets
  useEffect(() => {
    const images = values[name];
    if (Array.isArray(images)) {
      const filePreviews = images.map((img) => {
        if (typeof img === 'string') return img; // existing URL
        return URL.createObjectURL(img); // new File
      });
      setPreviews(filePreviews);
    } else {
      setPreviews([]);
    }
  }, [values[name]]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const currentImages = (values[name] as File[] | undefined) || [];
      const newFiles = Array.from(files);
      const updatedImages = [...currentImages, ...newFiles];

      setFieldValue(name, updatedImages);

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const currentImages = values[name] as (File | string)[];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFieldValue(name, updatedImages);
    setPreviews(updatedPreviews);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12}>
        <Label isRequired={isRequired} name={name} label={label} isError={meta.touched && Boolean(meta.error)} />
      </Grid>

      <Grid item xs={12} sx={{ border: `1px solid #CCC`, borderRadius: 2, padding: 1 }}>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {previews.map((preview, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: 120,
                height: 120,
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid #ccc',
              }}
            >
              <img
                src={preview}
                alt={`Preview ${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <IconButton
                size="small"
                onClick={() => handleRemoveImage(index)}
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  backgroundColor: 'rgba(255,255,255,0.8)',
                }}
              >
                <Close fontSize="small" color="error" />
              </IconButton>
            </Box>
          ))}

          <Stack direction="column" alignItems="center" justifyContent="center">
            <IconButton component="label">
              <Add sx={{ fontSize: 40 }} />
              <input hidden accept="image/*" type="file" multiple onChange={handleImageUpload} />
            </IconButton>
            <Typography variant="caption" color="#9E9E9E">
              Add Images
            </Typography>
          </Stack>
        </Stack>
      </Grid>

      {meta.touched && meta.error && (
        <Typography variant="caption" color="error">
          {meta.error as string}
        </Typography>
      )}
    </Grid>
  );
};
