import { RequestedBy } from './requestedBy.interface';

export interface GRNProducts {
    product: string | null;
    count: string | null;
    uom: string | null;
    quantity: number;
    rate: number;
    amt: number;
    rtv: string | null;
    purchaseDate: string | null;
    expectedHarvestDate: string | null;
    dispatchDate: string | null;
    deliveryDate: string | null;
    deliveryLocation: string | null;
    revisedRate: number;
    revisedQuantity: number;
}
export interface PostGRN {
    grnType: string | null;
    dealSlipId?: string | null;
    billNo: string | null;
    serialNo: string | null;
    companyName: string | null;
    purchaseRequestByWhom: string | null;
    purchaseLocation: string | null;
    purchaseForWhich: string | null;
    specialReq: string | null;
    source: "vendor" | "farmer";
    selectedParty: string | null;
    products: GRNProducts[];
    deliveryReceivingPerson: string | null;
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string | null;
    freight: number;
    otherCharges: number;
    purchasedBy: string | null;
    receivedThrough: string | null;
    securityPerson: string | null;
    vehicleNo: string | null;
    timeIn: string | null;
    cratesIn: number;
    rmn: string | null;
    remark: string | null;
    billImage: File | null;
}
export interface GetGRN {
    id: string | null;
    grnNo?: string | null;
    createdDate?: string | null;
    createdTime?: string | null;
    requestedBy?: RequestedBy;
    requestingDepartment?: string | null;
    baseLocation?: string | null;
    dealSlipId: string | null;
    billNo: string | null;
    serialNo: string | null;
    companyName: string | null;
    purchaseRequestByWhom: string | null;
    purchaseLocation: string | null;
    purchaseForWhich: string | null;
    specialReq: string | null;
    source: "vendor" | "farmer";
    selectedParty: string | null;
    products: GRNProducts[];
    deliveryReceivingPerson: string | null;
    freight: number;
    subTotalAmt: number;
    totalAmt: number;
    amtWords: string | null;
    otherCharges: number;
    receivedThrough: string | null;
    vehicleNo: string | null;
    timeIn: string | null;
    cratesIn: number;
    purchasedBy: string | null;
    securityPerson: string | null;
    rmn: string | null;
    remark: string | null;
    approvalStatus?: string | null;
    approvalNote?: string | null;
    billImage: string | null;
}
export interface GetAllGRNnumbers {
    id: string | null;
    grnNo: string | null;
}
