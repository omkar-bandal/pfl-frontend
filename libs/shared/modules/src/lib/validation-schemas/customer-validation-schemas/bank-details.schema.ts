import * as yup from 'yup';
import { addressSchema } from '../address.schema';
import { REGEX } from '../regex';

export const bankDetailsValidationSchema = yup.object().shape({
    // ifCancelledCheque: yup
    //     .boolean()
    //     .required('Please select yes or no.'),
    // cancelledChequeCopy: yup
    //     .mixed()
    //     .when('ifCancelledCheque', {
    //         is: true,
    //         then: (schema) => schema.required("Cancel cheque copy required if it is available."),
    //         otherwise: (schema) => schema.notRequired().nullable(),
    //     }),
    // notCancelledChequeReason: yup
    //     .string()
    //     .when('ifCancelledCheque', {
    //         is: false,
    //         then: (schema) => schema.required("Please specify reason to not attach cancel cheque."),
    //         otherwise: (schema) => schema.notRequired().nullable(),
    //     }),
    bankAccHolderFName: yup
        .string()
        .required('First name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    bankAccHolderMName: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    bankAccHolderLName: yup
        .string()
        .required('Last name is required')
        .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
    bankName: yup
        .string()
        .required('Bank name is required.'),
    bankBranch: yup
        .string()
        .required('Branch name is required.'),
    accType: yup
        .string()
        .required('Account type is required.'),
    // otherAccType: yup
    //     .string()
    //     .notRequired()
    //     .nullable(),
    bankAccNo: yup
        .string()
        .required('Account number is required.'),
    ifscCode: yup
        .string()
        .required('IFSC code is required.'),
    bankAddress: addressSchema,
    // bankStatementCopy: yup.mixed(),
})