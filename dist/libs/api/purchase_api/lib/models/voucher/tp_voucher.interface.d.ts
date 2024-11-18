import { RequestedBy } from '../requestedBy.interface';

export interface PostTPvoucher {
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    driverName: string;
    contactNo: string;
    altContactNo: string;
    vehicleNo: string;
    dispatchLocation: string;
    destinationLocation: string;
    products: string;
    paymentMode: string;
    freightAmt: number;
    kyc: boolean;
    totalAmt: number;
    amtWords: string;
    receiverName: string;
    remark: string;
    anyAttachment: File | null;
}
export interface GetTPvoucher {
    id: string;
    createdDate: string;
    createdTime: string;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    voucherNo: string;
    grnNo: string;
    companyName: string;
    debitCreditTo: string;
    payReceivedFrom: string;
    location: string;
    driverName: string;
    contactNo: string;
    altContactNo: string;
    vehicleNo: string;
    dispatchLocation: string;
    destinationLocation: string;
    products: string;
    paymentMode: string;
    freightAmt: number;
    kyc: boolean;
    totalAmt: number;
    amtWords: string;
    anyAttachment: string;
    approvalStatus: string;
    receiverName: string;
    receivedBy: string;
    remark: string;
}
