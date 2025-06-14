import { PostEODProducts, PostEODReport } from "@prime-fresh/inventory_api";

export const eodReportProductsInitialValue: PostEODProducts = {
    sku: null,
    uom: null,
    qty: 0,
    totalWeightinKg: 0
}

export const eodReportInitialValue: PostEODReport = {
    companyName: null,
    location: null,
    stockDate: null,
    eodProducts: [eodReportProductsInitialValue],
    submission: null,
    comments: null
}