import * as yup from 'yup';

export const productSubcategorySchema = yup.object().shape({
    name: yup.string().required('Product subcategory name is required'),
    category: yup.string().required('Related product category name is required'),
})