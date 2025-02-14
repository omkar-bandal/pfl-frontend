"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerValidationSchema = void 0;
const Yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required').min(3, 'Minimum 3 characters required.'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required').min(3, 'Minimum 3 characters required.'),
    residensialAddress: modules_1.addressSchema,
    farmAddress: modules_1.addressSchema,
    primaryMobileNo: Yup.string().required('Contact No is required'),
});
//# sourceMappingURL=farmer.schema.js.map