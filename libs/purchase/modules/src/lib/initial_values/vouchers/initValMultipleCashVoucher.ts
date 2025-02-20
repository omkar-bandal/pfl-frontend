import { Particulars, PostMCvoucher } from "@prime-fresh/purchase_api";

export const initValParticulars: Particulars = {
  description: null,
  amt: null,
};
export const initValMMultipleCashVoucher: PostMCvoucher = {
  grnNo: null,
  challanNo: null,
  companyName: '',
  debitCreditTo: null,
  payReceivedFrom: null,
  location: null,
  particulars: [initValParticulars],
  totalAmt: 0,
  amtWords: null,
  paymentMode: null,
  receiverName: null,
  remark: null,
  anyAttachment: null,
};


