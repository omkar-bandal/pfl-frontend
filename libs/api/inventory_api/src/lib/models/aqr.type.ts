export type AQRParameters = {
    qualityParameterId: string,
    qualityParameterName: string,
    qualityParameterType: "good" | "bad" | "average" | null,
    quantity: number | null,
    percentage: number,
}

export type PostAQR = {
    dcNo: string | null,
    dcDate: string | null,
    arrivedQty: number | null,
    samplingQty: number | null,
    purchaseBy: string | null,
    packBy: string | null,
    receivedBy: string | null,
    qcCheckBy: string | null,
    verifiedBy: string | null,
    totalQty: number,
    totalpercent: number,
    supplierName: string | null,
    arrivalDate: string | null,
    supplierLocation: string | null,
    remark: string | null,
    product: string | null,
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