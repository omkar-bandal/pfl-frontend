import { RFPA_Items, Payment_Info, PostRFPA } from "@prime-fresh/purchase_api";

export const initValRFPAItems: RFPA_Items = {
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
}
const initValPaymentInfo: Payment_Info = {
    paymentMode: null,
    paymentDate: null,
    paymentTerms: 0,
    dueDate: null,
    advancePaidAmt: 0,
    creditPeriod: 0,
    validityofQuote: null,
}
export const initValRFPA: PostRFPA= {
    companyName: null,
    purchaseLocation: null,
    otherPurchaseLoc: null,
    purchaseForSalesLocation: null,
    otherPurchaseForSalesLoc: null,
    specialReq: null,
    source: "vendor",
    selectedParty: null,
    rfpaProducts: [initValRFPAItems],
    paymentInfo: initValPaymentInfo,
    deliveryReceivingPerson: null,
    validityOfQuote: null,
    packingInstruction: null,
    remark: null,
}