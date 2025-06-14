import { PostReturnByCustomer, ReturnedProducts } from '@prime-fresh/sales_api';

export const returnedProductsInitialValues: ReturnedProducts = {
  productName: null,
  count: null,
  size: null,
  origin: null,
  variety: null,
  saleUoM: null,
  returnedUOM: null,
  quantity: 0,
  unitPrice: 0,
  amount: 0,
  grossWeight: 0,
  packingMaterialWeight: 0,
  netWeight: 0,
};
export const returnedByCustomerInitialValues: PostReturnByCustomer = {
  proformaInvNo: null,
  deliveryChallanNo: null,
  companyName: null,
  date: null,
  returnedProducts: [returnedProductsInitialValues],
  remark: null,
};
