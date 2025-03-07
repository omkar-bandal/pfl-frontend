"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSubcategorySchema = void 0;
const yup = require("yup");
exports.productSubcategorySchema = yup.object().shape({
    name: yup.string().required('Product subcategory name is required'),
    category: yup.string().required('Related product category name is required'),
});
//# sourceMappingURL=productSubcategory.schema.js.map