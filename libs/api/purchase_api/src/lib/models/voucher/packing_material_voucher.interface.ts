import { Address } from "../address.interface";
import { RequestedBy } from "../rfpa.interface";
export interface Materials {
    id?: string,
    itemName: string,
    itemQty: number,
    itemUom: string,
    rate: number,
    amt: number,
}
export interface PostPMPvoucher {
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    sellerName: string,
    address: Address,
    contactNo: string,
    altContactNo: string,
    purpose: string,
    materials: Materials[],
    paymentMode: string,
    ratePerLabour: number,
    totalAmt: number,
    amtWords: string,
    receivedBy: string,
    anyAttachment: File | null,
}
export interface GetPMPvoucher {
    id:string;
    createdDateAt?: string;
    requestedBy?: RequestedBy;
    requestingDepartment?: string;
    baseLocation?: string;
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    sellerName: string,
    address: Address,
    contactNo: string,
    altContactNo: string,
    purpose: string,
    materials: Materials[],
    paymentMode: string,
    ratePerLabour: number,
    totalAmt: number,
    amtWords: string,
    receivedBy: string,
    anyAttachment: File | null,
}