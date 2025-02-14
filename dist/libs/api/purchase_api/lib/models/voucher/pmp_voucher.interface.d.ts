import { RequestedBy } from '../requestedBy.interface';
import { Address } from '../address.interface';

export interface Materials {
    id?: string;
    itemName: string | null;
    itemQty: number;
    itemUom: string | null;
    rate: number;
    amt: number;
}
export interface PostPMPvoucher {
    grnNo: string | null;
    companyName: string | null;
    debitCreditTo: string | null;
    payReceivedFrom: string | null;
    location: string | null;
    sellerName: string | null;
    address: Address;
    contactNo: string | null;
    altContactNo: string | null;
    purpose: string | null;
    materials: Materials[];
    paymentMode: string | null;
    totalAmt: number;
    amtWords: string | null;
    receiverName: string | null;
    kyc: boolean;
    remark: string | null;
    anyAttachment: File | null;
}
export interface GetPMPvoucher {
    id: string;
    createdDate: string;
    createdTime: string;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    voucherNo: string;
    grnNo: {
        id: string;
        grnNo: string;
    };
    companyName: {
        id: string;
        companyName: string;
    };
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    sellerName: string;
    contactNo: string;
    altContactNo: string;
    address: Address;
    purpose: string;
    paymentMode: string;
    totalAmt: number;
    amtWords: string;
    receivedBy: string;
    materials: {
        id: string;
        itemName: string;
        itemQty: number;
        itemUom: string;
        rate: number;
        amt: number;
    }[];
    receiverName: string;
    kyc: boolean;
    remark: string;
    anyAttachment: string;
    approvalStatus: string;
}
