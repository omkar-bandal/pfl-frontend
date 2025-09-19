import * as yup from 'yup';
import { imageSchema } from './image.schema';

// export const productValidationSchema = yup.object().shape({
//   name: yup.string().required('Name is required').min(3, 'Product name should be more than 3 characters'),
//   image: yup
//     .mixed()
//     .nullable()
//     .required('Image is required')
//     .test('fileFormat', 'Invalid image format (only jpg, jpeg, png allowed)', (value) => {
//       if (!value) return true; // No file selected
//       const file = value as File;
//       const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
//       return allowedFormats.includes(file.type);
//     })
//     .test('fileSize', 'Image is too large (max 1MB)', (value) => {
//       if (!value) return true; // No file selected
//       const file = value as File;
//       const maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
//       return file.size <= maxSizeInBytes;
//     }),
//   returnable: yup.boolean().required('Returnable is required'),
//   description: yup.string().required('Description is required'),
//   product_code: yup.string().required('Product code is required'),
//   category: yup.string().required('Category is required'),
//   subcategory: yup.string().required('Subcategory is required'),
//   classification: yup.string().required('Classification is required'),
//   uom: yup.string().required('UOM is required'),
// });

const productDetailsSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Product name should be more than 3 characters'),
  prefix: yup.string().required('Prefix is required').min(3, 'Prefix should be more than 3 characters'),
  category: yup.string().required('Category is required'),
  subcategory: yup.string().required('Subcategory is required'),
  classification: yup.string().required('Classification is required'),
  uom: yup.string().required('UOM is required'),
});

const variantDetailsSchema = yup.object().shape({
  variant: yup.array(
    yup.object({
      thresholdStock: yup.number().required('Threshold quantity is required').min(0, 'Quantity can not be negative'),
    })
  ),
});

const qcParameterSchema = yup.object().shape({
  qualityParameters: yup.array(
    yup.object({
      name: yup.string().notRequired().nullable(),
      type: yup.string().notRequired().nullable(),
    })
  ),
});


const productImageSchema = yup.object().shape({
  image: imageSchema
});


export const productValidationSchema = [productDetailsSchema, variantDetailsSchema, qcParameterSchema, productImageSchema];