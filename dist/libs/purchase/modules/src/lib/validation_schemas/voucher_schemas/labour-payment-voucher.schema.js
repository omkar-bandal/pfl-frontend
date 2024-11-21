"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labourPaymentVoucherSchema = void 0;
const yup = require("yup");
const contactNo_schema_1 = require("../contactNo.schema");
exports.labourPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    noOfLabours: yup.number().required('Number of labour is required').positive('Number of labours cannot be negative'),
    ratePerLabour: yup.number().required('Rate is required').positive('Rate cannot be negative'),
    loadingDate: yup.date().required('Loading date is required'),
    workLocation: yup.string().required('Location of work is required'),
    contactNo: contactNo_schema_1.contactNoSchema,
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
});
//# sourceMappingURL=labour-payment-voucher.schema.js.map