import { RFPA_Items, Payment_Info, PostRFPA } from "@prime-fresh/purchase_api";

export const initValRFPAItems: RFPA_Items = {
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
}
const initValPaymentInfo: Payment_Info = {
    paymentMode: null,
    paymentDate: null,
    paymentTerms: null,
    dueDate: null,
    advancePaidAmt: null,
    creditPeriod: null,
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