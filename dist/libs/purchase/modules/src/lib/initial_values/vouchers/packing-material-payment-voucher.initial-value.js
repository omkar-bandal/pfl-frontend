"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packingMaterialVoucherInitialValue = exports.packingMaterialsInitialValue = void 0;
const initValAddress_1 = require("../initValAddress");
exports.packingMaterialsInitialValue = {
    itemName: null,
    itemQty: null,
    itemUom: null,
    rate: null,
    amt: 0,
};
exports.packingMaterialVoucherInitialValue = {
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
    materials: [exports.packingMaterialsInitialValue],
    paymentMode: null,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    kyc: false,
    remark: null,
    anyAttachment: null,
};
//# sourceMappingURL=packing-material-payment-voucher.initial-value.js.map