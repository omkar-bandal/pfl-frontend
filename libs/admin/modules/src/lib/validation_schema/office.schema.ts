import * as Yup from 'yup';
import { addressSchema } from '@prime-fresh/shared/modules';

export const officeValidationSchema = Yup.object().shape({
    name: Yup.string().required('Office name is required'),
    address: addressSchema,
    contactNumber: Yup.string().required('Contact number is required'),
    officeEmail: Yup.string()
        .required('Office email is required')
        .email('Invalid email format'),
    notes: Yup.string().optional(),
})