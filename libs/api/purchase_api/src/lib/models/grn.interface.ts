import { RequestedBy } from "./requestedBy.interface";
// import {GetVendor, GetFarmer} from '@prime-fresh/admin_api';

export interface GRNProducts {
    product: string,
    count: string,
    uom: string,
    quantity: number,
    rate: number,
    amt: number,
    rtv: string,
    purchaseDate: Date,
    expectedHarvestDate: Date | null,
    dispatchDate: Date,
    deliveryDate: Date,
    deliveryLocation: string,
    revisedRate: number,
    revisedQuantity: number,
}
// export interface GRNPaymentInfo {
//     paymentMode: string,
//     paymentDate: Date,
//     advancePaidAmt: number,
//     paymentTerms: string,
//     dueDate: Date,
//     creditPeriod: number,
// }
export interface PostGRN {
    dealSlipId?: string;
    billNo: string;
    serialNo: string;
    companyName: string;
    purchaseRequestByWhom: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    specialReq: string;
    source: string;
    selectedParty: string;
    products: GRNProducts[];
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string;
    freight: number,
    otherCharges: number,
    purchasedBy: string,
    receivedThrough: string,
    securityPerson: string,
    vehicleNo: string,
    timeIn: string,
    cratesIn: number,
    // paymentInfo: GRNPaymentInfo,
    billImage: File | null,
}
export interface GetGRN {
    id: string;
    grnNo?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    dealSlipId: string;
    billNo: string;
    serialNo: string;
    companyName: string;
    purchaseRequestByWhom: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    specialReq: string;
    source: string;
    selectedParty: string;
    products: GRNProducts[];
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    freight: number,
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string;
    otherCharges: number,
    receivedThrough: string,
    vehicleNo: string,
    timeIn: string,
    cratesIn: number,
    purchasedBy: string,
    securityPerson: string,
    // paymentInfo: GRNPaymentInfo, 
    approvalStatus?: string;
    approvalNote?: string;
    billImage: File | null;
}

export interface getAllGRNnumbers {
    id: string;
    grnNo: string;
}