"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealSlipSchema = void 0;
const Yup = require("yup");
exports.dealSlipSchema = Yup.object().shape({
    loadingLocation: Yup.string().required('Loading location is required.'),
    lotNo: Yup.string().required('Lot number is required.')
});
//# sourceMappingURL=deal-slip.schema.js.map