"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labourPaymentVoucherSchema = void 0;
const yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.labourPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    noOfLabours: yup.number().required('Number of labour is required').positive('Number of labours cannot be negative'),
    ratePerLabour: yup.number().required('Rate is required').positive('Rate cannot be negative'),
    loadingDate: yup.string().required('Loading date is required'),
    contactNo: yup.string().required('Contact number is required.').matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    altContactNo: yup.string().nullable().matches(modules_1.REGEX.IS_NUMBER, "Please enter valid contact number."),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required').matches(modules_1.REGEX.IS_STRING, "Name should only contains alphabets."),
});
//# sourceMappingURL=labour-payment-voucher.schema.js.map