import { IEODProducts, IEODReport } from "@prime-fresh/inventory_api";

export const eodReportProductsInitialValue: IEODProducts = {
    sku: null,
    uom: null,
    qty: 0,
    totalWeightinKg: 0
}

export const eodReportInitialValue: Omit<IEODReport, 'id'> = {
    companyName: null,
    location: null,
    stockDate: null,
    eodProducts: [eodReportProductsInitialValue],
    submission: null,
    comments: null
}