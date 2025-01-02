import { PostPMPvoucher } from "@prime-fresh/purchase_api";
import { initValAddress } from "../initValAddress";

export const initValPackingMaterials = {
    itemName: null,
    itemQty: 0,
    itemUom: null,
    rate: 0,
    amt: 0,
  };
  export const initValPackingMaterialVoucher: PostPMPvoucher = {
    grnNo: null,
    companyName: '',
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