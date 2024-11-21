import * as yup from 'yup';
import { contactNoSchema } from '../contactNo.schema';
import { addressSchema } from '../address.schema';

export const packingMaterialPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    sellerName: yup.string().required('Seller name is required'),
    address: addressSchema,
    contactNo: contactNoSchema,
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
    // materials: yup.array().of(
    //     yup.object().shape({
    //         itemName: yup.string().required('Item name is required'),
    //         uom: yup.string().required('UOM is required'),
    //         itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    //         rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    //     })
    // )
})