"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealSlipSchema = void 0;
const Yup = require("yup");
exports.dealSlipSchema = Yup.object().shape({
    location: Yup.string().required('Location is required.'),
    loadingLoctn: Yup.string().required('Loading location is required.')
});
//# sourceMappingURL=deal-slip.schema.js.map