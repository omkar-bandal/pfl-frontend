import { PostPMPvoucher } from "@prime-fresh/purchase_api";
import { initValAddress } from "../initValAddress";

export const initValPackingMaterials = {
    itemName: "",
    itemQty: 0,
    itemUom: "",
    rate: 0,
    amt: 0,
  };
  export const initValPackingMaterialVoucher: PostPMPvoucher = {
    grnNo: "",
    companyName: '',
    debitCreditTo: "",
    payReceivedFrom: "",
    location: "",
    sellerName: "",
    address: initValAddress,
    contactNo: "",
    altContactNo: "",
    purpose: "",
    materials: [initValPackingMaterials],
    paymentMode: "",
    totalAmt: 0,
    amtWords: "",
    receiverName: "",
    kyc: false,
    remark: "",
    anyAttachment: null,
  };