"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValPackingMaterialVoucher = exports.initValPackingMaterials = void 0;
const initValAddress_1 = require("../initValAddress");
exports.initValPackingMaterials = {
    itemName: null,
    itemQty: null,
    itemUom: null,
    rate: null,
    amt: 0,
};
exports.initValPackingMaterialVoucher = {
    grnNo: null,
    companyName: null,
    debitCreditTo: null,
    payReceivedFrom: null,
    location: null,
    sellerName: null,
    address: initValAddress_1.initValAddress,
    contactNo: null,
    altContactNo: null,
    purpose: null,
    materials: [exports.initValPackingMaterials],
    paymentMode: null,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    kyc: false,
    remark: null,
    anyAttachment: null,
};
//# sourceMappingURL=initValPackingMaterialVoucher.js.map