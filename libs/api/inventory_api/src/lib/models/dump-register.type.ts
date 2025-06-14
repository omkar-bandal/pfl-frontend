import { FormProductQtyAmt, FormProducts, FormProductUoM } from '@prime-fresh/common_api';

export interface IDumpProducts extends FormProducts, FormProductUoM, FormProductQtyAmt {
  id?: string;
}
export interface IDumpRegister {
  id: string;
  companyName: string | null;
  location: string | null;
  date: string | null;
  batchNo: string | null;
  grn: string | null;
  dumpProducts: IDumpProducts[];
  totalDumpCost: number | null;
  totalCostInWords: string | null;
  remark: string | null;
}
