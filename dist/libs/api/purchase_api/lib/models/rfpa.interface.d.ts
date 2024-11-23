import { RequestedBy } from './requestedBy.interface';
import { GetFarmer, GetVendor } from '../../../../admin_api/src/index.ts';

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
    creditPeriod: number;
    paymentDate: string;
    paymentTerms: number;
    dueDate: string;
    advancePaidAmt: number;
    validityofQuote: string;
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
    farmer?: GetFarmer;
    vendor?: GetVendor;
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    remark: string;
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
    rfpaProducts: RFPA_Items[];
    paymentInfo: Payment_Info;
    deliveryReceivingPerson: string;
    validityOfQuote: string;
    packingInstruction: string;
    remark: string;
    approvalStatus?: string;
}
export interface ChangeStatusResponse {
    user: {
        name: string;
        designation: string;
        department: string;
    };
}
