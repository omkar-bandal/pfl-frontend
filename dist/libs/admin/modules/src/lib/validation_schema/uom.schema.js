"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uomSchema = void 0;
const yup = require("yup");
exports.uomSchema = yup.object().shape({
    unit: yup.string().required('UOM name is required'),
    abbreviation: yup.string().required('Abbreviation of UOM is required')
});
//# sourceMappingURL=uom.schema.js.map