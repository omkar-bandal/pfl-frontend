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
    freightAmt: null,
    totalAmt: null,
    amtWords: null,
    receiverName: null,
    remark: null,
    kyc: false,
    anyAttachment: [],
  };
  
  