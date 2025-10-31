import * as Yup from 'yup';
import { REGEX } from './regex';

export const addressSchema = Yup.object().shape({
    address1: Yup.string().required('Address Line 1 is required'),
    address2: Yup.string().notRequired().nullable(),
    location: Yup.string().notRequired().nullable(),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
    pincode: Yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
});