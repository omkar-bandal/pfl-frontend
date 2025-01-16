import { Address } from "@prime-fresh/admin_api";

export type SaleOrderProducts = {
    productName: string,
    quantity: number,
    pricePerUnit: number,
    uom: string,
}

export type BillDetails = {
    name: string,
    address: Address,
    gstn: string,
    contactNo: string
}

export type PostSalesOrder = {
    companyName: string,
    billFrom: BillDetails,
    shippedFrom: BillDetails,
    billTo: BillDetails,
    shippedTo: BillDetails,
    poNumber: string,
    poDate: string,
    expectedDeliveryDate: string,
    saleProducts: SaleOrderProducts[],
    gst: number,
    taxAmount: number,
    totalDeduction: number,
    labourCharges: number,
    transportationCharges: number,
    otherCharges: number,
    totalAmount: number,
    grandTotalAmount: number
    amountInWords: string,
    vehicleNo: string,
    remark: string,
}

export type GetSalesOrder = { id: string } & PostSalesOrder;