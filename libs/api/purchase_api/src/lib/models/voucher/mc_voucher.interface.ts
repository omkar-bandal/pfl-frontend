import { RequestedBy } from "../requestedBy.interface";

export interface MVItems {
    id?: string,
    itemName: string,
    itemQty: number,
    itemUom: string,
    rate: number,
    amt: number,
}
export interface PostMCvoucher {
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
export interface GetMCvoucher {
    id: string,
    createdDate: string,
    createdTime: string,
    requestedBy: RequestedBy,
    requestingDepartment: string,
    voucherNo: string,
    grnNo: string,
    companyName: string,
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    totalAmt: number,
    amtWords: string,
    paymentMode: string,
    anyAttachment: string,
    approvalStatus: string,
    receiverName: string,
    receivedBy: string,
    mvItems: {
        id: string,
        itemName: string,
        itemQty: number,
        itemUom: string,
        rate: number,
        amt: number,
    }[],
}