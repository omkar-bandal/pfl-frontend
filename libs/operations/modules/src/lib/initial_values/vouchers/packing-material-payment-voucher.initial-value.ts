import { initValAddress } from "@prime-fresh/shared/modules";
import { IMaterials, IPackingMaterialPaymentVoucher } from '@prime-fresh/services';

export const packingMaterialsInitialValue: IMaterials = {
    itemName: null,
    itemQty: null,
    itemUom: null,
    rate: null,
    amt: 0,
  };
  export const packingMaterialVoucherInitialValue: Omit<IPackingMaterialPaymentVoucher, 'id'> = {
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
    materials: [packingMaterialsInitialValue],
    paymentMode: null,
    totalAmt: 0,
    amtWords: null,
    receiverName: null,
    kyc: false,
    remark: null,
    anyAttachment: null,
  };