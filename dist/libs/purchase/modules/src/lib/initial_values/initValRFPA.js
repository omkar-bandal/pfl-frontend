"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValRFPA = exports.initValRFPAItems = void 0;
exports.initValRFPAItems = {
    product: null,
    grade: null,
    quantity: 0,
    uom: null,
    unitPrice: 0,
    totalVal: 0,
    description: null,
    deliveryLocation: null,
    purchaseDate: null,
    dispatchDate: null,
    deliveryDate: null,
    expectedHarvestDate: null,
};
const initValPaymentInfo = {
    paymentMode: null,
    paymentDate: null,
    paymentTerms: 0,
    dueDate: null,
    advancePaidAmt: 0,
    creditPeriod: 0,
    validityofQuote: null,
};
exports.initValRFPA = {
    companyName: null,
    purchaseLocation: null,
    otherPurchaseLoc: null,
    purchaseForSalesLocation: null,
    otherPurchaseForSalesLoc: null,
    specialReq: null,
    source: "vendor",
    selectedParty: null,
    rfpaProducts: [exports.initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: null,
    validityOfQuote: null,
    packingInstruction: null,
    remark: null,
};
//# sourceMappingURL=initValRFPA.js.map