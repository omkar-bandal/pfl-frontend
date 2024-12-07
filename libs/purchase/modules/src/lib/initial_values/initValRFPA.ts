import { RFPA_Items, Payment_Info } from "@prime-fresh/purchase_api";

export const initValRFPAItems: RFPA_Items = {
    product: '',
    grade: '',
    quantity: 0,
    uom: '',
    unitPrice: 0,
    totalVal: 0,
    description: '',
    deliveryLocation: '',
    purchaseDate: '',
    dispatchDate: '',
    deliveryDate: '',
    expectedHarvestDate: '',
}
const initValPaymentInfo: Payment_Info = {
    paymentMode: '',
    paymentDate: '',
    paymentTerms: 0,
    dueDate: '',
    advancePaidAmt: 0,
    creditPeriod: 0,
    validityofQuote: '',
}
export const initValRFPA= {
    companyName: '',
    purchaseLocation: '',
    purchaseForWhich: '',
    specialReq: '',
    source: 'vendor',
    selectedParty: '',
    rfpaProducts: [initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: '',
    validityOfQuote: '',
    packingInstruction: '',
    remark: '',
}