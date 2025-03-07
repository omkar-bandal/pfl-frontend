"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValRFPA = exports.initValRFPAItems = void 0;
exports.initValRFPAItems = {
    product: null,
    grade: null,
    quantity: null,
    uom: null,
    unitPrice: null,
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
    paymentTerms: null,
    dueDate: null,
    advancePaidAmt: null,
    creditPeriod: null,
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