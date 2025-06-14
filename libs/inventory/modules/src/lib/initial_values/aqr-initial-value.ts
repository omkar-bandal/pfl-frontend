import { PostAQR, AQRParameters } from "@prime-fresh/inventory_api";

export const AQRQualityParams: AQRParameters = {
  qualityParameterId: '',
  qualityParameterType: null,
  qualityParameterName: '',
  quantity: null,
  percentage: 0,
}

export const AQRinitalValues: PostAQR = {
  dcNo: '',
  dcDate: '',
  arrivedQty: null,
  samplingQty: null,
  purchaseBy: '',
  packBy: '',
  receivedBy: '',
  qcCheckBy: '',
  verifiedBy: '',
  totalQty: 0,
  totalpercent: 0,
  supplierName: '',
  arrivalDate: '',
  supplierLocation: '',
  remark: '',
  product: '',
  parameters: [AQRQualityParams]
}