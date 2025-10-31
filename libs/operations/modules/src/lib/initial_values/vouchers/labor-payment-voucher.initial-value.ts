import { ILaborPaymentVoucher } from '@prime-fresh/services';

export const labourPaymentVoucherInitialValue: Omit<ILaborPaymentVoucher, 'id'> = {
    grnNo: null,
    companyName: null,
    debitCreditTo: null,
    payReceivedFrom: null,
    location: null,
    noOfLabours: null,
    loadingDate: null,
    contactNo: null,
    altContactNo: null,
    products: null,
    kyc: false,
    paymentMode: null,
    ratePerLabour: null,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    remark: null,
    anyAttachment: null,
}