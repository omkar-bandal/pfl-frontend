import { PostDeliveryChallan } from "@prime-fresh/purchase_api";

export const initValMaterials = {
    itemName: "",
    itemQty: 0,
    rate: 0,
    amt: 0,
  };
  
  export const initValDeliveryChallan: PostDeliveryChallan = {
    partyName: '',
    grnNo: '',
    companyName: '',
    items: [initValMaterials],
    totAmt: '',
    fromLocation: '',
    toLocation: '',
    driverName: '',
    contactNo: '',
    altContactNo: '',
    vehicleNo: '',
    receiverName: '',
    deliveryCType: '',
    otherCType: '',
    remark: '',
    rmn: '',
    anyAttachment: null,
  };