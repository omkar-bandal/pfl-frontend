import { RequestedBy } from "./requestedBy.interface";

export interface DCItems {
  itemName: string | null;
  itemQty: number;
  rate: number;
  amt: number;
}
export interface PostDeliveryChallan {
  partyName: string | null,
  grnNo: string | null,
  companyName: string | null,
  items: DCItems[],
  totAmt: string | null,
  fromLocation: string | null,
  toLocation: string | null,
  driverName: string | null,
  contactNo: string | null,
  altContactNo: string | null,
  vehicleNo: string | null,
  receiverName: string | null,
  deliveryCType: string | null,
  otherCType: string | null,
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
  companyName: string;
  partyName: string,
  grnNo: string,
  items: DCItems[],
  totAmt: string,
  fromLocation: string,
  toLocation: string,
  driverName: string,
  contactNo: string,
  altContactNo: string,
  vehicleNo: string,
  receiverName: string,
  deliveryCType: string,
  otherCType: string,
  remark: string,
  rmn: string,
  anyAttachment: string,
}

export interface GetAllChallanNumbers {
  id: string;
  challanNo: string;
}