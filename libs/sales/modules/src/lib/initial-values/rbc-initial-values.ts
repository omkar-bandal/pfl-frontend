import { PostReturnByCustomer, ReturnedProducts } from "@prime-fresh/sales_api"

export const returnedProductsInitialValues: ReturnedProducts = {
    productName: "",
    quantity: 0,
    uom: "",
    unitPrice: 0
}
export const rbcInitialValues: PostReturnByCustomer = {
    proformaInvNo: "",
    companyName: "",
    date: "",
    returnedProducts: [returnedProductsInitialValues],
    gst: 0,
    taxAmt: 0,
    totalAmt: 0,
    amtInWords: "",
    remark: "",
}