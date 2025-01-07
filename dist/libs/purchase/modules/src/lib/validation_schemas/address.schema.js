"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressSchema = void 0;
const yup = require("yup");
exports.addressSchema = yup.object().shape({
    address1: yup.string().required('Address Line 1 is required'),
    address2: yup.string(),
    location: yup.string().required('Location is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    pincode: yup.string().required('Pincode is required').matches(/^\d{6}$/, 'Pincode must be exactly 6 digits'),
});
//# sourceMappingURL=address.schema.js.map