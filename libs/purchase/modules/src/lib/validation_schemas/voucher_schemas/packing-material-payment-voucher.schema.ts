import { addressSchema, REGEX } from '@prime-fresh/shared/modules';
import * as yup from 'yup';

export const packingMaterialPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    sellerName: yup.string().required('Seller name is required').matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    address: addressSchema,
    contactNo: yup.string().required("Contact number is required.").matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    altContactNo: yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required').matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    materials: yup.array().of(
        yup.object().shape({
            itemName: yup.string().required('Item name is required'),
            itemUom: yup.string().required('UOM is required'),
            itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
            rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        })
    )
})