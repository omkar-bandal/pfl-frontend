import * as yup from 'yup';
import { addressSchema } from './address.schema';
import { REGEX } from './regex';
import {
    keyMobileNumValidationSchema,
    billingDetailsValidationSchema,
    deliveryDetailsValidationSchema,
    statutoryDetailsValidationSchema,
    bankDetailsValidationSchema,
    productSpecificationValidationSchema,
    paymentTermsValidationSchema,
    officeUseOnlyValidationSchema
} from './customer-validation-schemas';

export const customerValidationSchema = yup.object().shape({
    organisationName: yup
        .string()
        .required('Organization name is required.'),
    customerTypes: yup
        .string()
        .required('Customer type is required.'),
    customerCategory: yup
        .string()
        .required('Customer category is required.'),
    organisationType: yup
        .string()
        .required('Organization type is required.'),
    otherType: yup
        .string()
        .nullable(),
    customerAddress: addressSchema,
    primaryContactNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    secondaryContactNo: yup
        .string()
        .nullable()
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    emailPrimary: yup
        .string()
        .required('Please enter email.')
        .email("Please enter valid email"),
    emailSecondary: yup
        .string()
        .nullable()
        .email("Please enter valid email"),
    keyMobileNumbers: keyMobileNumValidationSchema,
    billingDetails: billingDetailsValidationSchema,
    deliveryDetails: deliveryDetailsValidationSchema,
    statutoryDetails: statutoryDetailsValidationSchema,
    bankDetails: bankDetailsValidationSchema,
    productSpecification: productSpecificationValidationSchema,
    paymentTerms: paymentTermsValidationSchema,
    officeUseOnly: officeUseOnlyValidationSchema,
})