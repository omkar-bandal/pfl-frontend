import { addressSchema } from '@prime-fresh/admin/modules';
import * as Yup from 'yup';

export const farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required'),
    residensialAddress: addressSchema,
    primaryMobileNo: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits').required('Contact No is required'),
    dob: Yup.date().required('Date of Birth is required'),
    farmAddress: addressSchema,
    
});