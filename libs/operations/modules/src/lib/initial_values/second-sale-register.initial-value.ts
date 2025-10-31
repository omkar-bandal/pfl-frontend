import { ISecondSaleProducts, ISecondSaleRegister } from '@prime-fresh/services';

export const SecondSaleProductsInitialValue: ISecondSaleProducts = {
  productName: null,
  count: null,
  size: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null,
  grossWeight: null,
  packingMaterialWeight: null,
  netWeight: null,
};

export const SecondSaleRegisterInitialValue: Omit<ISecondSaleRegister, 'id'> = {
  companyName: null,
  location: null,
  dcNo: null,
  saleDate: null,
  buyerName: null,
  buyerMobNo: null,
  reasonForSale: null,
  approvedBy: null,
  soldBy: null,
  secondSaleProducts: [SecondSaleProductsInitialValue],
  totalNetWeight: null,
  totalAmt: null,
  totalAmtInWords: null,
  paidAmount: null,
  paymentMode: null,
  pendingAmt: null,
  remarks: null,
  comments: null,
  submittedBy: null,
  mobileNo: null,
};
