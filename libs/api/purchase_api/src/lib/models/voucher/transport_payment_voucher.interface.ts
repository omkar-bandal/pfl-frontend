import { RequestedBy } from "../rfpa.interface";

export interface PostTPvoucher{
    grnNo: string,
    companyName: string;
    debitCreditTo: string,
    payReceivedFrom: string,
    location: string,
    driverName: string,
    contactNo: string,
    altContactNo: string,
    vehicleNo: string,
    dispatchLocation: string,
    destinationLocation: string,
    products: string,
    paymentMode: string,
    freightAmt: number,
    totalAmt: number,
    amtWords: string,
    receivedBy: string,
    anyAttachment: File | null,
}
export interface GetTPvoucher{
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
    driverName: string,
    contactNo: string,
    altContactNo: string,
    vehicleNo: string,
    dispatchLocation: string,
    destinationLocation: string,
    products: string,
    paymentMode: string,
    freightAmt: number,
    totalAmt: number,
    amtWords: string,
    receivedBy: string,
    anyAttachment: File | null,
}