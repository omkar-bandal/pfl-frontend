import * as Yup from 'yup';
export const officeValidationSchema = Yup.object().shape({
    name: Yup.string().required('Office name is required'),
    address: Yup.object().shape({
        address1: Yup.string().required('Address 1 is required'),
        address2: Yup.string().optional(),
        location: Yup.string().required('Location is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        pincode: Yup.string().required('Pincode is required'),
    }),
    contactNumber: Yup.string().required('Contact number is required'),
    officeEmail: Yup.string()
        .required('Office email is required')
        .email('Invalid email format'),
    notes: Yup.string().optional(),
})