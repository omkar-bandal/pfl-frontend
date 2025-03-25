import * as yup from 'yup';
import { REGEX } from '../regex';

export const paymentTermsValidationSchema = yup.object().shape({
    paymentMade: yup
        .string()
        .required('Required. Please select an option.'),
    otherPaymentMade: yup
        .string()
        .nullable(),
    paymentMode: yup
        .string()
        .required('Payment mode is required.'),
    otherPaymentMode: yup
        .string()
        .nullable(),
    marginDeposit: yup
        .string()
        .nullable(),
    rtv: yup
        .boolean()
        .required('Please select yes or no.'),
    agreementExecuted: yup
        .boolean()
        .required('Please select yes or no.'),
    lc: yup
        .string()
        .nullable(),
    bg: yup
        .string()
        .nullable(),
    securityDepoCheqNo: yup
        .string()
        .nullable(),
    securityDepoAmt: yup
        .number()
        .positive('Amount cannot be negative.'),
    //Initial Exposure Limit (IEL)
    IELinAmt: yup
        .number()
        .positive('Amount cannot be negative.'),
    IELRecommendedBy: yup
        .string()
        .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
    IELRecommendedDate: yup
        .string()
        .nullable(),
    //Revision of Exposure Limit (REL)
    RELinAmt: yup
        .number()
        .positive('Amount cannot be negative.'),
    RELRecommendedBy: yup
        .string()
        .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
    RELRecommendedDate: yup
        .string()
        .nullable(),
    reason: yup
        .string()
        .nullable(),
    docEvidenceCopy: yup
        .mixed()
        .nullable(),
})