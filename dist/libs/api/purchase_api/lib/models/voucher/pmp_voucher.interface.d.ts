import { RequestedBy } from '../requestedBy.interface';
import { Address } from '../address.interface';

export interface Materials {
    id?: string;
    itemName: string;
    itemQty: number;
    itemUom: string;
    rate: number;
    amt: number;
}
export interface PostPMPvoucher {
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    sellerName: string;
    address: Address;
    contactNo: string;
    altContactNo: string;
    purpose: string;
    materials: Materials[];
    paymentMode: string;
    totalAmt: number;
    amtWords: string;
    receiverName: string;
    kyc: boolean;
    remark: string;
    anyAttachment: File | null;
}
export interface GetPMPvoucher {
    id: string;
    createdDate: string;
    createdTime: string;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    voucherNo: string;
    grnNo: string;
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
    companyName: string;
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
