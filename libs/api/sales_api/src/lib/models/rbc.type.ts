export type ReturnedProducts = {
    productName: string,
    quantity: number,
    uom: string,
    unitPrice: number
}

export type PostReturnByCustomer = {
    proformaInvNo: string,
    companyName: string,
    date: string,
    returnedProducts: ReturnedProducts[],
    gst: number,
    taxAmt: number,
    totalAmt: number,
    amtInWords: string,
    remark: string,
}

export type GetReturnByCustomer = {id: string} & PostReturnByCustomer;