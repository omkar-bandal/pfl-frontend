import * as yup from 'yup';
import { REGEX } from '../regex';
import { addressSchema } from '../address.schema';


export const keyMobileNumValidationSchema = yup.object().shape({
    accDeptFName: yup
        .string()
        .required('First name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    accDeptMName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    accDeptLName: yup
        .string()
        .required('Last name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    accDeptMobileNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    ownerFName: yup
        .string()
        .required('First name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ownerMName: yup
        .string()
        .notRequired().nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ownerLName: yup
        .string()
        .required('Last name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ownerMobileNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    mandiLicenceNo: yup
        .string()
        .notRequired()
        .nullable(),
    // mandiLicenceCopy: yup.,
    regiNo: yup
        .string()
        .notRequired()
        .nullable(),
    // regiCopy: File | null,
    electricityBill: yup
        .boolean()
        .required('Please select yes or no.'),
    consumenrNo: yup
        .string()
        .when('electricityBill', {
            is: true,
            then: (schema) => schema.required("Consumer number is required if electricity bill available."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    electricityBillCopy: yup
        .mixed()
        .when('electricityBill', {
            is: true,
            then: (schema) => schema.required("Electricity bill copy required if it is available."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    notElectricityBillReason: yup
        .string()
        .when('electricityBill', {
            is: false,
            then: (schema) => schema.required("Please specify reason to not attach electricity bill."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    customerBlacklisted: yup
        .boolean()
        .required('Please select yes or no.'),
    blackListedBy: yup
        .string()
        .when('customerBlacklisted', {
            is: true,
            then: (schema) => schema.required("Please specify name who blacklisted the customer."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    ifBlacklistedReason: yup
        .string()
        .when('customerBlacklisted', {
            is: true,
            then: (schema) => schema.required("please specify reason for blacklisting customer."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    visitingCard: yup
        .boolean()
        .required('Please select yes or no.'),
    visitinContactNo: yup
        .string()
        .when('visitingCard', {
            is: true,
            then: (schema) => schema.required("Consumer number is required ff visiting card available."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    visitingCardCopy: yup
        .mixed()
        .when('visitingCard', {
            is: true,
            then: (schema) => schema.required("Visiting card copy required if it is available."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),
    notVisitingCardReason: yup
        .string()
        .when('visitingCard', {
            is: false,
            then: (schema) => schema.required("Please specify reason to not attach visiting card."),
            otherwise: (schema) => schema.notRequired().nullable(),
        }),

    //References
    ref1FName: yup
        .string()
        .required('First name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref1MName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref1LName: yup
        .string()
        .required('Last name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref1Address: addressSchema,
    ref1ContactNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    ref1Email: yup
        .string()
        .required('Please enter email.')
        .email("Please enter valid email"),
    ref2FName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref2MName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref2LName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    ref2ContactNo: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    ref2Email: yup
        .string()
        .notRequired()
        .nullable()
        .email("Please enter valid email"),
})