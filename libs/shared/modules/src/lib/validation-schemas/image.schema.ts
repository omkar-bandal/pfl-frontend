import * as yup from 'yup';

export const imageSchema = yup
  .mixed()
  .nullable()
  .notRequired()
  .test('fileFormat', 'Invalid image format (only jpg, jpeg, png allowed)', (value: any) => {
    if (!value) return true; // No file selected
    if (typeof value === 'string') {
      // Handle S3 URL case
      return value.toLowerCase().match(/\.(jpg|jpeg|png)$/) !== null;
    }
    // Handle File upload case
    if (value instanceof File) {
      const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
      return allowedFormats.includes(value.type);
    }
    return false;
  })
  .test('fileSize', 'Image is too large (max 1MB)', (value: any) => {
    if (!value) return true; // No file selected
    if (typeof value === 'string') {
      // Skip size validation for existing URLs
      return true;
    }
    // Handle File upload case
    if (value instanceof File) {
      const maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
      return value.size <= maxSizeInBytes;
    }
    return false;
  });
