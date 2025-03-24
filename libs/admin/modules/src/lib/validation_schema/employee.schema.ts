import * as Yup from 'yup';
import { addressSchema, REGEX } from '@prime-fresh/shared/modules';

export const employeeValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(3, 'First name should be more than 3 characters')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    lastName: Yup.string()
        .required('Last name is required')
        .min(3, 'Last name should be more than 3 characters')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    username: Yup.string()
        .required('Username is required')
        .min(5, 'username should be more than 5 characters')
        .max(12, 'username should be less than 12 characters'),
    password: Yup.string()
        .required('Password is required.'),
    phoneNumber: Yup.string()
        .required('Mobile number is required')
        .matches(REGEX.CONTACT_NO, 'Mobile number must contain only numbers'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    address: addressSchema,
    joiningDate: Yup.string()
        .required('Joining date is required'),
    selectDepartment: Yup.string()
        .required('Please select a deparment for employee.'),
    level: Yup.string()
        .required('Please select a level for employee.'),
    reportingManager: Yup.string().optional(),
});

