import { PostAQR, AQRParameters } from "@prime-fresh/inventory_api";

export const AQRQualityParams: AQRParameters = {
  qualityParameterId: '',
  qualityParameterType: null,
  qualityParameterName: '',
  quantity: null,
  percentage: 0,
}

export const AQRinitalValues: PostAQR = {
  dcNo: null,
  dcDate: null,
  arrivedQty: null,
  samplingQty: null,
  purchaseBy: null,
  packBy: null,
  receivedBy: null,
  qcCheckBy: null,
  verifiedBy: null,
  totalQty: 0,
  totalpercent: 0,
  supplierName: null,
  arrivalDate: null,
  supplierLocation: null,
  remark: null,
  product: null,
  parameters: [AQRQualityParams]
}