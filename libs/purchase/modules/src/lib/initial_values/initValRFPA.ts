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
    purchaseDate: new Date(2024, 11, 11),
    dispatchDate: new Date(2024, 11, 11),
    deliveryDate: new Date(2024, 11, 11),
    expectedHarvestDate: new Date(2024, 11, 11),
}
const initValPaymentInfo: Payment_Info = {
    paymentMode: '',
    paymentDate: new Date(),
    dueDate: new Date(),
    advancePaidAmt: 0,
    paymentTerms: '',
}
export const initValRFPA= {
    companyName: '',
    purchaseLocation: '',
    purchaseForWhich: '',
    specialReq: '',
    source: '',
    selectedParty: '',
    rfpaProducts: [initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: '',
    validityOfQuote: '',
    packingInstruction: '',
}