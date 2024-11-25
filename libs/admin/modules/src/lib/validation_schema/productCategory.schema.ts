import * as yup from 'yup';

export const productCategorySchema = yup.object().shape({
    name: yup.string().required('Product category name is required'),
    productClassification: yup.string().required('Related product classification name is required'),
})