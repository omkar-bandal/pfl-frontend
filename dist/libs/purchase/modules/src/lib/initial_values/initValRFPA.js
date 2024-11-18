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
    paymentDate: '',
    paymentTerms: 0,
    dueDate: '',
    advancePaidAmt: 0,
    creditPeriod: 0,
    validityofQuote: '',
};
exports.initValRFPA = {
    companyName: '',
    purchaseLocation: '',
    purchaseForWhich: '',
    specialReq: '',
    source: 'vendor',
    selectedParty: '',
    rfpaProducts: [exports.initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: '',
    validityOfQuote: '',
    packingInstruction: '',
    remark: '',
};
//# sourceMappingURL=initValRFPA.js.map