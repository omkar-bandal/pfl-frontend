import { initValAddress } from "../initValAddress";

export const initValPackingMaterials = {
    itemName: "",
    itemQty: 0,
    itemUom: "",
    rate: 0,
    amt: 0,
  };
  export const initValPackingMaterialVoucher = {
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
    ratePerLabour: 0,
    totalAmt: 0,
    amtWords: "",
    receivedBy: "",
    anyAttachment: null,
  };