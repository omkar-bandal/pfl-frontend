import * as Yup from 'yup';
import { addressSchema, REGEX } from '@prime-fresh/shared/modules';

export const employeeValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(3, 'First name should be more than 3 characters')
    .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  middleName: Yup.string()
    .notRequired()
    .min(3, 'First name should be more than 3 characters')
    .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(3, 'Last name should be more than 3 characters')
    .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  username: Yup.string()
    .required('Username is required')
    .min(5, 'username should be more than 5 characters')
    .max(16, 'username should be less than 16 characters'),
  primaryMobNo: Yup.string()
    .required('Mobile number is required')
    .matches(REGEX.CONTACT_NO, 'Mobile number must contain only numbers'),
  secondaryMobNo: Yup.string().notRequired().matches(REGEX.CONTACT_NO, 'Mobile number must contain only numbers'),
  primaryEmail: Yup.string().required('Email is required').matches(REGEX.IS_EMAIL, 'Please enter valid email.'),
  secondaryEmail: Yup.string().notRequired().matches(REGEX.IS_EMAIL, 'Please enter valid email.'),
  residentialAddress: addressSchema,
  permanentAddress: addressSchema,
  companyName: Yup.string().required('Company name is required'),
  department: Yup.string().required('Department is required.'),
  joiningDate: Yup.string().required('Joining date is required'),
  joiningLocation: Yup.string().required('Joining location is required'),
  currentWorkLocation: Yup.string().required('Work location is required'),
  otherWorkLocationInput: Yup.mixed().when('currentWorkLocation', {
    is: null,
    then: (schema) => schema.required('Other work location is required'),
    otherwise: (schema) => schema.nullable(),
  }),
  accessLocation: Yup.array().of(Yup.string()).min(1, 'Atleast one access location should be selected').required('Access location is required'),
  cugNo: Yup.string().notRequired().matches(REGEX.CONTACT_NO, 'Mobile number must contain only numbers'),
  workEmail: Yup.string().notRequired().matches(REGEX.IS_EMAIL, 'Please enter valid email.'),
});
