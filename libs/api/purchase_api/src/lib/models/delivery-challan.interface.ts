import { RequestedBy } from "./requestedBy.interface";

export interface DCItems {
  itemName: string;
  itemQty: number;
  rate: number;
  amt: number;
}
export interface PostDeliveryChallan {
  partyName: string,
  grnNo: string,
  companyName: string,
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