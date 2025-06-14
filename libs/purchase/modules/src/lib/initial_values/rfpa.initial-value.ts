import { IRFPA, IRFPAProducts, IPaymentInfo } from "@prime-fresh/purchase_api";

export const rfpaProductsInitialValue: IRFPAProducts = {
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
}
export const paymentInfoInitialValue: IPaymentInfo = {
    paymentMode: null,
    paymentDate: null,
    paymentTerms: null,
    dueDate: null,
    advancePaidAmt: null,
    creditPeriod: null,
    validityofQuote: null,
}
export const rfpaInitialvalue: Omit<IRFPA, 'id'> = {
    companyName: null,
    purchaseLocation: null,
    otherPurchaseLoc: null,
    purchaseForSalesLocation: null,
    otherPurchaseForSalesLoc: null,
    specialReq: null,
    source: "vendor",
    selectedParty: null,
    rfpaProducts: [rfpaProductsInitialValue],
    paymentInfo: paymentInfoInitialValue,
    deliveryReceivingPerson: null,
    validityOfQuote: null,
    packingInstruction: null,
    remark: null,
}