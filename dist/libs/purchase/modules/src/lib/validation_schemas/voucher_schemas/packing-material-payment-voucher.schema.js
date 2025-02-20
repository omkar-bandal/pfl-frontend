"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packingMaterialPaymentVoucherSchema = void 0;
const modules_1 = require("@prime-fresh/shared/modules");
const yup = require("yup");
exports.packingMaterialPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    sellerName: yup.string().required('Seller name is required').matches(modules_1.REGEX.IS_STRING, "Name should only contains alphabets."),
    address: modules_1.addressSchema,
    contactNo: yup.string().required("Contact number is required.").matches(modules_1.REGEX.CONTACT_NO, "Please enter valid contact number."),
    altContactNo: yup.string().nullable().matches(modules_1.REGEX.CONTACT_NO, "Please enter valid contact number."),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
    materials: yup.array().of(yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        itemUom: yup.string().required('UOM is required'),
        itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    }))
});
//# sourceMappingURL=packing-material-payment-voucher.schema.js.map