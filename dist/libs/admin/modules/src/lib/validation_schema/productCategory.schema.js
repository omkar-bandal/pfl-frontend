"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategorySchema = void 0;
const yup = require("yup");
exports.productCategorySchema = yup.object().shape({
    name: yup.string().required('Product category name is required'),
    productClassification: yup.string().required('Related product classification name is required'),
});
//# sourceMappingURL=productCategory.schema.js.map