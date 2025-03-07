import * as yup from 'yup';

export const productClassificationSchema = yup.object().shape({
    name: yup.string().required('Product classification name is required.')
})