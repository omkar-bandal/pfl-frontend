"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportPaymentVoucherSchema = void 0;
const yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.transportPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    driverName: yup.string().required('Driver name is required').matches(modules_1.REGEX.IS_STRING, 'Name should only contain alphabets'),
    contactNo: yup.string().required('Contact number is required').matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    altContactNo: yup.string().nullable().matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    vehicleNo: yup.string().required('Vehicle number is required'),
    dispatchLocation: yup.string().required('Dispatch location is required'),
    destinationLocation: yup.string().required('Destination location is required'),
    paymentMode: yup.string().required('Payment mode is required'),
    totalAmt: yup.number().required('Total amount is required.').min(0, 'Amount cannot be negative.'),
    receiverName: yup.string().required('Receiver name is required').matches(modules_1.REGEX.IS_STRING, 'Name should only contain alphabets'),
});
//# sourceMappingURL=transport-payment-voucher.schema.js.map