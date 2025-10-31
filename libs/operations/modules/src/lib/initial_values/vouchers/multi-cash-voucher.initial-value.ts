import { IParticulars, IMultiCashVoucher } from '@prime-fresh/services';

export const particularsInitialValue: IParticulars = {
  description: null,
  amt: null,
};
export const multipleCashVoucherInitialValue: Omit<IMultiCashVoucher,'id'> = {
  grnNo: null,
  challanNo: null,
  companyName: '',
  debitCreditTo: null,
  payReceivedFrom: null,
  location: null,
  particulars: [particularsInitialValue],
  totalAmt: 0,
  amtWords: null,
  paymentMode: null,
  receiverName: null,
  remark: null,
  anyAttachment: null,
};


