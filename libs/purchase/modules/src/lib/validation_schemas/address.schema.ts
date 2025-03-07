import * as yup from 'yup';

export const addressSchema = yup.object().shape({
    address1: yup.string().required('Address Line 1 is required'),
    address2: yup.string(),
    location: yup.string().required('Location is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    pincode: yup.string().required('Pincode is required').matches(/^\d{6}$/, 'Pincode must be exactly 6 digits'),
});