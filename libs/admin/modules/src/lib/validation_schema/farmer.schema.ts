import * as Yup from 'yup';
import { addressSchema } from '@prime-fresh/shared/modules';

export const farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required').min(3, 'Minimum 3 characters required.'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required').min(3, 'Minimum 3 characters required.'),
    residensialAddress: addressSchema,
    farmAddress: addressSchema,
    primaryMobileNo: Yup.string().required('Contact No is required'),
});