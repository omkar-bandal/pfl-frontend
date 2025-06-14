import { RequestedBy } from './requestedBy.interface';
import { FormProductQtyAmt, FormProducts, FormProductUoM, FormProductWeight } from '@prime-fresh/common_api';

export type GRNLocationType = 'cc' | 'dc';

export type GRNType = 'transfer' | 'purchase';

export type GRNPurchaseType = 'fixed price sales' | 'consignment sales/bikri' | 'mgp sales';

export type GRNSourceType = 'vendor' | 'farmer';

export interface IGRNProducts extends FormProducts, FormProductUoM, FormProductQtyAmt, FormProductWeight {
  rtv: boolean;
  revisedRate: number;
  revisedQuantity: number;
  purchaseDate: string | null;
  expectedHarvestDate: string | null;
  dispatchDate: string | null;
  deliveryDate: string | null;
  deliveryLocation: string | null;
}

export interface IGRNPaymentInfo {
  paymentMode: string | null;
  paymentDate: string | null;
  paymentTerms: string | null;
  dueDate: string | null;
  creditPeriod: number | null;
  advancePaidAmt: number | null;
  remainingAmt: number | null;
}
export interface IGRN {
  id: string;
  grnNo?: string | null;
  createdDate?: string | null;
  createdTime?: string | null;
  requestedBy?: RequestedBy;
  requestingDepartment?: string | null;
  baseLocation?: string | null;
  documentId?: string | null;
  documentDef?: string | null;
  approvalStatus?: string | null;
  approvalNote?: string | null;
  locationType: GRNLocationType;
  grnType: GRNType;
  purchaseType: GRNPurchaseType;
  dealSlipId: string | null;
  billNo: string | null;
  companyName: string | null;
  purchaseInstructionsBy: string | null;
  purchaseLocation: string | null;
  otherPurchaseLoc: string | null;
  purchaseForSalesLocation: string | null;
  otherPurchaseForSalesLoc: string | null;
  specialReq: string | null;
  source: GRNSourceType;
  selectedParty: string | null;
  grnProducts: IGRNProducts[];
  deliveryReceivingPerson: string | null;
  freight: number;
  subTotalAmt: number;
  totalAmt: number;
  amtWords: string | null;
  otherCharges: number;
  receivedThrough: string | null;
  vehicleNo: string | null;
  timeIn: string | null;
  cratesIn: number;
  purchasedBy: string | null;
  securityPerson: string | null;
  rmn: string | null;
  paymentInfo: IGRNPaymentInfo;
  remark: string | null;
  billImage: string | null;
}

export interface IGRNApproveReq {
  action: 'approve' | 'reject' | 'escalate';
  reason: string;
  documentdef: string;
}

export interface GetAllGRNnumbers {
  id: string | null;
  grnNo: string | null;
}
