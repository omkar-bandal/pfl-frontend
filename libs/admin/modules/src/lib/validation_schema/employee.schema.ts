import * as Yup from 'yup';
import { addressSchema } from '@prime-fresh/shared/modules';

export const employeeValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(3, 'First name should be more than 3 characters'),
    middleName: Yup.string()
        .required('Middle name is required')
        .min(3, 'Middle name should be more than 3 characters'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(3, 'Last name should be more than 3 characters'),
    designation: Yup.string()
        .required('Designation is required')
        .min(5, 'Incorrect Designation'),
    username: Yup.string()
        .required('Username is required')
        .min(5, 'username should be more than 5 characters')
        .max(12, 'username should be less than 12 characters'),
    phoneNumber: Yup.string()
        .required('Mobile number is required')
        .length(10, 'Mobile number must be 10 digits')
        .matches(/^[0-9]+$/, 'Mobile number must contain only numbers'),
    cugNo: Yup.string()
        .required('CUG number is required')
        .length(10, 'CUG number must be 10 digits')
        .matches(/^[0-9]+$/, 'CUG number must contain only numbers'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    companyEmail: Yup.string()
        .required('Company email is required')
        .email('Invalid email format'),
    address: addressSchema,
    joiningDate: Yup.string()
    .required('Joining date is required'),
    relocationDate: Yup.string().optional(),
    relocationPlace: Yup.string().optional(),
    recommendedBy: Yup.string().optional(),
    role: Yup.string()
        .required('Role is required'),
    reportingAuthorityFunctional: Yup.string().optional(),
    reportingAuthorityAdministrative: Yup.string().optional(),
});

