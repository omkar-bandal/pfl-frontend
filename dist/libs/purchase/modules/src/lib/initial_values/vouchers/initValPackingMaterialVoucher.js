"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValPackingMaterialVoucher = exports.initValPackingMaterials = void 0;
const initValAddress_1 = require("../initValAddress");
exports.initValPackingMaterials = {
    itemName: "",
    itemQty: 0,
    itemUom: "",
    rate: 0,
    amt: 0,
};
exports.initValPackingMaterialVoucher = {
    grnNo: "",
    companyName: '',
    debitCreditTo: "",
    payReceivedFrom: "",
    location: "",
    sellerName: "",
    address: initValAddress_1.initValAddress,
    contactNo: "",
    altContactNo: "",
    purpose: "",
    materials: [exports.initValPackingMaterials],
    paymentMode: "",
    totalAmt: 0,
    amtWords: "",
    receiverName: "",
    kyc: false,
    remark: "",
    anyAttachment: null,
};
//# sourceMappingURL=initValPackingMaterialVoucher.js.map