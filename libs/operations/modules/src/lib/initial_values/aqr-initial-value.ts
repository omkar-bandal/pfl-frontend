import { IAQR, AQRParameters } from '@prime-fresh/services';

export const AQRQualityParams: AQRParameters = {
  qualityParameterId: '',
  qualityParameterType: null,
  qualityParameterName: '',
  quantity: null,
  percentage: 0,
};

export const AQRinitalValues: Omit<IAQR, 'id'> = {
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
  parameters: [AQRQualityParams],
};
