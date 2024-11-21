import * as yup from 'yup';
import { contactNoSchema } from '../contactNo.schema';

export const transportPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    driverName: yup.string().required('Driver name is required'),
    contactNo: contactNoSchema,
    vehicleNo: yup.string().required('Vehicle number is required'),
    dispatchLocation: yup.string().required('Dispatch location is required'),
    destinationLocation: yup.string().required('Destination location is required'),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
})