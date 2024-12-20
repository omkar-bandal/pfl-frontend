export type PostEODProducts = {
    sku: string,
    uom: string,
    qty: number,
    totalWeightinKg: number,
}

export type GetEODProducts = {id: string} & PostEODProducts;

export type PostEODReport = {
    location: string,
    stockDate: string,
    eodProducts: PostEODProducts[],
    submission: string,
    comments: string,
}

export type GetEODReport = {id: string} & PostEODReport;
