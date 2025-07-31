"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchValidationSchema = void 0;
const Yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.branchValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Office name is required'),
    prefix: Yup.string()
        .required("Prefix is required for creating GRN numbers. Please enter."),
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
    totalCapacity: Yup.number()
        .min(0, 'Capacity must be 0 or greater'),
    currentCapacity: Yup.number()
        .min(0, 'Capacity must be 0 or greater'),
    balanceCapacity: Yup.number()
        .min(0, 'Capacity must be 0 or greater'),
    notes: Yup.string().nullable(),
});
//# sourceMappingURL=branch.schema.js.map