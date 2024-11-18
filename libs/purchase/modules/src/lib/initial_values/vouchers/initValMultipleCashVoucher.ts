import { Particulars, PostMCvoucher } from "@prime-fresh/purchase_api";

export const initValParticulars: Particulars = {
    description: "",
    amt: 0,
  };
  export const initValMMultipleCashVoucher: PostMCvoucher = {
    grnNo: "",
    challanNo: "",
    companyName: '',
    debitCreditTo: "",
    payReceivedFrom: "",
    location: "",
    particulars: [initValParticulars],
    totalAmt: 0,
    amtWords: "",
    paymentMode: "",
    receiverName: "",
    remark: "",
    anyAttachment: null,
  };
  
  
  