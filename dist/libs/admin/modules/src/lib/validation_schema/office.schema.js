"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeValidationSchema = void 0;
const Yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.officeValidationSchema = Yup.object().shape({
    name: Yup.string().required('Office name is required'),
    address: modules_1.addressSchema,
    contactNumber: Yup.string().required('Contact number is required'),
    officeEmail: Yup.string()
        .required('Office email is required')
        .email('Invalid email format'),
    notes: Yup.string().optional(),
});
//# sourceMappingURL=office.schema.js.map