import { PostDeliveryChallan } from "@prime-fresh/purchase_api";

export const initValMaterials = {
    itemName: null,
    itemQty: 0,
    rate: 0,
    amt: 0,
  };
  
  export const initValDeliveryChallan: PostDeliveryChallan = {
    partyName: null,
    grnNo: null,
    companyName: null,
    items: [initValMaterials],
    totAmt: null,
    fromLocation: null,
    toLocation: null,
    driverName: null,
    contactNo: null,
    altContactNo: null,
    vehicleNo: null,
    receiverName: null,
    deliveryCType: null,
    otherCType: null,
    remark: null,
    rmn: null,
    anyAttachment: null,
  };