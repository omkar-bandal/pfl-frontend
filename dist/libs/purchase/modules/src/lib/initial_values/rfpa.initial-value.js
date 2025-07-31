"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rfpaInitialvalue = exports.paymentInfoInitialValue = exports.rfpaProductsInitialValue = void 0;
exports.rfpaProductsInitialValue = {
    productName: null,
    count: null,
    size: null,
    origin: null,
    variety: null,
    grade: null,
    quantity: null,
    uom: null,
    unitPrice: null,
    amount: null,
    deliveryLocation: null,
    purchaseDate: null,
    dispatchDate: null,
    deliveryDate: null,
    expectedHarvestDate: null,
};
exports.paymentInfoInitialValue = {
    paymentMode: null,
    paymentDate: null,
    paymentTerms: null,
    dueDate: null,
    advancePaidAmt: null,
    creditPeriod: 0,
    validityOfQuote: null,
};
exports.rfpaInitialvalue = {
    companyName: null,
    purchaseLocation: null,
    otherPurchaseLoc: null,
    purchaseForSalesLocation: null,
    otherPurchaseForSalesLoc: null,
    specialReq: null,
    source: "vendor",
    selectedParty: null,
    rfpaProducts: [exports.rfpaProductsInitialValue],
    paymentInfo: exports.paymentInfoInitialValue,
    deliveryReceivingPerson: null,
    packingInstruction: null,
    remark: null,
};
//# sourceMappingURL=rfpa.initial-value.js.map