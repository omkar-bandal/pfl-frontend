import { dateSchema, REGEX } from '@prime-fresh/shared/modules';
import * as yup from 'yup';

export const rfpaSchema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    // purchaseLocation: yup.string().required('Purchase Location is required'),
    // purchaseForSalesLocation: yup.string().required('Purchase for sales location is required'),

    selectedParty: yup.string().required('Please select one option'),
    rfpaProducts: yup.array().of(
        yup.object().shape({
            product: yup.string().required('Product is required'),
            grade: yup.string().nullable(),
            quantity: yup.number().required('Quantity is required').positive('Quantity must be positive'),
            unitPrice: yup.number().required('Unit Price is required').positive('Unit Price must be positive'),
            purchaseDate: dateSchema.required('Purchase Date is required'),
            dispatchDate: dateSchema.required('Dispatch Date is required'),
            deliveryDate: dateSchema.required('Delivery Date is required'),
            deliveryLocation: yup.string().required('Delivery Location is required'),
            expectedHarvestDate: yup.date().nullable(),
        })
    ).required('RFPA Products are required'),
    paymentInfo: yup.object().shape({
        paymentMode: yup.string().required('Payment Mode is required'),
        advancePaidAmt: yup.number().nullable().positive('Amount must be positive'),
        creditPeriod: yup.number().min(0,'Credit Period must be positive').required('Credit Period is required'),
        paymentDate: dateSchema.required('Payment Date is required'),
        paymentTerms: yup.number().required('Payment Terms is required').positive('Payment Terms must be positive'),
    }).required('Payment Information is required'),
    deliveryReceivingPerson: yup.string().matches(REGEX.IS_STRING, "Please enter a valid name").required('Delivery Receiving Person is required'),
})