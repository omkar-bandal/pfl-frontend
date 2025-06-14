import { PostSecondSaleProducts, PostSecondSaleRegister } from "@prime-fresh/inventory_api";

export const SecondSaleProductsInitialValue: PostSecondSaleProducts = {
    productName: null,
    count: null,
    size: null,
    uom: null,
    quantity: null,
    unitPrice: null,
    amount: null,
    grossWeight: null,
    packingMaterialWeight: null,
    netWeight: null,
}

export const SecondSaleRegisterInitialValue: PostSecondSaleRegister = {
    companyName: null,
    location: null,
    dcNo: null,
    saleDate: null,
    buyerName: null,
    buyerMobNo: null,
    reasonForSale: null,
    approvedBy: null,
    soldBy: null,
    secondSaleProducts: [SecondSaleProductsInitialValue],
    totalNetWeight: null,
    totalAmt: null,
    totalAmtInWords: null,
    paidAmount: null,
    paymentMode: null,
    pendingAmt: null,
    remarks: null,
    comments: null,
    submittedBy: null,
    mobileNo: null,
}