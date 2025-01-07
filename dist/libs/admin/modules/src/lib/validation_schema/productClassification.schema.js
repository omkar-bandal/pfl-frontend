"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productClassificationSchema = void 0;
const yup = require("yup");
exports.productClassificationSchema = yup.object().shape({
    name: yup.string().required('Product classification name is required.')
});
//# sourceMappingURL=productClassification.schema.js.map