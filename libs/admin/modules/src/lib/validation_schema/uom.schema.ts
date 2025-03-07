import * as yup from 'yup';

export const uomSchema = yup.object().shape({
    unit: yup.string().required('UOM name is required'),
    abbreviation: yup.string().required('Abbreviation of UOM is required')
})