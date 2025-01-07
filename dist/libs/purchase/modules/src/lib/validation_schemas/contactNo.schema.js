"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactNoSchema = void 0;
const yup = require("yup");
const contactNoRegex = /^[6-9]\d{9}$/; // Matches Indian mobile numbers
exports.contactNoSchema = yup.string()
    .matches(contactNoRegex, 'Please enter a valid 10-digit contact number')
    .required('Contact number is required');
//# sourceMappingURL=contactNo.schema.js.map