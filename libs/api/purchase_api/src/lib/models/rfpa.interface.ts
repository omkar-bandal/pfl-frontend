import {  Farmer, Vendor } from "@prime-fresh/admin_modules";

export interface RequestedBy {
    firstName: string,
    lastName: string
}
export interface RFPA_Items {
    product: string;
    grade: string;
    quantity: number;
    uom: string;
    unitPrice: number;
    totalVal: number;
    description: string;
    purchaseDate: Date;
    dispatchDate: Date;
    deliveryDate: Date;
    deliveryLocation: string;
    expectedHarvestDate?: Date;
}
export interface Payment_Info {
    paymentMode: string;
    paymentTerms: string;
    paymentDate: Date;
    dueDate: Date;
    advancePaidAmt: number;
}
export interface PostRFPA {
    rfpaId?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    specialReq: string;
    source: string;
    selectedParty: string;
    farmer?: Farmer;
    vendor?: Vendor;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
}
export interface GetRFPA {
    id: string;
    rfpaId?: string;
    createdDate?: string;
    createdTime?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    companyName: string;
    purchaseLocation: string;
    purchaseForWhich: string;
    specialReq: string;
    source: string;
    selectedParty: string;
    farmer?: Farmer;
    vendor?: Vendor;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    approvalStatus?: string;
}

export interface ChangeStatusResponse {
    user: {
        name: string;
        designation: string;
        department: string;
    }
}
