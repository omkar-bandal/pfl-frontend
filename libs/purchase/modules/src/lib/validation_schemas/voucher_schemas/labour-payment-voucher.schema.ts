import * as yup from 'yup';
import { contactNoSchema } from '../contactNo.schema';

export const labourPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    noOfLabours: yup.number().required('Number of labour is required').positive('Number of labours cannot be negative'),
    ratePerLabour: yup.number().required('Rate is required').positive('Rate cannot be negative'), 
    loadingDate: yup.date().required('Loading date is required'),
    contactNo: contactNoSchema,
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
})