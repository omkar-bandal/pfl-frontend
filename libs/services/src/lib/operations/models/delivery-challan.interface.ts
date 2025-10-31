import { Address, DocumentStatus, ApprovalSummany } from '../../shared';

export type StockTransferType = 'from-cc-to-dc' | 'from-dc-to-cc' | 'from-cc-to-cc' | 'from-dc-to-dc';

export interface IDeliveryChallanProduct {
  id?: string;
  productName: string | null;
  variant: string | null;
  // origin: string | null;
  // variety: string | null;
  // count: string | null;
  // size: string | null;
  uom: string | null;
  quantity: number | null;
  unitPrice: number | null;
  amount: number | null;
  grossWeight: number | null;
  packingMaterialWeight: number | null;
  netWeight: number | null;
  saleUoM: string | null;
  packagingMaterial: string | null;
  packagingMaterialUoM: string | null;
  packagingMaterialQuantity: number | null;
  packagingMaterialUnitPrice: number | null;
  packagingMaterialAmount: number | null;
  packagingMaterialTotalWeight: number | null;
  acceptedQty?: number | null;
  rejectedQty?: number | null;
  returnedQty?: number | null;
}

export interface IDeliveryChallanBase {
  id?: string;
  createdBy?: string | null;
  createdDate?: string;
  createdTime?: string;
  documentId?: string | null;
  documentDef?: string | null;
  challanNo?: string;
  transitInsuranceNo: string | null;
  grnNo: string | null;
  companyName: string | null;
  office?: string | null;
  deliveryChallanProducts: IDeliveryChallanProduct[];
  netProductWeight: number | null;
  netPackagingMaterialWeight: number | null;
  totalPackagingMaterialAmount: number | null;
  totalProductAmount: number | null;
  totalAmtInWords: string | null;
  driverName: string | null;
  licenseNo: string | null;
  contactNo: string | null;
  altContactNo: string | null;
  vehicleNo: string | null;
  receiverName: string | null;
  rmn: string | null;
  remark: string | null;
  anyAttachment: File | null;
  overAllStatus?: DocumentStatus;
  approvalSummary?: Partial<ApprovalSummany>;
}

export interface IDeliveryChallanTypeCustomer extends IDeliveryChallanBase {
  poNumber: string | null;
  customerName: string | null;
  billingAddress?: Address | null;
  deliveryAddress?: Address | null;
  fromLocation: string | null;
}

export interface IDeliveryChallanTypeStockTransfer extends IDeliveryChallanBase {
  stockTransferType: StockTransferType;
  fromLocation: string | null;
  toLocation: string | null;
}

export type GetAllDeliveryChallanNums = {
  id: string;
  challanNo: string;
}
