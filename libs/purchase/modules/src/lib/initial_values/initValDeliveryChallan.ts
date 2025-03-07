import { DeliveryChallanProducts, PostDeliveryChallan } from "@prime-fresh/purchase_api";

export const initValMaterials: DeliveryChallanProducts = {
  productName: null,
  count: null,
  size: null,
  uom: null,
  quantity: 0,
  unitPrice: 0,
  amount: 0,
  grossWeight: 0,
  packingMaterialWeight: 0,
  netWeight: 0
};

export const initValDeliveryChallan: PostDeliveryChallan = {
  deliveryCType: "customer",
  otherCType: null,
  grnNo: null,
  companyName: null,
  offices: null,
  poNumber: null,
  partyName: null,
  fromLocation: null,
  toLocation: null,
  fromLocationInput: null,
  toLocationInput: null,
  deliveryChallanProducts: [initValMaterials],
  totalAmt: null,
  totalAmtInWords: null,
  driverName: null,
  licenseNo: null,
  contactNo: null,
  altContactNo: null,
  vehicleNo: null,
  receiverName: null,
  remark: null,
  rmn: null,
  anyAttachment: null,
};