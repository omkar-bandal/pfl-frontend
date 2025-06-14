export type PostEODProducts = {
    sku: string | null,
    uom: string | null,
    qty: number| null,
    totalWeightinKg: number| null,
}

export type GetEODProducts = {id: string} & PostEODProducts;

export type PostEODReport = {
    companyName: string | null,
    location: string | null,
    stockDate: string | null,
    eodProducts: PostEODProducts[],
    submission: string | null,
    comments: string | null,
}

export type GetEODReport = {id: string} & PostEODReport;
