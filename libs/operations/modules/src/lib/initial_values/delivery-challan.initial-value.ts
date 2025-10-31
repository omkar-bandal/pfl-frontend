import {
  IDeliveryChallanBase,
  IDeliveryChallanProduct,
  IDeliveryChallanTypeCustomer,
  IDeliveryChallanTypeStockTransfer,
} from '@prime-fresh/services';

export const dcProductsInitialValues: IDeliveryChallanProduct = {
  productName: null,
  variant: null,
  // count: null,
  // size: null,
  // origin: null,
  // variety: null,
  uom: null,
  packagingMaterial: null,
  packagingMaterialUoM: null,
  packagingMaterialQuantity: 0,
  packagingMaterialUnitPrice: 0,
  packagingMaterialAmount: 0,
  packagingMaterialTotalWeight: 0,
  saleUoM: null,
  quantity: 0,
  unitPrice: 0,
  amount: 0,
  grossWeight: 0,
  packingMaterialWeight: 0,
  netWeight: 0,
};

export const dcBaseInitialValue: IDeliveryChallanBase = {
  transitInsuranceNo: null,
  grnNo: null,
  companyName: null,
  deliveryChallanProducts: [dcProductsInitialValues],
  netProductWeight: null,
  netPackagingMaterialWeight: null,
  totalPackagingMaterialAmount: null,
  totalProductAmount: null,
  totalAmtInWords: null,
  driverName: null,
  licenseNo: null,
  contactNo: null,
  altContactNo: null,
  vehicleNo: null,
  receiverName: null,
  remark: null,
  rmn: null,
  anyAttachment: null,
};

export const dcTypeCustomerInitialValue: IDeliveryChallanTypeCustomer = {
  ...dcBaseInitialValue,
  poNumber: null,
  customerName: null,
  fromLocation: null,
};

export const dcTypeStockTransferInitialValue: IDeliveryChallanTypeStockTransfer = {
  ...dcBaseInitialValue,
  stockTransferType: 'from-cc-to-dc',
  fromLocation: null,
  toLocation: null,
};
