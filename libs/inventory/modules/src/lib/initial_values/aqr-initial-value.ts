import { PostAQR, AQRParameters } from "@prime-fresh/inventory_api";

export const AQRQualityParams: AQRParameters = {
  qualityParameterId: '',
  qualityParameterType: 'good',
  qualityParameterName: '',
  quantity: 0,
  percentage: 0,
}

export const AQRinitalValues: PostAQR = {
  dcNo: '',
  dcDate: '',
  arrivedQty: 0,
  samplingQty: 0,
  purchaseBy: '',
  packBy: '',
  receivedBy: '',
  qcCheckBy: '',
  varifiedBy: '',
  totalQty: 0,
  totalpercent: 0,
  supplierName: '',
  arrivalDate: '',
  supplierLocation: '',
  remark: '',
  product: '',
  parameters: [AQRQualityParams]
}