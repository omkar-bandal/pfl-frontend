import * as Yup from 'yup';

export const addressSchema = Yup.object().shape({
    address1: Yup.string().required('Address Line 1 is required'),
    address2: Yup.string(),
    location: Yup.string().required('Location is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string().required('Pincode is required').matches(/^\d{6}$/, 'Pincode must be exactly 6 digits'),
});