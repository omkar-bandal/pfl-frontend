import * as Yup from 'yup';
import { addressSchema, REGEX } from '@prime-fresh/shared/modules';

export const officeValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Office name is required'),
    address: addressSchema,
    cFirstName: Yup.string()
        .nullable().
        matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    cMiddleName: Yup.string()
        .nullable().
        matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    cLastName: Yup.string()
        .nullable().
        matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    contactNumber: Yup.string()
        .nullable()
        .matches(REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    officeEmail: Yup.string()
        .nullable()
        .email('Invalid email format'),
    notes: Yup.string()
        .nullable(),
})