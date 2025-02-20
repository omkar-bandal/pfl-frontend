import { Materials, PostPMPvoucher } from "@prime-fresh/purchase_api";
import { initValAddress } from "../initValAddress";

export const initValPackingMaterials: Materials = {
    itemName: null,
    itemQty: null,
    itemUom: null,
    rate: null,
    amt: 0,
  };
  export const initValPackingMaterialVoucher: PostPMPvoucher = {
    grnNo: null,
    companyName: null,
    debitCreditTo: null,
    payReceivedFrom: null,
    location: null,
    sellerName: null,
    address: initValAddress,
    contactNo: null,
    altContactNo: null,
    purpose: null,
    materials: [initValPackingMaterials],
    paymentMode: null,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    kyc: false,
    remark: null,
    anyAttachment: null,
  };