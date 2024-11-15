"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValRFPA = exports.initValRFPAItems = void 0;
exports.initValRFPAItems = {
    product: '',
    grade: '',
    quantity: 0,
    uom: '',
    unitPrice: 0,
    totalVal: 0,
    description: '',
    deliveryLocation: '',
    purchaseDate: new Date(2024, 11, 11),
    dispatchDate: new Date(2024, 11, 11),
    deliveryDate: new Date(2024, 11, 11),
    expectedHarvestDate: new Date(2024, 11, 11),
};
const initValPaymentInfo = {
    paymentMode: '',
    paymentDate: new Date(),
    dueDate: new Date(),
    advancePaidAmt: 0,
    paymentTerms: '',
};
exports.initValRFPA = {
    companyName: '',
    purchaseLocation: '',
    purchaseForWhich: '',
    specialReq: '',
    source: '',
    selectedParty: '',
    rfpaProducts: [exports.initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: '',
    validityOfQuote: '',
    packingInstruction: '',
};
//# sourceMappingURL=initValRFPA.js.map