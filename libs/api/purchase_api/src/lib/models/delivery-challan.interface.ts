import { Address } from "@prime-fresh/admin_api";
import { RequestedBy } from "./requestedBy.interface";
import { FormBasedProductData } from "./form-based-products";

export type DeliveryChallanProducts = FormBasedProductData;
export type GetDeliveryChallanProducts = {
    productName: {id: string, name: string},
    count: string | null,
    size: string | null,
    uom: {id: string, unit: string},
    quantity: number,
    unitPrice: number,
    amount: number,
    grossWeight: number,
    packingMaterialWeight: number,
    netWeight: number,
};

export interface PostDeliveryChallan {
  deliveryCType: "customer" | "cc-dc stock transfer" | "dc-dc stock transfer" | "other",
  otherCType: string | null,
  grnNo: string | null,
  companyName: string | null,
  offices: string | null,
  poNumber: string | null,
  partyName: string | null,
  fromLocation: string | Address | null,
  toLocation: string | Address | null,
  fromLocationInput: Address | null,
  toLocationInput: Address | null,
  deliveryChallanProducts: DeliveryChallanProducts[],
  totalAmt: string | null,
  totalAmtInWords: string | null,
  driverName: string | null,
  licenseNo: string | null,
  contactNo: string | null,
  altContactNo: string | null,
  vehicleNo: string | null,
  receiverName: string | null,
  remark: string | null,
  rmn: string | null,
  anyAttachment: File | null,
}

export interface GetDeliveryChallan {
  id: string,
  createdDate: string,
  createdTime: string,
  requestedBy: RequestedBy;
  requestingDepartment: string;
  challanNo: string;
  deliveryCType: string | null,
  otherCType: string | null,
  grnNo: string | null,
  companyName: string | null,
  poNumber: string | null,
  partyName: string | null,
  fromLocation: string | Address | null,
  toLocation: string | Address | null,
  deliveryChallanProducts: GetDeliveryChallanProducts[],
  totalAmt: string | null,
  totalAmtInWords: string | null,
  driverName: string | null,
  licenseNo: string | null,
  contactNo: string | null,
  altContactNo: string | null,
  vehicleNo: string | null,
  receiverName: string | null,
  remark: string | null,
  rmn: string | null,
  anyAttachment: string,
}

export interface GetAllChallanNumbers {
  id: string;
  challanNo: string;
}