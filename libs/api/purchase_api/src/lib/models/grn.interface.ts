import { Farmer, Vendor } from "@prime-fresh/admin_modules";
import { Payment_Info, RequestedBy } from "./rfpa.interface";

export interface GRNProducts {
    product: string,
    uom: string,
    quantity: number,
    rate: number,
    amt: number,
    rtv: string,
    purchaseDate: Date,
    expectedHarvestDate: Date,
    dispatchDate: Date,
    deliveryDate: Date,
    deliveryLocation: string,
    revisedRate: number,
}

export interface PostGRN {
    dealSlipId?: string;
    billNo: string;
    serialNo: string;
    companyName: string;
    purchaseRequestByWhom: string; 
    purchaseLocation: string;
    purchaseForWhich: string;
    materialLocation: string;
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
    billImage: File | null,
}
export interface GetGRN {
    id:string;
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
    farmer?: Farmer;
    vendor?: Vendor;
    products: GRNProducts[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    freight: number,
    otherCharges: number,
    receivedThrough: string,
    vehicleNo: string,
    timeIn: string,
    cratesIn: number,
    approvalStatus: string;
    approvalNote: string;
    billImage: File | null;
}