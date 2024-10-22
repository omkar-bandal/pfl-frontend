import { RequestedBy } from "../rfpa.interface";

export interface MVItems{
    id?: string,
    itemName: string,
    itemQty: number,
    itemUom: string,
    rate: number,
    amt: number,
}
export interface PostMCvoucher{
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    mvItems: MVItems[]
    totalAmt: number,
    amtWords: string,
    paymentMode: string,
    receivedBy: string,
    anyAttachment: File | null,
}
export interface GetMCvoucher{
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
    mvItems: MVItems[]
    totalAmt: number,
    amtWords: string,
    paymentMode: string,
    receivedBy: string,
    anyAttachment: File | null,
}