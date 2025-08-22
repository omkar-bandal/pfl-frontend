import {
  ApprovalSummany,
  DocumentStatus,
} from '@prime-fresh/common_api';

export interface IReturnedProducts {
  id?: string;
  productName: string | null,
  origin: string | null,
  variety: string | null,
  count: string | null,
  size: string | null,
  saleUoM: string | null;
  unitPrice: number | null,
  //Returned Product Details
  // returnedUoM: string | null;
  returnedQty: number | null,
  // returnedUnitPrice: number | null,
  returnedQtyAmt: number | null,
  returnedPackingMaterialWt: number | null;
  returnedGrossWt: number | null;
  returnedNetWt: number | null;
  //Rejected Product Details
  // rejectedUoM: string | null;
  rejectedQty: number | null,
  // rejectedUnitPrice: number | null,
  rejectedQtyAmt: number | null,
  rejectedPackingMaterialWt: number | null;
  rejectedGrossWt: number | null;
  rejectedNetWt: number | null;
}

export type IReturnByCustomer = {
  id: string;
  documentId?: string | null;
  documentDef?: string | null;
  createdBy?: string | null;
  createdDate?: string,
  createdTime?: string,
  deliveryChallanNo: string | null;
  companyName: string | null;
  location: string | null;
  customerName: string | null;
  date: string | null;
  returnedProducts: IReturnedProducts[];
  remark: string | null;
  overAllStatus?: DocumentStatus;
  approvalSummary?: ApprovalSummany;
};

