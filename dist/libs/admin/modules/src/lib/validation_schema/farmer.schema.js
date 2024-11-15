"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farmerValidationSchema = void 0;
const Yup = require("yup");
const address_schema_1 = require("./address.schema");
exports.farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required'),
    residensialAddress: address_schema_1.addressSchema,
    primaryMobileNo: Yup.string().required('Contact No is required'),
});
//# sourceMappingURL=farmer.schema.js.map