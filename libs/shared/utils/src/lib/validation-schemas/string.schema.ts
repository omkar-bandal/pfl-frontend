import * as yup from 'yup';

export const stringSchema = yup.string().matches(/^[a-zA-Z ]+$/, 'Only alphabets and spaces are allowed')
