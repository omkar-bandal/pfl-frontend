import { FormProducts, FormProductQtyAmt, FormProductWeight, FormProductUoM, Address, DocumentStatus, ApprovalSummany } from '@prime-fresh/common_api';

export type StockTransferType = 'from-cc-to-dc' | 'from-dc-to-cc' | 'from-cc-to-cc' | 'from-dc-to-dc';

export interface IDeliveryChallanProduct extends FormProducts, FormProductUoM, FormProductQtyAmt, FormProductWeight {
  id?: string;
  saleUoM: string | null;
  packagingMaterial: string | null;
  packagingMaterialUoM: string | null;
  packagingMaterialQuantity: number | null;
  packagingMaterialUnitPrice: number | null;
  packagingMaterialAmount: number | null;
  packagingMaterialTotalWeight: number | null;
}

export interface IDeliveryChallanBase {
  id?: string;
  createdBy?: string | null;
  createdDate?: string;
  createdTime?: string;
  documentId?: string | null;
  documentDef?: string | null;
  challanNo?: string;
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
