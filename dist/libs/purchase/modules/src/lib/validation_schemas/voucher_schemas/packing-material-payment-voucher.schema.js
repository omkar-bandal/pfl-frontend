"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packingMaterialPaymentVoucherSchema = void 0;
const yup = require("yup");
const contactNo_schema_1 = require("../contactNo.schema");
const address_schema_1 = require("../address.schema");
exports.packingMaterialPaymentVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    sellerName: yup.string().required('Seller name is required'),
    address: address_schema_1.addressSchema,
    contactNo: contactNo_schema_1.contactNoSchema,
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
    materials: yup.array().of(yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        uom: yup.string().required('UOM is required'),
        itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    }))
});
//# sourceMappingURL=packing-material-payment-voucher.schema.js.map