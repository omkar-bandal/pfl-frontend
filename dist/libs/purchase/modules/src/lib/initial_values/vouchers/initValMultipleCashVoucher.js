"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValMMultipleCashVoucher = exports.initValMCVItems = void 0;
exports.initValMCVItems = {
    itemName: "",
    itemQty: 0,
    itemUom: "",
    rate: 0,
    amt: 0,
};
exports.initValMMultipleCashVoucher = {
    grnNo: "",
    companyName: '',
    debitCreditTo: "",
    payReceivedFrom: "",
    location: "",
    mvItems: [exports.initValMCVItems],
    totalAmt: 0,
    amtWords: "",
    paymentMode: "",
    receivedBy: "",
    anyAttachment: null,
};
//# sourceMappingURL=initValMultipleCashVoucher.js.map