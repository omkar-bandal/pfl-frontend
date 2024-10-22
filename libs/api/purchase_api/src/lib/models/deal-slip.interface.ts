import { GetRFPA } from "./rfpa.interface";

export interface GetDealSlip {
    id: string;
    dealSlipNo: string;
    rfpa: GetRFPA,
    lotNo: string,
    loadingLocation: string,
    remarks: string,
    specialRequest: string,
}

export interface PostDealSlip {
    rfpa: string,
    lotNo: string,
    loadingLocation: string,
    remarks: string,
    specialRequest: string,
}