import { PostSecondSaleProducts, PostSecondSaleRegister } from "@prime-fresh/inventory_api";

export const SecondSaleProductsInitialValue: PostSecondSaleProducts = {
    product: "string",
    uom: "string",
    qty: 0,
    rate: 0,
    amount: 0,
}

export const SecondSaleRegisterInitialValue: PostSecondSaleRegister = {
    location: "",
    dcNo: "",
    saleDate: "",
    buyerName: "",
    buyerMobNo: "",
    reasonForSale: "",
    approvedBy: "",
    soldBy: "",
    secondSaleProducts: [SecondSaleProductsInitialValue],
    paidAmount: "",
    paymentMode: "",
    pendingAmt: "",
    remarks: "",
    comments: "",
    submittedBy: "",
    mobileNo: "",
}