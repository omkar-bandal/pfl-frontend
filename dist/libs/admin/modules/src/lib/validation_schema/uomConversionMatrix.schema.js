"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uomConversionMatrixSchema = void 0;
const yup = require("yup");
exports.uomConversionMatrixSchema = yup.object().shape({
    conversionFactor: yup.number().required('Conversion factor is required').positive('Conversion factor cannot be negative.'),
    fromUOM: yup.string().required('UOM name is required'),
    toUOM: yup.string().required('UOM name is required')
});
//# sourceMappingURL=uomConversionMatrix.schema.js.map