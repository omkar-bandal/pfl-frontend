import * as yup from 'yup';
// import { REGEX } from '../regex';

export const paymentTermsValidationSchema = yup.object().shape({
    paymentMade: yup
        .string()
        .required('Required. Please select an option.'),
    paymentMode: yup
        .string()
        .required('Payment mode is required.'),
    // marginDeposit: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    rtv: yup
        .boolean()
        .required('Please select yes or no.'),
    agreementExecuted: yup
        .boolean()
        .required('Please select yes or no.'),
    // lc: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // bg: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // securityDepoCheqNo: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // securityDepoAmt: yup
    //     .number()
    //     .nullable()
    //     .notRequired()
    //     .min(0,'Amount cannot be negative.'),
    //Initial Exposure Limit (IEL)
    // IELinAmt: yup
    //     .number()
    //     .nullable()
    //     .notRequired()
    //     .min(0, 'Amount cannot be negative.'),
    // IELRecommendedBy: yup
    //     .string()
    //     .nullable()
    //     .notRequired()
    //     .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
    // IELRecommendedDate: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // //Revision of Exposure Limit (REL)
    // RELinAmt: yup
    //     .number()
    //     .nullable()
    //     .notRequired()
    //     .min(0, 'Amount cannot be negative.'),
    // RELRecommendedBy: yup
    //     .string()
    //     .nullable()
    //     .notRequired()
    //     .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
    // RELRecommendedDate: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // reason: yup
    //     .string()
    //     .nullable()
    //     .notRequired(),
    // docEvidenceCopy: yup
    //     .mixed()
    //     .nullable()
    //     .notRequired(),
})