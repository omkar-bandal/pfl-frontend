"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfpaSchema = void 0;
const yup = require("yup");
exports.rfpaSchema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    purchaseLocation: yup.string().required('Purchase Location is required'),
    purchaseForWhich: yup.string().required('Purchase For Which is required'),
    selectedParty: yup.string().required('Please select one option'),
    // rfpaProducts: yup.array().of(
    //     yup.object().shape({
    //         product: yup.string().required('Product is required'),
    //         grade: yup.string().required('Grade is required'),
    //         quantity: yup.number().required('Quantity is required').positive('Quantity must be positive'),
    //         unitPrice: yup.number().required('Unit Price is required').positive('Unit Price must be positive'),
    //         purchaseDate: yup.date().required('Purchase Date is required'),
    //         dispatchDate: yup.date().required('Dispatch Date is required'),
    //         deliveryDate: yup.date().required('Delivery Date is required'),
    //         deliveryLocation: yup.string().required('Delivery Location is required'),
    //         expectedHarvestDate: yup.date().nullable(), // Optional field
    //     })
    // ).required('RFPA Products are required'),
    paymentInfo: yup.object().shape({
        paymentMode: yup.string().required('Payment Mode is required'),
        creditPeriod: yup.number().required('Credit Period is required').positive('Credit Period must be positive'),
        paymentDate: yup.date().required('Payment Date is required'),
        paymentTerms: yup.number().required('Payment Terms is required').positive('Payment Terms must be positive'),
    }).required('Payment Information is required'),
    deliveryReceivingPerson: yup.string().required('Delivery Receiving Person is required'),
});
//# sourceMappingURL=rfpa.schema.js.map