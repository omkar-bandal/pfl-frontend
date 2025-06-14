import { ITranportPaymentVoucher } from "@prime-fresh/purchase_api";

export const transportPaymentVoucherInitialValue: Omit<ITranportPaymentVoucher, 'id'> = {
    grnNo: null,
    companyName: '',
    debitCreditTo: null,
    payReceivedFrom: null,
    location: null,
    driverName: null,
    contactNo: null,
    altContactNo: null,
    vehicleNo: null,
    dispatchLocation: null,
    destinationLocation: null,
    products: null,
    paymentMode: null,
    freightAmt: 0,
    kyc: false,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    remark: null,
    anyAttachment: [],
  };
  
  