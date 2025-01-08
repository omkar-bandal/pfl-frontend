import { RequestedBy } from './requestedBy.interface';

export interface GetDealSlip {
    id: string;
    dealSlipCreatedAt: Date;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    dealSlipNo: string;
    rfpa: string;
    lotNo: string;
    loadingLocation: string;
    remark: string;
    specialRequest: string;
}
export interface PostDealSlip {
    rfpa: string;
    lotNo: string;
    loadingLocation: string;
    remark: string;
    specialRequest: string;
}
export interface GetAllDealSlipNums {
    id: string;
    dealSlipNo: string;
}
