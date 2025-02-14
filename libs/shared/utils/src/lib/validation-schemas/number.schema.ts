import * as yup from 'yup';

export const numberSchema = yup.string().matches(/^\d+(\.\d+)?$/, 'Only numbers and a single decimal point are allowed')
