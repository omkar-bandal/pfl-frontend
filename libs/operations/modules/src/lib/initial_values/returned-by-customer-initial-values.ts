import { IReturnByCustomer, IReturnedProducts } from '@prime-fresh/services';

export const returnedProductsInitialValues: IReturnedProducts = {
  productName: null,
  origin: null,
  variety: null,
  count: null,
  size: null,
  saleUoM: null,
  unitPrice: null,
  //Returned Product Details
  // returnedUoM: null,
  returnedQty: null,
  // returnedUnitPrice: null,
  returnedQtyAmt: null,
  returnedPackingMaterialWt: null,
  returnedGrossWt: null,
  returnedNetWt: null,
  //Rejected Product Details
  // rejectedUoM: null,
  rejectedQty: null,
  // rejectedUnitPrice: null,
  rejectedQtyAmt: null,
  rejectedPackingMaterialWt: null,
  rejectedGrossWt: null,
  rejectedNetWt: null,
};

export const returnedByCustomerInitialValues: Omit<IReturnByCustomer, 'id'> = {
  deliveryChallanNo: null,
  companyName: null,
  location: null,
  customerName: null,
  date: null,
  returnedProducts: [returnedProductsInitialValues],
  remark: null,
};
