import { PostSalesOrder, BillDetails, SaleOrderProducts } from "@prime-fresh/sales_api";

export const billDetailsInitialValues: BillDetails = {
    name: "",
    address: { address1: "", address2: "", location: "", city: "", state: "", pincode: "" },
    gstn: "",
    contactNo: ""
}

export const salesOrderProductsInitialValues: SaleOrderProducts = {
    productName: "",
    quantity: 0,
    pricePerUnit: 0,
    uom: "",
}

export const salesOrderInitialValues: PostSalesOrder = {
    companyName: "",
    billFrom: billDetailsInitialValues,
    shippedFrom: billDetailsInitialValues,
    billTo: billDetailsInitialValues,
    shippedTo: billDetailsInitialValues,
    poNumber: "",
    poDate: "",
    expectedDeliveryDate: "",
    saleProducts: [salesOrderProductsInitialValues],
    gst: 0,
    taxAmount: 0,
    totalDeduction: 0,
    labourCharges: 0,
    transportationCharges: 0,
    otherCharges: 0,
    totalAmount: 0,
    grandTotalAmount: 0,
    amountInWords: "",
    vehicleNo: "",
    remark: "",
}