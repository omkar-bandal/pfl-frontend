/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApprovalSummany, DocumentStatus, FormProductQtyAmt, FormProducts, FormProductUoM, FormProductWeight } from '../../shared';

export interface IInwardProducts extends FormProducts,
  FormProductUoM,
  FormProductQtyAmt,
  FormProductWeight { weight: number | null };

export interface IInwardRegister {
  id: string;
  documentId?: string | null;
  documentDef?: string | null;
  createdBy?: string | null;
  createdDate?: string,
  createdTime?: string,
  inwardType: 'purchase' | 'transferred';
  grnNo: string | null;
  deliveryChallanNo: string | null;
  companyName: string | null;
  location: string | null;
  date: string | null;
  batchNo: string | null;
  selectedParty: any | null;
  inwardProducts: IInwardProducts[];
  source: 'vendor' | 'farmer';
  purchasedBy: string | null;
  totalWeightInKg: number | null;
  purchasedQty: number | null;
  inwardQtyInKg: number | null;
  inwardCost: number | null;
  remarks: string | null;
  inwardBy: string | null;
  overAllStatus?: DocumentStatus;
  approvalSummary?: ApprovalSummany;
}