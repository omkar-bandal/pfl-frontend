import { Address } from '@prime-fresh/admin_api';
import { RequestedBy } from './requestedBy.interface';
import {
  FormProducts,
  FormProductQtyAmt,
  FormProductWeight,
  FormProductUoM,
} from '@prime-fresh/common_api';

export type DeliveryChallanProducts = {
  saleUoM: string | null;
  packagingMaterial: string | null;
  packagingMaterialUoM: string | null;
  packagingMaterialQuantity: number | null;
  packagingMaterialUnitPrice: number | null;
  packagingMaterialAmount: number | null;
  packagingMaterialTotalWeight: number | null;
} & FormProducts &
  FormProductUoM &
  FormProductQtyAmt &
  FormProductWeight;

export type GetDeliveryChallanProducts = {
  productName: { id: string; productName: string };
  count: string | null;
  size: string | null;
  origin: string | null;
  variety: string | null;
  uom: { id: string; unit: string };
  saleUoM: { id: string; unit: string };
  packagingMaterial: { id: string; name: string };
  packagingMaterialUoM: { id: string; unit: string };
  packagingMaterialQuantity: number | null;
  packagingMaterialUnitPrice: number | null;
  packagingMaterialAmount: number | null;
  packagingMaterialTotalWeight: number | null;
} & FormProductQtyAmt &
  FormProductWeight;

export interface PostDeliveryChallan {
  deliveryCType:
    | 'customer'
    | 'cc-dc stock transfer'
    | 'dc-dc stock transfer'
    | 'other';
  otherCType: string | null;
  grnNo: string | null;
  companyName: string | null;
  offices: string | null;
  poNumber: string | null;
  partyName: string | null;
  fromLocation: string | null;
  toLocation: string | null;
  fromLocationInput: Address | null;
  toLocationInput: Address | null;
  deliveryChallanProducts: DeliveryChallanProducts[];
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
  remark: string | null;
  rmn: string | null;
  anyAttachment: File | null;
}

export interface GetDeliveryChallan {
  id: string;
  createdDate: string;
  createdTime: string;
  requestedBy: RequestedBy;
  requestingDepartment: string;
  challanNo: string;
  deliveryCType:
    | 'customer'
    | 'cc-dc stock transfer'
    | 'dc-dc stock transfer'
    | 'other';
  otherCType: string | null;
  grnNo: { id: string; grnNo: string } | null;
  companyName: { id: string; companyName: string } | null;
  offices: { id: string; name: string } | null;
  poNumber: string | null;
  partyName: { id: string; organizationName: string } | string | null;
  fromLocation: { id: string; name: string } | null;
  toLocation: { id: string; name: string } | null;
  fromLocationInput: Address | null;
  toLocationInput: Address | null;
  deliveryChallanProducts: GetDeliveryChallanProducts[];
  netProductWeight: number | null;
  totalPackagingMaterialAmount: number | null;
  netPackagingMaterialWeight: number | null;
  totalProductAmount: number | null;
  totalAmtInWords: string | null;
  driverName: string | null;
  licenseNo: string | null;
  contactNo: string | null;
  altContactNo: string | null;
  vehicleNo: string | null;
  receiverName: string | null;
  remark: string | null;
  rmn: string | null;
  anyAttachment: File | null;
}

export interface GetAllChallanNumbers {
  id: string;
  challanNo: string;
}
