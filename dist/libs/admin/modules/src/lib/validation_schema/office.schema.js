"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.officeValidationSchema = void 0;
const Yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.officeValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Office name is required'),
    address: modules_1.addressSchema,
    cFirstName: Yup.string()
        .nullable().
        matches(modules_1.REGEX.IS_STRING, 'Name should only contains alphabets.'),
    cMiddleName: Yup.string()
        .nullable().
        matches(modules_1.REGEX.IS_STRING, 'Name should only contains alphabets.'),
    cLastName: Yup.string()
        .nullable().
        matches(modules_1.REGEX.IS_STRING, 'Name should only contains alphabets.'),
    contactNumber: Yup.string()
        .nullable()
        .matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    officeEmail: Yup.string()
        .nullable()
        .matches(modules_1.REGEX.IS_EMAIL, 'Please enter valid email.'),
    notes: Yup.string()
        .nullable(),
});
//# sourceMappingURL=office.schema.js.map