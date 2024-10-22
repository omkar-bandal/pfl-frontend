import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Close, CloudUploadOutlined } from '@mui/icons-material';

interface ImageUploadProps {
  isRequired: boolean;
  name: string;
  label: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ isRequired, name, label }) => {
  const { setFieldValue } = useFormikContext(); // Use Formik's setFieldValue to handle form updates
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Update the form state with the selected file
      setFieldValue(name, file);
      // Generate a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string); // Store the preview image as base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFieldValue(name, null);
    setPreview(null);
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {isRequired && (
          <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
            *{" "}
          </Typography>
        )}
        <Typography variant="body2" component="span">
          {label}
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{display: "flex", alignItems: "start", justifyContent: "center", border: '1px solid #BDBDBD', borderRadius: 2, padding: 1}}>
          <Box
            sx={{
              // border: '1px dashed grey',
              borderRadius: '8px',
              width: '200px',
              height: '200px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Image preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            ) : (
              <Stack direction="column">
                <IconButton component="label">
                  <CloudUploadOutlined sx={{fontSize: 50}} />
                  <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                </IconButton>
                <Typography variant='body2' component="div">Upload Image</Typography>
              </Stack>
            )}
          </Box>
          {preview && (
            <IconButton
              sx={{backgroundColor: 'none' }}
              onClick={handleRemoveImage}
            >
              <Close color='error' />
            </IconButton>
          )}
      </Grid>
    </Grid>
  );
};

// import React, { useState } from 'react';
// import { useFormikContext } from 'formik';
// import { Box, Button, Typography } from '@mui/material';

// interface ImageUploadProps {
//   name: string;
//   label: string;
// }

// export const ImageUpload: React.FC<ImageUploadProps> = ({ name, label }) => {
//   const { setFieldValue } = useFormikContext(); // Use Formik's setFieldValue to handle form updates
//   const [preview, setPreview] = useState<string | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Update the form state with the selected file
//       setFieldValue(name, file);
//       // Generate a preview of the image
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string); // Store the preview image as base64
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setFieldValue(name, null);
//     setPreview(null);
//   };

//   return (
//     <Box>
//       <Typography variant="body2" gutterBottom>{label}</Typography>
//       <Button variant="contained" component="label">
//         Upload Image
//         <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
//       </Button>

//       {preview && (
//         <Box mt={2}>
//           <img src={preview} alt="Image preview" style={{ width: '200px', height: 'auto' }} />
//           <Button variant="outlined" color="secondary" onClick={handleRemoveImage}>
//             Change Image
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };
