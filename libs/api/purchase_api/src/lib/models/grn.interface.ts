// import { ApprovalSummany, DocumentStatus, FormProductQtyAmt, FormProducts, FormProductUoM, FormProductWeight } from '@prime-fresh/common_api';
import { ApprovalSummany, DocumentStatus } from '@prime-fresh/common_api';

export type IGRNLocationType = 'cc' | 'dc';

export type IGRNType = 'transfer' | 'purchase';

export type IGRNPurchaseType = 'fixed price sales' | 'consignment sales/bikri' | 'mgp sales';

export type IGRNSourceType = 'vendor' | 'farmer';

// export interface IGRNProducts extends FormProducts, FormProductUoM, FormProductQtyAmt, FormProductWeight {
//   rtv: boolean;
//   revisedRate: number;
//   revisedQuantity: number;
//   purchaseDate: string | null;
//   expectedHarvestDate: string | null;
//   dispatchDate: string | null;
//   deliveryDate: string | null;
//   deliveryLocation: string | null;
// }
export interface IGRNProducts {
  productName: string | null,
  variant: string | null,
  // origin: string | null,
  // variety: string | null,
  // count: string | null,
  // size: string | null,
  uom: string | null,
  quantity: number | null,
  unitPrice: number | null,
  amount: number | null,
  grossWeight: number | null,
  packingMaterialWeight: number | null,
  netWeight: number | null,
  rtv: boolean;
  revisedRate: number | null;
  revisedQuantity: number | null;
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
  createdBy?: string | null;
  createdDate?: string | null;
  createdTime?: string | null;
  documentId?: string | null;
  documentDef?: string | null;
  locationType: IGRNLocationType;
  grnType: IGRNType;
  purchaseType: IGRNPurchaseType;
  dealSlipId: string | null;
  billNo: string | null;
  companyName: string | null;
  purchaseInstructionsBy: string | null;
  purchaseLocation: string | null;
  otherPurchaseLoc: string | null;
  purchaseForSalesLocation: string | null;
  otherPurchaseForSalesLoc: string | null;
  specialReq: string | null;
  source: IGRNSourceType;
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
  overAllStatus?: DocumentStatus;
  approvalSummary?: ApprovalSummany;
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

// requestedBy?: RequestedBy;
// requestingDepartment?: string | null;
// baseLocation?: string | null;
// approvalStatus?: string | null;
// approvalNote?: string | null;