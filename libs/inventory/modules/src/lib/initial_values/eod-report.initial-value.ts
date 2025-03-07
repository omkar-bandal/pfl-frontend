import { PostEODProducts, PostEODReport } from "@prime-fresh/inventory_api";

export const eodReportProductsInitialValue: PostEODProducts = {
    sku: '',
    uom: '',
    qty: 0,
    totalWeightinKg: 0
}

export const eodReportInitialValue: PostEODReport = {
    location: '',
    stockDate: '',
    eodProducts: [eodReportProductsInitialValue],
    submission: '',
    comments: ''
}