import * as yup from 'yup';
import { addressSchema } from '../address.schema';
import { REGEX } from '../regex';

export const deliveryDetailsValidationSchema = yup.object().shape({
    deliveryAddress: addressSchema,
    receivingPersonFName: yup
        .string()
        .required('First name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    receivingPersonMName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    receivingPersonLName: yup
        .string()
        .required('Last name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    primaryContactNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    secondaryContactNo: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    emailPrimary: yup
        .string()
        .required('Please enter email.')
        .email("Please enter valid email"),
    emailSecondary: yup
        .string()
        .notRequired()
        .nullable()
        .email("Please enter valid email"),
})