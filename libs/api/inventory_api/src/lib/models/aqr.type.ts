export type AQRParameters = {
    qualityParameterId: string,
    qualityParameterName: string,
    qualityParameterType: "good" | "bad" | "average" | null,
    quantity: number | null,
    percentage: number,
}

export type PostAQR = {
    dcNo: string,
    dcDate: string,
    arrivedQty: number | null,
    samplingQty: number | null,
    purchaseBy: string,
    packBy: string,
    receivedBy: string,
    qcCheckBy: string,
    verifiedBy: string,
    totalQty: number,
    totalpercent: number,
    supplierName: string,
    arrivalDate: string,
    supplierLocation: string,
    remark: string,
    product: string,
    parameters: AQRParameters[]
}

export type GetAQR = {
    id: string,
    dcNo: string,
    dcDate: string,
    arrivedQty: number,
    samplingQty: number,
    purchaseBy: string,
    packBy: string,
    receivedBy: string,
    qcCheckBy: string,
    verifiedBy: string,
    totalQty: number,
    totalpercent: number,
    supplierName: string,
    arrivalDate: string,
    supplierLocation: string,
    remark: string,
    product: string,
    parameters: AQRParameters[]
}