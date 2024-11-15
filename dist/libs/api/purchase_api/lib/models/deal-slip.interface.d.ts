import { GetRFPA } from './rfpa.interface';
import { RequestedBy } from './requestedBy.interface';

export interface GetDealSlip {
    id: string;
    dealSlipCreatedAt: Date;
    requestedBy: RequestedBy;
    requestingDepartment: string;
    dealSlipNo: string;
    rfpa: GetRFPA;
    lotNo: string;
    loadingLocation: string;
    remarks: string;
    specialRequest: string;
}
export interface PostDealSlip {
    rfpa: string;
    lotNo: string;
    loadingLocation: string;
    remarks: string;
    specialRequest: string;
}
