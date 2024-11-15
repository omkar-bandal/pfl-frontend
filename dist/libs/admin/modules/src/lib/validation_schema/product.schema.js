"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const Yup = require("yup");
exports.productValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Product name should be more than 3 characters'),
    image: Yup
        .mixed()
        .nullable()
        .required('Image is required')
        .test('fileFormat', 'Invalid image format (only jpg, jpeg, png allowed)', (value) => {
        if (!value)
            return true; // No file selected
        const file = value;
        const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
        return allowedFormats.includes(file.type);
    })
        .test('fileSize', 'Image is too large (max 1MB)', (value) => {
        if (!value)
            return true; // No file selected
        const file = value;
        const maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
        return file.size <= maxSizeInBytes;
    }),
    returnable: Yup.boolean()
        .required('Returnable is required'),
    description: Yup.string()
        .required('Description is required'),
    product_code: Yup.string()
        .required('Product code is required'),
    category: Yup.string()
        .required('Category is required'),
    subcategory: Yup.string()
        .required('Subcategory is required'),
    classification: Yup.string()
        .required('Classification is required'),
    uom: Yup.string()
        .required('UOM is required'),
});
//# sourceMappingURL=product.schema.js.map