import { IDumpProducts, IDumpRegister } from '@prime-fresh/services';

export const dumpProductsInitialValue: IDumpProducts = {
  productName: null,
  variant: null,
  uom: null,
  quantity: null,
  unitPrice: null,
  amount: null,
};

export const dumpRegisterInitialValue: Omit<IDumpRegister, 'id'> = {
  companyName: null,
  location: null,
  date: null,
  batchNo: null,
  grn: null,
  dumpProducts: [dumpProductsInitialValue],
  totalDumpCost: null,
  totalCostInWords: null,
  remark: null,
};
